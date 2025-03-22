import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebaseConfig';
import { convertTimestamp } from '../utils/convertTimeStamp';

function BlogsNews() {
    const [data, setData] = useState([])
    const pageName = window.location.toString().includes("about") ? "Academy" : "Clubs"
    const fetchData = async () => {
        const newsQuery = query(collection(db, "news"));
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className='lg:px-24 py-14 p-4'>
            <h3 className='text-x text-center font-semibold'>NEWS</h3>
            <h2 className='lg:text-6xl text-3xl mb-7 text-center font-semibold'>Latest News</h2>
            <div className='grid py-5 lg:grid-cols-3 gap-10'>
                {data.slice(0,3).map((item,idx)=>
                   <Link className='cursor-pointer' to={'/news/'+item?.id} key={idx}>
                   <div className=''>
                     <div className='overflow-hidden'>
                         <img className='lg:max-w-96 max-h-96 hover:scale-110 duration-500' src={item?.poster} alt="" />
                     </div>
                     <p className=' my-4 flex text-gray-800 gap-4 items-center'>
                         <div className='w-10 h-0.5 bg-primary rounded-xl'></div>
                         <strong className='uppercase'>{item?.category}</strong> <div className='h-1 w-1 rounded-full bg-gray-500'></div> <span className='text-gray-500'> {convertTimestamp(item?.createdAt)}</span></p> 
                     <h3 className='text-3xl hover:text-gray-500 duration-500 font-[500]'>{item?.title}</h3>
                 </div>
                 </Link>
                )}
             
            </div>
        </section>
    )
}

export default BlogsNews