import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'

import first from "../assets/teams/Dynamic Daredevils Logo.png"
import trophy from "../assets/trophy.svg"
import second from "../assets/teams/Gujarat Rising Stars logo.png"
import third from "../assets/teams/Nawab legends logo.png"
import four from "../assets/teams/Rajasthan warriors logo.png"
import five from "../assets/teams/Tiger maratha logo.png"
import six from "../assets/teams/TUlu Thunders Logo.png"
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function TeamSection() {
   
    const [teams, setTeams] = useState([])
    const fetchTeams = async()=>{
      const teamRef = collection(db, "teams")
      const teamsDat = await getDocs(teamRef)
      const formatData = teamsDat.docs.map(doc=>({id:doc.id, ...doc.data()}))
      console.log(formatData);
      
      setTeams(formatData)
    }
    useEffect(()=>{
      fetchTeams()
    },[])
  return (
   <main>
     <BreadCamp name="Teams"/>

<section className='lg:p-24 p-4'>
    <div className='grid grid-cols-1 gap-y-20 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {
            teams.map((item, idx)=>
            <CardItem key={idx} idx={idx} item={item}/>
            )
        }
    </div>

</section>
   </main>
  )
}

const CardItem = ({ item,idx }) => {
  const data = [
    {
        name:"Dynamic Daredevils",
        img:first,
        color:"#A61818",
        winningYear:[
            2014, 2016,2022
        ],
    },
    {
        name:"Gujarat Rising Stars",
        img:second,
        color:"#EFB643",
        winningYear:[
            2014, 2016,2022
        ],
    },
    {
        name:"Nawab legends",
        img:third,
        color:"#F7763B",
        winningYear:[
            2014, 2016,2022
        ],
    },
    {
        name:"Rajasthan warriors",
        img:four,
        color:"#4F34B2",
        winningYear:[
            2014, 2016,2022
        ],
    },
    {
        name:"Tiger maratha",
        img:five,
        color:"#FF5B00",
        winningYear:[
            2014, 2016,2022
        ],
    },
    {
        name:"TUlu Thunders",
        img:six,
        color:"#F12202",
        winningYear:[
            2014, 2016,2022
        ],
    },
]
    return (
      <Link to={"/cricket/teams/"+item.id}
        className="
          bg-primary hover:bg-grayScale group hover:after:bg-gray-500 
          w-80 text-center after:left-0 after:h-96 duration-300 
          z-10 after:-z-10 relative overflow-hidden after:absolute 
          after:w-full after:-top-1/2 after:rounded-full rounded-lg 
          shadow-md h-96"
        style={{ '--card-bg': item.logoColor }} // Define CSS variable
      >
        <div 
          className="absolute w-full h-96 -top-1/2 rounded-full -z-10"
          style={{ backgroundColor: item.logoColor }} // Apply color dynamically
        ></div>
        <img className="mx-auto group-hover:hidden w-48" src={item.logo || data[idx].img} onError={(e)=>e.target.src=data[idx].img} alt="" />
        <img className="mx-auto hidden group-hover:grid mt-10 w-28" src={trophy} alt="" />
        <p className="mt-10 group-hover:hidden font-semibold text-white my-auto text-xl">
          {item.name}
        </p>
        <ul className="group-hover:flex flex-wrap h-2/3 hidden items-center justify-center">
          {item.winningYear.map((year, idx) => (
            <li key={idx} className="border-x px-3 border-gray-400">{year}</li>
          ))}
        </ul>
      </Link>
    );
  };
  

export default TeamSection