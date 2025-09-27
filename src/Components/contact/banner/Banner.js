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
          <FirstHeading heading={<><span className='color-yellow'>Let’s talk about your project</span></>} />
          <p className={style.hero_desc}>We build across Slough, Windsor, Maidenhead, Reading, Uxbridge, Watford and West London, delivering new builds, extensions and refurbishments that pass Building Control without delay. If you want straight answers, clear pricing and a team that takes responsibility end-to-end, you’re in the right place.</p>
          <p className={style.hero_desc}>We’re 15+ years in the trade with warranty-backed work and vetted subcontractors we’ve used for years. Tell us what you’re planning and we’ll advise the best way forward, no sales talk, just practical guidance.
</p>
        </div>
      </div>
    </section>
  )
}
