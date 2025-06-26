import React from 'react';
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";
import style from "./banner.module.css";

export const Banner = () => {
  return (
    <>
        <section className={style.banner_sec}>
            <div className='custom-container'>
                <div className={style.banner_heading}>
                    {/* <p>Blogs</p> */}
                    <FirstHeading heading={<>Constructing Excellence, <span className='color-yellow'>Building the Future</span></>} />
                </div>
            </div>


        </section>
        <section>
            <div className='custom-container'>
                
            </div>

        </section>
        
    </>
  )
}
