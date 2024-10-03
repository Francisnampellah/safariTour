import { FaMapLocationDot } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react'
import { FaConciergeBell } from "react-icons/fa";
import BannerSection from '../ServiceCard';
import { motion } from 'framer-motion';
import { ImLocation } from "react-icons/im";



export default function OurService() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="section-5"
            ref={sectionRef}
            className="flex flex-col justify-start gap-4 py-8 scrollSnap lg_pd md:px-4"
        >
            <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-4 flex gap-4 md:gap-8 items-center md:px-8" >
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <ImLocation className="h-12 md:h-16 w-12 md:w-16 text-green-500" />
                </motion.div>
                Our Destinations
            </h2>
            <div className='md:px-16'>
                <p className="text-2xl text-gray-600">
                    We are a passionate team of travel  We are a passionate team
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 md:px-16 h-[60vh] justify-center">
                <div className="w-fit">
                    <BannerSection item={service[0]} />
                </div>
                <div className="flex flex-col gap-4 md:gap-8">
                    <BannerSection item={service[1]} />
                    <BannerSection item={service[2]} />
                </div>
            </div>
        </section>
    );
};

const service = [
    {
        id: 1,
        title: "Expert Travel Advice",
        extraClass: "w-25%",
        description: "Tips and guides to enhance your travel experience.",
        imageUrl: "https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26411.jpg?t=st=1727688569~exp=1727692169~hmac=56f929152c331ed9362d473332f4f57ff114e0f6fe44bef71d432060857379aa&w=1060",
    },
    {
        id: 2,
        extraClass: "h-[400px]",
        title: "Personalized Itineraries",
        description: "Tailored plans to suit your interests.",
        imageUrl: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        id: 3,
        extraClass: "h-[400px] object-bottom",
        title: "Exclusive Travel Deals ",
        description: "Save more with exclusive offers and discounts.",
        imageUrl: "https://img.freepik.com/free-photo/hammocks-umbrellas-with-trees_1203-183.jpg?t=st=1727688270~exp=1727691870~hmac=3761f763067ce39ccbd2689e60fec7296995ba28544e630aacc07b841b9da145&w=1060",

    },
];
