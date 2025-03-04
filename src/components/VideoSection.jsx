import React, { useEffect, useState } from 'react'
import img from "../assets/play_video.jpg"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function VideoSection() {
 
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox

    return () => {
      Fancybox.destroy(); // Cleanup Fancybox on component unmount
    };
  }, []);


  return (

    <section style={{backgroundImage:`url(${img})`}} className='h-[80vh] bg-no-repeat mt-20 relative bg-gray-900 bg-center lg:p-24 p-4 grid items-center justify-center'>
        <a href="https://youtu.be/qUFyj6mMCZ0?si=KXMre1Ly5NPIcL0Z" data-fancybox="video-gallery" style={{
          }} className='rounded-full z-20 transition-transform duration-75 h-20 w-20 border border-white text-center grid items-center justify-center text-white'>PLAY
        
        </a>
    </section>
  )
}


const CustomCursor = () => {
  

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="w-8 h-8 bg-red-500 rounded-full opacity-70 transition-transform duration-75"
          style={{
            position: "absolute",
            left: position.x - 16,
            top: position.y - 16,
          }}
        />
      </div>
    </>
  );
};


export default VideoSection