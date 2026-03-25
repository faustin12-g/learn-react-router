import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default LandingLayout
