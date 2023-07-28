import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '../aggrid/Grid'
import Button from '@mui/material/Button'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function TabPannel() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const actionButton = () => {}
  const appliedLeavesCoulmns = [
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

  const creditHistoryCoulmns = [
    {
      headerName: 'Year',
      field: 'year',
      sortable: false,
    },
    {
      headerName: 'Monrh',
      field: 'month',
      sortable: false,
    },
    {
      headerName: 'Leave Type',
      field: 'leave_type',
      sortable: false,
    },
    {
      headerName: 'Credited Leave',
      field: 'credited_leave',
      sortable: false,
    },
  ]
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Applied Leaves" {...a11yProps(0)} />
          <Tab label="Leave Credit History" {...a11yProps(1)} />
          <Tab label="Holiday List" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid gridcolumns={appliedLeavesCoulmns} type="applied_leave" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid gridcolumns={creditHistoryCoulmns} type="credited_leave" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  )
}
