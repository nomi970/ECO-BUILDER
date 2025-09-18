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
                        <p>From concept to completion, we deliver high-quality residential and commercial
                            construction services across West London, Thames Valley, Hertfordshire, and
                            Buckinghamshire. Whether it’s a new build, extension, or refurbishment, we
                            ensure precision, transparency and on-time delivery.</p>
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
