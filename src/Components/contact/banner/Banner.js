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
          <FirstHeading heading={<><span className='color-yellow'>Get in Touch With Us</span></>} />
          <p className={style.hero_desc}>Your project deserves the right team and we’re here to help.</p>
          <p className={style.hero_desc}>Whether you’re planning a new build, extension, renovation, or repair, our experts are ready
            to guide you. We make the process simple with clear communication, honest advice, and
            reliable service.</p>
        </div>
      </div>
    </section>
  )
}
