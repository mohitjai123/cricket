import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { db } from '../firebaseConfig'
import { collection, doc, getDoc, getDocs} from 'firebase/firestore'
import { convertDateToFormate, convertTimestamp } from '../utils/convertTimeStamp'
import BreadCamp from '../components/BreadCamp'

function UpcomingMatches() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "UpcomingMatches"));
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
          setData(docs);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      const getTeamDetails = async (id) => {
        const docRef = doc(db, "teams", id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? {...docSnap.data()} : null; // Handle missing docs
      };
      useEffect(() => {
          fetchData() 
      }, [])

    return (
       <main>
         <BreadCamp name={"Matches"} second={"Upcoming Matches"} />
        <section className='lg:px-24 px-4 py-20'>
            <h3 className='font-semibold'>Matches</h3>
            <h2 className='lg:text-6xl text-3xl my-4 font-semibold'>Upcoming Matches</h2>
            <MatchCard data={data}/>
        </section>
       </main>
    )
}

const MatchCard = ({ data }) => {
    return (
        <div className='flex flex-wrap justify-center py-10 gap-8'>
            {data.map((match, idx) => (
               <CricketMatchCard match={match} key={idx}/>
            ))}
        </div>
    );
};

const CricketMatchCard = ({match}) => {
  return (
      <div className="w-96 p-4 pb-8 shadow-xl rounded-2xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{match.league}</h2>
        <div className="flex justify-between relative items-center my-4 p-4 bg-gray-100 rounded-lg">
          <div style={{background:match.logoA.logoColor}} className="text-center w-32 rounded-md">
            <img className="h-20 mx-auto" src={match.logoA.logo} alt="" />
            <p className="text-lg font-semibold text-white">{match.teamAName}</p>
          </div>
          <div className='bg-primary h-full'>
          <p className="text-white px-2 bg-primary h-full font-bold text-xl">VS</p>

          </div>
          <div style={{background:match.logoB.logoColor}} className="text-center w-32 rounded-md">
          <img className="h-20 mx-auto" src={match.logoB.logo} alt="" />
            <p className="text-lg font-semibold text-white">{match.teamBName}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-5 font-medium">Match Date: {convertDateToFormate(match.date)} | Venue: {match.venue} | Time: {match.time} </p>
        <Link
          to={"/cricket/upcoming-matches/"+match.id}
          className="mt-4 px-6 py-2 bg-secondary/80 text-white rounded-lg shadow-md hover:bg-secondary transition"
        >
          View Details
        </Link>
      </div>
    );
};


export default UpcomingMatches