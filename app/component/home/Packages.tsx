import React, { useEffect, useState, useRef } from 'react';
import { FaFireAlt } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
// import { PopularPackage } from '~/component/home/Packages';
import TravelAdviceCard from '../TravelCard';

const PopularPackage = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 30% of the section is visible
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
      id="section-1"
      ref={sectionRef}
      className="flex flex-col justify-start px-8 py-5 lg:px-16 lg:py-[110px] gap-8 md:gap-8 rounded-3xl"
    >

      <div className="flex justify-between">
        {/* Animate only when the section is in view */}
        <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 flex gap-4 md:gap-8 items-center">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <FaFireAlt className="h-12 md:h-16 w-12 md:w-16 text-red-500" />
          </motion.div>
          POPULAR PACKAGES
        </h2>
        <IoMdArrowRoundForward className="w-8 h-8 cursor-pointer" />
      </div>

      <div className='px-32'>
        <p className="text-3xl text-gray-600">
          We are a passionate team of travel enthusiasts
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full md:flex-wrap justify-center ">
        <div className='w-fit flex flex-row gap-4 lg:gap-8 flex-wrap'>
          {packages.map((item: any) => (
            <TravelAdviceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackage;


const packages = [
  {
    id: 1,
    title: "Expert Travel Advice",
    description: "Tips and guides to enhance your travel experience.",
    imageUrl: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Update this to the actual image URL
  },
  {
    id: 2,
    title: "Adventure Awaits",
    description: "Discover thrilling activities and unforgettable journeys.",
    imageUrl: "https://images.unsplash.com/photo-1516786549992-7fc60748b3a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Luxury Escapes",
    description: "Indumde in premium experiences tailored to your taste.",
    imageUrl: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FmYXJpJTIwcG90cmFpdHxlbnwwfDF8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Luxury Escapes",
    description: "Indulge in premium experiences tailored to your taste.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661809249946-8a6b00e29ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNhZmFyaSUyMHBvdHJhaXR8ZW58MHwxfDB8fHww",
  },
];