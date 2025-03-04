import React, { useState } from 'react'
import logo from "../assets/logo.png"
import LabelInputBox from '../utils/LabelInputBox'
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function RegisterMember({ setPopup }) {
    const [active, setActive] = useState(0)
    const [policy, setPolicy] = useState(false)
    const [formdata, setFormData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        date_of_birth: "",
        pofile_img: "",
        gender: "",
        mobile_number: "",
        alternate_number: "",
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
        first_preference: ""
    })
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(0)
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function handleCancel(){
        if(active<3){
            const value = confirm("Arey you sure you want to cancel registration.").valueOf()
            if(value){
                setPopup()
            }
        } else {
            setPopup()
        }
        
    }
    const hanldeSubmit = async (e) => {
        e?.preventDefault()
        setActive(active + 1)
        if (active < 2)
            return
        try {
            
            setLoading(true)
            const userRef = collection(db, "users")
            const add = await addDoc(userRef, formdata)
            setLoading(false)
            setActive(3)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <section className='fixed overflow-auto z-50 w-full h-full left-0 top-0 bg-black/50'>
            <div className='w-9/12 p-8 my-8 bg-white m-auto rounded-lg overflow-hidden'>
                <button className='float-end' type='button' onClick={handleCancel}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"></path></svg></button>
                <img className='h-20 mx-auto' src={logo} alt="" />
                <h4 className='text-4xl text-center font-semibold my-5'>Register Yourself</h4>
                {active == 0 ?
                    <form onSubmit={hanldeSubmit} className='grid' action="">
                        <div className='w-full bg-secondary py-1'></div>
                        <h4 className='bg-primary py-3 px-4 font-semibold text-white'>
                            Personal Details
                        </h4>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            <LabelInputBox onChange={handleChange} value={formdata.first_name} label="First name" placeholder='Please type your first name' name='first_name' />
                            <LabelInputBox required={false}  onChange={handleChange} value={formdata.middle_name} label="Middle name" placeholder='Please type your middle name' name='middle_name' />
                            <LabelInputBox onChange={handleChange} value={formdata.last_name} label="Last name" placeholder='Please type your last name' name='last_name' />
                            <LabelInputBox onChange={handleChange} value={formdata.date_of_birth} label="Date of Birth" placeholder='Please select date' name='date_of_birth' type='date' />
                            <LabelInputBox onChange={handleChange} value={formdata.pofile_img} label="Profile Picture" placeholder='Please select date' name='pofile_img' type='file' />
                            <LabelInputBox onChange={handleChange} value={formdata.gender} label="Gender" placeholder='Please select your gender ' name='gender' option={["Male", "Female", "Other"]} />

                        </div>
                        <div className='w-full mt-5 bg-secondary py-1'></div>
                        <h4 className='bg-primary py-3 px-4 font-semibold text-white'>
                            Contact Details
                        </h4>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            <LabelInputBox onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.mobile_number} label="Mobile Number" type='number' placeholder='Please type your mobile number' name='mobile_number' />
                            <LabelInputBox onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.alternate_number} label="Alternate Number" type='number' placeholder='Please type your alternate number' name='alternate_number' />
                            <LabelInputBox onChange={handleChange} value={formdata.email} label="Email Id" type='email' placeholder='Please type your email id' name='email' />
                        </div>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-6 md:grid-cols-2 grid-cols-1'>
                            <div className='col-span-2'>
                                <LabelInputBox onChange={handleChange} value={formdata.address} label="Address" placeholder='Please type your address' name='address' />
                            </div>
                            <LabelInputBox onChange={handleChange} value={formdata.city} label="City" placeholder='Please type your city' name='city' />
                            <div className='col-span-2'>
                                <LabelInputBox onChange={handleChange} value={formdata.state} label="State" placeholder='Please type your state' name='state' />

                            </div>
                            <LabelInputBox onChange={(e) => e.target.value.length < 7 ? handleChange(e) : null} value={formdata.pincode} label="Pincode" placeholder='Please type your pincode' type='number' name='pincode' />
                        </div>
                        <div className='w-full mt-5 bg-secondary py-1'></div>
                        <h4 className='bg-primary py-3 px-4 font-semibold text-white'>
                            Your Game Skills
                        </h4>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            <LabelInputBox onChange={handleChange} value={formdata.batting_style} label="Batting Style" placeholder='Select your batting style' name='batting_style' option={["Left Handed", "Right Handed", "Both"]} />
                            <LabelInputBox onChange={handleChange} value={formdata.batting_position} label="Batting Position" placeholder='Select your batting position' name='batting_position' option={["Opener (1,2,3,4)", "Middle order (5,6,7,8)"]} />
                            <LabelInputBox onChange={handleChange} value={formdata.bowling_arm} label="Bowling Arm" placeholder='Select your bowling arm' name='bowling_arm' option={["Right arm", "Left arm", "Both"]} />
                            <LabelInputBox onChange={handleChange} value={formdata.bowling_pace} label="Bowling pace" placeholder='Select your bowling pace' name='bowling_pace' option={["Fast", "Medium", "Off-spinner", "Leg-spinner", "China man"]} />
                            <LabelInputBox onChange={handleChange} value={formdata.wicket_keeper} label="Wicket Keeper" placeholder='Select your wicket keepering' name='wicket_keeper' option={["Full time", "Part time"]} />
                            <LabelInputBox onChange={handleChange} value={formdata.first_preference} label="First Preference" placeholder='Select your first preference' name='first_preference' option={["Batting", "Bowling", "All-rounder"]} />
                        </div>
                        <input disabled={loading} type="submit" value={"Next"} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                    </form> :
                    active == 1 ? <section>
                        <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Service Plan</h3>
                        <div className='flex justify-center my-5 mt-10 flex-wrap gap-5'>
                            <PlanCard isSelected={selected == 1} setSelected={() => setSelected(1)} item={{ name: "Basic Plan", price: "299" }} />
                            <PlanCard isSelected={selected == 2} setSelected={() => setSelected(2)} item={{ name: "Standard Plan", price: "699" }} idx />
                            <PlanCard isSelected={selected == 3} setSelected={() => setSelected(3)} item={{ name: "Premium Plan", price: "1299" }} />
                        </div>

                        <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Terms & Conditions</h3>
                        <div className='my-3 px-5'>
                            <b>1. Acceptance of Terms : </b>
                            By registering on MJPL, you agree to abide by these terms and conditions. Failure to comply may result in account suspension or termination.
                            <br />
                            <b>2. User Registration : </b>
                            Users must provide accurate details during registration. Any misrepresentation may lead to removal from the platform.
                            <br />
                            <b>3. Code of Conduct : </b>
                            Players and teams must uphold sportsmanship and fair play.
                            Harassment, abuse, or cheating will not be tolerated. <br />
                            <b>4. Tournament Participation : </b>
                            MJPL reserves the right to modify tournament rules and schedules.
                            Participants must adhere to the game rules set by the platform. <br />
                            <b>5. Liability & Disclaimer : </b>
                            MJPL is not responsible for injuries, disputes, or losses incurred during matches or events. Users participate at their own risk.
                            <br />
                            <b>6. Account Termination : </b>
                            MJPL may suspend or terminate accounts for violating these terms or engaging in misconduct.

                        </div>

                        <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Privacy Policy</h3>
                        <div className='my-3 px-5 '>
                            <b>1. Information We Collect</b>
                            We collect personal details like name, email, and location for account management, match scheduling, and performance tracking.
                            <br />
                            <b>2. How We Use Your Data :</b>
                            To enhance user experience and provide personalized services.
                            To communicate match updates, events, and promotions.
                            To improve our platform based on user feedback.
                            <br />
                            <b>3. Data Sharing & Security :</b>
                            We do not sell or share personal data with third parties without consent.
                            User information is securely stored and protected against unauthorized access.
                            <br />
                            <b>4. Cookies & Tracking : </b>
                            We use cookies to enhance user experience, track performance, and personalize content. Users can disable cookies through browser settings.
                            <br />
                            <strong>5. User Rights :</strong>
                            Users can request access, modification, or deletion of their data by contacting our support team. <br />

                            <strong>6. Changes to Policy :</strong>
                            MJPL reserves the right to update these policies. Users will be notified of significant changes.


                        </div>
                        <form className='grid' onSubmit={(e) => hanldeSubmit(e)}>
                            <div className='flex gap-2 font-semibold text-secondary mt-2'>
                                <input required name='policy' id='policy' type="checkbox" checked={policy} onChange={(e) => setPolicy(e.target.checked)} />
                                <label htmlFor='policy'>By using MJPL, you agree to these Terms & Conditions and Privacy Policy.</label>

                            </div>
                            <div className='flex flex-wrap gap-5 items-center justify-center'>
                            <button onClick={()=>setActive(0)} className='h-fit py-2.5 w-full lg:w-5/12  rounded-lg hover:bg-transparent hover:text-primary duration-300 border hover:border-primary mt-10 bg-primary text-white'>Edit Form Data</button>
                            <input disabled={loading} type="submit" value={"Payment"} className='bg-secondary text-white w-full lg:w-5/12  mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                            </div>
                        </form>
                    </section> : active==2 ? 
                        <section className='grid'>
                            <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Pay Here</h3>
                            <img className="w-fit mx-auto" src="https://offercdn.paytm.com/blog/2022/02/scan/scan-banner.png" alt="" />
                            <button disabled={loading} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' onClick={(e) => hanldeSubmit(e)}>
                                {loading ? "Payment Verifing..." : "Payment Completed"}
                            </button>
                        </section> : <section>
                        <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Payment Information</h3>

                        <h3 className='text-3xl text-secondary font-bold text-center my-8'>Thank you
                            <br />
                            <span className='text-lg'>for completing your registrtaion.</span>
                        </h3>
                        <p className='lg:w-1/2 text-center mx-auto'>We shared a registration confirmation mail and sms to your register with your transaction details.</p>
                        <div className='grid mt-5 w-1/2 mx-auto grid-cols-2'>
                            <h2 className='font-bold text-secondary'>Name</h2>
                            <h3>{formdata.first_name} {formdata.last_name}</h3>
                            <h2 className='font-bold text-secondary'>Email</h2>
                            <h3>{formdata.email}</h3>
                            <h2 className='font-bold text-secondary'>Mobile Number</h2>
                            <h3>{formdata.mobile_number}</h3>
                            <h2 className='font-bold text-secondary'>Transaction Id</h2>
                            <h3>{"transaction-"+Date.now()}</h3>
                        </div>
                        </section>
                }
            </div>
        </section>
    )
}

import { motion } from "framer-motion";

function PlanCard({ item, idx = false, isSelected = false, setSelected }) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            tabIndex={-1}
            className={isSelected ? "border-4 border-secondary rounded-3xl" : "border-4 border-white"}
        >
            <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl shadow-xl w-80 transition-all hover:shadow-2xl">

                {/* Animated Badge */}
                {idx &&
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full"
                    >
                        Best Value
                    </motion.div>

                }

                {/* Plan Name */}
                <h2 className="text-xl font-bold text-center">{item.name}</h2>

                {/* Price */}
                <div className="text-center my-4">
                    <span className="text-4xl font-extrabold">RS. {item.price}</span>
                </div>

                {/* Features */}
                <ul className="text-sm space-y-3">
                    <li className="flex items-center gap-2">
                        ✅ Unlimited Matches & Tournaments
                    </li>
                    <li className="flex items-center gap-2">
                        ✅ Personalized Player Stats
                    </li>
                    <li className="flex items-center gap-2">
                        ✅ Exclusive Training Resources
                    </li>
                    <li className="flex items-center gap-2">
                        ✅ 24/7 Support & Community Access
                    </li>
                </ul>

                {/* CTA Button */}
                <button disabled={isSelected} onClick={setSelected} className={`mt-6 w-full ${isSelected ? "bg-gray-500" : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"} font-semibold py-2 rounded-lg transition-all`}>
                    {isSelected ? "Selected" : " Get Started"}
                </button>
            </div>
        </motion.div>
    );
}


export default RegisterMember