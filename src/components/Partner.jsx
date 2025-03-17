import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Partner() {
  const [data, setData] = useState([])
  const fetchData = async () => {
      const queryShot = await getDocs(collection(db, "sponsors"))
      const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
      setData(docs)
  }
  useEffect(() => {
      fetchData()
  }, [])
  return (
    <section className='bg-grayScale grid max-md:grid-cols-1 max-lg:grid-cols-4 grid-cols-4 gap-4 lg:px-24 py-14 p-4'>

        {data.map((item,idx)=>
        <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:idx-(0.8*idx)}} className='bg-white border border-gray-400'>
        <img style={{}} className='hue-rotate-[150deg] hover:grayscale-0' src={item.image} alt="" />
        <h4 className='text-center font-semibold mb-2'>{item.name}</h4>
    </motion.div>
        )}
    </section>
  )
}

export default Partner