import React, { useEffect } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function CoachesSection() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
    
        return () => {
          Fancybox.destroy(); // Cleanup Fancybox on component unmount
        };
      }, []);
  return (
    <section className='lg:p-24 p-4 bg-grayScale flex max-lg:flex-wrap justify-between'>
        <div className='lg:w-1/2'>
        <h3 className='text-x  font-semibold'>COACHES</h3>
            <h2 className='lg:text-6xl text-3xl mb-7 max-w-xl font-semibold'>Meet our team</h2>
    <p className='text-gray-500 mr-4'>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. 

</p>
<div className='flex py-8 gap-4'>
<button className=' text-white bg-secondary py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>OUR SCHOOL</button>
    <a className='flex items-center' href="https://youtu.be/qUFyj6mMCZ0?si=KXMre1Ly5NPIcL0Z" data-fancybox="school-gallery">
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
        Video Presentation</a>
    </div>        
        </div>
        <div className='flex justify-center max-lg:flex-wrap gap-8'>
            <div className='relative bg-red-50 h-fit'>
            <img className='max-w-80' src="https://spin.axiomthemes.com/wp-content/uploads/2023/09/12-copyright-570x696.jpg" alt="" />
            <div className='bg-white w-11/12 left-1/2 -translate-x-1/2 absolute bottom-2 p-4'>
                <h3 className='text-2xl font-semibold'>Bobby Brown</h3>
                <p className='text-gray-500 mt-2'>Coach</p>
            </div>
            </div>
            <div className='relative bg-red-50 h-fit'>
            <img className='max-w-80' src="https://spin.axiomthemes.com/wp-content/uploads/2023/09/12-copyright-570x696.jpg" alt="" />
            <div className='bg-white w-11/12 left-1/2 -translate-x-1/2 absolute bottom-2 p-4'>
                <h3 className='text-2xl font-semibold'>Bobby Brown</h3>
                <p className='text-gray-500 mt-2'>Coach</p>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default CoachesSection