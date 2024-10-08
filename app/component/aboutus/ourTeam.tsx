import React, { useRef, useEffect, useState } from "react";
import TeamMemberCard, { teamMembers } from '../TeamMemberCard';
import { FaUserFriends } from "react-icons/fa";
import { motion } from 'framer-motion';


const OurTeam = () => {



  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 20% of the section is visible
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
    <section ref={sectionRef} className="h-auto flex w-full flex-col gap-8 md:my-8 md:px-32">
      <div>
        <div className="py-4 md:py-16">
          <div className="px-4 md:px-16 gap-8 my-8 flex flex-col">
            <div className="text-blue-600 text-xl flex gap-4">
              {/* Animated Compass Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }} // Start smaller and transparent
                animate={isInView ? { scale: 1.1, opacity: 1 } : { scale: 0.8, opacity: 0 }} // Slight scale up for a pop-up effect on visibility
                transition={{ duration: 1, ease: "easeOut" }} // Fast and smo
              >
                <FaUserFriends className="h-8 md:h-12 w-8 md:w-12 text-5xl text-red-500" />
              </motion.div>
              <span className="font-semibold">Our Team</span>
            </div>
            <h1 className="text-xl md:text-5xl text-start">
              We Are a World Famous Travel Agency
            </h1>
          </div>
          <div className="flex flex-col md:flex-row  justify-center gap-4 items-center">
            {/* Team Member  */}
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Background Image with Black Overlay and Text */}
        <div className="h-80 relative my-16 rounded-3xl overflow-hidden ≈  mx-4  md:mx-16">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {/* Centered text on top of the image and overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 flex-col px-4">
            <h1 className="text-white text-base md:text-4xl font-bold text-center">
              Don't wait any longer! Start your adventure and explore new
              experiences today
            </h1>
            <div className="mt-10 border h-14 w-1/2 rounded-full flex items-center justify-center text-white">
              
            </div>
            <div className="rounded-xl text-white my-4 glassy text-base p-2">Subscribe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;