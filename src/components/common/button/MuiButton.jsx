import React from 'react'
import Button from '@mui/material/Button'
import { PropTypes } from 'prop-types'

const MuiButton = (props) => {
  const { onExportClick, variant, startIcon, endIcon, text, color } = props
  return (
    <>
      <Button
        sx={{ m: 2 }}
        onClick={onExportClick}
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        color={color}
      >
        {text}
      </Button>
    </>
  )
}
MuiButton.propTypes = {
  onExportClick: PropTypes.func,
  variant: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default MuiButton
