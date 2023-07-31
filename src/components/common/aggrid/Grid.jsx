import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-enterprise'

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import Box from '@mui/material/Box'
import MultipleSelectCheckmarks from '../dropdown/MultipleSelectCheckmarks'
import MuiButton from '../button/MuiButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { PropTypes } from 'prop-types'

const Grid = (gridcolumns) => {
  let url = 'applied_leaves'
  const [tableData, setTableData] = useState(null)

  console.log(url, 'test')
  const columns = gridcolumns.gridcolumns

  const defaultcolDef = {
    sortable: true,
    flex: 1,
  }

  const datasource = {
    getRows(params) {
      const { startRow, endRow } = params.request
      let fetchurl = `http://localhost:5002/${url}?`
      fetchurl += `_start=${startRow}&_end=${endRow}`
      fetch(fetchurl)
        .then((httpResponse) => httpResponse.json())
        .then((response) => {
          setTableData(response)
          params.successCallback(response, 269)
        })
        .catch((error) => {
          console.error(error)
          params.failCallback()
        })
    },
  }

  let gridApi
  const onGridReady = (params) => {
    gridApi = params.api
    params.api.setServerSideDatasource(datasource)
  }
  const onExportClick = () => {
    gridApi.exportDataAsCsv()
  }
  useEffect(() => {
    // getGridData()
  }, [])
  // const getGridData = () => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((resp) => setTableData(resp))
  // }
  console.log({ tableData })
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          // p: 1,
          // m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        {/* <MuiButton
          onExportClick={onExportClick}
          variant="contained"
          startIcon={<GridOnIcon />}
          endIcon=""
          text="Export"
        /> */}
        <MuiButton
          onExportClick={onExportClick}
          variant="contained"
          startIcon=""
          endIcon={<ArrowForwardIcon />}
          text="Apply Leave"
          color="secondary"
        />
        <MultipleSelectCheckmarks />
      </Box>

      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={tableData}
          columnDefs={columns}
          defaultColDef={defaultcolDef}
          onGridReady={onGridReady}
          rowModelType="serverSide"
          pagination={true}
          paginationPageSize={10}
          domLayout="autoHeight"
        />
      </div>
    </>
  )
}
Grid.propTypes = {
  gridcolumns: PropTypes.object,
  url: PropTypes.string,
}

export default Grid
