import React from 'react';
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";
import style from './home.module.css';
function home() {
  return (
    <div>
       <section className={style.banner_sec}>
            <div className='custom-container'>
                <div className={style.banner_heading}>
                    <FirstHeading heading={<>Building the Future with <span className='color-yellow'>Precision and Purpose</span></>} />
                </div>
            </div>


        </section>
    </div>
  )
}

export default home
