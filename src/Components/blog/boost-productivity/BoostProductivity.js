import React from "react";
import { HardHat, Star, Smile } from "lucide-react";
import style from "./boost.module.css"; // Import CSS Module

export const BoostProductivity = () => {
  return (
    <section className={style.boost_section}>
      <div className="custom-container">
        {/* Top Core Values Section */}
        <div className={style.core_values_header}>
          <span className={style.underline}></span> <span className="color-yellow">OUR CORE VALUES</span>
          <h2 className="mt-3">Building Integrity, Excellence & Innovation Into Every Project</h2>
          <p>
            Our values are the foundation of everything we build.
          </p>
          <p>
            We believe strong values create strong results. Guided by Integrity, Excellence
            and Innovation, we ensure every project reflects not only high standards but
            also lasting relationships with our clients.

          </p>
        </div>

        {/* Core Values Icons Section */}
        <div className={style.container}>
          <div className={style.values_container}>
            {/* Safety First */}
            <div className={style.value_box}>
              <div className={style.icon_container}>
                <HardHat size={50} color="#feb900" />
              </div>
              <h3>Safety First</h3>
              <p>
                We never compromise on safety. Every project is built with strict safety
                protocols, proper training and proactive planning. By fostering a culture of
                awareness and responsibility, we ensure a safe environment for our team,
                partners, and clients.

              </p>
            </div>

            {/* Divider */}
            <div className={style.divider}></div>

            {/* Delivering Excellence */}
            <div className={style.value_box}>
              <div className={style.icon_container}>
                <Star size={50} color="#feb900" />
              </div>
              <h3>Delivering Excellence</h3>
              <p>
                For us, good is never enough. We aim for outstanding results, using modern
                methods and skilled craftsmanship to exceed expectations. With an eye for detail
                and a drive for perfection, we deliver projects that clients are proud of.
              </p>
            </div>

            {/* Divider */}
            <div className={style.divider}></div>

            {/* Client Satisfaction */}
            <div className={style.value_box}>
              <div className={style.icon_container}>
                <Smile size={50} color="#feb900" />
              </div>
              <h3>Client Satisfaction</h3>
              <p>
                Our clients are at the heart of what we do. By listening carefully, planning
                thoughtfully and executing precisely, we make sure every need is met. The
                result? Happy clients and long-term trust built on consistent performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
