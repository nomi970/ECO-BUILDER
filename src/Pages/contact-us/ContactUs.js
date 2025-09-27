import React, { useEffect } from 'react'
import { Numbers } from '../../Components/global/numbers/Numbers'
import {Banner} from '../../Components/contact/banner/Banner'
import ContactSection from '../../Components/global/contactSection/contactSection'
import Touch from '../../Components/global/touch/touch'

export const ContactUs = () => {
  useEffect(()=>{
    document.title = "Contact Us"
  },[])
  const data = [
     {
      title : "61",
      desc : "Verified Reviews",
      desc2 : "Checkatrade score 9.63/10"
    },
    {
      title: "15+",
      desc: "Years of Experience",
      desc2: "Delivering projects across Berkshire & West London"
    },
    {
      title: "175",
      desc: "Completed Projects",
      desc2: "£100k–£500k projects alongside 7–8 smaller jobs annually"
    },
    {
      title : "890",
      desc : "Running Projects",
      desc2: "Every project passed inspections without delays"
    },
  ]

  return (
    <>
      <Banner />
      
      
      <Numbers 
        heading={<>Powering Growth with  <span className='color-yellow'>Proven Results</span></>} 
        para="Our numbers are more than just figures; they represent the trust, hard work, and innovation we deliver every day."
        data={data}
      />
      <Touch />
      <ContactSection />
    </>
  )
}
