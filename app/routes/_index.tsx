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
import PopularPackage from "~/component/home/Packages";




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
          <PopularPackage cards={[1,2,3,4]} />
          <ServicesSection />
          <Brands />
          <THeForgeton />
          <FQA openIndex={openIndex} handleToggle={handleToggle} />
          <OurPartner />
          <LastBanner />
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




/// MAIN COMPONENTS 



// const PopularPackage = () => (
//   <section
//     id="section-1"
//     className="flex flex-col justify-start px-8 py-5 lg:px-32 lg:py-[110px] gap-4 md:gap-4 rounded-3xl"
//   >

//     <div className="flex justify-between">

//       <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 flex gap-4 md:gap-8 items-center">
//         <FcAbout className="h-12 md:h-16 w-12 md:w-16" /> POPULAR PACKAGES
//       </h2>
//       <IoMdArrowRoundForward className="w-8 h-8 cursor-pointer" />
//     </div>

//     <div>
//       <p className="text-2xl text-gray-600">
//         We are a passionate team of travel enthusiasts <span className="hidden md:flex"> dedicated to making your travel dreams come true.
//           Dedicated to making your travel dreams come true.</span>
//       </p>
//     </div>

//     <div className="flex flex-col md:flex-row w-full gap-4">

//       {[1, 2, 3, 4].map((item) => (
//         <div key={item} className="flex flex-1 flex-col items-center h-[60vh] bg-contain rounded-3xl overflow-hidden " style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
//           <div className="w-full h-full gap-2 bg-black flex flex-col justify-end items-start bg-opacity-40 px-4 md:px-8 ">
//             <div className="border border-white rounded-full px-4 py-2 text-white">
//               Explore Here
//             </div>
//             <div className="flex flex-col bottom-4 left-4 text-white w-full">
//               <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
//               <p className="text-xs md:text-sm mt-1">Tips and guides to enhance your travel experience.</p>
//             </div>
//           </div>
//         </div>
//       ))}

//     </div>
//   </section>
// );



// const AboutUsSection = () => (
//   <section
//     id="section-1"
//     className="flex flex-col justify-center gap-8 md:gap-16 pd_sm lg:px-32 lg:py-[110px]"
//   >
//     <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-6 md:mb-8 flex gap-4 md:gap-8 items-center">
//       <FcAbout className="h-12 md:h-16 w-12 md:w-16" /> ABOUT US
//     </h2>
//     <div className="flex flex-col md:flex-row w-full gap-4">
//       <div className="flex flex-1">
//         <p className="text-xl md:text-5xl text-gray-600">
//           We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
//           <span className="text-gray-300 block mt-2 md:mt-4">
//             Our mission is to provide you with the best travel experiences.
//           </span>
//         </p>
//       </div>

//       <div className="flex flex-1 flex-col md:flex-row gap-2">
//         {[1, 2, 3].map((item) => (
//           <div key={item} className="flex flex-1 flex-col items-center rounded-lg p-4 m-2">
//             <span className="text-3xl md:text-4xl font-extrabold">+620</span>
//             <span className="text-lg md:text-xl text-gray-400">Passionate team</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );



const OurPartner = () => (
  <section
    className="flex justify-center h-screen items-center">
    <div className="flex w-full flex-col md:flex-row flex-wrap gap-6 justify-between max-w-6xl">
      {candidates.map((candidate, index) => (
        <div key={index} className="flex flex-1 flex-col bg-white h-48 rounded-lg shadow-lg py-6 px-4 w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-row items-center w-full gap-4">
            <img
              src={AllImages.BannerImages.imageUrl}
              alt={candidate.name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold">{candidate.name}</h3>
          </div>
          <p className="text-sm text-gray-600 flex flex-wrap p-2">{candidate.feedback}</p>
        </div>
      ))}
    </div>
  </section>
)



const Brands = () => (
  <section
    id="section-3"

    className="w-full overflow-hidden py-16  flex flex-col justify-center h-screen items-center "
  >
    <div className="flex w-full gap-8 animate-marquee">
      {[...logoArray, ...logoArray].map((item, index) => (
        <div key={index} className={`${item?.className} flex-shrink-0`}>
          <span className="text-6xl font-extrabold">{item.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const LastBanner = () => (
  <section

    id="section-8" className="py-4 md:py-12 lg:py-24 px-4 md:px-12 lg:px-20 flex flex-col justify-center h-screen">
    <div className={`w-full bg-cover h-96 md:h-full rounded-3xl overflow-hidden bg-left-bottom`} style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}>
      <div className="w-full h-full bg-black flex flex-col justify-end items-start bg-opacity-40 px-4 md:px-8 py-4">
        <div className="flex flex-col bottom-4 left-4 text-white">
          <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
          <p className="text-xs md:text-sm mt-1">Tips and guides to enhance your travel experience.</p>
        </div>
      </div>
    </div>
  </section>
)



const FQA = ({ openIndex, handleToggle }: { openIndex: string | null, handleToggle: any }) => (
  <section id="section-4" className="px-6 md:px-16 lg:px-20 flex flex-col justify-center h-screen">

    <h2 className="text-2xl md:text-4xl font-semibold text-start text-blue-500 mb-6 flex gap-4 md:gap-8 items-center">
      <BsFillPatchQuestionFill className="h-10 w-10 md:h-16 md:w-16" /> FQA's
    </h2>

    <div className="flex flex-col lg:flex-row w-full justify-center items-start gap-6 lg:gap-4">

      <div className="flex flex-col gap-4 flex-1 px-2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Frequently Asked <br /> Questions
        </h1>
        <span className="text-sm md:text-lg mb-4 text-gray-600">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. <br />
          Our mission is to provide you with the best travel experiences.
        </span>
      </div>

      <div className="flex flex-col justify-center items-start flex-1 px-4 md:px-6 lg:px-8">
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
  <section
    id="section-5"
    className="flex flex-col justify-start gap-4 h-screen py-8 px-6 md:px-16 scrollSnap"
  >
    <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-4 flex gap-4 md:gap-8 items-center">
      <FaConciergeBell className="h-12 md:h-16 w-12 md:w-16" /> OUR SERVICES
    </h2>
    <h2 className="text-3xl md:text-5xl">
      We are a passionate team of travel enthusiasts
    </h2>
    <p className="text-base md:text-lg mb-2 text-gray-600">
      We are a passionate team of travel enthusiasts dedicated to making your
      travel dreams come true. Our mission is to provide you with the best
      travel experiences.
    </p>
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-full">
      <div className="w-full md:w-[38%]">
        <ServiceCard
          title="Expert Travel Advice"
          description="Tips and guides to enhance your travel experience."
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 flex-1">
        <ServiceCard
          extraClass={"bg-right-bottom"}
          title="Personalized Itineraries"
          description="Tailored plans to suit your interests."
        />
        <ServiceCard
          extraClass={"bg-center"}
          title="Exclusive Travel Deals"
          description="Save more with exclusive offers and discounts."
        />
      </div>
    </div>
  </section>
);


const THeForgeton = () => (
  <div
    className="px-6 md:px-16 lg:px-20 flex flex-col justify-center py-8 h-screen">
    <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-4 md:mb-8 flex gap-4 md:gap-8 items-center">
      <FaLocationDot className="h-12 md:h-16 w-12 md:w-16" /> Destinations
    </h2>
    <h2 className="text-2xl md:text-5xl"> We are a passionate team of travel enthusiasts </h2>
    <p className="text-base md:text-lg mt-4 text-gray-600">
      We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with the best travel experiences.
    </p>

    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 py-8 h-full">
      <div className="image-container flex flex-1 mx-2 overflow-hidden rounded-3xl">
        <div
          className="image-background w-full bg-cover h-full overflow-hidden"
          style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}
        ></div>
        <div className="w-full image-text h-full bg-black flex flex-col justify-end items-end bg-opacity-40 px-4 md:px-8 py-4">
          <div className="flex flex-col bottom-4 left-4 text-white z-10">
            <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
            <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-1 h-full">
        <div
          className="w-full bg-cover h-full rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}
        >
          <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40 px-4 md:px-8 py-4">
            <div className="flex flex-col bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
              <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-cover h-full rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${AllImages.BannerImages.imageUrl})` }}
        >
          <div className="w-full h-full bg-black flex flex-col justify-end items-end bg-opacity-40 px-4 md:px-8 py-4">
            <div className="flex flex-col bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
              <p className="text-sm mt-1">Tips and guides to enhance your travel experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);




{/* /// INDIVIDUAL COMPONENTS */ }


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














