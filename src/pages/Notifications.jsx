import { collection, getDocs, Timestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import { convertTimeToFormate, sortByTime } from '../utils/convertTimeStamp'

function Notifications() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const userId = localStorage.getItem("user_id")
        if (userId) {
            fetchDAta(userId)
        } else {
            window.location.href = "/"
        }
    }, [])
    const fetchDAta = async (userId) => {
       try {
        setLoading(true)
        const docRef = collection(db, "users", userId, "notifications")
        const shot = await getDocs(docRef)
        const dat = shot.docs.map(item => ({ ...item.data() }))
        const publiC = collection(db, "PublicNotifiction")
        const shotRef = await getDocs(publiC)
        const notifyDat = shotRef.docs.map((item) => ({ title: item.data().type, description: item.data().message, createdAt: item.data().timestamp }))
        setLoading(false)
        const sortNotify = sortByTime([...notifyDat, ...dat])
        setData(sortNotify)
       } catch (error) {
        setLoading(false)
       }
    }

    return (
        <main className='lg:px-24 py-10 p-4'>
            <h4 className='border-t-4 py-3 font-semibold px-5 text-xl border-secondary bg-primary text-white'>Notifications</h4>
            <section className='mt-5'>
               {loading ? 
                    <h4 className='text-primary text-center border border-primary rounded-md py-1'>
                        Loading...
                    </h4> : data.length ? 
                     data.slice(0.20).map((item, idx) => (
                        <div key={idx} className='border my-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold first-letter:uppercase text-lg text-secondary'>{item.title}</h3>
                                <h3 className=''>{convertTimeToFormate(item.createdAt)} </h3>
                            </div>
                            <p className='text-gray-600 first-letter:uppercase text-md'>{item.description}</p>
                        </div>
                    ))  :
                     <h4 className='text-primary text-center border border-primary rounded-md py-1'>
                        No notifications found.
                     </h4>  
            }

            </section>
        </main>
    )
}

export default Notifications