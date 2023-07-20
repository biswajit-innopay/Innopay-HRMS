import React from 'react';
import {
    TextField,
  } from '@mui/material';

const FormInput = (props) => {
 const{label,type,variant ='outlined',margin,onChange,name,formErr} = props;
 console.log({formErr})
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
    <span  style={{color:"red"}} >{formErr[name]}</span>
    </>
  )
}

export default FormInput