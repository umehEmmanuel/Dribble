import React from 'react'
import Header from "../Blocks/Header"
import Footer from "../Blocks/Footer"
import { Outlet } from 'react-router-dom'



const Layout = () => {
  return (
    <div>
 <Header />
 <Outlet />
 <Footer />
    </div>
  )
}

export default Layout
