import React from 'react'
import OurTeam from '~/component/aboutus/ourTeam'
import Service from '~/component/aboutus/service'
import WhyUs from '~/component/aboutus/whyUs'


export default function aboutus() {
  return (
    <div>
      <WhyUs/>
      <Service/>
      <OurTeam/>
    </div>
  )
}
