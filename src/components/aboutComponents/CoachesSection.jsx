import React, { useEffect, useState } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import SimpleSlider from '../../utils/SimpleSlider';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


function CoachesSection() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox

        return () => {
            Fancybox.destroy(); // Cleanup Fancybox on component unmount
        };
    }, []);

    const [data, setData] = useState([])
    const fetchData = async () => {
        const newsQuery = collection(db, "coache");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ ...item.data() }))
        console.log(docs);
          
        setData(docs)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const settings = {
        dots: false,
        infinite: data.length>2,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows:false,
                    infinite: true,
                    dots: false,
                },
            },
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    slidesToScroll: 1,
                    autoplay:true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                  arrows:false,
                    slidesToShow:1,
                    autoplay:true,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <section className='lg:px-24 py-14 lg:py-8 items-center p-4 bg-grayScale flex max-lg:flex-wrap justify-between'>
            <div className='lg:w-1/2'>
                {/* <h3 className='text-x  font-semibold'>COACHES</h3> */}
                <h2 className='lg:text-6xl text-3xl mb-7 max-w-xl font-semibold'>Meet our team</h2>
                <p className='text-gray-500 mr-4'>
                Meet the passionate minds behind MJPL Cricket League, dedicated to mentoring and shaping the future of cricket.
                </p>
                {/* <button className=' text-white mt-5 bg-secondary py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>OUR SCHOOL</button> */}
            </div>
          {data.length ? 
          <SimpleSlider settings={settings}>
          {data.map((item,idx)=>
          
          <div key={idx} className='relative overflow-hidden lg:max-w-80 group bg-red-50 h-[390px]'>
              <img src={item.image} className="min-h-[80%] w-full" alt="" />
              <div className='bg-white overflow-hidden group-hover:h-full h-24 w-full duration-300 absolute bottom-0 p-4'>
                  <h3 className='text-2xl font-semibold'>{item.name}</h3>
                  <p className='text-gray-500 mt-2'>{item.designation}</p>
                  <p className='text-[0.75rem]'><em>"{item.description}"</em></p>
              </div>

          </div>
          )}
          </SimpleSlider> : <h4>No Coaches added.</h4>  
        }
            <div className='flex max-lg:flex-wrap gap-8'>
                
               

            </div>
        </section>
    )
}

export default CoachesSection