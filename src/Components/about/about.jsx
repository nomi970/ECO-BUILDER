import React from 'react'
import { FirstHeading } from "../global/headings/first-heading/FirstHeading";
import { TextPlagirism } from '../../Components/global/text-plag/TextPlagirism'
import style from './about.module.css'; 

export default function AboutComponent() {
  return (
    <section className={style.about_hero}>
    <div className='custom-container'>
        <div className='about_hero_text'>
            {/* <h1 className=''>About Us</h1> */}
            {/* <p className=''>We are a team of professionals who are dedicated to providing you with the best services.</p> */}
             <FirstHeading heading={<><span className='color-yellow'>About Us</span></>} />
              <p className={style.hero_desc}>Expert construction services with quality, innovation, and on-time delivery. From concept to completion, we bring your vision to life with precision and excellence!</p>
        </div>
            </div>
    </section>
  )
}
