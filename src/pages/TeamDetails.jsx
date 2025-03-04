import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import { data, Link, useParams } from 'react-router-dom'
import first from "../assets/teams/Dynamic Daredevils Logo.png"
import trophy from "../assets/trophy.svg"
import boll from "../assets/boll.svg"
import bat from "../assets/bat.svg"
import allRounder from "../assets/all_rounder.svg"
import bgImg from "../assets/new_bg.png"
import second from "../assets/teams/Gujarat Rising Stars logo.png"
import third from "../assets/teams/Nawab legends logo.png"
import four from "../assets/teams/Rajasthan warriors logo.png"
import five from "../assets/teams/Tiger maratha logo.png"
import six from "../assets/teams/TUlu Thunders Logo.png"
import { db } from '../firebaseConfig'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

function TeamDetails() {
    const { name } = useParams()
    const [activeTeam, setActiveTeam] = useState({})
    const [players, setPlayers] = useState([])
    const fetchTeamData = async()=>{
       try {
        const teamRef = doc(db, "teams", name)
        const team = await getDoc(teamRef)
        setActiveTeam(team.data()) 
       } catch (error) {
        
       }
    }
    const [teams, setTeams] = useState([])
    const fetchTeams = async()=>{
      const teamRef = collection(db, "teams")
      const teamsDat = await getDocs(teamRef)
      const formatData = teamsDat.docs.map(doc=>({id:doc.id, ...doc.data()}))
      console.log(formatData);
      setTeams(formatData)
    }
    const getPlayers = async()=>{
        const playerReff = collection(db, "teams", name, "teamplayers")
    const playerSnapshot = await getDocs(playerReff);
    
    const playerDat = playerSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPlayers(playerDat)
    }
    useEffect(()=>{
      fetchTeams()
    },[])
    useEffect(()=>{
        fetchTeamData()
      getPlayers()
    },[name])
    return (
        <section>
            <BreadCamp name="Teams" second={activeTeam?.name} />
           <div className='lg:p-24 p-4' style={{backgroundColor:activeTeam.logoColor}}>
           <div className='flex mb-10 justify-between gap-4 flex-wrap '>
            {teams.map((item,idx)=>
                <TeamCards idx={idx} isActive={activeTeam?.name?.toLocaleLowerCase()==item?.name?.toLocaleLowerCase()} item={item} key={idx}/>
            )}
            </div>
            <div className='flex justify-between'>
                <TeamLogoCard item={activeTeam}/>
                <div className='lg:w-1/2'>
                <DetailsCard item={activeTeam}/>
                </div>
            </div>
           </div>
          <div className='bg-grayScale lg:p-24 p-4'>
          <SquadCard name="Batters" member={players?.filter(item=>item.first_preference==="Batting")} icon={bat}/>
           <SquadCard name="Allrounder"member={players?.filter(item=>item.first_preference==="All-rounder")}  icon={allRounder}/>
           <SquadCard name="Bowler" member={players?.filter(item=>item.first_preference==="Bowling")}  icon={boll}/>
          </div>
        </section>
    )
}

const TeamCards = ({item, isActive=false}) => {
  
    return (<Link className={`bg-primary rounded-lg shadow hover:shadow-lg relative border duration-300 ${isActive ? "border-white" : "border-gray-800"} hover:border-white`} to={"/cricket/teams/"+item.id}>
        {isActive && <svg className='absolute right-1 top-1 text-white' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.562 14.492l-2.496-2.496q-.141-.14-.345-.15t-.363.15t-.16.354t.16.354l2.638 2.638q.242.243.565.243t.566-.243l5.477-5.476q.14-.141.15-.345t-.15-.363t-.354-.16t-.354.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"></path></svg>}
        <img className='h-28' src={item.logo || "https://cdn4.vectorstock.com/i/1000x1000/88/08/golden-monogram-logo-initial-letters-bg-vector-45018808.jpg"} alt="" />
    </Link>)
}

const TeamLogoCard =({item,idx})=>{

    return <div className='flex gap-5'>
       <div className='relative h-60 grid place-items-center w-60 z-10'>
       <img src={bgImg} className='absolute -z-10 top-0' alt="" />
       <img className='h-32 bg-white rounded-full mb-12' src={item.logo} alt="" />
       </div>
       <div className='h-fit my-auto'>
        <h3 className='text-white text-3xl font-semibold'>{item.name}</h3>
        <ul className='bg-white/80 flex flex-wrap gap-4 border relative border-white rounded-lg px-5 py-2 my-5'>
            <img className='absolute h-12 w-12 -top-1 -left-6' src={trophy} alt="" />
            {item?.winningYear?.map((year)=>
                <li key={year}>{year}</li>
            )}
        </ul>
       </div>

    </div>
}


const SquadCard = ({name, icon, member})=>{
    console.log(member);
    
    return <div>
            <div className='flex justify-between bg-white px-5 py-2'>
            <h4 className='text-2xl mt-1 bg-white uppercase'>{name}</h4>
            <img className='h-10 w-10' src={icon} alt="" />
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-5 my-5'>
                {member?.map((item,idx)=>
                    <MememberCard item={item} role={name} key={idx}/>
                )}
            </div>
    </div>
}

const MememberCard = ({item})=>{
    return <Link to={"/cricket/players/ms-thoni"} className='border border-gray h-fit w-fit bg-white'>
        <div className='bg-white border w-fit'>
        <img className='h-60' src={item.profile_pic || "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"} alt="" />
    <hr />
    <h4 className='text-center mt-2 text-xl'>{item.first_name} {item.last_name}</h4>
    <h4 className='text-center text-gray-500 mb-2'>{item.first_preference}</h4>
        </div>
    </Link>
}

const DetailsCard = ({item})=>{
        return <ul className='backdrop-blur-md h-fit grid gap-3 max-w-3xl bg-white/50 p-8 rounded-lg'>
                <li className='grid grid-cols-3 text-white'>
                    <h3 style={{color:item.logoColor}} className=''>Captain</h3> <span className='font-bold'> - </span> <p>{item.captain}</p>
                </li>
                <li className='grid grid-cols-3 text-white'>
                    <h3 style={{color:item.logoColor}} className=''>Coach</h3> <span className='font-bold'> - </span> <p>{item.coach}</p>
                </li>
                <li className='grid grid-cols-3 text-white'>
                    <h3 style={{color:item.logoColor}} className=''>Owener</h3> <span className='font-bold'> - </span> <p>{item.name} Cricket Limited</p>
                </li>
                <li className='grid grid-cols-3 text-white'>
                    <h3 style={{color:item.logoColor}} className=''>Venue</h3> <span className='font-bold'> - </span> <p>{item.venue}</p>
                </li>
             
        </ul>
}

export default TeamDetails