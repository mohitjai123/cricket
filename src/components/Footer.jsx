import React, { useEffect, useState } from 'react'
import NavITem from '../utils/NavITem'
import logo from "../assets/logo.png"
import { data, useLocation } from 'react-router-dom'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import MultiNav from '../utils/MultiNavItem'

function Footer() {
    const {pathname} = useLocation()
    const [teams, setTeams] = useState([])
    const fetchTeams = async()=>{
      const teamRef = collection(db, "teams")
      const teamsDat = await getDocs(teamRef)
      const formatData = teamsDat.docs.map(doc=>({id:doc.id, ...doc.data()}))
      setTeams(formatData)
    }
    useEffect(()=>{
      fetchTeams()
    },[])
  return (
    <footer className='bg-[#F8F8F7] justify-center gap-8 lg:justify-between pt-16 pb-5 lg:px-24 px-4'>
        <div className='grid lg:gap-10 gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2'>
            {/* <div className='col-span-2'>
                <div className='flex items-center gap-5'>
                <img className="h-20" src={logo} alt="" />
<h1 className='font-bold text-secondary'><span className='text-2xl'>Macjhond</span> <br /> Premier League</h1>
                </div>
                <p className='mx-3 mt-10'>Macjhond Premier League is a global cricket platform that allows players, teams, and enthusiasts to register and participate in tournaments, leagues, and training programs.</p>
            </div> */}
            <ul className='text-gray-500'>
                <h3 className='text-secondary text-xl font-semibold'>MJPL</h3>
                <li className='mt-3'>
                    <NavITem name='Home' url='/' active={pathname=="/"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='About' url='/about' active={pathname=="/about"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='trial' url='/trial' active={pathname=="/trial"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='news' url='/news' active={pathname=="/news"}/>
                </li>
               
                <li className='mt-3'>
                    <MultiNav name='gallery' option={[{name:"Video Gallery", url:"/video-gallery"},{name:"Photo Gallery", url:"/photo-gallery"}]} active={pathname.includes("gallery")}/>
                </li>
            </ul>
            <ul className='text-gray-500'>
                <h3 className='text-secondary text-xl font-semibold'>Teams</h3>
                {teams.map((item)=>
                 <li key={item.id} className='mt-3'>
                 <NavITem name={item.name} url={'/teams/'} active={pathname==("/teams/"+item.id)}/>
             </li>
                )}
            </ul>
            <ul className='text-gray-500 max-lg:col-span-2'>
                <h3 className='text-secondary text-xl font-semibold'>Help</h3>
                <li className='mt-3'>
                    <NavITem name='contact' url='/contact-us' active={pathname=="/contact-us"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='privacy policy' url='/privacy-policy' active={pathname=="/privacy-policy"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='terms & conditions' url='/terms-conditions' active={pathname=="/terms-conditions"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='Refund & Cancellation policy' url='/refund-policy' active={pathname=="/refund-policy"}/>
                </li>
        
          <div className='flex mt-10 gap-3'>
            <a target="_blank" className='' href="https://www.facebook.com/mjplleague">
            <svg className='bg-primary text-white p-1.5 hover:bg-blue-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor"/></svg>
            </a>
            <a target="_blank" className='' href="https://www.instagram.com/mjpl_league?igsh=YzljYTk1ODg3Zg==">
            <svg  className='bg-primary text-white p-2.5 hover:bg-pink-600 duration-500 h-10 w-10 rounded-full'  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"/></svg>
            </a>
            <a target="_blank" className='' href="https://x.com/mjplleague">
            <svg className='bg-primary text-white p-2.5 hover:bg-cyan-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 12"><path fill="currentColor" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312z"/></svg>
            </a>
            <a target="_blank" className='' href="https://youtube.com/@mjpl_league">
            <svg  className='bg-primary text-white p-2.5 hover:bg-red-500 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"/></svg>
            </a>
            <a target="_blank" href="https://pin.it/11pjoxKze">
            <svg className='bg-primary text-white p-2.5 hover:bg-red-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.34 1C5.46 1 2.62 2.92 2.62 6.02c0 1.97 1.11 3.1 1.78 3.1c.28 0 .44-.77.44-.99c0-.26-.66-.82-.66-1.9c0-2.26 1.72-3.85 3.94-3.85c1.91 0 3.32 1.09 3.32 3.08c0 1.49-.6 4.28-2.53 4.28c-.7 0-1.3-.5-1.3-1.23c0-1.06.74-2.09.74-3.18c0-1.86-2.63-1.52-2.63.72c0 .47.06.99.27 1.42c-.39 1.67-1.18 4.15-1.18 5.87c0 .53.08 1.05.13 1.58c.1.11.05.1.19.04c1.41-1.94 1.36-2.31 2-4.85c.35.66 1.24 1.01 1.94 1.01c2.98 0 4.32-2.9 4.32-5.52c0-2.79-2.41-4.6-5.05-4.6"></path></svg>
            </a>
        </div>
            </ul>
            
        </div>
        <hr className='mt-5' />
            <p className='text-center mt-5'>
            &copy; { new Date().getFullYear()} by <a href="https://mediawebtek.com">Media Web Tek</a>
            </p>
    </footer>
  )
}

export default Footer