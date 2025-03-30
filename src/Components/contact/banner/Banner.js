import React from 'react';
import style from "./banner.module.css";

export const Banner = () => {
    return (
        <>
            <section>
                <div className='custom-container custom_row'>
                    <div className={style.banner_row}>
                        <div className={style.banner_col}>
                            <img src='./images/contact.png' alt='' />
                        </div>
                        <div className={style.banner_col}>
                            <h6>About Our Journey</h6>
                            <h1>Uniting <span className='color-green'>Tech and Creativity</span> to Revolutionize Content Generation</h1>
                            <p>At the heart of our story lies the harmonious fusion of cutting-edge technology and boundless creativity. We embarked on a journey to revolutionize content generation, seamlessly blending AI innovation with the artistry of human expression. Our commitment to redefining how content is crafted drives us forward, as we strive to deliver captivating narratives, authentic engagement, and a new era of communication.</p>
                            <a href='#'>Check AI Generated Text Plagiarism</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
