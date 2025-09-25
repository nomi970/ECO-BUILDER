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
        <h2 className={style.heading}>Your ideas deserve to become reality.</h2>
        <p className={style.description}>
          When you choose Connect Eco Builders, you’re working with a team that takes responsibility for every detail. All work is warranty-backed, covering not just our builders but also trusted subcontractors like electricians and plasterers. We provide clear, staged payment breakdowns that are VAT registered, so you always know where you stand. And we handle all the compliance too, from Building Control sign-offs to party wall agreements and inspections. ensuring your project runs smoothly from start to finish

        </p>
        <p className={style.description}>We also welcome partnerships with suppliers, architects, and community
          organisations who share the same commitment to excellence and innovation.
        </p>
        <button className={style.ctaButton} onClick={handleClick}>
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Explore;
