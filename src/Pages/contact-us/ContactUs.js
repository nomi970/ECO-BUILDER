import React, { useEffect } from 'react'
import { Banner } from '../../Components/contact/banner/Banner'
import { TextPlagirism } from '../../Components/global/text-plag/TextPlagirism'
import { Numbers } from '../../Components/global/numbers/Numbers'
import { OurCustomer } from '../../Components/global/our-customer/OurCustomer'

export const ContactUs = () => {
  useEffect(()=>{
    document.title = "Contact Us"
  },[])
  const data = [
    {
      title : "2M+",
      desc : "Tickets Delivered This Month"
    },
    {
      title : "46K+",
      desc : "Active Customers Rate"
    },
    {
      title : "99%",
      desc : "Customer Satisfaction Rate"
    },
  ]
  const data2 = [
    {
        img:"./images/benift.png",
        title:"What is Gptsafe, and the benefits?",
        desc:"Enhance content integrity, prevent AI-generated deception, and assure accurate information. Bolster trustworthiness in digital content with our 95% accurate AI plagiarism detection system, countering misinformation effectively."
    },
    {
        img:"./images/accurate.png",
        title:"95% accurate",
        desc:"Experience a remarkable 95% accuracy rate. Our AI plagiarism detection system ensures reliable content assessment, safeguarding against misleading information and reinforcing credibility in digital content."
    },
    {
        img:"./images/time.png",
        title:"Save your time",
        desc:"Reclaim valuable time. Our AI plagiarism detection system swiftly analyzes content, sparing you from manual checks. Focus on what matters while ensuring accuracy and credibility."
    },
  ]
  return (
    <>
      <Banner />
      <TextPlagirism 
        data2={data2}
        heading={<>Simple And Credible open AI to <span className='color-green'>heck Ai Generated</span> Text Plagiarism</>}
        para="See What Sets GPTSAFE apart"
      />
      <Numbers 
        heading={<>Numbers Are <span className='color-green'>Telling</span> Our Story</>} 
        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        data={data}
      />
      <OurCustomer />
    </>
  )
}
