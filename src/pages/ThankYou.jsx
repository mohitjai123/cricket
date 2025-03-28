import React from 'react'

function ThankYou() {
  return (
    <section>
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
  )
}

export default ThankYou