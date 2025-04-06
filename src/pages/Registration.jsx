import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import { convertDateToFormate, convertDateToTimeStamp } from '../utils/convertTimeStamp'
import axios from 'axios'
import { paymentFailed, paymentSuccess } from '../utils/SMSPanel'

function Registration() {
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [formdata, setFormData] = useState()
    useEffect(()=>{
        const userId = localStorage.getItem("user_id")
        if(userId){
           fetchDAta(userId)
        } else {
            window.location.href = "/"
        }
    },[])

    const fetchDAta =async(userId)=>{
        try {
        setLoading(true)
        const docRef = collection(db, "users", userId, "registration")
        const shot = await getDocs(docRef)
        const dat = shot.docs.map(item=>({...item.data()}))
        console.log(dat);
        setData(dat)
        const docshot = doc(db, "users", userId)
        const docdata = await getDoc(docshot)
        setFormData({id:userId,...docdata.data()})
        setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    const [cardDetails, setCardDetails] = useState({})
    const getRegistrationData = async ()=>{
        const refDoc = doc(db, "trailPage", "trail_subscription")
        const shot = await getDoc(refDoc)
        setCardDetails(shot.data()) 
    }
    
    useEffect(()=>{
        getRegistrationData()
    },[])
    const handlePayment = async (index) => {
        try {
            if(data[index].season!=cardDetails.title){
                alert(`${data[index].season} registration ended.`)
                return
            }
            const response = await axios.post("https://api-iibgbkbzsa-uc.a.run.app/api/mjpl-payment/create-order", {
                amount: cardDetails.price,
                name: formdata.first_name+" "+formdata.last_name,
                email: formdata.email,
                contact: formdata.mobile_number,
            });
            const order = response.data;
            const options = {
                key: order.key,
                amount: order.amount,
                currency: order.currency,
                name: order.name,
                description: order.description,
                order_id: order.orderId,
                handler: async function (response) {
                    await saveDetails({status:"success", orderId:order.orderId}, index)
                    await paymentSuccess(formdata.mobile_number, order.orderId)
                },
                prefill: order.prefill,
                theme: { color: "#3399cc" },
                modal: {
                    escape: false,
                    ondismiss: async function () {
                        await saveDetails({status:"cancel", orderId:order.orderId}, index)
                        await paymentFailed(formdata.mobile_number, order.orderId)
                    },
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.log("error", error);
        }
    };
    const saveDetails = async (payment, index) => {
        try {
            setLoading(true);
            console.log(formdata.id);
            
            const registerRef = collection(db, "users",formdata.id, "registration"); 
            await addDoc(registerRef, { 
                ...payment, 
                amount:cardDetails.price, 
                createdAt: serverTimestamp(), 
                season: cardDetails.title, 
                result: "Pending",
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("🔥 Error saving details:", error);
        }
    };
    return (
        <main className='lg:px-24 py-10 p-4'>
            <h4 className='border-t-4 py-3 font-semibold px-5 text-xl border-secondary bg-primary text-white'>Registrations</h4>
            <section className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 flex'>
               {loading ? 
                    <h4 className='text-primary w-full text-center border border-primary rounded-md py-1'>
                        Loading...
                    </h4> : data.length ? 
                     data.slice(0.20).map((item, idx) => (
                        <div key={idx} className='border p-4 grid gap-2 hover:drop-shadow-md shadow rounded-lg p-2'>
                        <div className='flex justify-between'>
                        <h3 className='font-semibold text-lg text-secondary'>{item.season}</h3>
                        </div>
                        {/* <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Result : <span className="text-secondary">{item.result}</span></h4>
                        </p> */}
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Transaction Id : <span className="text-secondary">{item.orderId}</span></h4>
                        </p>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Payment Status : <span className="text-secondary">{item.status}</span></h4>
                        </p>
                        <p className='text-gray-600 text-md'>
                            <h4 className='text-primary'>Registration Fees : <span className="text-secondary">Rs. {item.amount} /-</span></h4>
                        </p>
                        <p>
                        <h4 className='text-primary'>Registration Date : <span className="text-secondary">{convertDateToTimeStamp(item.createdAt)}</span></h4>
                        {item.status.includes("canc") && <button onClick={()=>handlePayment(idx)} className='py-1.5 px-4 bg-secondary text-white mt-2 rounded-lg border-secondary border '>Retry Payment</button>}
                        </p>
                    </div>
                    ))  :
                     <h4 className='text-primary w-full text-center border border-primary rounded-md py-1'>
                        No registration details found.
                     </h4>  
            }

            </section>
        </main>
      )
}

export default Registration