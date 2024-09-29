import { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import { FcAbout } from "react-icons/fc";
import { FaConciergeBell } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import AccordionItem from "~/component/Accordion";
import Header from "~/component/header";
import { TfiTarget } from "react-icons/tfi";
import AboutUsSection from "~/component/home/AbouUs";
import OurService from '../component/home/OurService';
import PopularPackage from '../component/home/Packages';
import Brand from "~/component/home/Brand";
import { Question } from "~/component/home/FQA";
import Map from '../component/Map';


export const meta: MetaFunction = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const sectionRefs = useRef<HTMLDivElement[]>([]); // Create refs for each section

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scroll behavior

      const sections = sectionRefs.current;
      const currentPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (event.deltaY > 0) {
        // Scroll down
        for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].offsetTop;
          if (sectionTop > currentPosition + viewportHeight * 0.5) {
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            break;
          }
        }
      } else {
        // Scroll up
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionTop = sections[i].offsetTop;
          if (sectionTop < currentPosition - viewportHeight * 0.5) {
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            break;
          }
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);


  return [
    { title: "Safari Travel" },
    { name: "description", content: "Welcome to Safari Travel!" },
  ];
};


const AllImages = {
  Heroimage: {
    imageUrl: "https://images.unsplash.com/photo-1527073620320-77635188c627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    StyleClass: "bg-cover b-center",
    alt: "Banner Image"
  },
  BannerImages: {
    imageUrl: "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    StyleClass: "bg-cover b-center",
    alt: "Banner Image"
  }
}

type Candidate = {
  name: string;
  feedback: string;
};

const candidates: Candidate[] = [
  { name: "David Bose", feedback: "Traveling with this service was a game-changer for me..." },
  { name: "Alex Buckmaster", feedback: "The customized itinerary matched my interests..." },
  { name: "Dennis Callis", feedback: "I was able to explore hidden gems..." },
  { name: "C.J Klein", feedback: "An unforgettable experience..." },
];




export default function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden flex flex-1 flex-col">
      {/* Hero Section */}
      <div className="flex flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]">
        <div className="w-full shadow-sm bg-cover h-[95vh] md:h-[95vh] rounded-3xl overflow-hidden bg-center" style={{ backgroundImage: `url(${AllImages.Heroimage.imageUrl})` }}>
          <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-40">



            <Header />

            {/* Banner */}
            <div className="flex flex-col justify-center items-center h-full text-center px-2 md:px-4">
              <h1 className="text-3xl md:text-6xl font-semibold text-white">
                We are a passionate team of travel enthusiasts
              </h1>
              <p className="text-sm md:text-lg text-gray-400 mt-2">
                Dedicated to making your travel dreams come true. <br />
                Our mission is to provide you with the best travel experiences.

              </p>
            </div>

            <div className="flex flex-col justify-between text-white px-4 py-4 md:px-6 md:py-6 gap-4">
              <div className="flex font-bold justify-center items-center p-2 w-fit px-8 py-5 border gap-2 border-white rounded-full text-2xl">
                <TfiTarget className="" /> <span>Arusha, Tanzania</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <p className="text-md md:text-xl  w-full md:w-96 text-white text-start">
                  We are dedicated to making your travel dreams come true. Our mission is to provide the best experiences.
                </p>

                <button className="flex justify-center items-center gap-4 border sm_pd font-bold text-2xl border-white text-white rounded-full">
                  Get Started
                  <div className="bg-white flex justify-center items-center text-black rounded-full w-8 md:w-10 h-8 md:h-10">{">"}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <AboutUsSection />
          <PopularPackage cards={[1, 2, 3, 4]} />
          <Brand />
          <OurService />
          <Question openIndex={openIndex} handleToggle={handleToggle} />
          <Map />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 md:py-16 px-6 md:px-12 bg-[#010101] text-white">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-16">
          {["Safari", "Links", "Our Activities", "About Us", "Contacts"].map((title, index) => (
            <div key={index} className="w-full md:w-56">
              <h1 className="text-xl md:text-2xl">{title}</h1>
              <ul>
                {index === 0 ? (
                  <p>We are passionate about making your travel dreams come true.</p>
                ) : index === 1 ? (
                  ["Home", "Services", "FAQ", "Testimonials"].map((link, idx) => <li key={idx}>{link}</li>)
                ) : index === 2 ? (
                  ["Tour", "Travel", "Adventure", "Explore"].map((link, idx) => <li key={idx}>{link}</li>)
                ) : index === 3 ? (
                  ["Our Story", "Our Team", "Our Mission", "Our Vision"].map((link, idx) => <li key={idx}>{link}</li>)
                ) : (
                  <>
                    <li>Address: Home Ho 204 Street</li>
                    <li>Phone: +620 123 456 789</li>
                    <li>Email: Safari@travel.bn</li>
                    <li>Website: Safari.travel.bn</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

















