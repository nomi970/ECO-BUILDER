import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./touch.module.css";

const ContactSection = () => {
  return (
    <div className={`${styles.section} custom-container`}>
      <div className={styles.card}>
        <div className={styles.leftImage}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Let’s build your future together. <br />
            Contact us to start your project today.
          </p>

          <div className={styles.wq}>
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Main Office</h3>
                <p>268 Bath Road Slough SL1 4DX</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>info@connectecobuilders.com</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>07407 556158<br />01753 376515</p>
              </div>
            </div>
          </div>

          <div className={styles.socialSection}>
            <p className={styles.followText}>Follow Us On Social Media</p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/share/196LiTLvvq/"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
