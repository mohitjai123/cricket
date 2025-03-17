import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import RegisterMember from './RegisterMember'
import { useRecoilValue } from 'recoil'
import { popupAtom } from '../utils/popupAtom'

function Layout() {
  const popup = useRecoilValue(popupAtom)
  return (
    <main>
        <Header/>
            <Outlet/>
        <Footer/>
        {popup && 
        <RegisterMember/>
      }
    </main>
  )
}

export default Layout