import React from 'react'
import Button from '@mui/material/Button'
import GridOnIcon from '@mui/icons-material/GridOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const MuiButton = (props) => {
  console.log(props)
  //  const { onExportClick, variant, startIcon, endIcon } = props
  const onExportClick = () => {}
  return (
    <>
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
    </>
  )
}

export default MuiButton
