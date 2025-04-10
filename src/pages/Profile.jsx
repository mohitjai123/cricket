import React, { useEffect, useState } from 'react'
import LabelInputBox from '../utils/LabelInputBox'
import {doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function Profile() {
    const [active, setActive] = useState(null)
    const [formdata, setFormData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        date_of_birth: "",
        pofile_img: "",
        gender: "",
        mobile_number: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        batting_style: "",
        batting_position: "",
        bowling_arm: "",
        bowling_pace: "",
        wicket_keeper: "",
        password: "",
        first_preference: ""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const hanldeSubmit = async (e) => {
        e?.preventDefault()
        try {

            setLoading(true)
            const id = localStorage.getItem("user_id")
            const userRef = doc(db, "users", id)
            const add = await updateDoc(userRef, formdata)
            setLoading(false)
            setActive(0)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        const data = localStorage.getItem("user_id")
        if (data) {
            fetchDAta(data)
        } else {
            window.location.href = "/"
        }
    }, [])
    const fetchDAta = async (id) => {
        const docshot = doc(db, "users", id)
        const docdata = await getDoc(docshot)  
        setFormData(docdata.data())
    }
    return (
        <section className='w-full lg:px-24 py-10 p-4 h-full'>
            <div onSubmit={hanldeSubmit} className='grid' action="">
                <div className='w-full bg-secondary py-1'></div>
                <div className='flex px-5 justify-between bg-primary'>
                    <h4 className='bg-primary py-3 font-semibold text-white'>
                        Personal Details
                    </h4>
                    <button onClick={() => setActive(1)} className='text-white bg-secondary h-fit my-auto py-1 px-5 rounded-lg hover:opacity-80'>Edit</button>
                </div>
                <form onSubmit={hanldeSubmit} className='grid px-5 mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <LabelInputBox disabled={active != 1} onChange={handleChange} value={formdata.first_name} label="First name" placeholder='Please type your first name' name='first_name' />
                    <LabelInputBox disabled={active != 1} required={false} onChange={handleChange} value={formdata.middle_name} label="Middle name" placeholder='Please type your middle name' name='middle_name' />
                    <LabelInputBox disabled={active != 1} onChange={handleChange} value={formdata.last_name} label="Last name" placeholder='Please type your last name' name='last_name' />
                    <LabelInputBox disabled={active != 1} onChange={handleChange} value={formdata.date_of_birth} label="Date of Birth" placeholder='Please select date' name='date_of_birth' type='date' />
                    <LabelInputBox disabled={active != 1} onChange={handleChange} value={formdata.gender} label="Gender" placeholder='Please select your gender ' name='gender' option={["Male", "Female", "Other"]} />
                    {active == 1 &&
                        <button className='text-white bg-secondary h-fit my-auto py-3 px-5 rounded-lg hover:opacity-80'>Save</button>
                    }                        </form>
                <div className='w-full mt-5 bg-secondary py-1'></div>
                <div className='flex px-5 justify-between bg-primary'>
                    <h4 className='bg-primary py-3 font-semibold text-white'>
                        Contact Details
                    </h4>
                    <button onClick={() => setActive(2)} className='text-white bg-secondary h-fit my-auto py-1 px-5 rounded-lg hover:opacity-80'>Edit</button>
                </div>
                <form onSubmit={hanldeSubmit} className='grid px-5 mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <LabelInputBox disabled={true} onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.mobile_number} label="Mobile Number" type='number' placeholder='Please type your mobile number' name='mobile_number' />

                    <LabelInputBox disabled={active != 2} onChange={handleChange} value={formdata.email} label="Email Id" type='email' placeholder='Please type your email id' name='email' />
                    <LabelInputBox disabled={active != 2} onChange={handleChange} value={formdata.address} label="Address" placeholder='Please type your address' name='address' />

                    <LabelInputBox disabled={active != 2} onChange={handleChange} value={formdata.city} label="City" placeholder='Please type your city' name='city' />
                    <LabelInputBox disabled={active != 2} onChange={handleChange} value={formdata.state} label="State" placeholder='Please type your state' name='state' />

                    <LabelInputBox disabled={active != 2} onChange={(e) => e.target.value.length < 7 ? handleChange(e) : null} value={formdata.pincode} label="Pincode" placeholder='Please type your pincode' type='number' name='pincode' />
                    {active == 2 &&
                        <button className='text-white bg-secondary h-fit my-auto py-3 px-5 rounded-lg hover:opacity-80'>Save</button>
                    }
                </form>
                <div className='w-full mt-5 bg-secondary py-1'></div>
                <div className='flex px-5 justify-between bg-primary'>
                    <h4 className='bg-primary py-3 font-semibold text-white'>
                        Your Game Skill
                    </h4>
                    <button onClick={() => setActive(3)} className='text-white bg-secondary h-fit my-auto py-1 px-5 rounded-lg hover:opacity-80'>Edit</button>
                </div>
                <form onSubmit={hanldeSubmit} className='grid px-5 mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.batting_style} label="Batting Style" placeholder='Select your batting style' name='batting_style' option={["Left Handed", "Right Handed", "Both"]} />
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.batting_position} label="Batting Position" placeholder='Select your batting position' name='batting_position' option={["Opener (1,2,3,4)", "Middle order (5,6,7,8)"]} />
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.bowling_arm} label="Bowling Arm" placeholder='Select your bowling arm' name='bowling_arm' option={["Right arm", "Left arm", "Both"]} />
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.bowling_pace} label="Bowling pace" placeholder='Select your bowling pace' name='bowling_pace' option={["Fast", "Medium", "Off-spinner", "Leg-spinner", "China man"]} />
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.wicket_keeper} label="Wicket Keeper" placeholder='Select your wicket keepering' name='wicket_keeper' option={["Full time", "Part time"]} />
                    <LabelInputBox disabled={active != 3} onChange={handleChange} value={formdata.first_preference} label="All Rounder" placeholder='Select your all-rounder type' name='first_preference' option={["All rounder bowler", "All rounder batter"]} />
                    {active == 3 &&
                        <button className='text-white bg-secondary h-fit my-auto py-3 px-5 rounded-lg hover:opacity-80'>Save</button>
                    }
                </form>

            </div>

        </section>
    )
}



export default Profile