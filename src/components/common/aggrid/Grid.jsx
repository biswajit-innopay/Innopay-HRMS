import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import Button from '@mui/material/Button'
import GridOnIcon from '@mui/icons-material/GridOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import MultipleSelectCheckmarks from '../dropdown/MultipleSelectCheckmarks'

const Grid = (gridcolumns) => {
  const [tableData, setTableData] = useState(null)
  const url = `http://localhost:5002/applied_leaves`

  // let columns = gridcolumns
  // console.log({ columns })
  console.log(gridcolumns)

  const columns = [
    {
      headerName: 'Leave Type',
      field: 'leave_type',
      sortable: false,
    },
    {
      headerName: 'From Date',
      field: 'from',
      sortable: true,
    },
    {
      headerName: 'To Date',
      field: 'to',
      sortable: true,
    },
    {
      headerName: 'Leave Count',
      field: 'no_of_Leaves',
      sortable: true,
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: false,
    },
    {
      headerName: 'Approved By',
      field: 'approved_by',
      sortable: false,
    },
    {
      headerName: 'Action',
      field: 'age',
      cellRenderer: (params) => (
        <div>
          <Button onClick={() => actionButton()} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => actionButton()} color="secondary">
            View
          </Button>
        </div>
      ),
    },
  ]

  const defaultcolDef = {
    sortable: true,
    flex: 1,
  }
  let gridApi
  const onGridReady = (params) => {
    gridApi = params.api
  }
  const actionButton = () => {}
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
        <Button
          sx={{ m: 2 }}
          onClick={() => onExportClick()}
          variant="contained"
          startIcon={<GridOnIcon />}
        >
          Export
        </Button>
        <Button
          sx={{ m: 2 }}
          onClick={() => onExportClick()}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          color="secondary"
        >
          Apply Leave
        </Button>
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
