import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { getNavbarData } from '../api/api'
import axios from 'axios'
import { addNavData } from 'src/store/slices/NavSlice'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [navData, setNavData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(addNavData(navigation))
    // setNavData(getNavbarData(setLoading, setNavData))
    // axios({
    //   method: 'get',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   url: 'http://localhost:5002/nav',
    // })
    //   .then(function (response) {
    //     console.log(response.data)
    //     setNavData(navigation)
    //     setLoading(false)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>
  }
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      {/* <CSidebarBrand className="d-none d-md-flex" to="/">
       
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand> */}
      {/* <img src={logo} alt="" style={{ height: '15%', width: '80%' }} /> */}
      <h1 style={{ textAlign: 'center' }}>HRMS</h1>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
