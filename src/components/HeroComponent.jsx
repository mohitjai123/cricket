import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Carousel from 'framer-motion-carousel';

function HeroComponent() {

useEffect(() => {
    fetchImgData()
}, [])

const [imgData, setImgData] = useState([])
    const fetchImgData = async () => {
        const newsQuery = collection(db, "slider");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
          setImgData(docs)
    }

  return (
    <Carousel interval={4000} renderDots={()=><></>} renderArrowLeft={()=><></>} renderArrowRight={()=><></>} autoPlay loop>
    
    {imgData.map((item,idx)=>
     <section style={{backgroundImage:`url(${item.image})`}} key={idx} className='lg:h-[50vh] bg-primary bg-[center_30%] h-[12vh] overflow-hidden bg-cover lg:px-16 px-4 lg:flex justify-between'>
      {/* <img className="h-full w-full" src={item.image} alt="" /> */}
         </section>
    )}
      </Carousel>
     
  )
}

export default HeroComponent