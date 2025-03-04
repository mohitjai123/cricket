import React from 'react'
import { Link } from 'react-router-dom'

function BreadCamp({name, second=null}) {
  return (
    <div className='lg:h-[30vh] h-[50vh] grid text-white justify-center items-center w-full'>
        <div className='absolute bg-primary h-96 lg:h-[50vh] -z-10 w-full left-0 top-0'></div>
        <div>
        <h4 className='text-5xl capitalize font-semibold'>{second || name}</h4>
        <div className='flex mb-16 justify-center p-4 gap-4 h-fit'>
            <Link>HOME</Link>
            <p>-</p>
            <Link className='uppercase'>{name}</Link>
            {second &&
            (
              <>
              <p>-</p>
              <Link className='uppercase'>{second}</Link>
              </>
            )}
        </div>
        </div>
    </div>
  )
}

export default BreadCamp