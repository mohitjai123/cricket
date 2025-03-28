import React, { useEffect, useState } from 'react'
import { API_URL } from '../../stor'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function WorkSection() {
  const [data, setData] = useState([])
  const fetchData = async () => {
      const newsQuery = collection(db, "about_gellary");
      const queryShot = await getDocs(newsQuery)
      const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() })) 
      console.log(docs);
      
      setData(docs)
  }
  useEffect(() => {
      fetchData()
  }, [])

  return (
    <section className='lg:px-24 py-14 pt-0 px-4 flex flex-wrap justify-center'>
      {/* <CardItem img={API_URL + "other-images/IMG_4783.JPG"} />
      <CardItem img={API_URL + "other-images/IMG_4774.JPG"} />
      <CardItem img={API_URL + "other-images/IMG_4722.JPG"} /> */}
      {data.map((item,idx)=>(
        <CardItem key={idx} img={item.image}/>
      ))}
      {/* <CardItem img={API_URL+"other-images/IMG_4722.JPG"}/> */}
    </section>
  )
}

const CardItem = ({ img }) => {
  return (
    <div className='overflow-hidden mt-10'>
      <img className='max-w-96 group-hover:scale-110 duration-500' src={img} alt="" />
    </div>

  )
}

export default WorkSection