import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import CountdownTimer from '../../utils/CountDownTimer'

function UpcomingEvent() {
  const [data, setData] = useState({
    date:"",
    time:"",
    poster:""
  })
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const docs = querySnapshot.docs.map((item)=>({...item.data()}))
      setData(docs?.[0]); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
      fetchData()
  }, [])
  return (
   <section>
      <h4 className='text-4xl bg-primary py-3 font-bold text-white text-center'>Upcoming events</h4>
     <motion.div className='lg:h-[600px] max-lg:rounded-b-lg max-lg:bg-gray-800 h-fit grid lg:justify-end items-center relative bg-center bg-contain bg-no-repeat w-full' initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6}}>
     <img className="w-full lg:-z-10 lg:h-full lg:absolute top-0 left-0 " src={data?.poster} alt="" />
      <div className='lg:mr-10 h-fit'>
     <CountdownTimer dateAndTime={data?.date+" "+data?.time}/>
      </div>
  </motion.div>
  <hr />
   </section>
  )
}

export default UpcomingEvent