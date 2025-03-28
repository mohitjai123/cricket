import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Carousel from "framer-motion-carousel";
const MyCarousel = () => {
  const [data, setData] = useState([])
    const fetchData = async () => {
        const newsQuery = collection(db, "testimonial");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ ...item.data() })) 
          setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])
  // Auto-play effect
  return (
    <div className="relative w-full py-10 max-w-xl mx-auto overflow-hidden rounded-lg">
      {/* Track Container */}
      <Carousel renderArrowLeft={()=><></>} renderArrowRight={()=><></>} renderDots={()=><></>} loop >
      {data.map((text, index) => (
          <motion.div
            key={index}
            className="h-fit relative text-center text-white rounded-lg"
          > 
            <svg className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M8.804 17.02L8 17.18V20h1c2.783 0 4.906-.771 6.309-2.292C17.196 15.66 17.006 13.03 17 13V5a1 1 0 0 0-1-1H9c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h4.078a2.89 2.89 0 0 1-.429 1.396c-.507.801-1.464 1.347-2.845 1.624z" fill="currentColor"></path></svg>
            <p className="w-full">{text.message}</p>
            <h4 className="text-lg mt-6 font-semibold">{text.name}</h4>
            <h4 className="">{text.city}</h4>
          </motion.div>
        ))}
      </Carousel>

      {/* Navigation Buttons */}
      {/* <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        ▶
      </button> */}

      {/* Dots Indicators */}
      
    </div>
  );
};

export default MyCarousel;
