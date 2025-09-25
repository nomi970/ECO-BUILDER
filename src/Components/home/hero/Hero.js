import React from 'react'
import { FirstHeading } from '../../global/headings/first-heading/FirstHeading';
import { Link } from 'react-router-dom';
import style from "./hero.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Hero = () => {
    return (
        <div>
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
                        <span style={{ color: "white", fontSize: "22px" }}>Welcome to Connect Eco Builders</span>
                        <FirstHeading heading={<><span style={{ color: "white" }}>WE BUILD YOUR</span> <span className="color-yellow">DREAMS.</span></>} />
                        <p className={`${style.text_blr_white}`}>
                            Your Space, Our Expertise - Trusted Builders in Slough, Windsor, Maidenhead, Reading and across West London.
                        </p>
                        <p className="text-white" style={{ fontSize: "20px", paddingTop: "0" }}>With over 15 years in the building trade, Connect Eco Builders has delivered everything from small refurbishments to major new builds worth £500k+. Our work is known locally for reliability, clear communication and projects completed on time.
                        </p>
                        <Link to="/contact-us" className={`${style.banner_btn}`}>
                            Get Free Quote
                        </Link>

                    </div>
                </div>

            </section>
            <section className={`${style.approvesd_sec}`}>
                <div className="custom-container">
                    <h4>Approved By</h4>
                    <img className={`${style.approved_im}`} src='./images/Approved.jpeg'></img>
                    <h2 className='mt-4'>Recognised & Trusted Across Berkshire and West London</h2>
                    <p className="" style={{ fontSize: "20px", paddingTop: "22px" }}>
                        Our reputation is built on more than words - it’s backed by proven results and independent accreditations:
                    </p>
                    <ul>
                        <li style={{listStyle: "disc"}}>61 verified Checkatrade reviews, averaging 9.63/10 across reliability, workmanship and customer service.</li>
                        <li style={{listStyle: "disc"}}>Accredited by TrustMark and the Federation of Master Builders (FMB).</li>
                        <li style={{listStyle: "disc"}}>5+ years of experience delivering projects across Berkshire & West London</li>
                        <li style={{listStyle: "disc"}}>Warranty-backed projects – all works, including subcontractors like electricians and plasterers, are covered under the Connect Eco Builders guarantee.</li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
