// import React from 'react';
// import style from "./banner.module.css";

// export const Banner = () => {
//     return (
//         <>
//             <section>
//                 <div className='custom-container custom_row'>
//                     <div className={style.banner_row}>
//                         <div className={style.banner_col}>
//                             <img src='./images/contact.png' alt='' />
//                         </div>
//                         <div className={style.banner_col}>
//                             <h6>About Our Journey</h6>
//                             <h1>Uniting <span className='color-green'>Tech and Creativity</span> to Revolutionize Content Generation</h1>
//                             <p>At the heart of our story lies the harmonious fusion of cutting-edge technology and boundless creativity. We embarked on a journey to revolutionize content generation, seamlessly blending AI innovation with the artistry of human expression. Our commitment to redefining how content is crafted drives us forward, as we strive to deliver captivating narratives, authentic engagement, and a new era of communication.</p>
//                             <a href='#'>Check AI Generated Text Plagiarism</a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
import React from 'react'
import { FirstHeading } from '../../global/headings/first-heading/FirstHeading'
import style from './banner.module.css'

export const Banner = () => {
  return (
    <section className={style.about_hero}>
    <div className='custom-container'>
        <div className='about_hero_text'>
            {/* <h1 className=''>About Us</h1> */}
            {/* <p className=''>We are a team of professionals who are dedicated to providing you with the best services.</p> */}
             <FirstHeading heading={<><span className='color-yellow'>Contact Us</span></>} />
              <p className={style.hero_desc}>Expert construction services with quality, innovation, and on-time delivery. From concept to completion, we bring your vision to life with unparalleled craftsmanship and attention to detail.</p>
        </div>
            </div>
    </section>
  )
}
