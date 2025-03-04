import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import heroImg from "../assets/hero.jpg"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { convertTimestamp } from '../utils/convertTimeStamp';
import { Link } from 'react-router-dom';

function HeroComponent() {
  const [data, setData] = useState({})
  const fetchData = async () => {
    const newsQuery = query(collection(db, "news"), where("category", "==", "Trending"));
    const queryShot = await getDocs(newsQuery)
    queryShot.docs.map((item) => setData({ id: item.id, ...item.data() }))
}
useEffect(() => {
    fetchData()
}, [])

  return (
    <section className='lg:h-screen overflow-hidden lg:px-16 px-4 lg:flex justify-between'>
      <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}  className='absolute w-full h-[110%] top-0 left-1/2 -translate-x-1/2 -z-10' src={heroImg} alt="" />
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{
        duration:0.5, delay:0.5
      }}  className='lg:w-2/5 py-10 grid h-fit gap-6 text-white'>
        <div className='relative'>
          <h3 className='uppercase text-xl'>digest</h3>
          <h2 className='lg:text-6xl text-3xl my-5 font-semibold'><motion.span initial={{ x: 200, opacity: 0 }} transition={{ duration: 0.5, delay:0.5 }} animate={{ x: 0, opacity: 1 }} >Detailed cricket match news & reviews</motion.span></h2>
          <motion.p initial={{ y: 200, opacity: 0 }} transition={{ duration: 0.5, delay: 0.7 }} animate={{ y: 0, opacity: 1 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quos quas neque autem esse blanditiis perspiciatis dolores saepe suscipit sit eligendi doloribus aliquid, tenetur doloremque dolor ipsam animi repellat. Nobis!</motion.p>
        </div>
        <button className='bg-secondary px-10 py-3 w-fit rounded-full mt-4'>READ MORE</button>
        <button onClick={() => window.scrollTo(0, 400)} className='w-fit mt-5 text-xl'>↓ Scroll Down</button>
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{
        duration:0.5, delay:0.5
      }}  className='lg:w-1/4 max-lg:hidden h-fit my-auto grid items-end'>
        <h3 className='text-white text-4xl mb-5 font-semibold'>Recent Post</h3>

        <img className='h-52' src={data?.poster} alt="" />
        <p className='text-white my-4 flex gap-4 items-center'><strong>TRENDING</strong> <div className='h-1 w-1 rounded-full bg-white/60'></div> <span className='text-white/60'>{convertTimestamp(data.createdAt)}</span></p>
        <Link to={"/cricket/news/"+data.id}>
        <h3 className='text-white text-2xl font-semibold'>{data.title}</h3>
        
        </Link>
      </motion.div>
    </section>
  )
}

export default HeroComponent