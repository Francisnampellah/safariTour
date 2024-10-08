import React, { useState, useEffect } from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";


export default function Benefits() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Automatically slide images every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    return (
        <div className='flex flex-col gap-8 my-4'>

            <div className='w-full flex justify-center items-center'>
                <h1 className='text-2xl md:text-5xl font-semibold' >Benefit of Choosing Us</h1>
            </div>


            <div className='flex flex-col md:flex-row md:px-32 sm_pd md:py-[110px]'>
                {Benefit.map((item,) => (
                    <div className='my-4 md:my-0'>
                        <h1 className='text-2xl md:text-5xl font-black text-blue-600'>0{item.id}.</h1>
                        <span>
                            <h1 className='text-xl md:text-2xl font-semibold'>{item.title}</h1>
                            <p className='text-gray-700'>{item.description}</p>
                        </span>


                    </div>
                ))}
            </div >
            <div className="w-full flex flex-col items-center justify-center">
                <div className="relative w-[90%] md:w-[80%] h-96 overflow-hidden">
                    <div className="absolute top-0 z-20 left-0 right-0 text-white">
                        <div className="main-container">
                            <div className="kontainer">
                                <div className="itemCard">
                                    <span className="text-xl font-black text-black">Manyara</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Container */}
                    <div className="absolute w-full h-full flex transition-transform duration-500 rounded-3xl" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full h-full rounded-3xl overflow-hidden">
                                <img
                                    className='rounded-3xl object-cover w-full h-full object-center'
                                    src={image}
                                    alt={`Slide ${index}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (Inside Image) */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 flex justify-center items-center transform -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100"
                    >
                        <IoMdArrowRoundBack className='w-5 h-5 text-white' />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 flex justify-center items-center transform -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100"
                    >
                        <IoMdArrowRoundForward className='w-5 h-5 text-white' />
                    </button>
                </div>

                {/* Dots Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}



const images = [
    "https://images.unsplash.com/photo-1549182209-fccf0dd0893b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1669021820358-317111184ede?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Benefit = [
    {
        id: 1,
        title: "Quality Services",
        description: "Our services are top-notch and we ensure that you get the best experience",
    },
    {
        id: 2,
        title: "Reliable Support",
        description: "We provide reliable 24/7 support to ensure your issues are resolved quickly",
    },
    {
        id: 3,
        title: "Affordable Pricing",
        description: "We offer competitive pricing without compromising on quality",
    },
];
