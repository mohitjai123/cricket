import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HeroComponent() {
  const [imgData, setImgData] = useState([])

  const settings = {
    dots: false,
    infinite: imgData.length > 2,
    speed: 500,
    arrows:false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    fetchImgData()
  }, [])

  const fetchImgData = async () => {
    const newsQuery = collection(db, "slider");
    const queryShot = await getDocs(newsQuery)
    const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
    setImgData(docs)
  }

  return (
    <section className='w-full relative overflow-hidden'>
      <Slider {...settings} className='w-full'>
        {imgData.map((item, idx) =>
             <img key={idx} className="h-full object-cover w-full" src={item.image} alt="" />
         )}
      </Slider>
    </section>

  )
}

export default HeroComponent