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
            <table className='w-full'>
            <thead>
            <tr className='border-collapse'>
                <th className='lg:p-5 p-2 w-20 font-semibold border'>Pos</th>
                <th className='lg:p-5 p-2 font-semibold border'>Team</th>
                <th className='lg:p-5 p-2 text-center font-semibold border'>E</th>
                <th className='lg:p-5 p-2 text-center font-semibold border'>W</th>
                <th className='lg:p-5 p-2 text-center font-semibold border'>L</th>
                <th className='lg:p-5 p-2 text-center font-semibold border'>P</th>
            </tr>
            </thead>
            <tbody>
            {data?.map((item, idx)=>
            <tr key={idx} className='border-collapse hover:bg-cyan-50 duration-500 bg-white'>
            <td className='py-5 text-center w-20 text-gray-500 border'>{idx+1}</td>
            <td className='lg:p-5 p-2 lg:flex gap-4 items-center text-secondary hover:font-semibold duration-500 border'><img className='h-8' src={item.logo} alt="" />
                <a>{item.teamName}</a>
            </td>
            <td className='lg:p-5 p-2 text-center text-gray-500 border'>{item.ennings}</td>
            <td className='lg:p-5 p-2 text-center text-gray-500 border'>{item.winings}</td>
            <td className='lg:p-5 p-2 text-center text-gray-500 border'>{item.loss}</td>
            <td className='lg:p-5 p-2 text-center text-gray-500 border'>{item.points}</td>
        </tr>
            )}
            </tbody>
            </table>
        </div>
        {/* <button className='mx-auto text-white bg-secondary mt-8 py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>VIEW FULL TABLE</button> */}
    </section>
  )
}

export default PointTable