import React from 'react'
import { Button } from '@mui/material'
import { PropTypes } from 'prop-types'

const FormButton = (props) => {
  const {
    type = 'submit',
    variant = 'contained',
    color = 'primary',
    size = 'large',
    fullWidth = true,
    value = 'Default',
    loginDisabled = '',
  } = props
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={loginDisabled}
    >
      {value}
    </Button>
  )
}
FormButton.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  variant: PropTypes.string,
  loginDisabled: PropTypes.string,
}

export default FormButton
