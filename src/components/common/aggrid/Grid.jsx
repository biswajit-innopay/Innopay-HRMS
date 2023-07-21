import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import Button from '@mui/material/Button'
import GridOnIcon from '@mui/icons-material/GridOn'

const Grid = () => {
  const data = [
    { name: 'James', age: 25 },
    { name: 'Max', age: 21 },
    { name: 'David', age: 38 },
    { name: 'Monty', age: 30 },
  ]
  const columns = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
    },
    {
      headerName: 'Age',
      field: 'age',
      sortable: true,
    },
    {
      headerName: 'Action',
      field: 'age',
      cellRenderer: (params) => (
        <div>
          <button onClick={() => actionButton()}>Click Me</button>
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
  return (
    <>
      <div>
        <Button
          style={{ right: 0 }}
          onClick={() => onExportClick()}
          variant="contained"
          startIcon={<GridOnIcon />}
        >
          Export
        </Button>
      </div>

      <div
        className="ag-theme-alpine"
        style={{
          height: '250px',
          width: '100%',
        }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultcolDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  )
}

export default Grid
