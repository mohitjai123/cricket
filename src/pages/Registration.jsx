import React, { useEffect } from 'react'

function Registration() {
    useEffect(()=>{
        const userId = localStorage.getItem("user_id")
        if(userId){

        } else {
            window.location.href = "/"
        }
    },[])
    return (
        <main className='lg:px-24 py-10 p-4'>
            <h4 className='border-t-4 py-3 font-semibold px-5 text-xl border-secondary bg-primary text-white'>Registrations</h4>
            <section className='mt-5 flex-wrap justify-between gap-5 flex'>
                    <div className='border p-4 grid gap-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                        <div className='flex justify-between'>
                        <h3 className='font-semibold text-lg text-secondary'>Trial Registration Season 3</h3>
                        </div>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Result : <span className="text-secondary">Pending</span></h4>
                        </p>
                        <p>
                        <h4 className='text-primary'>Registratio Date : <span className="text-secondary">2 March 2025</span></h4>
                        </p>
                    </div>
                    <div className='border p-4 grid gap-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                        <div className='flex justify-between'>
                        <h3 className='font-semibold text-lg text-secondary'>Trial Registration Season 2</h3>
                        </div>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Result : <span className="text-secondary">Not Registered</span></h4>
                        </p>
                        <p>
                        <h4 className='text-primary'>Registratio Date : <span className="text-secondary">Not Registerd</span></h4>
                        </p>
                    </div>
                    <div className='border p-4 grid gap-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                        <div className='flex justify-between'>
                        <h3 className='font-semibold text-lg text-secondary'>Trial Registration Season 1</h3>
                        </div>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Result : <span className="text-secondary">Fail</span></h4>
                        </p>
                        <p>
                        <h4 className='text-primary'>Registratio Date : <span className="text-secondary">4 March 2024</span></h4>
                        </p>
                    </div>

                    <div className='border p-4 grid gap-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                        <div className='flex justify-between'>
                        <h3 className='font-semibold text-lg text-secondary'>Trial Registration Season 1</h3>
                        </div>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Result : <span className="text-secondary">Fail</span></h4>
                        </p>
                        <p>
                        <h4 className='text-primary'>Registratio Date : <span className="text-secondary">4 March 2024</span></h4>
                        </p>
                    </div>

            </section>
        </main>
      )
}

export default Registration