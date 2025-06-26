import React, { useEffect } from 'react'
import { Hero } from '../../Components/home/hero/Hero'
import { TextPlagirism } from '../../Components/global/text-plag/TextPlagirism'
import { EasySteps } from '../../Components/home/easy-steps/EasySteps'
import { PlansPricing } from '../../Components/home/plans-pricing/PlansPricing'
import { Numbers } from '../../Components/global/numbers/Numbers'
import { OurCustomer } from '../../Components/global/our-customer/OurCustomer'
import { TextPlagirism2 } from '../../Components/global/text-plag/TextPlagirism2'
import ContactSection from '../../Components/global/contactSection/contactSection';


export const Home = () => {
  const data = [
    // {
    //   title : "109",
    //   desc : "Expert Workers"
    // },
    {
      title : "485",
      desc : "Happy Clients"
    },
    {
      title : "175",
      desc : "Completed Projects"
    },
    {
      title : "890",
      desc : "Running Projects"
    },
  ]
  const data2 = [
    {id: 1,
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/2.webp",
        title:"New Build",
        desc:"Specializing in new construction, we tailor each project to meet your specific needs, ensuring a seamless build from groundbreaking to final handover",
        icon: "https://cdn-icons-png.flaticon.com/128/16120/16120617.png",
        link: "/new-build"
    },
    {id: 2,
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/3.webp",
        title:"Home Extensions",
        desc:"Expand and enhance your living space with our expert addition and extension services, seamlessly integrating new areas into your existing home.",
        icon: "https://cdn-icons-png.flaticon.com/128/10726/10726374.png" 
    },
    {id: 3,
        img:"https://connectecobuilders.com/wp-content/uploads/2024/03/11.webp",
        title:"Loft or Basement Conversions",
        desc:"Expand and enhance your living space with our expert addition and extension services, seamlessly integrating new areas into your existing home.",
        icon: "https://cdn-icons-png.flaticon.com/128/8994/8994135.png" 
    },
    {id: 4,
      img:"https://lh3.googleusercontent.com/pWCnBEudJsA3ZBTh1QO5lwWi-mnnxf77r0rLxY6EGwie3FOkpmx41HEL-Ixu1nRSBp6XAgyXfPizTYD0O8rgk07-YWV5-XgnHIkhy3CEO9xECCJ3h2cWDOT4Oha1bK8=w599-nu-rw-e365",
      title:"Design and Build",
      desc:"Crafting your dream home from concept to completion, our custom home building services ensure a personalized living space that reflects your unique style and needs.",
      icon: "https://cdn-icons-png.freepik.com/256/2942/2942452.png?ga=GA1.1.1560891219.1722257603&semt=ais_hybrid" 
  },
  { id: 5,
    img:"https://lh3.googleusercontent.com/7Tx2pNcxDxH4Nast8oYxvUwA1kLD6KszJ7zgV-ZvCvErIHH8nty5bYdc-bd3H1U51C0UDdkGQWKQZYuqToDqS_y5DEz-Hlpgk_biPbFK2o8deE4omgi1tYVdzAoUvw=w800-nu-rw-e365",
    title:"Commercial Construction",
    desc:"For commercial spaces, we provide tailored construction solutions to meet your business needs, ensuring functionality and aesthetic appeal.",
    icon: "https://cdn-icons-png.flaticon.com/128/12618/12618649.png" 
},
{id: 6,
  img:"https://lh3.googleusercontent.com/KJwVsWv78Pxpl53AiZ7hMexs8GPohsRqHnuZM4Hrewa9WMkwkJtkJURWED4mNEzipY4GlRRqizVfLKVZ0RSrk-m5wAOrF4ulCFbjUXjzopKeqRyHxmOx4BgoX4mc=w599-nu-rw-e365",
  title:"Renovations & Remodeling",
  desc:"Transform your space with our renovation and remodeling expertise, bringing fresh life and functionality to your home or business.",
  icon: "https://cdn-icons-png.flaticon.com/128/2942/2942551.png" 
},
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
  {     img:"https://lh3.googleusercontent.com/zH0P5HE7XTlf8nwxIHh8ilFYDLTc_boUgAnoyuSGFcnmLhTrA_MIcI7sdLWfZsXLE0G_umqUa7J9JwI7J1VCR_CREtS1kyb8s0_-6r78m8NgOF4VuFWKLCp1hIYY=w599-nu-rw-e365",
    title:"",
    desc:"Single story bungalow converted to double story Chalet bungalow in GALLOWSTREE COMMON, READING"
},
{     img:"https://lh3.googleusercontent.com/tMHxjScQUyNFUfuMooWIM7YYoPNqQBE3vhE_eyGCNLZTIoaymjwWWFKd_rD5NPOEuiPiQeUWqyciBS6_K_lMl--WufKmv2PkFeWl8jpN6E76KWl9mVs-KdnO3zfBjww=w599-nu-rw-e365",
  title:"",
  desc:"New build double story chalet bungalow in GERRARD CROSS"
},
{     img:"https://lh3.googleusercontent.com/TQM6ybANxzKjrYt1Xp07Vr5gC8ptzlEJavhpFBt04X5orNmORTbfWjbj578L4B1k8hR9R6snXvRWexXwRwbwELI4ZCUNQ7yAsz9aoJqPROIvbNMp9cA3myS7oHosVg=w599-nu-rw-e365",
  title:"",
  desc:"Single story Extension and Renovation in READING"
},

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
      <ContactSection />
    </>
  )
}
