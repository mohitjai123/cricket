import React, { act, useRef, useState } from 'react'
import logo from "../assets/logo.png"
import LabelInputBox from '../utils/LabelInputBox'
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function RegisterMember() {
    const [active, setActive] = useState(0)
    const [policy, setPolicy] = useState(false)
    const setPopup = useSetRecoilState(popupAtom)
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
    const policyFormRef = useRef(null)
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function handleCancel() {
        if (active < 3) {
            const value = confirm("Arey you sure you want to cancel registration.").valueOf()
            if (value) {
                setPopup()
            }
        } else {
            setPopup()
        }

    }
    const hanldeSubmit = async (e) => {
        e?.preventDefault()
        if (active == 0) {
            setLoading(true)
            const queryShot = query(collection(db, "users"), where("mobile_number", "==", formdata.mobile_number))
            const shot = await getDocs(queryShot)
            if (shot.empty) {
                setActive(active + 1)
                setLoading(false)
                return
            } else {
                alert("Mobile number already register with us.")
                setLoading(false)
                return
            }
        }
        setActive(active + 1)
        if (active < 2) {
            return
        }
        try {

            setLoading(true)
            const userRef = collection(db, "users")
            await addDoc(userRef, {...formdata, createdAt:serverTimestamp()})
            setLoading(false)
            setActive(3)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    return (
        <section className='fixed overflow-auto z-50 w-full h-full left-0 top-0 bg-black/50'>
            <div className='lg:w-9/12 max-lg:mx-3 lg:p-8 p-3 my-8 bg-white m-auto rounded-lg overflow-hidden'>
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
                            <LabelInputBox required={false} onChange={handleChange} value={formdata.middle_name} label="Middle name" placeholder='Please type your middle name' name='middle_name' />
                            <LabelInputBox onChange={handleChange} value={formdata.last_name} label="Last name" placeholder='Please type your last name' name='last_name' />
                            <LabelInputBox onChange={handleChange} value={formdata.date_of_birth} label="Date of Birth" placeholder='Please select date' name='date_of_birth' type='date' />
                            <PasswordInputBox onChange={handleChange} label="Create Password" placeholder='Please type your password' name='password'/>
                            <LabelInputBox onChange={handleChange} value={formdata.gender} label="Gender" placeholder='Please select your gender ' name='gender' option={["Male", "Female", "Other"]} />

                        </div>
                        <div className='w-full mt-5 bg-secondary py-1'></div>
                        <h4 className='bg-primary py-3 px-4 font-semibold text-white'>
                            Contact Details
                        </h4>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            <LabelInputBox onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.mobile_number} label="Mobile Number" type='number' placeholder='Please type your mobile number' name='mobile_number' />

                            <LabelInputBox onChange={handleChange} value={formdata.email} label="Email Id" type='email' placeholder='Please type your email id' name='email' />
                            <LabelInputBox onChange={handleChange} value={formdata.address} label="Address" placeholder='Please type your address' name='address' />
                        </div>
                        <div className='grid mt-8 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                            <LabelInputBox onChange={handleChange} value={formdata.city} label="City" placeholder='Please type your city' name='city' />
                            <LabelInputBox onChange={handleChange} value={formdata.state} label="State" placeholder='Please type your state' name='state' />

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
                            <LabelInputBox onChange={handleChange} value={formdata.first_preference} label="All Rounder" placeholder='Select your all-rounder type' name='first_preference' option={["All rounder bowler", "All rounder batter"]} />
                        </div>
                        <input disabled={loading} type="submit" value={"Next"} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                    </form> :
                    active == 1 ? <section>
                        <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Service Plan</h3>

                        <form ref={policyFormRef} className='grid' onSubmit={(e) => hanldeSubmit(e)}>
                            <div className='flex justify-center my-5 mt-10 flex-wrap gap-5'>

                                <PlanCard item={{ name: "MJPL SEASON 1", price: "1999" }} idx />
                            </div>
                            <div className='flex px-2 lg:px-20 gap-2 text-secondary mt-2'>
                                <input className='h-5' required name='policy' id='policy' type="checkbox" checked={policy} onChange={(e) => setPolicy(e.target.checked)} />
                                <label htmlFor='policy'>By using MJPL, you agree to these <a target='_blank' className='underline hover:no-underline font-bold' href="/terms-conditions">Terms & Conditions</a> and <a target='_blank' className='underline hover:no-underline font-bold' href="/privacy-policy">Privacy Policy.</a></label>

                            </div>
                            <div className='flex flex-wrap gap-5 items-center justify-center'>
                                <button onClick={() => setActive(0)} className='h-fit py-2.5 w-full lg:w-5/12  rounded-lg hover:bg-transparent hover:text-primary duration-300 border hover:border-primary mt-10 bg-primary text-white'>Edit Form Data</button>
                                <input disabled={loading} type="submit" value={"Payment"} className='bg-secondary text-white w-full lg:w-5/12  mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                            </div>
                        </form>
                    </section> : active == 2 ?
                        <section className='grid'>
                            <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Pay Here</h3>
                            <img className=" max-w-sm mt-5 mx-auto" src={API_URL + "about/qr-code.jpg"} alt="" />
                            <button disabled={loading} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-10 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' onClick={(e) => hanldeSubmit(e)}>
                                {loading ? "Payment Verifing..." : "Click here after completing the payment"}
                            </button>
                        </section> : <section>
                            <h3 className='mt-5 py-2 px-4 bg-primary text-white font-bold border-t-8 border-secondary'>Payment Information</h3>

                            <h3 className='text-3xl text-secondary font-bold text-center my-8'>Thank you
                                <br />
                                <span className='text-lg'>for completing your payment.</span>
                                <br />
                                <span className='text-lg font-normal'>Your registration is almost complete!</span>
                            </h3>
                            <p className='text-center mx-auto'>Our team will review your details and send you confirmation via WhatsApp or email within 1-2 hours. </p>

                            {/* <div className='text-center mt-5 mx-auto grid-cols-2'>
                                <h3 className='font-bold text-lg'> -: Login Details  :-</h3>
                                <p>Phone (Username): <span className='font-semibold'>{formdata.mobile_number}</span></p>
                                <p>Password: <span className='font-semibold'>{formdata.password}</span></p>
                                <p className='text-gray-500'>*Please take a screenshot of login crendential. For the further communication</p>
                            </div> */}
                            <div className='text-center mt-5 mx-auto grid-cols-2'>
                                <h3 className='font-bold text-lg'> -: Important Notes  :-</h3>
                                <p className='text-center mt-2 mx-auto'>If, any case, you don't receive a confirmation, please reach out to us at <a className='text-secondary font-bold underline' href="tel:+917021612227">+917021612227</a>. </p>
                                <p className='text-center mt-2 mx-auto'>Payment made after 9:00 PM will be processed the next morning.</p>
                            </div>
                        </section>
                }
            </div>
        </section>
    )
}

import { motion } from "framer-motion";
import { useSetRecoilState } from 'recoil'
import { popupAtom } from '../utils/popupAtom'
import { API_URL } from '../stor'

function PlanCard({ item, payNow }) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            tabIndex={-1}
            className='lg:w-2/3'
        >
            <div className="relative bg-gradient-to-r relative text-center from-purple-500 w-full to-blue-500 text-white lg:p-8 p-4 rounded-lg shadow-xl transition-all hover:shadow-2xl">

                {/* Animated Badge */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className=" absolute  -top-4 left-11 lg:left-52 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full"
                >
                    Take the First Step Towards Success!
                </motion.div>
                {/* Plan Name */}
                <h2 className="text-4xl font-bold text-center">{item.name}</h2>

                <p className=' text-xl mt-4'>
                    Trial Registration
                </p>

                {/* Price */}
                <div className="text-center my-4">
                    <span className="text-3xl font-extrabold">RS. {item.price}</span>
                </div>
                <p className='font-light'>Pay Now to Register for Your Trials and Unlock Your Path to Vitory!</p>
                {/* Features */}

                {/* CTA Button */}
                <button onClick={() => payNow()} className={`mt-6 lg:w-1/2 w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-semibold py-2 rounded-lg transition-all`}>
                    Pay Now
                </button>
            </div>
        </motion.div>
    );
}
function PasswordInputBox({ placeholder = "", name = "", required = true, label, value, onChange }) {
    const [show, setShow] = useState(false)
    return (
        <div className='relative w-full'>
            <div className='text-gray-600'>
                <label htmlFor={name}>{label}</label>
            </div>

            <input required={required} accept='image/*' className="border-b-2 w-full outline-none focus:border-gray-800 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg duration-300 focus:placeholder:text-primary py-2" placeholder={placeholder} type={show ? "text" : "password"} onChange={onChange} value={value} name={name} />
            <button onClick={() => setShow(!show)} type='button' className='absolute right-0 rounded-t-lg bg-gray-200 h-8 w-8 grid place-items-center bottom-1'>
                {show ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M19.439 15.439a19.5 19.5 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955c0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297c-.304.426-.456.64-.456.955c0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747"></path><path d="M9.858 10A2.929 2.929 0 1 0 14 14.142M3 3l18 18"></path></g></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path><path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path></g></svg>
                }
            </button>


        </div>
    )
}


export default RegisterMember