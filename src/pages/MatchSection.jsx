import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import CountdownTimer from '../utils/CountDownTimer'
import BreadCamp from '../components/BreadCamp'
import { convertDateToFormate } from '../utils/convertTimeStamp'
import { API_URL } from '../stor'

function MatchSection() {
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
    <main>
      {/* <B/readCamp img={API_URL+"other-images/IMG_6487.JPG"} name={"Matches"} second={"Past Matches"}/> */}
      <h4 className='text-2xl mt-5 text-white font-bold lg:mx-24 text-center border-t-8 border-secondary py-3 bg-primary'> Past Matches</h4>

<section className='lg:px-24 py-14 p-3 grid bg-gray-50 md:grid-cols-2 grid-cols-1 place-items-center gap-4 lg:grid-cols-3'>
    {data.map((item,idx)=>
       <motion.div key={idx} className='relative w-full' initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ delay: idx-(0.8*idx), duration:0.6}}>
        <CricketMatchCard item={item}/>
       </motion.div>
    )}
<hr />
</section>
    </main>
  )
}

 function CricketMatchCard({item}) {
  return (
      <div className="bg-white relative shadow-lg rounded-2xl p-6 w-full max-w-lg text-center">
        <h2 className="text-lg font-semibold text-gray-600">🏏 Cricket Premier League</h2>
        <p className="text-sm text-gray-500">Match - {convertDateToFormate(item.date)}</p>

        {/* VS Section */}
        <div className="flex items-center justify-center my-6">
          {/* Team 1 */}
          <div className="flex flex-col items-center flex-1">
            <img
              src={item.logoA}
              alt="Team 1 Logo"
              className="w-20 h-20 object-contain"
            />
            <p className="text-lg font-bold text-gray-800 mt-2">{item.teamAName}</p>
            <p className="text-lg text-gray-800 mt-2">{item.score.split("-")[0]}</p>
          </div>

          {/* VS Text */}
          <div className="mx-6 text-xl h-full font-bold text-gray-700"><button className='z-10'>VS</button></div>

          {/* Team 2 */}
          <div className="flex flex-col items-center flex-1">
            <img
              src={item.logoB}
              alt="Team 2 Logo"
              className="w-20 h-20 object-contain"
            />
            <p className="text-lg font-bold text-gray-800 mt-2">{item.teamBName}</p>
            <p className="text-lg text-gray-800 mt-2">{item.score.split("-")[1]}</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="text-gray-600 mb-5 text-sm">
          📍 Venue: {item.venue}
        </div>
        {/* Action Button */}
        <Link
        //  to={"/matches/"+item.id} 
         className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          View Details
        </Link>
      </div>
  );
}


export default MatchSection