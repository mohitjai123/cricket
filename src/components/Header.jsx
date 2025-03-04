import React, { useEffect, useState } from 'react'
import NavITem from '../utils/NavITem'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import RegisterMember from './RegisterMember'
import MultiNav from '../utils/MultiNavItem'

function Header() {
    const {pathname} = useLocation()
    const [nav, setNav]= useState(true)
    const [active, setActive] = useState(false)
    const [popup, setPopup] = useState(false)
    function hanldeScroll(e){
        setNav(window.scrollY<100)
    }
    useEffect(()=>{
        setActive(false)
        window.scrollTo(0,0)
    },[pathname])
    useEffect(() => {
        window.addEventListener("scroll", hanldeScroll);
        return () => window.removeEventListener("scroll", hanldeScroll);
    }, []);
  return (
    <>
    <header className={`flex z-50 justify-between duration-300 ${nav ? "text-white" : "text-black bg-white shadow-lg sticky top-0 h-20"}  items-center lg:px-16 px-4
     py-5`}>
        {/* <div className='flex gap-10'> */}
        <div>
            <img className={nav ? "lg:h-20 h-10" : " h-10 lg:h-14"} src={logo} alt="" />
        </div>
        <ul className={`flex ${active ? "max-lg:h-96" : "max-lg:h-0"} z-50 max-lg:duration-500 justify-center left-0 max-lg:absolute max-lg:w-full max-lg:overflow-hidden top-20 max-lg:text-white max-lg:bg-secondary max-lg:flex-col gap-5 items-center`}>
            <NavITem name='Home' active={pathname=="/cricket/"} url='/cricket/'/>
            <NavITem name='About' active={pathname=="/cricket/about"} url='/cricket/about'/>
            <NavITem name='Trial' active={pathname=="/cricket/trial"} url='/cricket/trial'/>
            <NavITem name='Teams' active={pathname=="/cricket/teams"} url='/cricket/teams'/>
            <MultiNav name='Gallery' option={[{name:"Video Gallery", url:"/cricket/video-gallery"}, {name:"Photo Gallery", url:"/cricket/photo-gallery"}]} active={pathname.includes("gallery")} />
            <MultiNav name='Schedule' option={[{name:"Upcoming Matches", url:"/cricket/upcoming-matches"}, {name:"Past matches", url:"/cricket/past-matches"}]} active={pathname.includes("schedul")} />
            <NavITem name='News' active={pathname=="/cricket/news"} url='/cricket/news'/>
            <NavITem name='Contact' active={pathname=="/cricket/contact-us"} url='/cricket/contact-us'/>
        </ul>
        {/* </div> */}
        <div className='flex gap-4'>
            
            <button onClick={()=>setPopup(!popup)} className={` border flex items-center gap-2 rounded-full py-2 px-8 font-bold duration-500 ${nav ? "bg-white border-white hover:text-white group hover:bg-transparent text-primary" : "bg-primary hover:text-primary hover:bg-transparent border-primary text-white"} `}> <span>Register</span> <div className={`${nav ? "bg-black group-hover:bg-white" :"bg-white group-hover:bg-primary"} duration-500 animate-bounce rounded-full h-2 w-2 `}></div> </button>
            <button className='lg:hidden' onClick={()=>setActive(!active)}>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "rotate-45 translate-y-3" :""} ${nav ? "bg-white" :"bg-primary"}`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "opacity-0" :"opacity-100"} ${nav ? "bg-white" :"bg-primary"}`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "-rotate-45 -translate-y-3" :""} ${nav ? " bg-white" :"bg-primary"}`}></div>
            </button>
        </div>
    </header>
    {popup && <RegisterMember setPopup={()=>setPopup(!popup)}/>}
    </>
  )
}

export default Header