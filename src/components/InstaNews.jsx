import React, { useEffect } from 'react'
import first from "../assets/bottom_img/first.jpg"
import second from "../assets/bottom_img/second.jpg"
import third from "../assets/bottom_img/third.jpg"
import four from "../assets/bottom_img/four.jpg"
import five from "../assets/bottom_img/five.jpg"
import six from "../assets/bottom_img/six.jpg"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import first from "../assets/bottom_img/first.jpg"

function InstaNews() {
    useEffect(() => {
      Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
  
      return () => {
        Fancybox.destroy(); // Cleanup Fancybox on component unmount
      };
    }, []);

  return (
    <section className='flex justify-center bg-[#f8f8f7] pt-24 flex-wrap'>
        <a href={first} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={first} alt="" />
        </a>
        <a href={second} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={second} alt="" />
        </a>
        <a href={third} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={third} alt="" />
        </a>
        <a href={four} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={four} alt="" />
        </a>
        <a href={five} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={five} alt="" />
        </a>
        <a href={six} data-fancybox="gallery">
        <img className='max-w-56 duration-300 hover:brightness-90' src={six} alt="" />
        </a>
    </section>
  )
}

export default InstaNews