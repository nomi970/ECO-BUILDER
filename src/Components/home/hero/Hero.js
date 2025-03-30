import React from 'react'
import { FirstHeading } from '../../global/headings/first-heading/FirstHeading';
import { Link } from 'react-router-dom';
import style from "./hero.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Hero = () => {
  return (
    // <section className='hero_sec'>
    //     <div className='custom-container'>
    //         <div className={`${style.banner} text-center`}>
    //            <span>Welcome</span>
    //            <FirstHeading heading = {<>Trustworthy <span className='color-green'>Ai Detector</span> with Intelligence</>} />
    //            <p className='text-sm color-grey fw-normal'>Introducing our AI plagiarism detection for AI-generated text, ensuring 95% accuracy. Elevate content authenticity, combat misinformation, and foster trust in the digital realm.</p>
    //            <Link to="#" className={`${style.banner_btn}`}>Check AI Generated Text Plagiarism</Link>
    //         </div>

            
    //     </div>
    //     <Row className={style.banner_row}>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f12.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f11.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f10.png'  alt='' />
    //                 <img src='./images/f9.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f8.png'  alt='' />
    //                 <img src='./images/f7.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f6.png'  alt='' />
    //                 <img src='./images/f5.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f4.png'  alt='' />
    //                 <img src='./images/f3.png'  alt='' />
    //             </Col>
    //             <Col className={`${style.banner_Col} p-0`}>
    //                 <img src='./images/f2.png'  alt='' />
    //                 <img src='./images/f1.png'  alt='' />
    //             </Col>
    //         </Row>
    // </section>
    <section className={`${style.hero_sec}`} >
    {/* Background Video */}
    <video className={`${style.hero_video}`} autoPlay loop muted playsInline>
        <source src="./images/home_hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className={`${style.hero_overlay}`}></div>
    {/* Content Container */}
    <div className="custom-container">
        <div className={`${style.banner} text-center`}>
            <span style={{ color: "white", fontSize: "22px" }}>Welcome</span>
            <FirstHeading heading={<><span style={{ color: "white" }}>WE BUILD YOUR</span> <span className="color-yellow">DREAMS.</span></>} />
            <p className={`${style.text_blr_white}`}>
            YOUR SPACE OUR EXPERTISE
            </p>
            <Link to="#" className={`${style.banner_btn}`}>Get Free Quote</Link>
        </div>
    </div>

    {/* Image Rows */}
    {/* <Row className={style.banner_row}>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f12.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f11.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f10.png' alt='' /><img src='./images/f9.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f8.png' alt='' /><img src='./images/f7.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f6.png' alt='' /><img src='./images/f5.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f4.png' alt='' /><img src='./images/f3.png' alt='' /></Col>
        <Col className={`${style.banner_Col} p-0`}><img src='./images/f2.png' alt='' /><img src='./images/f1.png' alt='' /></Col>
    </Row> */}
</section>

  )
}
