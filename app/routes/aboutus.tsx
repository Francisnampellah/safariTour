import React, { useEffect, useState } from 'react'
import OurTeam from '~/component/aboutus/ourTeam'
import Service from '~/component/aboutus/service'
import WhyUs from '~/component/aboutus/whyUs'
import Header from '~/component/header'
import Footer from '~/component/Footer'
import AboutUS from "app/asserts/about_us.jpg"



const AllImages = {
  Heroimage: {
    imageUrl: "https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356469.jpg?t=st=1727858217~exp=1727861817~hmac=3f91fc96bef75d705338264363653ba6d49dc6dce7ee88da5c138a67e4a08290&w=1060",
    StyleClass: "bg-cover b-center",
    alt: "Banner Image"
  },
  BannerImages: {
    imageUrl: "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    StyleClass: "bg-cover b-center",
    alt: "Banner Image"
  }
}




export default function aboutus() {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Trigger the zoom effect on mount
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 100); // Short delay to trigger the animation

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className='flex flex-col w-full'>
      <div className='flex h-auto flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]'>
        <div className="relative w-full shadow-sm bg-cover h-[60vh] md:h-[60vh] rounded-3xl overflow-hidden bg-center" style={{ backgroundImage: `url(${AllImages.Heroimage.imageUrl})` }}>
          <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-40 ">
            <Header />
          </div>
        </div>

      </div>
      <WhyUs />
      <Service />
      <OurTeam />
      <Footer />
    </div>
  );
}



// <div className='flex flex-col w-full'>
// <div className='flex h-auto flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]'>
//   <div className="relative w-full shadow-sm bg-cover h-[60vh] md:h-[60vh] rounded-3xl overflow-hidden bg-center" style={{ backgroundImage: `url(${AllImages.Heroimage.imageUrl})` }}>
//     <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-40 ">
//       <Header />
//     </div>
//   </div>

// </div>
// <WhyUs />
// <Service />
// <OurTeam />
// <Footer />
// </div>



{/* <div className='flex flex-col w-full'>
<div className='flex h-auto flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]'>
  <div className="relative w-full shadow-sm h-[60vh] md:h-[60vh] rounded-3xl overflow-hidden bg-center">
    <img
      src={AboutUS}
      alt="About Us"
      className={`w-full h-full object-cover transition-transform duration-700 ${isZoomed ? 'scale-110' : 'scale-100'}`}
    />
    <div className="z-49 flex flex-col justify-between w-full h-full bg-black bg-opacity-40">
      <Header />
    </div>
  </div>
</div>
<WhyUs />
<Service />
<OurTeam />
<Footer />
</div> */}