import React, { useEffect } from 'react'
import { Numbers } from '../../Components/global/numbers/Numbers'
import {Banner} from '../../Components/contact/banner/Banner'
import ContactSection from '../../Components/global/contactSection/contactSection'

export const ContactUs = () => {
  useEffect(()=>{
    document.title = "Contact Us"
  },[])
  const data = [
    {
      title : "109",
      desc : "Expert Workers"
    },
    {
      title : "485",
      desc : "Happy Clients"
    },
    {
      title : "789",
      desc : "Completed Projects"
    },
    {
      title : "890",
      desc : "Running Projects"
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
      <ContactSection />
    </>
  )
}
