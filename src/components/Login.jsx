import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Paper, Typography, Container } from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import backgroundImage from '../../src/assets/images/bg.jpg'
import FormInput from './common/FormInput'
import FormButton from './common/FormButton'

const initialValue = {
  email: '',
  password: '',
}
const initialFormErrorMsg = {
  email: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialValue)
  const [formErr, setFormErr] = useState(initialFormErrorMsg)
  const [loginDisabled, setLoginDisabled] = useState(true)
  const inputs = [
    {
      id: 1,
      name: 'email',
      label: 'Email',
      type: 'email',
      value: 'email',
      variant: 'standard',
      margin: 'normal',
      required: true,
      fullWidth: true,
    },
    {
      id: 2,
      name: 'password',
      label: 'Password',
      type: 'password',
      value: 'password',
      variant: 'standard',
      margin: 'normal',
      required: true,
      fullWidth: true,
    },
  ]

  const onChange = (e) => {
    // GET FROM CINSTANT FILE
    const emailRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA-Z])*$/
    const input = e.target.value
    if (e.target.name === 'email') {
      // validate EMAIL
      const regex = new RegExp(emailRegx)
      input.length && regex.test(input)
        ? setFormErr({ ...formErr, [e.target.name]: '' })
        : setFormErr({
            ...formErr,
            [e.target.name]: 'It should be a valid email address!',
          })
    }
    if (e.target.name === 'password') {
      // validate password
      input.length && input.length > 7
        ? setFormErr({ ...formErr, [e.target.name]: '' })
        : setFormErr({
            ...formErr,
            [e.target.name]: 'It should be a valid email address!',
          })
    }
    // console.log(formErr["email"], formErr["email"].length);
    formErr['email'].length ? setLoginDisabled(true) : setLoginDisabled(false)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform login logic here
    // console.log(formData);
    navigate('dashboard')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            <Typography variant="h5" component="h1" mb={4}>
              HRMS Login
            </Typography>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={formData[input.name]}
                  onChange={onChange}
                  formErr={formErr}
                />
              ))}
              <FormButton
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth={true}
                value="Login"
                loginDisabled={loginDisabled}
              />
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default Login
