import React, { useEffect } from 'react'
import { Hero } from '../../Components/home/hero/Hero'
import { TextPlagirism } from '../../Components/global/text-plag/TextPlagirism'
import { EasySteps } from '../../Components/home/easy-steps/EasySteps'
import { PlansPricing } from '../../Components/home/plans-pricing/PlansPricing'
import { Numbers } from '../../Components/global/numbers/Numbers'
import { OurCustomer } from '../../Components/global/our-customer/OurCustomer'
import { TextPlagirism2 } from '../../Components/global/text-plag/TextPlagirism2'


export const Home = () => {
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
  const data2 = [
    {
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/2.webp",
        title:"New Build",
        desc:"Specializing in new construction, we tailor each project to meet your specific needs, ensuring a seamless build from groundbreaking to final handover",
        icon: "https://cdn-icons-png.flaticon.com/128/16120/16120617.png"
    },
    {
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/3.webp",
        title:"Home Extensions",
        desc:"Expand and enhance your living space with our expert addition and extension services, seamlessly integrating new areas into your existing home.",
        icon: "https://cdn-icons-png.flaticon.com/128/10726/10726374.png" 
    },
    {
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/11.webp",
        title:"Loft or Basement Conversions",
        desc:"Expand and enhance your living space with our expert addition and extension services, seamlessly integrating new areas into your existing home.",
        icon: "https://cdn-icons-png.flaticon.com/128/8994/8994135.png" 
    },
//     {
//       img:"./images/time.png",
//       title:"Design and Build",
//       desc:"Crafting your dream home from concept to completion, our custom home building services ensure a personalized living space that reflects your unique style and needs."
//   },
//   {
//     img:"./images/time.png",
//     title:"Commercial Construction",
//     desc:"For commercial spaces, we provide tailored construction solutions to meet your business needs, ensuring functionality and aesthetic appeal."
// },
// {
//   img:"./images/time.png",
//   title:"Renovations & Remodeling",
//   desc:"Transform your space with our renovation and remodeling expertise, bringing fresh life and functionality to your home or business."
// },
  ]
  const data3 = [
    {
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/1.webp",
        title:"",
        desc:"Double Story Extension and Full House Refurbishment in HOLYPORT MAIDENHEAD"
    },
    {     img:"https://connectecobuilders.com/wp-content/uploads/2024/03/1-3.webp",
        title:"",
        desc:"Double Story Extension and Full House Refurbishment in READING"
    },
    {     img:"https://lh3.googleusercontent.com/6kOa7DjkgIlew2E8tP9Vc7CODRPnll3s6JB64hBNYTviTpxdKLPFhmMsT6EIkGGyo52MAs7ep6jtiNzXLwK3mYK5EA9FUJGwSEuxYgsI7R0zSI_5b9hD_WYj7KqnWsA=w599-nu-rw-e365",
      title:"",
      desc:"From Plot of Land to New Build Project in GREAT MISSENDEN"
  },
//   {     img:"./images/accurate.png",
//     title:"",
//     desc:"Single story bungalow converted to double story Chalet bungalow in GALLOWSTREE COMMON, READING"
// },
// {     img:"./images/accurate.png",
//   title:"",
//   desc:"New build double story chalet bungalow in GERRARD CROSS"
// },
// {     img:"./images/accurate.png",
//   title:"",
//   desc:"Single story Extension and Renovation in READING"
// },

  ]
  useEffect(()=>{
    document.title = "Home"
  },[])
  return (
    <>
      <Hero />
      <TextPlagirism 
        data2={data2}
        heading={<>We Provide The <span className='color-yellow'>Best Construction Services</span></>}
        para="Expert construction services with quality, innovation, and on-time delivery. From concept to completion, we bring your vision to life with precision and excellence!"
        styling={true}
        styling2={false}
      />
      <EasySteps />
      {/* <PlansPricing /> */}
      <Numbers 
        heading={<>Powering Growth with   <span className='color-yellow'>Proven Results</span></>} 
        para="Our numbers are more than just figures; they represent the trust, hard work, and innovation we deliver every day."
        data={data}
      />
       <TextPlagirism2 
        data2={data3} className="text_gtid"
        heading={<>Our Featured   <span className='color-yellow'>Projects</span></>} 
        para="Explore our standout projects that showcase innovation, quality, and expertise. Each project reflects our commitment to delivering exceptional solutions tailored to our clients' needs."
        styling={false}
        styling2={true}
        
      />
       {/* <Link to="#" className={`${style.readmore}`}>Read More</Link> */}
      <OurCustomer />
    </>
  )
}
