import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TabPannel from 'src/components/common/tab/TabPannel'
const leaveCount = [
  { leaveType: 'Earned Leave', count: 5, color: 'warning' },
  { leaveType: 'Sick Leave', count: 2, color: 'primary' },
  { leaveType: 'Casual', count: 3, color: 'success' },
]
const Leave = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
          <Stack direction="row" spacing={1}>
            {leaveCount.map((item, index) => {
              return (
                <Chip
                  key={index}
                  label={item?.leaveType + ' - ' + item?.count}
                  color={item?.color}
                />
              )
            })}
          </Stack>
          <TabPannel />
        </div>
      </div>
    </div>
  )
}

export default Leave
