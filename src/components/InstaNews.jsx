import React, { useEffect, useState } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
// import first from "../assets/bottom_img/first.jpg"

function InstaNews() {
    useEffect(() => {
      Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
  
      return () => {
        Fancybox.destroy(); // Cleanup Fancybox on component unmount
      };
    }, []);

    const [data, setData] = useState([])
    const fetchData = async () => {
        const newsQuery = collection(db, "footer");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() })) 
        setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
    <section className='flex justify-center bg-[#f8f8f7] pt-14 max-lg:flex-wrap'>

        {data.slice(0,6).map((item,idx)=>
          <a key={idx} href={item.image} data-fancybox="gallery">
          <img className='xl:max-w-56 duration-300 hover:brightness-90' src={item.image} alt="" />
          </a>
        )}
    </section>
  )
}

export default InstaNews