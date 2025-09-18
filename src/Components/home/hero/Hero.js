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
                            Your Space, Our Expertise
                        </p>
                        <p className="text-white" style={{ fontSize: "20px", paddingTop: "0" }}>Trusted builders delivering residential and commercial construction services
                            across West London, Thames Valley, Hertfordshire, and Buckinghamshire.
                            From new builds to extensions and renovations, we turn your ideas into reality
                            with quality, precision and care.
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
                    <p className="" style={{ fontSize: "20px", paddingTop: "22px" }}>
                        We’re proud to be approved and recognised by leading UK construction
                        authorities and trade associations. Our certifications ensure that every project we
                        deliver meets the highest standards of safety, sustainability, and workmanship.

                    </p>
                </div>
            </section>

        </div>
    )
}
