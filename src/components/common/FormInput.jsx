import React from 'react'
import { TextField } from '@mui/material'
import { PropTypes } from 'prop-types'

const FormInput = (props) => {
  const { label, type, variant = 'outlined', margin, onChange, name, formErr } = props
  console.log({ formErr })
  return (
    <>
      <TextField
        label={label}
        type={type}
        variant={variant}
        margin={margin}
        onChange={onChange}
        required
        fullWidth
        name={name}
      />
      <span style={{ color: 'red' }}>{formErr[name]}</span>
    </>
  )
}
FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  formErr: PropTypes.object,
}

export default FormInput
