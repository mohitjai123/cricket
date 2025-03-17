import React from 'react'
import { Link } from 'react-router-dom'

function BreadCamp({ name, second = null, img }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className='bg-cover bg-center h-[12vh] lg:h-[35vh]'>
      {/* <div className='bg-primary/40 h-full flex flex-col justify-center gap-5 text-white place-items-center w-full'> */}
        {/* <h4 className='lg:text-5xl h-fit text-2xl capitalize font-semibold'>{second || name}</h4> */}
        {/* <div className='flex h-fit justify-center gap-4'>
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
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default BreadCamp