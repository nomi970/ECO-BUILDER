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
            Our approach is simple, safe builds, quality workmanship and satisfied clients. These principles guide every project we deliver across Berkshire and West London. Our values are the foundation of everything we build.

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
                100% Building Control sign-off record. Every project is built with strict safety
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
                Warranty covers every trade, from electrics to plastering. We aim for outstanding results, using modern
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
                Clear breakdowns, VAT registered, no hidden costs. By listening carefully, planning
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
