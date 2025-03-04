import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import CountdownTimer from '../../utils/CountDownTimer'

function UpcomingEvent() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "matches"));
      const docs = await Promise.all(
        querySnapshot.docs.map(async (item) => {
          const data = item.data();
          const [teamALogo, teamBLogo] = await Promise.all([
            getTeamDetails(data.teamA),
            getTeamDetails(data.teamB),
          ]);
  
          return { id: item.id, logoA: teamALogo, logoB: teamBLogo, ...data };
        })
      );
  
      console.log(docs);
      setData(docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const getTeamDetails = async (id) => {
    const docRef = doc(db, "teams", id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().logo : null; // Handle missing docs
  };
  useEffect(() => {
      fetchData()
  }, [])
  return (
   <section className='pt-24'>
      <h4 className='text-4xl bg-primary py-3 font-bold text-white text-center'>Upcoming events</h4>
     <motion.div className='h-[600px] grid justify-end items-center relative bg-center bg-contain bg-no-repeat w-full' style={{backgroundImage:`url()`}} initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6}}>
     <img className="w-full -z-10 h-full absolute top-0 left-0 " src="https://cdn.prod.website-files.com/61bb26fe53aeb2a18bbd17e4/6780fd0dcb8f1863068713cd_Hero%20Image.2.webp" alt="" />
      <div className=' float-end lg:mr-10 h-fit'>
     <CountdownTimer timer={500}/>
      </div>
  </motion.div>
  <hr />
   </section>
  )
}

export default UpcomingEvent