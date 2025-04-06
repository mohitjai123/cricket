import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'

function ChangePassword() {
    const [formdata, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const userId = localStorage.getItem("user_id")
        if (userId) {
            fetchDAta(userId)
        } else {
            window.location.href = "/"
        }
    }, [])
    const fetchDAta = async (id) => {
        const docshot = doc(db, "users", id)
        const docdata = await getDoc(docshot)
        setUserData(docdata.data())
    }

    async function hanldeSubmit(e) {
        e.preventDefault()
        if (formdata.newPassword != formdata.confirmPassword) {
            alert("New passowrd and confirm password not matched.")
        } else if (userData.password != formdata.currentPassword) {
            alert("Current password is incorrect.")
        } else {
            try {

                setLoading(true)
                const id = localStorage.getItem("user_id")
                const userRef = doc(db, "users", id)
                await updateDoc(userRef, { ...userData, password: formdata.newPassword })
                alert("Password changed successfully.")
                setFormData({
                    newPassword:"",
                    confirmPassword:"",
                    currentPassword:""
                })
                setLoading(false)
                setActive(0)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
    }
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <main className='lg:px-24 py-10 p-4'>
            <h4 className='border-t-4 py-3 font-semibold px-5 text-xl border-secondary bg-primary text-white'>Change Password</h4>
            <form onSubmit={hanldeSubmit} className='mt-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <PasswordInputBox onChange={handleChange} label="Current Password" name='currentPassword' placeholder='Enter your current password' value={formdata.currentPassword} />
                <PasswordInputBox onChange={handleChange} name='newPassword' label="New Password" placeholder='Enter your new password' value={formdata.newPassword} />
                <PasswordInputBox name='confirmPassword' onChange={handleChange} label="Confirm Password" placeholder='Re-enter your new password' value={formdata.confirmPassword} />

                <input disabled={loading} type="submit" value={loading ? "Saving ..." : "Save"} className='bg-secondary text-white w-full py-2.5 border border-secondary max-md:mt-5 hover:bg-transparent col-start-2 hover:text-secondary duration-500 cursor-pointer rounded-lg' />

            </form>
        </main>
    )
}

function PasswordInputBox({ placeholder = "", name = "", required = true, label, value, onChange }) {
    const [show, setShow] = useState(false)
    return (
        <div className='relative max-md:mt-5 w-full'>
            <div className='text-gray-600'>
                <label htmlFor={name}>{label}</label>
            </div>

            <input required={required} accept='image/*' className="border-b-2 w-full outline-none focus:border-gray-800 disabled:shadow disabled:bg-gray-100 disabled:px-4 disabled:rounded-lg duration-300 focus:placeholder:text-primary py-2" placeholder={placeholder} type={show ? "text" : "password"} onChange={onChange} value={value} name={name} />
            <button onClick={() => setShow(!show)} type='button' className='absolute right-0 rounded-t-lg bg-gray-200 h-8 w-8 grid place-items-center bottom-0'>
                {show ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M19.439 15.439a19.5 19.5 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955c0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297c-.304.426-.456.64-.456.955c0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747"></path><path d="M9.858 10A2.929 2.929 0 1 0 14 14.142M3 3l18 18"></path></g></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path><path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path></g></svg>
                }
            </button>


        </div>
    )
}

export default ChangePassword