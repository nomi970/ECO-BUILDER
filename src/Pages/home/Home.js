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
  const data2 = [
    {
      id: 1,
      img: "https://i.ibb.co/Ld97w5YV/2.webp",
      title: "New Build",
      desc: "From a plot of land to a finished home, built to modern standards. We design and construct modern, durable and stylish new builds that meet the highest UK building standards.",
      icon: "https://cdn-icons-png.flaticon.com/128/16120/16120617.png",
      link: "/new-build"
    },
    {
      id: 2,
      img: "https://i.ibb.co/0VngV85h/3.webp",
      title: "Home Extensions",
      desc: "Add more space and value to your property with loft, kitchen, or garage conversions designed to match your lifestyle.",
      icon: "https://cdn-icons-png.flaticon.com/128/10726/10726374.png"
    },
    {
      id: 3,
      img: "https://lh3.googleusercontent.com/6kOa7DjkgIlew2E8tP9Vc7CODRPnll3s6JB64hBNYTviTpxdKLPFhmMsT6EIkGGyo52MAs7ep6jtiNzXLwK3mYK5EA9FUJGwSEuxYgsI7R0zSI_5b9hD_WYj7KqnWsA=w599-nu-rw-e365",
      title: "Refurbishments & Renovations",
      desc: "Transform outdated spaces into modern, energy-efficient and functional environments for homes and businesses.",
      icon: "https://cdn-icons-png.flaticon.com/128/8994/8994135.png"
    },
    {
      id: 4,
      img: "https://lh3.googleusercontent.com/pWCnBEudJsA3ZBTh1QO5lwWi-mnnxf77r0rLxY6EGwie3FOkpmx41HEL-Ixu1nRSBp6XAgyXfPizTYD0O8rgk07-YWV5-XgnHIkhy3CEO9xECCJ3h2cWDOT4Oha1bK8=w599-nu-rw-e365",
      title: "Loft Conversions",
      desc: "Turn unused attic space into a stylish bedroom, office, or living area with our expert loft conversion services.",
      icon: "https://cdn-icons-png.freepik.com/256/2942/2942452.png?ga=GA1.1.1560891219.1722257603&semt=ais_hybrid"
    },
    {
      id: 5,
      img: "https://lh3.googleusercontent.com/7Tx2pNcxDxH4Nast8oYxvUwA1kLD6KszJ7zgV-ZvCvErIHH8nty5bYdc-bd3H1U51C0UDdkGQWKQZYuqToDqS_y5DEz-Hlpgk_biPbFK2o8deE4omgi1tYVdzAoUvw=w800-nu-rw-e365",
      title: "Property Maintenance & Repairs",
      desc: "From small repairs to major fixes, we provide reliable property care that keeps your home or business in top condition.",
      icon: "https://cdn-icons-png.flaticon.com/128/12618/12618649.png"
    },
    {
      id: 6,
      img: "https://lh3.googleusercontent.com/KJwVsWv78Pxpl53AiZ7hMexs8GPohsRqHnuZM4Hrewa9WMkwkJtkJURWED4mNEzipY4GlRRqizVfLKVZ0RSrk-m5wAOrF4ulCFbjUXjzopKeqRyHxmOx4BgoX4mc=w599-nu-rw-e365",
      title: "Project Management",
      desc: "Enjoy a stress-free build with our end-to-end project management, ensuring your project stays on time and within budget.",
      icon: "https://cdn-icons-png.flaticon.com/128/2942/2942551.png"
    },
  ]
  const data3 = [
    {
      img: "https://i.ibb.co/Ld97w5YV/2.webp",
      title: "Double-Storey Extension & Refurbishment - Maidenhead (45m² open-plan with bi-fold doors, completed in 12 weeks)",
    },
    {
      img: "https://i.ibb.co/0VngV85h/3.webp",
      title: "Double-Storey Extension - Reading (rear extension with modern interiors, on-time delivery)",
    },
    {
      img: "https://lh3.googleusercontent.com/6kOa7DjkgIlew2E8tP9Vc7CODRPnll3s6JB64hBNYTviTpxdKLPFhmMsT6EIkGGyo52MAs7ep6jtiNzXLwK3mYK5EA9FUJGwSEuxYgsI7R0zSI_5b9hD_WYj7KqnWsA=w599-nu-rw-e365",
      title: "New Build Home - Great Missenden (plot to family home with eco-heating & open-plan living)",
    },
    {
      img: "https://lh3.googleusercontent.com/zH0P5HE7XTlf8nwxIHh8ilFYDLTc_boUgAnoyuSGFcnmLhTrA_MIcI7sdLWfZsXLE0G_umqUa7J9JwI7J1VCR_CREtS1kyb8s0_-6r78m8NgOF4VuFWKLCp1hIYY=w599-nu-rw-e365",
      title: "Chalet Bungalow Conversion - Gallowstree Common (single-storey converted to double-storey with new bedrooms)",
    },
    {
      img: "https://lh3.googleusercontent.com/tMHxjScQUyNFUfuMooWIM7YYoPNqQBE3vhE_eyGCNLZTIoaymjwWWFKd_rD5NPOEuiPiQeUWqyciBS6_K_lMl--WufKmv2PkFeWl8jpN6E76KWl9mVs-KdnO3zfBjww=w599-nu-rw-e365",
      title: "New Build Chalet Bungalow - Gerrards Cross (two-storey new build combining traditional style & energy efficiency)",
    },
    {
      img: "https://lh3.googleusercontent.com/TQM6ybANxzKjrYt1Xp07Vr5gC8ptzlEJavhpFBt04X5orNmORTbfWjbj578L4B1k8hR9R6snXvRWexXwRwbwELI4ZCUNQ7yAsz9aoJqPROIvbNMp9cA3myS7oHosVg=w599-nu-rw-e365",
      title: "Single-Storey Extension - Reading (ground-floor extension with open-plan kitchen & upgraded interiors)",
    },

  ]
  useEffect(() => {
    document.title = "Home"
  }, [])
  return (
    <>
      <Hero />
      <TextPlagirism
        data2={data2}
        heading={<>We Provide The <span className='color-yellow'>Best Construction Services</span></>}
        para="At Connect Eco Builders,We provide a wide range of building services, backed by skilled tradesmen and vetted subcontractors we’ve worked with for years. From concept to completion, our team ensures every project is delivered with innovation, precision and on-time delivery."
        styling={true}
        styling2={false}
      />
      <EasySteps />
      {/* <PlansPricing /> */}
      <Numbers
        heading={<>Powering Growth with   <span className='color-yellow'>Proven Results</span></>}
        para="Our numbers reflect the trust, quality and commitment we deliver every day."
        data={data}
      />
      <TextPlagirism2
        data2={data3} className="text_gtid"
        heading={<>Our Featured   <span className='color-yellow'>Projects</span></>}
        para="Our Recent Work Across Berkshire & West London"
        styling={false}
        styling2={true}

      />
      {/* <Link to="#" className={`${style.readmore}`}>Read More</Link> */}
      <OurCustomer />
      <ContactSection />
    </>
  )
}
