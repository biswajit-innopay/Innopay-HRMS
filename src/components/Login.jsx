import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Paper, Typography, Container } from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import backgroundImage from '../../src/assets/images/bg.jpg'
import FormInput from './common/FormInput'
import FormButton from './common/FormButton'

import navigation from '../_nav'
import { addNavData } from 'src/store/slices/NavSlice'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

import { cilPuzzle, cilSpeedometer } from '@coreui/icons'

const initialValue = {
  email: '',
  password: '',
}
const initialFormErrorMsg = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()
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
    formErr['email'].length ? setLoginDisabled(true) : setLoginDisabled(false)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const userNav = []

  const handleSubmit = (e) => {
    // axios call
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://localhost:5002/nav',
    })
      .then(function (response) {
        console.log(response.data)

        response.data.map((item, index) => {
          console.log(item)
          const component = item?.component
          const icon = item?.icon
          console.log(component, 'testttt')

          if (component) {
            item.component = { component }
          }
          if (icon) {
            item.icon = <CIcon icon={icon} customClassName="nav-icon" />
          }

          userNav.push(item)
          console.log(userNav, 'userNavFinal')

          // <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
        })
        dispatch(addNavData(userNav))
        sessionStorage.setItem('navigate', JSON.stringify(userNav))
      })
      .catch(function (error) {
        console.log(error)
      })

    e.preventDefault()
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
