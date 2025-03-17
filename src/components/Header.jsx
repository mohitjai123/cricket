import React, { useEffect, useState } from 'react'
import NavITem from '../utils/NavITem'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import RegisterMember from './RegisterMember'
import MultiNav from '../utils/MultiNavItem'
import { useSetRecoilState } from 'recoil'
import { popupAtom } from '../utils/popupAtom'

function Header() {
    const {pathname} = useLocation()
    const [active, setActive] = useState(false)
    const setPopup = useSetRecoilState(popupAtom)
    useEffect(()=>{
        window.scrollTo(0,0)
        setActive(false)
    },[pathname])
  return (
    <>
    <header className={`flex  z-50 justify-between duration-300 text-black bg-white shadow-lg sticky top-0 h-20 items-center lg:px-16 px-4
     py-5`}>
        {/* <div className='flex gap-10'> */}
        <div className='flex gap-4'>
            <Link to="/">
            <img className={" h-10 lg:h-20 "} src={logo} alt="" />
            </Link>
            <ul className={`flex ${active ? "max-lg:h-96" : "max-lg:h-0"} lg:mt-4 z-50 max-lg:duration-500 justify-center left-0 max-lg:absolute max-lg:w-full max-lg:overflow-hidden top-20 max-lg:text-white max-lg:bg-secondary max-lg:flex-col gap-5 items-center`}>
            <NavITem name='Home' active={pathname=="/"} url='/'/>
            <NavITem name='About us' active={pathname=="/about"} url='/about'/>
            <NavITem name='Trial' active={pathname=="/trial"} url='/trial'/>
            <NavITem name='Teams' active={pathname=="/teams"} url='/teams'/>
            <MultiNav name='Gallery' option={[{name:"Video Gallery", url:"/video-gallery"}, {name:"Photo Gallery", url:"/photo-gallery"}]} active={pathname.includes("gallery")} />
            <MultiNav name='Schedule' option={[{name:"Upcoming Matches"}, {name:"Past Matches"}]} active={pathname.includes("schedul")} />
            <NavITem name='News' active={pathname=="/news"} url='/news'/>
            <NavITem name='Contact' active={pathname=="/contact-us"} url='/contact-us'/>
        </ul>
        </div>
        
        {/* </div> */}
        <div className='flex gap-4'>
            
            <button onClick={()=>setPopup(true)} className={` border shadow-lg animate-btn flex items-center gap-2 rounded-full py-2 px-4 lg:px-8 font-bold duration-500 hover:opacity-50 text-white `}> <span>Register Now</span> </button>
            <button className='lg:hidden' onClick={()=>setActive(!active)}>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "rotate-45 translate-y-3" :""} bg-primary`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "opacity-0" :"opacity-100"} bg-primary`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "-rotate-45 -translate-y-3" :""} bg-primary`}></div>
            </button>
        </div>
    </header>
    {/* {popup && <RegisterMember setPopup={()=>setPopup(!popup)}/>} */}
    </>
  )
}

export default Header