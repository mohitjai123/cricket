import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'

function TeamMember() {
    const data = [
        {
            img:"",
            role:"Batsman",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Bowler",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Wicketkeeper",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Batsman",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Bowler",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Wicketkeeper",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Batsman",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Bowler",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Wicketkeeper",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Batsman",
            name:"Elijah Thornto"
        },
        {
            img:"",
            role:"Bowler",
            name:"Elijah Thornto"
        }
      
    ]
    const [players, setPlayers] = useState([])
    const getPlayers = async()=>{
        const playerReff = collection(db, "teams", "GmQPtb3tzcdhVoPACAaz", "teamplayers")
    const playerSnapshot = await getDocs(playerReff);
    
    const playerDat = playerSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPlayers(playerDat)
    }
    useEffect(()=>{
        getPlayers()
    },[])
  return (
    <section className='bg-primary text-white p-8 lg:p-28'>
 <h3 className='text-x text-center font-semibold'>PLAYERS</h3>
        <h2 className='lg:text-6xl text-3xl mb-7 text-center font-semibold'>Our main team</h2>
        <div className='flex gap-10 mt-10 team-section overflow-auto'>
           {players.map((item,idx)=>
             <div key={idx}>
             <div className='border relative p-5 h-64 w-52'>
             <h4 className='text-4xl font-semibold'>{idx+1}</h4>

             <img className="absolute h-full left-0 top-0 w-full" src={item.profile_pic || "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"} alt="" />
             </div>
             <h3 className='text-2xl mt-3'>{item.first_name} {item.last_name}</h3>
             <h3 className='mt-1 text-gray-300 mb-4'>{item.first_preference}</h3>
         </div>
        )}
        
        </div>
    </section>
  )
}

export default TeamMember