import { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { FcAbout } from "react-icons/fc";
import { FaConciergeBell } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


import AccordionItem from "~/component/Accordion";




export const meta: MetaFunction = () => {
  const [sectionIndex, setSectionIndex] = useState(0);


  const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8']; // Add all your section IDs here

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;

    const newIndex = Math.round(scrollPosition / sectionHeight);
    if (newIndex !== sectionIndex) {
      setSectionIndex(newIndex);
    }
  };
  // // Add the scroll event listener
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [sectionIndex]);

  // // Smooth scroll to the new section when the sectionIndex changes
  // useEffect(() => {
  //   const sectionElement = document.getElementById(sections[sectionIndex]);

  //   if (sectionElement) {
  //     sectionElement.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     console.warn(`Element with id ${sections[sectionIndex]} not found`);
  //   }
  // }, [sectionIndex]);







  return [
    { title: "Safari Travel" },
    { name: "description", content: "Welcome to Safari Travel!" },
  ];
};


const AllImages = {
  BannerImages: {
    imageUrl: "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    StyleClass: "bg-cover b-center",
    alt: "Banner Image"
  }
}

const logoArray = [
  {
    name: "Ariel",
    className: {
      Ariel1: "text-4xl font-bold text-blue-600 uppercase tracking-wider shadow-md bg-gray-100 p-2 rounded-lg",
    },
  },
  {
    name: "MONGOL",
    className: {
      MONGOL1: "text-5xl font-extrabold text-red-500 italic underline decoration-wavy tracking-tight bg-black text-white p-3 rounded-full",
    },
  },
  {
    name: "TECHBLAST",
    className: {
      TECHBLAST1: "text-4xl font-semibold text-green-700 uppercase tracking-wide shadow-lg bg-yellow-100 p-4 border border-green-700 rounded-md",
    },
  },
  {
    name: "Safari",
    className: {
      Safari1: "text-3xl font-medium text-yellow-600 italic border-b-4 border-yellow-300 tracking-widest bg-white p-2 rounded-lg",
    },
  },
  {
    name: "Ariel",
    className: {
      Ariel2: "text-6xl font-black text-pink-500 uppercase shadow-2xl tracking-widest bg-blue-50 p-5 rounded-full",
    },
  },
  {
    name: "MONGOL",
    className: {
      MONGOL2: "text-4xl font-light text-purple-600 italic underline decoration-dashed bg-gray-200 p-3 rounded-md border border-purple-500",
    },
  },
  {
    name: "TECHBLAST",
    className: {
      TECHBLAST2: "text-5xl font-medium text-orange-500 uppercase tracking-tighter shadow-xl bg-gray-900 text-white p-6 rounded-lg",
    },
  },
  {
    name: "Safari",
    className: {
      Safari2: "text-3xl font-bold text-green-500 italic border-b-4 border-green-400 tracking-wider bg-gray-50 p-3 rounded-md",
    },
  },
  {
    name: "Ariel",
    className: {
      Ariel3: "text-4xl font-thin text-indigo-600 uppercase tracking-wide shadow-sm bg-yellow-50 p-4 rounded-lg",
    },
  },
  {
    name: "MONGOL",
    className: {
      MONGOL3: "text-6xl font-bold text-teal-600 italic underline decoration-dotted tracking-wider bg-pink-100 p-5 rounded-full",
    },
  },
  {
    name: "TECHBLAST",
    className: {
      TECHBLAST3: "text-3xl font-extrabold text-blue-800 uppercase shadow-inner bg-red-100 p-4 border border-blue-800 rounded-md",
    },
  },
  {
    name: "Safari",
    className: {
      Safari3: "text-4xl font-medium text-red-600 italic border-b-4 border-gray-500 tracking-wide bg-green-50 p-3 rounded-lg",
    },
  },
];



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
    <div>
      {/* Hero Section */}
      <div className="flex flex-col px-4 pt-4 pb-8 gap-4 bg-[#F5F5F7]">
        <div className="w-full shadow-sm overflow-hidden bg-cover h-[95vh] rounded-3xl bg-center" style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})`, backgroundSize: "100%" }}>
          <div className="flex flex-col justify-between  w-full h-full bg-black bg-opacity-40">

            {/* /// HEADER */}
            <div className="flex justify-between items-center">

              {/* /// SaFARi */}
              {/* <div className="absolute w-10 h-10 rounded-full bg-red-500" style={{left:150,top:8}}></div> */}
              <div className="bg-white  w-36 h-16 flex justify-center items-center rounded-br">
                <span className="text-2xl font-black">Safari</span>
              </div>

              <div className="flex px-8">
                <ul className="flex flex-row gap-4">
                  {["Home", "Services", "FAQ", "Testimonials"].map((link, index) => (
                    <li key={index} className="hover:cursor-pointer font-black">{link}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* /// BANNER */}

            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-6xl text-center  font-semibold text-white ">We are a passionate team <br />of travel enthusiasts</h1>
              <p className="text-lg  text-center text-gray-400 ">
                We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
                <span className="">Our mission is to provide you with the best travel experiences.</span>
              </p>
            </div>


            <div className="flex flex-col justify-between text-white px-4 py-6 gap-4">

              <div className="flex justify-center items-center p-2 w-48 border border-white rounded-full">

                <span className="">
                  Arusha , Tanzania
                </span>

              </div>

              <div className="flex justify-between">
                <p className="text-sm  w-96  text-white text-start">
                  We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
                  <span className="text-gray-300">Our mission is to provide you with the best travel experiences.</span>
                </p>

                <button className="flex justify-center items-center gap-8 border py-1 border-white text-white  px-4 rounded-full">Get Started<div className="bg-white flex justify-center items-center text-black rounded-full w-10 h-10">
                  {">"} </div></button>

              </div>
            </div>


          </div>
        </div>
        <div className="px-6">

          <AboutUsSection />
          <ServicesSection />
          <Brands />
          <THeForgeton />
          <FQA openIndex={openIndex} handleToggle={handleToggle} />
          <OurPartner />
          <LastBanner />
        </div>


      </div>

      {/* Footer */}
      <footer className="py-16 px-12 bg-[#010101] text-white">
        <div className="grid grid-cols-5 gap-16">
          {["Safari", "Links", "Our Activities", "About Us", "Contacts"].map((title, index) => (
            <div key={index} className="w-56">
              <h1 className="text-2xl">{title}</h1>
              <ul>
                {index === 0 ? (
                  <p>We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.</p>
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



/// MAIN COMPONENTS 

const AboutUsSection = () => (
  <section id="section-1" className="flex flex-col justify-start py-40 gap-16 h-screen px-16">
    <h2 className="text-4xl font-semibold text-start text-blue-500 mb-8 flex gap-8 items-center"><FcAbout className="h-16 w-16" /> ABOUT US</h2>
    <div className="flex w-full gap-4">
      <div className="flex flex-1">

        <p className="text-5xl text-gray-600">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
          <span className="text-gray-300">
            Our mission is to provide you with the best travel experiences.
          </span>
        </p>
      </div>

      <div className="flex flex-1  gap-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-1 flex-col items-center rounded-lg p-4 m-2">
            <span className="text-4xl font-extrabold">+620</span>
            <span className="text-xl text-gray-400">Passionate team</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const OurPartner = () => (

  <div className="flex">
    <div className="flex w-full flex-wrap justify-between">
      {candidates.map((candidate, index) => (
        <div className="flex" key={index}>
          <div className="flex flex-col bg-white rounded-lg shadow-lg p-5 text-center">
            <div className="flex flex-row justify-center items-center">

              <img src={AllImages.BannerImages.imageUrl} alt={candidate.name} className={`w-16 h-16 rounded-full mx-auto mb-4 ${AllImages.BannerImages.StyleClass}`} />
              <h3 className="text-lg font-semibold">{candidate.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{candidate.feedback}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
)


const Brands = () => (
  <section
    id="section-3"
    className="w-full overflow-hidden py-16 h-[40vh] flex flex-col justify-center items-center"
  >
    {/* <div className="w-full flex justify-start px-16 my-16">

      <h2 className="text-4xl font-semibold text-start text-blue-500 mb-8 flex gap-8 items-center"><MdGroups className="h-16 w-16" /> OUR PARTENERS</h2>
    </div> */}

    <div className="flex w-full gap-8 animate-marquee">
      {[...logoArray, ...logoArray].map((item, index) => (
        <div key={index} className={`${item?.className[0]} flex-shrink-0`}>
          <span className="text-6xl font-extrabold">{item.name}</span>
        </div>
      ))}
      {[...logoArray, ...logoArray].map((item, index) => (
        <div key={index} className={`${item?.className[0]} flex-shrink-0`}>
          <span className="text-6xl font-extrabold">{item.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const LastBanner = () => (
  <section id="section-8" className="py-32 px-20 flex flex-col justify-center h-screen">

    <div className={`w-full bg-cover h-full rounded-3xl overflow-hidden ${"bg-left-bottom"}`} style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
      <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
        <div className="flex flex-col bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
          <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
        </div>

      </div>

    </div>
  </section>
)

const FQA = ({ openIndex, handleToggle }: { openIndex: string, handleToggle: any }) => (

  <section id="section-4" className="px-20 flex flex-col justify-center h-screen">

    <h2 className="text-4xl font-semibold text-start text-blue-500 mb-8 flex gap-8 items-center"><BsFillPatchQuestionFill className="h-16 w-16" /> FQA's</h2>

    <div className="flex w-full justify-center items-start gap-4">

      <div className="flex flex-col gap-4 flex-1 px-2">
        <h1 className="text-6xl">
          Frequently Asked <br />Questions
        </h1>
        <span className="text-lg mb-4 text-gray-600 ">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.<br /> Our mission is to provide you with the best travel experiences.
        </span>
      </div>

      <div className="flex flex-col justify-center items-start flex-1 h-32 px-8">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>

  </section>
);

const ServicesSection = () => (
  <section id="section-5" className="flex flex-col justify-start gap-4 h-screen py-8 px-16">
    <h2 className="text-4xl font-semibold text-start text-blue-500 mb-4 flex gap-8 items-center"><FaConciergeBell className="h-16 w-16" /> OUR SERVICES</h2>
    <h2 className="text-5xl">We are a passionate team of travel enthusiasts</h2>
    <p className="text-lg mb-2 text-gray-600 ">
      We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
    </p>
    <div className="flex gap-8 h-full">
      <div className="w-[38%]">
        <ServiceCard title="Expert Travel Advice" description="Tips and guides to enhance your travel experience." />
      </div>
      <div className="flex flex-col gap-8 flex-1">
        <ServiceCard extraClass={"bg-right-bottom"} title="Personalized Itineraries" description="Tailored plans to suit your interests." />
        <ServiceCard extraClass={"bg-center"} title="Exclusive Travel Deals" description="Save more with exclusive offers and discounts." />
      </div>
    </div>
  </section>
);



const THeForgeton = () => (

  <div className="px-20 flex flex-col justify-center h-screen">

<h2 className="text-4xl font-semibold text-start text-blue-500 mb-8 flex gap-8 items-center"><FaLocationDot className="h-16 w-16" /> Destinations</h2>
    <h2 className="text-5xl"> We are a passionate team of travel enthusiasts </h2>
    <p className="text-lg mt-4 text-gray-600 ">
      We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
    </p>


    <div className="flex w-full sl gap-16 py-8 h-full">
      <div className="flex flex-1 px-2">
        <div className="w-full bg-cover h-full rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
          <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
            <div className="flex flex-col bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
              <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
            </div>

          </div>

        </div>
      </div>
      <div className="flex flex-row gap-8 flex-1 h-full">
        <div className="w-full bg-contain h-full rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
          <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
            <div className="flex flex-col bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
              <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
            </div>

          </div>
        </div>
        <div className="w-full bg-contain h-full rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
          <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
            <div className="flex flex-col bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
              <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
            </div>

          </div>
        </div>



      </div>
    </div>
  </div>
)





{/* /// INDIVIDUAL COMPONENTS */ }

const CandidateCard = ({ name, feedback }: Candidate) => (
  <div className="flex w-[20%]">
    <div className="bg-white rounded-lg shadow-lg p-5 text-center">
      <img src={AllImages.BannerImages.imageUrl} alt={name} className={`${AllImages.BannerImages.StyleClass} w-16 h-16 rounded-full mx-auto mb-4`} />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{feedback}</p>
    </div>
  </div>
);

const ServiceCard = ({ title, description, extraClass }: { title: string; description: string, extraClass?: string }) => (
  <section id="section-2" className={`w-full bg-cover h-full rounded-3xl overflow-hidden ${extraClass}`} style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
    <div className="w-full h-full bg-black bg-opacity-40 flex flex-col justify-end items-end px-8 py-4">
      <div className="text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  </section>
);

const accordionData = [
  {
    title: 'Section 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.',
  },
  {
    title: 'Section 2',
    content:
      'Pellentesque tincidunt et lectus vel efficitur. Curabitur interdum tincidunt velit.',
  },
  {
    title: 'Section 3',
    content:
      'Aliquam erat volutpat. Nullam ut nunc vitae turpis fermentum efficitur.',
  },
];





















// import type { MetaFunction } from "@remix-run/node";
// import MaterialTailwind from "@material-tailwind/react";
// import AccordionItem from '../component/Accordion';
// const { Button } = MaterialTailwind;

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export default function Index() {

//   let BannerImage = "https://plus.unsplash.com/premium_photo-1661962757852-72eb0a9a2a81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   return (
//     <div>

//       <div className="flex flex-1 flex-col px-10 pt-4 pb-8 gap-4">
//         <div className="flex flex-col w-full bg-cover h-[95vh] rounded-3xl" style={{ backgroundImage: `url(${BannerImage})` }}>
//           <div className="bg-white w-20 flex justify-center items-center  rounded-br">
//             <span>
//               Safari
//             </span>
//           </div>

//         </div>

//         {/* // ABOU US */}

//         <div className="pt-24 flex flex-col justify-center h-screen">

//           <h2 className="text-2xl font-semibold text-start  text-blue-500 mb-8">/// ABOUT US</h2>

//           <div className="flex w-full gap-4">
//             <div className="flex flex-1 px-2">
//               <p className="mx-auto text-gray-600 text-5xl ">
//                 We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.<span className="text-gray-300">Our mission is to provide you with the best travel experiences.</span>
//               </p>
//             </div>
//             <div className="flex flex-1 h-32 ">

//               {[1, 2, 3].map((item, index) => (
//                 <div key={index} className="flex flex-1 bg-white rounded-lg p-4 m-2">

//                   <div className="flex justify-center items-center flex-col">
//                     <span className="text-4xl font-extrabold">+620</span>
//                     <span className="text-xl text-gray-400">We are a passionate team</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>


//         {/* // Services */}


//         <div className="pt-24 flex flex-col gap-4 h-screen">

//           <h2 className="text-2xl font-semibold text-start mb-8 text-blue-500">/// OUR SERVICES</h2>

//           <h2 className="text-6xl"> We are a passionate team of travel enthusiasts </h2>
//           <span className="text-lg mb-4 ">
//             We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
//             We are a passionate team of travel <br />enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
//           </span>

//           <div className="flex w-full gap-8 py-2 h-full">
//             <div className="flex w-[38%] px-2">
//               <div className="w-full bg-cover h-full rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>

//               </div>
//             </div>
//             <div className="flex flex-col gap-8 flex-1 h-full">
//               <div className="w-full bg-contain h-1/2 rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>
//               </div>
//               <div className="w-full bg-contain h-1/2 rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>
//               </div>



//             </div>
//           </div>

//         </div>


//         {/* // BRAND */}


//         <div className="flex flex-row w-full overflow-hidden py-16 h-[50vh] justify-center items-center">
//           <div className="flex w-full overflow-x-scroll">
//             {["Ariel", "MONGOL", "TECHBLAST", "Safari", "Ariel", "MONGOL", "TECHBLAST", "Safari", "Ariel", "MONGOL", "TECHBLAST", "Safari"].map((item, index) => (
//               <div key={index} className=" bg-white rounded-lg p-4 m-2">
//                 <div className="flex justify-center items-center flex-col">
//                   <span className="text-6xl font-extrabold">{item}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>



//         <div className="pt-24 flex flex-col gap-4 h-screen">

//           <h2 className="text-2xl font-semibold text-start mb-8 text-blue-500">/// OUR SERVICES</h2>

//           <h2 className="text-6xl"> We are a passionate team of travel enthusiasts </h2>
//           <span className="text-lg mb-4 ">
//             We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
//             We are a passionate team of travel <br />enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
//           </span>

//           <div className="flex w-full sl gap-16 py-2 h-full">
//             <div className="flex flex-1 px-2">
//               <div className="w-full bg-cover h-full rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>

//               </div>
//             </div>
//             <div className="flex flex-row gap-8 flex-1 h-full">
//               <div className="w-full bg-contain h-full rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>
//               </div>
//               <div className="w-full bg-contain h-full rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${BannerImage})` }}>
//                 <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//                   <div className="flex flex-col bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                     <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//                   </div>

//                 </div>
//               </div>



//             </div>
//           </div>

//         </div>

//         {/* // FAQ */}

//         <div className="pt-24 flex flex-col justify-center h-screen">

//           <h2 className="text-2xl font-semibold text-start  text-blue-500 mb-8">/// FQA</h2>

//           <div className="flex w-full gap-4">
//             <div className="flex flex-col gap-4 flex-1 px-2">
//               <h1 className="text-6xl">
//                 Frequently Asked <br />Questions
//               </h1>
//               <span className="text-lg mb-4 ">
//                 We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.<br /> Our mission is to provide you with the best travel experiences.
//               </span>
//             </div>
//             <div className="flex flex-col justify-center items-start flex-1 h-32 px-8 ">

//               {[1, 2, 3].map((item, index) => (
//                 <div key={index} className="flex flex-col flex-1 bg-white rounded-lg p-4 m-2 border border-black w-full">
//                   <span className="text-2xl font-extrabold">+620d</span>
//                   <div className="flex justify-center items-center ">
//                     <span className="text-xl text-gray-400">
//                       We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.<br /> Our mission is to provide you with the best travel experiences.
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* <Button>Button</Button> */}

//         {/*  // TESTMONIALS   */}

//         <div className="pt-24 flex flex-col justify-center h-screen">

//           <h2 className="text-2xl font-semibold text-start  text-blue-500 mb-8">/// ABOUT US</h2>

//           <h2 className="text-6xl"> We are a passionate team of travel enthusiasts </h2>

//           <div className="flex w-full">
//             <div className="flex w-full flex-1 justify-between ">
//               {/* Wrapper for two-column layout inside horizontally scrollable container */}
//               {candidates.map((candidate, index) => (
//                 <div className="flex w-[20%]" key={index}>
//                   <div className="bg-white rounded-lg shadow-lg p-5 text-center">

//                     <div className="flex flex-row justify-center items-center">

//                       <img src={BannerImage} alt={candidate.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
//                       <h3 className="text-lg font-semibold">{candidate.name}</h3>
//                     </div>
//                     <p className="text-sm text-gray-600">{candidate.feedback}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>



//         <div className="py-32 px-20 flex flex-col justify-center h-screen">

//           <div className="w-full bg-cover h-full rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${BannerImage})` }}>
//             <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40  px-8 py-4">
//               <div className="flex flex-col bottom-4 left-4 text-white">
//                 <h3 className="text-xl font-semibold">Expert Travel Advice</h3>
//                 <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>


//       <div className="py-16 px-12  flex flex-row justify-between gap-16 h-[75%] bg-[#010101] text-white ">
//         <div className="w-56 flex gap-4 flex-col">
//           <h1 className="text-2xl">Safari</h1>

//           <span >
//             We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
//           </span>

//         </div>


//         <div className="w-56 flex gap-4 flex-col">
//           <h1 className="text-2xl">Links</h1>

//           <ul>
//             <li>Home</li>
//             <li>Services</li>
//             <li>FAQ</li>
//             <li>Testimonials</li>
//           </ul>
//         </div>


//         <div className="w-56 flex gap-4 flex-col">
//           <h1 className="text-2xl">Our Activities</h1>

//           <ul>
//             <li>Tour</li>
//             <li>Travel</li>
//             <li>Adventure</li>
//             <li>Explore</li>

//           </ul>
//         </div>



//         <div className="w-56 flex gap-4 flex-col">
//           <h1 className="text-2xl">About Us</h1>

//           <ul>
//             <li>Our Story</li>
//             <li>Our Team</li>
//             <li>Our Mission</li>
//             <li>Our Vision</li>
//           </ul>
//         </div>

//         <div className="w-56 flex gap-4 flex-col">
//           <h1 className="text-2xl">Contacts</h1>

//           <ul>
//             <li>Address : Home Ho 204 Street .</li>
//             <li>Phone : +620 123 456 789</li>
//             <li>Email : Safari@travel.bn</li>
//             <li>Website : Safari.travel.bn</li>

//           </ul>
//         </div>


//       </div>



//     </div>
//   );
// }

// const candidates = [
//   { name: 'David Bose', feedback: 'Traveling with this service was a game-changer for me...', imgSrc: 'image1.jpg' },
//   { name: 'Alex Buckmaster', feedback: 'The customized itinerary matched my interests...', imgSrc: 'image2.jpg' },
//   { name: 'Dennis Callis', feedback: 'I was able to explore hidden gems...', imgSrc: 'image3.jpg' },
//   { name: 'C.J Klein', feedback: 'An unforgettable experience...', imgSrc: 'image4.jpg' },
// ];
