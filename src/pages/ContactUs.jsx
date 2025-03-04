import React, { useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import InputBox from '../utils/InputBox'
import { db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

function ContactUs() {
  
  return (
    <section className=''>
      <BreadCamp name={"Contacts"} />
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225532.89612129363!2d77.24107920342034!3d23.199323871911943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1739562408574!5m2!1sen!2sin" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <FormSection/>
    </section>
  )
}


const FormSection =()=>{
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const hanldeSubmit = async (e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const userRef = collection(db, "contactQuery")
      const add = await addDoc(userRef, formData)
      alert("Thank you for registering with us. We contact you soon.")
      setFormData({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
      })
    setLoading(false)
  } catch (error) {
      console.log(error);
      setLoading(false)
  }
  }
  return <section className='lg:flex py-20 lg:px-24 px-4'>
        <div className='lg:w-1/2'>
        <h3 className='text-x font-semibold'>CONTACT US</h3>
        <h2 className='lg:text-6xl text-3xl my-4 font-semibold'>Have questions? <br />
        Get in touch!</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati facere asperiores explicabo quibusdam quam quaerat vel mollitia</p>
          <div className='flex text-gray-500 mt-5 gap-4'>
          <svg className='text-yellow-500' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.475q2.475-2 3.738-3.85T17 9.15q0-2.25-1.4-3.7T12 4T8.4 5.45T7 9.15q0 1.625 1.263 3.475T12 16.475m0 2.05q-.3 0-.6-.1t-.55-.3q-2.95-2.35-4.4-4.587T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.15-1.45 4.388t-4.4 4.587q-.25.2-.55.3t-.6.1M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M6 22q-.425 0-.712-.288T5 21t.288-.712T6 20h12q.425 0 .713.288T19 21t-.288.713T18 22zm6-13"/></svg>
          <p>785 15h Street, Office 478 Berlin</p>
          </div>
          <a href='tel:+911234567890' className='flex mt-5 gap-4'>
          <svg className='text-yellow-500' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11.95q0-2.925-2.037-4.962T12 4.95v-2q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 11.95zm-4 0q0-1.25-.875-2.125T12 8.95v-2q2.075 0 3.538 1.463T17 11.95zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
          <p>+91 1234567890</p>
          </a>

          <a href='mailto:info@email.com' className='flex justify-center mt-5 w-fit group relative text-gray-500 hover:text-black duration-500 gap-4'>
          <svg className='text-yellow-500' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"></path></svg>
            <p>info@email.com</p>
            <div className='w-0 h-0.5 absolute bg-primary duration-300 bottom-0 group-hover:w-full'></div>
          </a>
        </div>
        <div>
          <form onSubmit={hanldeSubmit} action="">
          <div className='flex pb-8 w-full gap-4'>
          <InputBox value={formData.name} onChange={handleChange} name='name' placeholder='Name' icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"></path></svg>}/>
          <InputBox value={formData.email} onChange={handleChange} name='email' placeholder='Email Address' icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828zV18z"></path></svg>}/>
          </div>
          <div className='flex pb-8 w-full gap-4'>
          <InputBox value={formData.phone} onChange={handleChange} name='phone' placeholder='Phone' icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.026.005.107.02.15.03q.129.028.352.091c.297.087.712.23 1.21.457c.996.457 2.321 1.256 3.697 2.632s2.175 2.701 2.632 3.698c.228.497.37.912.457 1.209a6 6 0 0 1 .113.455l.005.03a.765.765 0 0 1-.617.879a.75.75 0 0 1-.86-.617l-.014-.068a4 4 0 0 0-.067-.26a7.4 7.4 0 0 0-.38-1.003c-.39-.85-1.091-2.025-2.33-3.262c-1.237-1.238-2.411-1.94-3.262-2.33a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.86"></path><path fill="currentColor" fillRule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.515l-.206.72l.206-.72h.003l.003.002l.008.002l.02.006q.023.007.056.02q.068.022.177.069c.146.062.345.159.59.303c.49.29 1.157.771 1.942 1.556s1.266 1.453 1.556 1.943c.145.244.241.443.304.59a3 3 0 0 1 .088.233l.007.02l.002.007v.003l.001.002l-.72.207l.72-.206a.75.75 0 0 1-1.439.423l-.003-.011l-.035-.088a4 4 0 0 0-.216-.416c-.223-.377-.625-.946-1.325-1.646s-1.27-1.103-1.646-1.326a4 4 0 0 0-.504-.25l-.011-.004a.75.75 0 0 1-.505-.924m-8.479-.923c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.369.438 3.096-.68 4.228a.63.63 0 0 0-.104.336c-.013.256.078.849.997 1.767c.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.103c1.131-1.119 2.859-1.444 4.227-.68l1.163.649c2.096 1.17 2.224 4.005.544 5.685c-.899.898-2.093 1.697-3.498 1.75c-2.08.079-5.536-.458-8.958-3.88c-3.421-3.422-3.959-6.877-3.88-8.958c.053-1.404.852-2.6 1.75-3.498m4.376 1.275c-.6-1.073-2.21-1.32-3.315-.214c-.775.775-1.28 1.63-1.312 2.494c-.066 1.735.363 4.76 3.442 7.84s6.105 3.508 7.84 3.442c.863-.032 1.72-.537 2.494-1.312c1.106-1.106.86-2.715-.214-3.314l-1.163-.65c-.723-.403-1.74-.265-2.453.448c-.07.07-.516.486-1.307.524c-.81.04-1.791-.324-2.9-1.434c-1.111-1.11-1.475-2.091-1.435-2.902c.038-.791.455-1.237.524-1.306c.714-.714.851-1.73.448-2.453z" clipRule="evenodd"></path></svg>}/>
          <InputBox value={formData.subject} onChange={handleChange} name='subject' placeholder='Subject' icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></path><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clipRule="evenodd"></path></svg>}/>
          </div>
          <div className='flex relative gap-4'>
        <div className='absolute text-gray-600 top-2 left-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.898 17.017l8.568-8.567l-1.3-1.3l-8.568 8.567zm-6.025 1.445q-1.961-.125-2.975-.935q-1.013-.81-1.013-2.233q0-1.413 1.212-2.291q1.213-.878 3.376-1.078q1.206-.113 1.809-.476q.603-.362.603-.999q0-.823-.738-1.273t-2.399-.638l.098-.981q2.037.238 3.038.95q1 .713 1 1.942q0 1.056-.866 1.7t-2.472.775q-1.83.164-2.746.751t-.915 1.618q0 .99.729 1.513q.728.522 2.282.655zm6.02-.018L9.17 15.723l9.995-9.994l2.726 2.721zm0 0l-3.431.71l.71-3.431z"></path></svg>
        </div>
       <textarea placeholder='Message' rows={4} className="border-b-2 w-full outline-none focus:border-gray-800 duration-300 focus:placeholder:text-primary py-3 px-9" name="message" onChange={handleChange} value={formData.message} id=""></textarea>
    </div>

        <div className='flex mt-8 gap-5 items-center'>
        <button type='submit' disabled={loading} className='text-white flex gap-2 bg-secondary py-3 px-8 rounded-full hover:bg-blue-600 duration-500 w-fit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 5L4.672 11.373c-.395.164-.592.247-.643.354a.3.3 0 0 0 .016.29c.063.1.268.16.68.281L10.5 14M20 5l-2.065 13.049c-.04.254-.06.381-.127.45a.3.3 0 0 1-.223.097c-.097 0-.205-.072-.421-.216l-2.93-1.956M20 5l-9.5 9m0 0l.156 4.3c0 .334 0 .501.069.585c.06.074.15.116.246.115c.11-.001.24-.108.5-.32l2.764-2.256M10.5 14l3.735 2.424"></path></svg>
          {loading ? "Submitting..." : "GET IN TOUCH"}</button>
          <div className='flex gap-2 items-center'>
          <input id='policy' type="checkbox" />
          <label className='text-gray-500' htmlFor="policy">
          I agree with the site's <a className='underline hover:text-primary duration-300 underline-offset-4' href="">privacy policy</a>.
          </label>
          </div>
        </div>
          </form>
        </div>
      
  </section>
}

export default ContactUs