import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { convertTimestamp } from '../utils/convertTimeStamp';
import { Link } from 'react-router-dom';

function NewsPage() {
    const [data, setData] = useState([])
    const [endIdx,setEndIdx] = useState(6)
    const fetchData = async () => {
        const newsQuery = collection(db, "news");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <main>
        {/* <BreadCamp img={API_URL+"other-images/IMG_4774.JPG"} name={"News"}/> */}
        <h4 className='text-2xl text-white mt-5 font-bold lg:mx-24 text-center border-t-8 border-secondary py-3 bg-primary'> News</h4>

        <section className='lg:px-24 py-14 grid p-4'>
        <div className='grid py-5 lg:grid-cols-3 gap-10'>
                {data.slice(0,endIdx).map((item,idx)=>
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
            <hr className='my-5' />
            {data.length>endIdx && <button onClick={()=>setEndIdx(endIdx+6)} className='border mt-5 hover:bg-secondary hover:border-secondary duration-300 hover:text-white px-8 py-2 rounded-full border-primary text-center mx-auto'>Load More News</button>}
            </section>
    </main>
  )
}

export default NewsPage