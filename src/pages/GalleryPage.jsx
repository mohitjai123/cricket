import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import { Fancybox } from "@fancyapps/ui";
import five from "../assets/bottom_img/first.jpg"
import four from "../assets/bottom_img/second.jpg"
import three from "../assets/bottom_img/third.jpg"
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { API_URL } from '../stor';


function GalleryPage() {
    const [data, setData] = useState([])
    const [endIdx, setEndIdx] = useState(6)
    const isVideo = window.location.href.includes("video")

    const fetchData = async () => {
        const newsQuery = collection(db, isVideo ? "videos" : "Imagegallery");
        const queryShot = await getDocs(newsQuery)
        const docs = queryShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        console.log(docs);
        
        setData(docs)
    }
    const imageData = [
        {
            title:"ICC World Cup",
            images :[five, five, five, five]
        },
        {
            title:"Premiuar League",
            images :[four, four, four, four]
        },
        {
            title:"My New Team",
            images :[three, three, three, three]
        },
    ]
    useEffect(() => {
        setData([])
        fetchData()
    }, [window.location.pathname])
    return (
        isVideo ? <main>
             {/* <BreadCamp img={API_URL+"other-images/IMG_4452.JPG"} name="Gallery" second={"Video Gallery"} /> */}
            <div className='lg:px-24 p-4'>
            <h4 className='text-2xl text-white font-bold text-center border-t-8 border-secondary py-3 bg-primary'> Video Gallery</h4>
            <section className=' grid gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {data?.slice(0, endIdx)?.map((item, idx) =>
                    <GalleryCard item={item} key={idx} />
                )}
                <hr className='my-5' />
                {data.length > endIdx && <button onClick={() => setEndIdx(endIdx + 6)} className='border mt-5 hover:bg-secondary hover:border-secondary duration-300 hover:text-white px-8 py-2 rounded-full border-primary text-center mx-auto'>Load More Entries</button>}

            </section>
            </div>
        </main> : <main>
        {/* <BreadCamp img={API_URL+"other-images/IMG_4488.JPG"} name="Gallery" second={"Photo Gallery"} /> */}
            <div className='lg:px-24 p-4'>
            <h4 className='text-2xl text-white font-bold text-center border-t-8 border-secondary py-3 bg-primary'> Photo Gallery</h4>
            <section className=' grid gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {data?.slice(0, endIdx)?.map((item, idx) =>
                    <FolderCard item={item} key={idx} />
                )}
                <hr className='my-5' />
                {data.length > endIdx && <button onClick={() => setEndIdx(endIdx + 6)} className='border mt-5 hover:bg-secondary hover:border-secondary duration-300 hover:text-white px-8 py-2 rounded-full border-primary text-center mx-auto'>Load More Entries</button>}

            </section>
            </div>
        </main>
    )
}


const FolderCard = ({ item }) => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
        return () => {
          Fancybox.destroy(); // Cleanup Fancybox on component unmount
        };
    }, [])

    return (
        <div className="rounded-lg overflow-hidden group relative shadow-lg border">
            <div className="h-fit w-full overflow-hidden">
                <img className="h-96 group-hover:scale-110 mx-auto w-full duration-300" src={item?.Images?.[0]} alt="" />
            </div>
            <div className="bg-primary/50 overflow-hidden grid place-items-center duration-300 absolute group-hover:h-full bottom-12 left-0 w-full h-0">
                <button
                    className="border border-primary mt-16 text-primary px-5 py-2 bg-white"
                    data-src={item?.Images?.[0]} // Trigger Fancybox on the first image
                    data-fancybox={"photo-gallery-"+item?.sectionTitle}
                >
                    View All
                </button>
            </div>
            <h4 className="text-center py-3 text-white border-t-4 z-10 border-secondary bg-primary">
                {item?.sectionTitle}
            </h4>

            {/* Hidden images for Fancybox */}
            <div className=' absolute bg-red-50'>
                {item?.Images?.map((src, index) => (
                    index==0 ? null :
                    <a id={item?.sectionTitle} className="absolute h-full w-full" key={index} data-fancybox={"photo-gallery-"+item?.sectionTitle} href={src}>src</a>
                ))}
            </div>
        </div>
    );
};



const GalleryCard = ({ item }) => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
        return () => {
            Fancybox.destroy(); // Cleanup Fancybox on component unmount
        };
    }, []);
    return <a data-fancybox="video-gallery" href={item.videoUrl}>

        <div className='rounded-lg overflow-hidden group relative shadow-lg border'>
            <div className='h-fit w-full overflow-hidden'>
                <iframe className="h-96 group-hover:scale-110 mx-auto w-full duration-300" src={"https://www.youtube.com/embed/"+item.videoUrl?.split("=")[1]} alt="" />
            </div>
            <div className='bg-primary/50 overflow-hidden  top-0 grid place-items-center duration-300 absolute group-hover:h-[80%] bottom-12  left-0 w-full h-0'>
                <button className='border flex items-center gap-2 border-primary mt-16 text-primary px-5 py-2 bg-white'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>Play</button>
            </div>
            <h4 className='text-center flex items-center gap-2 p-3 text-white border-t-4 z-10 border-secondary bg-primary'><div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg></div>{item.title}</h4>
        </div>
    </a>
}

export default GalleryPage