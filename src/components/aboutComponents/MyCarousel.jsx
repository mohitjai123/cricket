import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
];

const AUTO_PLAY_SPEED = 3000; // Auto-play speed in milliseconds

const MyCarousel = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_SPEED);
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run when index changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    controls.start({ x: -currentIndex * 600 });
  }, [currentIndex, controls]);

  return (
    <div className="relative w-full py-10 max-w-xl mx-auto overflow-hidden rounded-lg">
      {/* Track Container */}
      <motion.div
        ref={carouselRef}
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -((images.length - 1) * 600) }}
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((text, index) => (
          <motion.div
            key={index}
            className="min-w-[600px] h-fit relative text-center text-white rounded-lg"
          > 
            <svg className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M8.804 17.02L8 17.18V20h1c2.783 0 4.906-.771 6.309-2.292C17.196 15.66 17.006 13.03 17 13V5a1 1 0 0 0-1-1H9c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h4.078a2.89 2.89 0 0 1-.429 1.396c-.507.801-1.464 1.347-2.845 1.624z" fill="currentColor"></path></svg>
            <p className="w-full">{text} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam veritatis officia.</p>
            <h4 className="text-lg mt-6 font-semibold">Auther name</h4>
            <h4 className="">Madhya Pradesh</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      {/* <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        ▶
      </button> */}

      {/* Dots Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? "bg-secondary" : "bg-white"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
