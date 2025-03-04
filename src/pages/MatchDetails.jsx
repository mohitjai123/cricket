import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import { useParams } from 'react-router-dom'
import { db } from '../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { convertDateToFormate } from '../utils/convertTimeStamp'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function MatchDetails() {
    const {name} = useParams()
    const [data, setData] = useState()
    const getMatchDetails = async ()=>{
        const docRef = doc(db, window.location.pathname.includes("upcoming") ? "UpcomingMatches" : "matches", name);
        const docSnap = await getDoc(docRef);
        const teamA = await getTeamDetails(docSnap.data().teamA)
        const teamB = await getTeamDetails(docSnap.data().teamB)
        setData({
            ...docSnap.data(),
            teamA,teamB
        })
    }
    const getTeamDetails = async (id) => {
        const docRef = doc(db, "teams", id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : null; // Handle missing docs
      };
      useEffect(()=>{
        getMatchDetails()
      },[])
      
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox

    return () => {
      Fancybox.destroy(); // Cleanup Fancybox on component unmount
    };
  }, []);
  return (
    <section>
        <BreadCamp name={"Matches"} second={"Spin Vs Punjab Kings"}/>
        <div className='lg:p-24 bg-grayScale p-4'>
        <div className='bg-white items-center flex justify-between w-1/2 gap-4 px-10 mx-auto py-7 text-center'>
       <div>
       <img className='h-20 mx-auto' src={data?.teamA?.logo} alt="" />
       <h3>{data?.teamA?.name}</h3>
       </div>
    
        <div>
          <h3>{convertDateToFormate(data?.date)}</h3>
          <h2 className='text-4xl my-3 font-semibold'>{data?.score}</h2>
          <h3>{data?.location}</h3>
        </div>
        <div>
        <img className='h-20 mx-auto' src={data?.teamB?.logo} alt="" />
        <h3>{data?.teamB?.name}</h3>
        </div>
  </div>
        <h4 className='text-3xl mt-8 font-semibold'>Recap</h4>
        <p className='text-gray-800 my-5'>{data?.recap}</p>
        <div className='w-full mt-10 bg-secondary py-1'></div>
            <h4 className='bg-primary p-5 font-semibold text-white text-lg'>
            Match Details
            </h4>
            <div className='grid text-center lg:grid-cols-4 grid-cols-1 bg-white md:grid-cols-3'>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Date</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 p-2'>{convertDateToFormate(data?.date)}</h3>
                </div>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Time</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.time}</h3>
                </div>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>League</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.league}</h3>
                </div>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Video</h3>
                    <hr className='my-2' />
                    <a data-fancybox="video-url" href={data?.videoUrl}>
                    <h3 className='text-secondary mb-3 p-2'>View</h3>
                    </a>
                </div>
                
            </div>
            <div className='w-full mt-10 bg-secondary py-1'></div>
            <h4 className='bg-primary p-5 font-semibold text-white text-lg'>
           Results
            </h4>
            <div className='grid text-center lg:grid-cols-3 grid-cols-1 bg-white md:grid-cols-3'>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Team</h3>
                    <hr className='my-2' />
                    <h3 className='text-secondary p-2'>{data?.teamA.name}</h3>
                    <hr className='my-2' />
                    <h3 className='text-secondary mb-2 p-2'>{data?.teamB.name}</h3>
                </div>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Goals</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.score?.split("-")[0] || "To Be Updated"}</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.score?.split("-")[1] ||"To Be Updated"}</h3>
                </div>
                <div className='border'>
                    <h3 className='text-lg mt-1 p-2 font-semibold'>Outcome</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.score ? data?.score?.split("-")[0]-data?.score?.split("-")[1]<0 ? "Loss" : "Win" : "To be updated"}</h3>
                    <hr className='my-2' />
                    <h3 className='text-gray-500 mb-3 p-2'>{data?.score ? data?.score?.split("-")[0]-data?.score?.split("-")[1]>0 ? "Loss" : "Win" : "To be updated"}</h3>
                </div>
            </div>
        </div>

    </section>
  )
}

export default MatchDetails