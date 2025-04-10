import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { sendOTP } from './SMSPanel'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function MobileNumber({ placeholder = "", setVerify, verify, name = "", required = true, disabled = false, label, value, onChange }) {
    const [show, setShow] = useState(false)
    const [formdata, setFormData] = useState({
        otp: ""
    })

    const handleVerify = async (e) => {
        const otp = localStorage.getItem("otp")
        if (otp === formdata.otp) {
            setVerify("Verified")
            setShow(false)
        } else {
            alert("Incorrect OTP")
        }
    }
    const hanldeSend = async () => {
        try {
            const queryShot = query(collection(db, "users"), where("mobile_number", "==", value))
             const shot = await getDocs(queryShot)
             if(shot.empty){
                if (verify.includes("ed")) {
                    return
                }
                if (value) {
                    await sendOTP(value)
                    setShow(true)
                } else {
                    alert("Please enter mobile number.")
                }
             } else {
                alert("Mobile number is already register with us")
             }
           

        } catch (error) {
            setShow(true)
        }
    }
    return (
        <>
            <div className='relative w-full'>
                <div className='text-gray-600'>
                    <label htmlFor={name}>{label}</label>
                </div>

                <input disabled={disabled} required={required} className="border-b-2 w-full outline-none focus:border-gray-800 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg duration-300 focus:placeholder:text-primary py-2" placeholder={placeholder} type={"number"} onChange={onChange} value={value} name={name} />
                <button disabled={verify.includes("ed")} onClick={() => hanldeSend()} type='button' className={` ${verify.includes("ed") ? "bg-green-500 text-white" : 'bg-gray-200'} absolute right-0 rounded-t-md  h-9 px-2 grid place-items-center bottom-0`}>
                    {verify}
                </button>
            </div>
            {show ?

                <section className='fixed overflow-auto z-50 w-full h-full left-0 top-0 bg-black/50'>
                    <div className='lg:w-3/12 max-lg:mx-3 lg:p-8 p-3 my-8 bg-white m-auto rounded-lg overflow-hidden'>
                        <button className='float-end' type='button' onClick={() => setShow(false)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"></path></svg></button>
                        <img className='h-20 mx-auto' src={logo} alt="" />
                        <div className='grid' action="">
                            <h4 className='bg-primary text-white border-t-4 border-secondary py-3 text-xl text-center font-semibold my-5'>Verify OTP</h4>
                            <div className='flex mt-2 gap-5'>
                                {Array(4).fill(0).map((_, idx) => (
                                    <input
                                        key={idx}
                                        id={`otp-${idx}`}
                                        type="text"
                                        placeholder='X'
                                        maxLength="1"
                                        value={formdata.otp[idx] || ""}
                                        onChange={(e) => {
                                            let otpArray = formdata.otp.split("");
                                            otpArray[idx] = e.target.value;
                                            setFormData({ ...formdata, otp: otpArray.join("") });
                                            if (e.target.value && idx < 3) {
                                                document.getElementById(`otp-${idx + 1}`)?.focus();
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Backspace") {
                                                let otpArray = formdata.otp.split("");
                                                otpArray[idx] = "";
                                                setFormData({ ...formdata, otp: otpArray.join("") });

                                                if (idx > 0) {
                                                    document.getElementById(`otp-${idx - 1}`)?.focus();
                                                }
                                            }
                                        }}
                                        className="border text-center w-1/4 p-2 rounded-lg"
                                    />
                                ))}


                            </div>
                            <button onClick={() => handleVerify()} type="button" className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-5 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg'>Verify OTP</button>
                        </div>
                    </div>
                </section>
                : null
            }
        </>
    )
}

export default MobileNumber