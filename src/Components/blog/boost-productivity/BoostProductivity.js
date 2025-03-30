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
        <h2 className="mt-3">Building Integrity, Excellence, and Innovation into Every Project</h2>
        <p>
          At the core of our operations are our values: Integrity, Excellence, and Innovation. These principles steer every decision and underscore our commitment to exceptional results and high ethical standards, fostering lasting relationships and trust with each client.
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
              To us, no project is successful unless it is built safely. We believe that all accidents and unsafe work practices are preventable, and through proper planning and training, employee engagement and empowerment, and constant vigilance, we can ensure a safe workplace for everyone.
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
              "We relentlessly pursue excellence, delivering top-notch assets and experiences. Through innovation and efficiency, we tackle challenges, earning trust and respect. Our ethos: do it right, build relationships."
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
              "We prioritize a proactive approach, investing time and effort in understanding the nuanced needs of every client. By doing so, we ensure meticulous attention to detail in fulfilling their requirements, ultimately resulting in their complete satisfaction with our services."
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
