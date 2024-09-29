import { FaMapLocationDot } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react'
import { FaConciergeBell } from "react-icons/fa";
import BannerSection from '../ServiceCard';
import { motion } from 'framer-motion';


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
            className="flex flex-col justify-start gap-4 py-8 px-md:px-16 scrollSnap lg_pd"
        >
            <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-4 flex gap-4 md:gap-8 items-center">
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <FaMapLocationDot className="h-12 md:h-16 w-12 md:w-16 text-green-500" />
                </motion.div>
                OUR SERVICES
            </h2>
            <div className=''>
                <p className="text-3xl text-gray-600">
                    We are a passionate team of travel enthusiasts
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 h-[60vh] justify-center">
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
        imageUrl: "https://img.freepik.com/free-photo/breakfast-set-table_140725-3715.jpg?t=st=1727628863~exp=1727632463~hmac=ac7a2b2bcb030d8378c5540150549c47553644b2d2275d7c92a4451b23b29909&w=740",
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
        extraClass: "h-[400px]",
        title: "Exclusive Travel Deals",
        description: "Save more with exclusive offers and discounts.",
        imageUrl: "https://images.unsplash.com/photo-1527436553949-ea84cd6cf13c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFmcmljYSUyMHNhZmFyaSUyMGRlc3RpbmF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",

    },
];
