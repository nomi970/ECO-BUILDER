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
                        <p>For over 15 years, we’ve delivered everything from new builds in Gerrards Cross to extensions in Maidenhead and refurbishments in Reading. With a Checkatrade score of 9.63/10 and warranty-backed work, our services combine quality, compliance, and trusted local experience</p>
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
