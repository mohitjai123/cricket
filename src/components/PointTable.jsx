import React, { useEffect, useState } from 'react'
import { API_URL } from '../stor'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function PointTable() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const newsQuery = collection(db, "PremierLeague");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ ...item.data() }))
        setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <section  className='lg:px-24 max-lg:max-w-full grid'>
         <h3 className='text-center font-semibold'>TABLE</h3>
        <h2 className='lg:text-6xl text-3xl mb-7 text-center font-semibold'>Premier league</h2>
        <div>
            <div className='w-full bg-secondary py-1'></div>
            <h4 className='bg-primary p-5 font-semibold text-white text-lg'>
            Team standing
            </h4>
            <div className='border-collapse flex'>
                <h2 className='p-5 w-fit font-semibold border'>Pos</h2>
                <h2 className='p-5 w-1/2 max-lg:w-1/4 font-semibold border'>Team</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>E</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>W</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>L</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>P</h2>
            </div>
            {data?.map((item, idx)=>
            <div key={idx} className='border-collapse hover:bg-cyan-50 duration-500 bg-white flex'>
            <h2 className='py-5 text-center w-1/6 lg:w-[5.5rem] text-gray-500 border'>{idx+1}</h2>
            <div className='p-5 lg:w-1/2 w-1/4 lg:flex gap-4 items-center text-secondary hover:font-semibold duration-500 border'><img className='h-8' src={item.logo} alt="" />
                <h4>{item.teamName}</h4>
            </div>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{item.ennings}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{item.winings}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{item.loss}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{item.points}</h2>
        </div>
            )}
        </div>
        {/* <button className='mx-auto text-white bg-secondary mt-8 py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>VIEW FULL TABLE</button> */}
    </section>
  )
}

export default PointTable