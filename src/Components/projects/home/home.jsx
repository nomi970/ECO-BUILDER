import React from 'react';
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";
import style from './home.module.css';
function home() {
  return (
    <div>
      <section className={style.banner_sec}>
        <div className='custom-container'>
          <div className={style.banner_heading}>
            <FirstHeading heading={<>Our  <span className='color-yellow'>Projects</span></>} />
            <p style={{ color: '#fff', fontSize: '20px', paddingTop: '16px' }}>
              Showcasing the homes, extensions, and renovations we’ve proudly delivered
              across West London and beyond
            </p>
          </div>
        </div>


      </section>
    </div>
  )
}

export default home
