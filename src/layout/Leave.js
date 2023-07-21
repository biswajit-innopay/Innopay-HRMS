import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TabPannel from 'src/components/common/tab/TabPannel'
const leaveCount = {
  EL: { count: 5, color: 'warning' },
  'Sick Leave': { count: 2, color: 'primary' },
  Casual: { count: 5, color: 'success' },
}
const keys = Object.keys(leaveCount)
const Leave = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
          <Stack direction="row" spacing={1}>
            {keys.forEach((key, index) => {
              console.log(`${key}: ${leaveCount[key]['count']} ${leaveCount[key]['color']}`)
            })}

            <Chip label="Earned Leave -5" color="warning" />
            <Chip label="Sick Leave - 2" color="error" />
            <Chip label="Casual Leave- 3" color="success" />
          </Stack>
          <TabPannel />
        </div>
      </div>
    </div>
  )
}

export default Leave
