import React, { useEffect } from 'react'

function Notifications() {
    useEffect(()=>{
        const userId = localStorage.getItem("user_id")
        if(userId){

        } else {
            window.location.href = "/"
        }
    },[])
  return (
    <main className='lg:px-24 py-10 p-4'>
        <h4 className='border-t-4 py-3 font-semibold px-5 text-xl border-secondary bg-primary text-white'>Notifications</h4>
        <section className='mt-5'>
                <div className='border my-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                    <div className='flex justify-between'>
                    <h3 className='font-semibold text-lg text-secondary'>Notificatio title</h3>
                    <h3 className=''>12:10 pm </h3>
                    </div>
                    <p className='text-gray-600 text-md'>Notification description</p>
                </div>
                <div className='border my-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                    <div className='flex justify-between'>
                    <h3 className='font-semibold text-lg text-secondary'>Notificatio title</h3>
                    <h3 className=''>12:10 pm </h3>
                    </div>
                    <p className='text-gray-600 text-md'>Notification description</p>
                </div>
        </section>
    </main>
  )
}

export default Notifications