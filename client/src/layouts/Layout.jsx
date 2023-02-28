import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function Layouts() {
  return (
    <>
      <Menu />
      <div className='container mt-3 '>
        <Outlet />
      </div>
    </>
  )
}

export default Layouts