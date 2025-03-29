import axios from "axios"

const sendOTP = async(mobileNumber)=>{
    const otp = Math.floor(1000 + Math.random() * 9000);
    const url = `https://kutility.org/app/smsapi/index.php?key=367E646D7DEF65&campaign=14717&routeid=7&type=text&contacts=${mobileNumber}&senderid=MACLLP&msg=Welcome to MacJhons Your OTP is ${otp} It expires in 15 minutes. Do not share this code with anyone. - Team MACJHONS&template_id=1707174314325227800&pe_id=1701174306073651452`
    localStorage.setItem("otp", otp)
    await axios.get(url)
}

const resetPasswordOTP = async(mobileNumber)=>{
    const otp = Math.floor(1000 + Math.random() * 9000);
    const url = `https://kutility.org/app/smsapi/index.php?key=367E646D7DEF65&campaign=14717&routeid=7&type=text&contacts=${mobileNumber}&senderid=MACLLP&msg=Reset your MacJhons password using OTP ${otp}. It expires in 15 minutes. Never share your OTP with anyone. – Team MACJHONS&template_id=1707174314193538209&pe_id=1701174306073651452`
    localStorage.setItem("otp", otp)
    await axios.get(url)
}
const paymentSuccess = async(mobileNumber, orderId)=>{
    const url = `https://kutility.org/app/smsapi/index.php?key=367E646D7DEF65&campaign=14717&routeid=7&type=text&contacts=${mobileNumber}&senderid=MACLLP&msg=Thank you! Your Payment is received for MacJhons Premiere League. Trial venue and date will be shared via email or SMS. Transaction ID:${orderId}. – Team MACJHONS&template_id=1707174314202723952&pe_id=1701174306073651452`
    await axios.get(url)
    
}
const paymentFailed = async(mobileNumber, orderId)=>{
    const url = `https://kutility.org/app/smsapi/index.php?key=367E646D7DEF65&campaign=14717&routeid=7&type=text&contacts=${mobileNumber}&senderid=MACLLP&msg=Your MacJhons Premiere League payment of ${orderId} failed. Please retry or contact support for assistance. – Team MACJHONS&template_id=1707174314210140214&pe_id=1701174306073651452`
    await axios.get(url)
    
}

export {sendOTP, resetPasswordOTP, paymentFailed, paymentSuccess}