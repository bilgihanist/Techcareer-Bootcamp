// components/CustomImageSlider.js
"use client";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
  "/img/-1.webp",
  "/img/-2.webp",
  "/img/-3.webp",
  "/img/-4.webp",
  "/img/-5.webp",
  "/img/-6.webp",
  "/img/-7.webp",
  "/img/-8.webp",
  "/img/-9.webp",
];

const CustomImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically slide to the next image every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="grid">
      <div className="relative max-w-7xl mx-auto py-10 overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-1000 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex justify-center items-center border-r-[20px] border-b-[20px] border-green-400 relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 100%, 150px 100%)", // Custom clip path to cut corners
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=" h-[400px]"
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md w-12 h-12 aspect-square text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          <AiOutlineLeft size={24} /> {/* Left bracket icon */}
        </button>

        {/* Next button */}
        <button
          className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md w-12 h-12 text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
          onClick={nextSlide}
        >
          <AiOutlineRight size={24} /> {/* Right bracket icon */}
        </button>

        {/* Indicators */}
        <div className="flex justify-center  mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full  ${currentIndex === index ? "bg-green-500" : "bg-gray-300"
                } cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
      <div className="cardPage-bg h-36 -mt-32 w-full -z-50"> </div>
    </div>

  );
};

export default CustomImageSlider;
