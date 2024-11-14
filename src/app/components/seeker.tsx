"use client";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SiComma } from "react-icons/si";

const images = [
    "/img/profile/1.webp",
    "/img/profile/2.webp",
    "/img/profile/3.webp",
    "/img/profile/4.webp",
];

const desc = ["Yazılım geliştirme dünyasında kendimi sürekli geliştiren, kullanıcı dostu arayüzler ve yaratıcı çözümler sunmayı amaçlayan bir front-end geliştiriciyim. Yeni teknolojilere olan ilgim, projelere taze ve yenilikçi bir bakış açısı kazandırıyor.",
    "Backend geliştirme alanında uzmanlaşmış, karmaşık veri işlemlerini optimize etmeye odaklanan bir yazılım geliştiriciyim. Temiz ve sürdürülebilir kod yazma prensiplerimi, yüksek performanslı sistemler inşa etmek için kullanıyorum.",
    "Mobil uygulama geliştirme tutkusu olan ve kullanıcılara olağanüstü deneyimler sunmak için çalışan bir yazılım mühendisi olarak, Android ekosisteminde güçlü bir uzmanlığa sahibim. Kotlin ve Java ile verimli projeler geliştiriyorum.",
    "Yapay zeka ve makine öğrenimi alanında projeler üreten bir yazılım geliştiriciyim. Verilerin sunduğu potansiyeli ortaya çıkararak, geleceği şekillendiren yenilikçi çözümler yaratmak en büyük hedefim."];

const names = ["Nazlıcan Aslan", "Melike Aydın", "Tolgahan Kara", "Ozan Çeltikçi"];
const jobs = ["Front-end Developer", "Back-end Developer", "Software Developer", "UI/UX Developer"];

const CustomSeekerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 2;

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
        <div className="adds-bg py-16">
            <div className="grid max-w-7xl text-4xl m-auto">Bizi Katılımcılarımızdan Dinle</div>
            <div className="flex items-center max-w-7xl m-auto">
                {/* Previous button */}
                <button
                    className="bg-white -ml-4 p-3 rounded-full shadow-md w-12 h-12 text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
                    onClick={prevSlide}
                >
                    <AiOutlineLeft size={24} />
                </button>

                <div className="flex items-center gap-14 max-w-7xl mx-auto py-10 overflow-hidden">
                    {/* Slider container */}
                    <div
                        className="flex transition-transform duration-1000 gap-[90px] "
                        style={{
                            transform: `translateX(-${currentIndex * (143 / imagesPerSlide)}%)`,
                            width: `${(100 * images.length) / imagesPerSlide}%`,
                        }}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="flex-shrink-0 flex justify-center border bg-white border-gray-500 p-4">
                                <img src={src} alt={`Slide ${index + 1}`} className="w-44 h-44" />
                                <div className="px-4 grid gap-4">
                                    <div className="text-sm font-light w-80">{desc[index]}</div>
                                    <div className="text-sm text-gray-500 flex gap-4">
                                        <div className="flex">
                                            <SiComma size={30} className="text-green-500" />
                                            <SiComma size={30} className="text-green-500 -ml-3" />
                                        </div>
                                        <div>
                                            <div>{names[index]}</div>
                                            <div>{jobs[index]}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next button */}
                <button
                    className="bg-white -mr-4 p-3 rounded-full shadow-md w-12 h-12 text-green-500 hover:bg-gray-200 flex items-center justify-center font-bold"
                    onClick={nextSlide}
                >
                    <AiOutlineRight size={24} />
                </button>
            </div>
            <button
                className="grid m-auto bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transition duration-300"
            >
                Tüm Yorumlerı Gör
            </button>
        </div>
    );
};

export default CustomSeekerSlider;
