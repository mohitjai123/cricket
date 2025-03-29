import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'


export default function TrialRules() {
    const [data, setdata]  = useState([])
    const fetchData = async()=>{
        const docRef = doc(db, "trailPage", "trials_rules")
        const shot = await getDoc(docRef)
        const arrayData = Object.values(shot.data())
        console.log(arrayData);
        
        setdata(arrayData)
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            {/* <BreadCamp img={API_URL+"other-images/IMG_4955.JPG"} name={"Trials Rules & Regulations"} /> */}
            <h4 className='text-2xl  lg:mx-24 text-white font-bold text-center border-t-8 border-secondary py-3 bg-primary'> Trials Rules & Regulations</h4>

            <section className='lg:p-24 lg:pt-0 p-4'>
                {data.map((item,idx)=>
                    <div>
 <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>{item?.title}</h3>
                        <ul className=' mb-8 mt-3 lg:px-8 grid gap-2'>
                            {item?.rules?.map((rule,idx2)=>
                        <li className=''>{idx2+1}. {rule}</li>
                            )}
                        </ul>
                    </div>
                )}
            </section>
        </div>
    )
}
