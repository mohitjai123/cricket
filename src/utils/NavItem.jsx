import React from 'react'
import { Link } from 'react-router-dom'

function NavITem({name="", url="", active=false}) {
  return (
    <li className='relative uppercase font-semibold group cursor-pointer w-fit'>
        <Link to={url}>
        {name}
        </Link>
        <div className={`w-0 h-0.5 bg-primary group-hover:w-full ${active && "w-full"  } duration-200`}></div>
    </li>
  )
}



export default NavITem