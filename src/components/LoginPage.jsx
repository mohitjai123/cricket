import React, { act, useRef, useState } from 'react'
import logo from "../assets/logo.png"
import LabelInputBox from '../utils/LabelInputBox'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { resetPasswordOTP } from '../utils/SMSPanel'

function LoginPage({ setPopup }) {
    const [active, setActive] = useState(1)
    const [formdata, setFormData] = useState({
        mobile_number: "",
        password: "",
        otp: "",
        confirm_passord: ""
    })
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    function handleCancel() {
        setPopup()
    }
    const hanldeSubmit = async (e) => {
        e?.preventDefault()
        setLoading(true)
        try {

            const data = await checkUserRegister()
            if (data === false) {
                alert("You have not register yet. Please register first")
            } else {
                const pass = data.data().password
                if (pass != formdata.password) {
                    alert("Incorrect password")
                } else {
                    localStorage.setItem("user_id", data.id)
                    localStorage.setItem("user_data", JSON.stringify(data.data()))
                    window.location.reload()
                }
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    async function checkUserRegister() {
        const queryShot = query(collection(db, "users"), where("mobile_number", "==", formdata.mobile_number))
        try {
            const shot = await getDocs(queryShot)
            if (shot.empty) {
                return false;
            } else {
                setUserData({ id: shot.docs[0].id, ...shot.docs[0].data() })
                return shot.docs[0]
            }
        } catch (error) {
            return false;
        }
    }
    async function handleForget(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const isRegister = await checkUserRegister()
            if (isRegister) {
                resetPasswordOTP(formdata.mobile_number)
                alert("OTP send successfully.")
                setActive(3)
            } else {
                alert("This mobile number not found in our system.")
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    async function handleVerify(e) {
        e.preventDefault()
        try {
            setLoading(true)

            const otp = localStorage.getItem("otp")            
            if (otp == formdata.otp) {
                alert("OTP verified successfully.")
                setActive(4)
            } else {
                alert("You have entered incorrect OTP.")
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    async function changePassword(e) {
        e.preventDefault()
        try {
            setLoading(true)
            if (formdata.confirm_passord == formdata.password) {
                const userRef = doc(db, "users", userData.id)
                await updateDoc(userRef, { ...userData, password: formdata.password })
                alert("Password changed successfully.")
                setActive(1)
                setFormData({
                    password:"",
                    mobile_number:""
                })
            } else {
                alert("New password and confirm password not matched.")
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }
    return (
        <section className='fixed overflow-auto z-50 w-full h-full left-0 top-0 bg-black/50'>
            <div className='lg:w-3/12 max-lg:mx-3 lg:p-8 p-3 my-8 bg-white m-auto rounded-lg overflow-hidden'>
                <button className='float-end' type='button' onClick={handleCancel}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"></path></svg></button>
                <img className='h-20 mx-auto' src={logo} alt="" />

                {active == 1 ?
                    <form onSubmit={hanldeSubmit} className='grid' action="">
                        <h4 className='bg-primary text-white border-t-4 border-secondary py-3 text-xl text-center font-semibold my-5'>Login Now</h4>

                        <div className='grid mt-2 gap-5'>
                            <LabelInputBox required onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.mobile_number} label="Mobile Number" type='number' placeholder='Please type your mobile number' name='mobile_number' />

                            <PasswordInputBox required onChange={handleChange} value={formdata.password} label="Password" type='password' placeholder='Please type your password' name='password' />
                            <input disabled={loading} type="submit" value={loading ? "Logining..." : "Login"} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-5 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                            <button onClick={() => setActive(2)} className='text-secondary hover:no-underline underline' type='button'>Forget Password</button>
                        </div>
                    </form> : active == 2 ?
                        <form onSubmit={handleForget} className='grid' action="">
                            <h4 className='bg-primary text-white border-t-4 border-secondary py-3 text-xl text-center font-semibold my-5'>Forget Password</h4>

                            <div className='grid mt-2 gap-5'>
                                <LabelInputBox required onChange={(e) => e.target.value.length < 11 ? handleChange(e) : null} value={formdata.mobile_number} label="Mobile Number" type='number' placeholder='Please type your mobile number' name='mobile_number' />
                                <input disabled={loading} type="submit" value={loading ? "Sending ..." : "Get OTP"} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-5 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                            </div>
                        </form> :
                        active == 3 ?
                            <form onSubmit={handleVerify} className='grid' action="">
                                <h4 className='bg-primary text-white border-t-4 border-secondary py-3 text-xl text-center font-semibold my-5'>Verify OTP</h4>
                                <div className='flex mt-2 gap-5'>
                                    {Array(4).fill(0).map((_, idx) =>
                                        <input value={formdata.otp.charAt(idx)} onKeyDown={(e) => {
                                            if (e.code == 'Backspace') {
                                                setFormData({ ...formdata, otp: formdata.otp.slice(0, idx)}); document.getElementById(idx - 1).focus();
                                            } else if(/\d/.test(e.key)) {
                                                setFormData({ ...formdata, otp: formdata.otp + e.key }); document.getElementById(idx + 1).focus()
                                            }
                                        }} id={idx} key={idx} placeholder='x' className='border text-center w-1/4 p-2 rounded-lg'/>
                                    )}

                                </div>
                                <input disabled={loading} type="submit" value={loading ? "Verifying ..." : "Verify OTP"} className='bg-secondary text-white w-full lg:w-5/12 mx-auto mt-5 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                            </form> :
                            <form onSubmit={changePassword} className='grid' action="">
                                <div className='grid mt-8 gap-5'>
                                    <PasswordInputBox required onChange={handleChange} value={formdata.password} label="New Password" type='password' placeholder='Enter your password' name='password' />
                                    <PasswordInputBox required onChange={handleChange} value={formdata.confirm_passord} label="Confirm Password" type='password' placeholder='Re-enter your password' name='confirm_passord' />
                                    <input disabled={loading} type="submit" value={loading ? "Logining..." : "Change Password"} className='bg-secondary text-white w-full lg:w-2/3 mx-auto mt-5 py-2.5 border border-secondary hover:bg-transparent hover:text-secondary duration-500 cursor-pointer rounded-lg' />
                                </div>
                            </form>
                }

            </div>
        </section>
    )
}


function PasswordInputBox({ disabled = false, placeholder = "", name = "", required = false, label, value, onChange }) {
    const [show, setShow] = useState(false)
    return (
        <div className='relative w-full'>
            <div className='text-gray-600'>
                <label htmlFor={name}>{label}</label>
            </div>

            <input disabled={disabled} required={required} accept='image/*' className="border-b-2 w-full outline-none focus:border-gray-800 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg duration-300 focus:placeholder:text-primary py-2" placeholder={placeholder} type={show ? "text" : "password"} onChange={onChange} value={value} name={name} />
            <button onClick={() => setShow(!show)} type='button' className='absolute right-0 rounded-t-lg bg-gray-200 h-8 w-8 grid place-items-center bottom-0'>
                {show ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M19.439 15.439a19.5 19.5 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955c0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297c-.304.426-.456.64-.456.955c0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747"></path><path d="M9.858 10A2.929 2.929 0 1 0 14 14.142M3 3l18 18"></path></g></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path><path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path></g></svg>
                }
            </button>


        </div>
    )
}


export default LoginPage