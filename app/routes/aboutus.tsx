import React from 'react'
import OurTeam from '~/component/aboutus/ourTeam'
import Service from '~/component/aboutus/service'
import WhyUs from '~/component/aboutus/whyUs'
import Header from '~/component/header'
import { TfiTarget } from 'react-icons/tfi'
import Footer from '~/component/Footer'



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




export default function aboutus() {
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
      {/* <OurTeam /> */}
      <Footer />
    </div>
  )
}
