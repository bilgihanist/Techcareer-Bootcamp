"use client";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
    "/img/adds/+1.webp",
    "/img/adds/+2.webp",
    "/img/adds/+3.webp",
    "/img/adds/+4.webp",
    "/img/adds/+5.webp",
    "/img/adds/+6.webp",
    "/img/adds/+7.webp",
    "/img/adds/+8.webp",
    "/img/adds/+9.webp",
    "/img/adds/+10.webp",
    "/img/adds/+11.webp",
    "/img/adds/+12.webp",
    "/img/adds/+13.webp",
    "/img/adds/+14.webp",
    "/img/adds/+15.webp",
    "/img/adds/+16.webp",
    "/img/adds/+17.webp",
    "/img/adds/+18.webp",
    "/img/adds/+19.webp",
    "/img/adds/+20.webp",
    "/img/adds/+21.webp",
    "/img/adds/+22.webp",
    "/img/adds/+23.webp",
    "/img/adds/+24.webp",
    "/img/adds/+25.webp",
    "/img/adds/+26.webp",
    "/img/adds/+27.webp",
];

const CustomAddsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 6; // Updated to 6 images per slide

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Math.ceil(images.length / imagesPerSlide) - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.ceil(images.length / imagesPerSlide) - 1 : prevIndex - 1
        );
    };

    // Automatically slide to the next image every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval); // Clear the interval on component unmount
    }, []);

    return (
      <div className="adds-bg">
          <div className="flex items-center max-w-6xl m-auto">
            {/* Previous button */}
            <button
                className=" bg-white p-3 rounded-full shadow-md w-12 h-12 text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
                onClick={prevSlide}
            >
                <AiOutlineLeft size={24} />
            </button>
            <div className="flex items-center gap-10 max-w-5xl mx-auto py-10 overflow-hidden">


                {/* Slider container */}
                <div
                    className="flex transition-transform duration-1000"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
                        width: `${(100 * images.length) / imagesPerSlide}%`,
                    }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center items-center  " // w-1/6 for 6 images per row
                        >
                            <img src={src} alt={`Slide ${index + 1}`} sizes="200" />
                        </div>
                    ))}
                </div>


            </div>
            {/* Next button */}
            <button
                className=" bg-white p-3 rounded-full shadow-md w-12 h-12 text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
                onClick={nextSlide}
            >
                <AiOutlineRight size={24} />
            </button>
        </div>
      </div>
    );
};

export default CustomAddsSlider;
