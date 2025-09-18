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
          <p className={style.hero_desc}>At Connect Eco Builders, we believe construction is more than bricks and
            mortar, it’s about creating spaces that inspire, connect, and last for
            generations. With years of experience in residential and commercial
            construction, we’ve built a reputation for quality, reliability and on-time
            delivery across West London, Thames Valley, Hertfordshire and
            Buckinghamshire.
          </p>
          <p className={style.hero_desc}>From new builds and extensions to renovations and project management,
            our mission is simple: to combine craftsmanship, innovation, and integrity to
            bring your vision to life.

          </p>
        </div>
      </div>
    </section>
  )
}
