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
          <p className={style.hero_desc}>Trusted builders with 15+ years’ experience delivering new builds, extensions, and refurbishments across Slough, Windsor, Maidenhead, Reading, Uxbridge, and West London.

          </p>
          <p className={style.hero_desc}>With 61 verified Checkatrade reviews averaging 9.63/10, memberships with TrustMark and the Federation of Master Builders (FMB), and a track record of projects from 45m² extensions in Maidenhead to care home upgrades in Ascot, At Connect Eco Builders, we’ve built our reputation on clear communication, warranty-backed work, and projects delivered without delay in Building Control sign-off.

          </p>
        </div>
      </div>
    </section>
  )
}
