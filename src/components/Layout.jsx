import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Header/>
            <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout