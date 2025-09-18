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
          <h2 className={styles.title}>Ready to Start Your Project? </h2>
          <p className={styles.subtitle}>
            Whether it’s a new build, extension, refurbishment, or repair, we’re here to
            make it happen. Our team combines experience, quality workmanship, and clear
            communication to deliver results you can trust.

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
            <p className={styles.followText}>Stay connected with us for updates and recent projects: </p>
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
