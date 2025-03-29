import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

function OurTradingTeams() {
   
    const [teams, setTeams] = useState([])
    const fetchTeams = async()=>{
      const teamRef = collection(db, "teams")
      const teamsDat = await getDocs(teamRef)
      const formatData = teamsDat.docs.map(doc=>({id:doc.id, ...doc.data()}))
      setTeams(formatData)
    }
    useEffect(()=>{
      fetchTeams()
    },[])
  return (
    <section className='py-8'>
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
return (
      <Link 
      // to={"/teams/"+item.id}
        className="
          bg-primary group
          grid place-items-center
          h-60
         text-center max-lg:w-full rounded-lg 
          shadow-md"
      
      >
        
        <img className=" lg:w-[180px] w-[200px] lg:my-3 mx-auto lg:mx-5 max-h-[80%]" src={item.logo} alt="" />
        {/* <p className="font-semibold mb-5 mt-auto text-white text-xl">
          {item.name}
        </p> */}
        
      </Link>
    );
  };
  

export default OurTradingTeams