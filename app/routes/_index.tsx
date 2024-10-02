import { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import Header from "~/component/header";
import { TfiTarget } from "react-icons/tfi";
import OurService from '../component/home/OurService';
import PopularPackage from '../component/home/Packages';
import Brand from "~/component/home/Brand";
import { Question } from "~/component/home/FQA";
import Map from '../component/Map';
import Benefits from '../component/home/Benefits';
import GoogleMapComponent from "~/component/googleMap";
import GoogleMapIframe from "../component/Map";
import Footer from "../component/Footer";
import AboutUsSection from '~/component/home/AbouUs';


export const meta: MetaFunction = () => {

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
              <h1 className="text-3xl md:text-5xl font-semibold text-white">
                We are a passionate team of travel enthusiasts
              </h1>
              <p className="text-sm md:text-lg text-white mt-2">
                Dedicated to making your travel dreams come true. <br />
                Our mission is to provide you with the best travel experiences.

              </p>
            </div>

            <div className="flex flex-col justify-between text-white px-4 py-4 md:px-6 md:py-6 gap-4">
              <div className="flex font-bold justify-center items-center p-2 w-fit px-4 py-[10px] border gap-2 border-white rounded-full text-lg">
                <TfiTarget className="" /> <span>Arusha, Tanzania</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <p className="text-sm md:text-md  w-full md:w-96 text-white text-start">
                  We are dedicated to making your travel dreams come true. Our mission is to provide the best experiences.
                </p>

                <button className="flex justify-center items-center gap-4 border px-4 py-[10px] font-bold text-lg border-white text-white rounded-full">
                  Get Started
                  <div className="bg-white flex justify-center items-center text-black rounded-full w-8 md:w-10 h-8 md:h-10">{">"}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-0">
          <AboutUsSection />
          <Benefits />
          <PopularPackage />
          <Brand />
          <OurService />
          <Question openIndex={openIndex} handleToggle={handleToggle} />
          <GoogleMapIframe />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

















