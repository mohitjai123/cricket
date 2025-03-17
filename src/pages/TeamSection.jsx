import React, { useEffect, useState } from 'react'
import trophy from "../assets/trophy.svg"
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'


function TeamSection() {

  const [teams, setTeams] = useState([])
  const fetchTeams = async () => {
    const teamRef = collection(db, "teams")
    const teamsDat = await getDocs(teamRef)
    const formatData = teamsDat.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log(formatData);

    setTeams(formatData)
  }
  useEffect(() => {
    fetchTeams()
  }, [])
  return (
    <main>
      {/* <BreadCamp img={API_URL + "other-images/IMG_6499.JPG"} name="Teams" /> */}

      <section className='lg:px-24 py-14'>
        <div className='grid grid-cols-1 gap-y-20 place-items-center md:grid-cols-2 lg:grid-cols-3'>
          {
            teams.map((item, idx) =>
              <CardItem key={idx} item={item} />
            )
          }
        </div>

      </section>
    </main>
  )
}

const CardItem = ({ item }) => {
 
  return (
    <Link 
    // to={"/teams/" + item.id}
      className="
          bg-primary hover:bg-grayScale group
          flex flex-col
          w-[380px]
          lg:w-80 text-center after:left-0 after:h-96 duration-300 
          z-10 after:-z-10 relative overflow-hidden after:absolute 
          after:w-full after:-top-1/2 after:rounded-full rounded-lg 
          shadow-md h-96"
    >

      <img className="mx-auto max-h-[70%] w-11/12 mt-4" src={item.logo} alt="" />
      {/* <img className="mx-auto hidden group-hover:grid mt-10 w-28" src={trophy} alt="" /> */}
      <p className=" mt-auto group-hover:text-primary mb-8 font-semibold text-white text-xl">
        {item.name}
      </p>
      {/* <ul className="group-hover:flex flex-wrap h-2/3 hidden items-center justify-center">
        {item.winningYear.map((year, idx) => (
          <li key={idx} className="border-x px-3 border-gray-400">{year}</li>
        ))}
      </ul> */}
    </Link>
  );
};


export default TeamSection