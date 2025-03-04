import React, { useEffect, useState } from 'react'

import first from "../../assets/teams/Dynamic Daredevils Logo.png"
import trophy from "../../assets/trophy.svg"
import second from "../../assets/teams/Gujarat Rising Stars logo.png"
import third from "../../assets/teams/Nawab legends logo.png"
import four from "../../assets/teams/Rajasthan warriors logo.png"
import five from "../../assets/teams/Tiger maratha logo.png"
import six from "../../assets/teams/TUlu Thunders Logo.png"
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

function OurTradingTeams() {
   
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
    <section className='py-24'>
        <div className='grid overflow-auto gap-2 w-full grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-6'>
            {
                teams.map((item, idx)=>
                <CardItem key={idx} idx={idx} item={item}/>
                )
            }
        </div>

    </section>
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
          bg-primary group hover:after:bg-gray-500 
         text-center max-lg:w-full after:left-0 after:lg:h-[23rem] duration-300 
          z-10 after:-z-10 relative overflow-hidden after:absolute 
          after:w-full after:-top-1/2 after:rounded-full rounded-lg 
          shadow-md h-80 lg:h-72"
        style={{ '--card-bg': item.logoColor }} // Define CSS variable
      >
        <div 
          className="absolute w-full h-[25rem] lg:h-[23rem] -top-1/2 rounded-full -z-10"
          style={{ backgroundColor: item.logoColor }} // Apply color dynamically
        ></div>
        <img className="mx-auto -translate-y-5 w-64 lg:w-80" src={item.logo || data[idx].img} onError={(e)=>e.target.src=data[idx].img} alt="" />
        <p className="font-semibold text-white my-auto text-xl">
          {item.name}
        </p>
        
      </Link>
    );
  };
  

export default OurTradingTeams