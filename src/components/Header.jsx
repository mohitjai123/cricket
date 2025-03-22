import React, { useEffect, useState } from 'react'
import NavITem from '../utils/NavITem'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import MultiNav from '../utils/MultiNavItem'
import { useSetRecoilState } from 'recoil'
import { popupAtom } from '../utils/popupAtom'
import LoginPage from './LoginPage'

function Header() {
    const {pathname} = useLocation()
    const [active, setActive] = useState(false)
    const [profile, setProfile] = useState(false)
    const [loginPopup, setLoginPoup] = useState(false)
    const setPopup = useSetRecoilState(popupAtom)
    const [isLogin, setIsLogin] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)
        setActive(false)
        const id = localStorage.getItem("user_id")
        if(id){
            // localStorage.clear()
            setIsLogin(JSON.parse(localStorage.getItem("user_data")))
        }
        setProfile(false)
    },[pathname])

    const handleLogout =()=>{
        const value = confirm("Are you sure you want to logout?").valueOf()
        if(value){
            localStorage.clear()
            window.location.href = "/"
        }
    }
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
            {!isLogin ? 
            
        <div className='flex gap-4'>
            <button onClick={()=>setLoginPoup(true)} className={` border shadow-lg bg-secondary flex items-center gap-2 rounded-full py-2 px-4 lg:px-8 font-bold duration-500 hover:opacity-50 text-white `}> <span>Login</span> </button>
            <button onClick={()=>setPopup(true)} className={` border shadow-lg animate-btn flex items-center gap-2 rounded-full py-2 px-4 lg:px-8 font-bold duration-500 hover:opacity-50 text-white `}> <span>Register Now</span> </button>
        </div> : 
            <div className='relative'>
                <button onClick={()=>setProfile(!profile)} className={` ${profile ? "rounded-br-none" : "rounded-br-full"} border shadow-lg bg-secondary flex items-center gap-2 rounded-full p-2 font-bold duration-500 hover:opacity-50 text-white `}> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>{isLogin.first_name}<svg className={`${profile ? "-rotate-180" :"rotate-0"} duration-300`} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"></path></svg> </button>
                <ul className={`absolute bg-white ${profile ?  "h-42" : "h-0"} duration-300 right-0 overflow-hidden w-44`}>

                    <li className='w-full'>
                        <Link to="/profile">
                        <h3 className='border-y p-2 hover:text-secondary'>Profile</h3>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link to='/registrations'>
                        <h3 className='border-y p-2 hover:text-secondary'>Registrations</h3>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link to='/notifications'>
                        <h3 className='border-y p-2 hover:text-secondary'>Notifications</h3>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link to='/change-password'>
                        <h3 className='border-y p-2 hover:text-secondary'>Change Password</h3>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <button onClick={handleLogout} className='border-y p-2 hover:text-secondary'>Logout</button>
                        
                    </li>
                </ul>
            </div>

        }
            <button className='lg:hidden' onClick={()=>setActive(!active)}>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "rotate-45 translate-y-3" :""} bg-primary`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "opacity-0" :"opacity-100"} bg-primary`}></div>
                <div className={`h-1 my-2 duration-500 w-10 ${active ? "-rotate-45 -translate-y-3" :""} bg-primary`}></div>
            </button>
        </div>
    </header>
    {loginPopup && <LoginPage setPopup={()=>setLoginPoup(!loginPopup)}/>}
    </>
  )
}

export default Header