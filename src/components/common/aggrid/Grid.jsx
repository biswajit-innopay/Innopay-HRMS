import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import Box from '@mui/material/Box'
import MultipleSelectCheckmarks from '../dropdown/MultipleSelectCheckmarks'
import MuiButton from '../button/MuiButton'
import GridOnIcon from '@mui/icons-material/GridOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Grid = (gridcolumns, type) => {
  const [tableData, setTableData] = useState(null)
  console.log(gridcolumns, type)
  // const url =
  //   type == 'applied_leave'
  //     ? `http://localhost:5002/applied_leaves`
  //     : `http://localhost:5002/credited_leaves`
  const url = `http://localhost:5002/applied_leaves`
  const columns = gridcolumns.gridcolumns
  const defaultcolDef = {
    sortable: true,
    flex: 1,
  }
  let gridApi
  const onGridReady = (params) => {
    gridApi = params.api
  }
  const onExportClick = () => {
    gridApi.exportDataAsCsv()
  }
  useEffect(() => {
    getGridData()
  }, [])
  const getGridData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp))
  }
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

      <div
        className="ag-theme-alpine"
        style={{
          height: '350px',
          width: '100%',
        }}
      >
        <AgGridReact
          rowData={tableData}
          columnDefs={columns}
          defaultColDef={defaultcolDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  )
}

export default Grid
