import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1
import style from "./explore.module.css"; // Import the CSS Module

const Explore = () => {
  const navigate = useNavigate(); // ✅ Step 2

  const handleClick = () => {
    navigate("/contact-us"); // ✅ Step 3: Navigate to contact-us page
  };

  return (
    <section className={style.projectSection}>
      {/* Background Video */}
      <video autoPlay loop muted className={style.backgroundVideo}>
        <source src="/images/exp_bg_3.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className={style.imageOverlay}></div>

      {/* Content Container */}
      <div className={style.contentContainer}>
        <h3 className={style.subheading}>Start Building Your Vision Today</h3>
        <h2 className={style.heading}>Explore Tailored Solutions for Your Project Needs</h2>
        <p className={style.description}>
          Whether you’re a potential client seeking our expertise, a supplier looking to collaborate,
          or a community organization interested in partnership opportunities, we’re eager to hear from you.
        </p>
        <button className={style.ctaButton} onClick={handleClick}>
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Explore;
