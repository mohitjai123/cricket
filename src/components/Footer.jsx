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
        <div className='grid lg:gap-10 gap-5 lg:grid-cols-6 md:grid-cols-3 grid-cols-1'>
            <div className='col-span-2'>
                <div className='flex items-center gap-5'>
                <img className="h-20" src={logo} alt="" />
<h1 className='font-bold text-secondary'><span className='text-2xl'>Macjhond</span> <br /> Premier League</h1>
                </div>
                <p className='mx-3 mt-10'>Macjhond Premier League is a global cricket platform that allows players, teams, and enthusiasts to register and participate in tournaments, leagues, and training programs.</p>
            </div>
            <ul className='text-gray-500'>
                <h3 className='text-secondary text-xl font-semibold'>Pages</h3>
                <li className='mt-3'>
                    <NavITem name='Home' url='/cricket/' active={pathname=="/cricket/"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='About' url='/cricket/about' active={pathname=="/cricket/about"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='trial' url='/cricket/trial' active={pathname=="/cricket/trial"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='news' url='/cricket/news' active={pathname=="/cricket/news"}/>
                </li>
                <li className='mt-3'>
                    <NavITem name='contact' url='/cricket/contact' active={pathname=="/cricket/contact"}/>
                </li>
                <li className='mt-3'>
                    <MultiNav name='gallery' option={[{name:"Video Gallery", url:"/cricket/video-gallery"},{name:"Photo Gallery", url:"/cricket/photo-gallery"}]} active={pathname.includes("gallery")}/>
                </li>
            </ul>
            <ul className='text-gray-500'>
                <h3 className='text-secondary text-xl font-semibold'>Teams</h3>
                {teams.map((item)=>
                 <li key={item.id} className='mt-3'>
                 <NavITem name={item.name} url={'/cricket/teams/'+item.id} active={pathname==("/cricket/teams/"+item.id)}/>
             </li>
                )}
            </ul>
            <ul className='col-span-2'>
                <h3 className='text-secondary text-xl font-semibold'>Contact Us</h3>
                <div className='flex text-gray-500 mt-5 gap-4'>
          <svg className='text-secondary' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.475q2.475-2 3.738-3.85T17 9.15q0-2.25-1.4-3.7T12 4T8.4 5.45T7 9.15q0 1.625 1.263 3.475T12 16.475m0 2.05q-.3 0-.6-.1t-.55-.3q-2.95-2.35-4.4-4.587T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.15-1.45 4.388t-4.4 4.587q-.25.2-.55.3t-.6.1M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M6 22q-.425 0-.712-.288T5 21t.288-.712T6 20h12q.425 0 .713.288T19 21t-.288.713T18 22zm6-13"/></svg>
          <p>785 15h Street, Office 478 Berlin</p>
          </div>
          <a href='tel:+911234567890' className='flex mt-5 gap-4'>
          <svg className='text-secondary' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11.95q0-2.925-2.037-4.962T12 4.95v-2q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 11.95zm-4 0q0-1.25-.875-2.125T12 8.95v-2q2.075 0 3.538 1.463T17 11.95zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
          <p>+91 1234567890</p>
          </a>

          <a href='mailto:info@email.com' className='flex justify-center mt-5 w-fit group relative text-gray-500 hover:text-black duration-500 gap-4'>
          <svg className='text-secondary' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"></path></svg>
            <p>info@email.com</p>
            <div className='w-0 h-0.5 absolute bg-primary duration-300 bottom-0 group-hover:w-full'></div>
          </a>
          <div className='flex mt-10 gap-3'>
            <a className='' href="">
            <svg className='bg-primary text-white p-1.5 hover:bg-blue-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor"/></svg>
            </a>
            <a className='' href="">
            <svg  className='bg-primary text-white p-2.5 hover:bg-pink-600 duration-500 h-10 w-10 rounded-full'  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"/></svg>
            </a>
            <a className='' href="">
            <svg className='bg-primary text-white p-2.5 hover:bg-cyan-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 12"><path fill="currentColor" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312z"/></svg>
            </a>
            <a className='' href="">
            <svg  className='bg-primary text-white p-2.5 hover:bg-blue-600 duration-500 h-10 w-10 rounded-full' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"/></svg>
            </a>
        </div>
            </ul>
            
        </div>
        <hr className='mt-5' />
            <p className='text-center mt-5'>
            &copy; { new Date().getFullYear()} by Dreamzz ❤ Infotech
            </p>
    </footer>
  )
}

export default Footer