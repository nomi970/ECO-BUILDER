import React from "react";
import project_data from "../../data/data.json";
import style from "./home.module.css";
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";

function RecentProjects({ data }) {
  console.log("data",data)
  return (
    <section className={style.recent_pro_detail}>
      <div className="custom-container">
        <FirstHeading className="text-center" heading={<>Recent Projects</>} />

        <div className={style.recent_pro_content_wrapper}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          <h3>{data.process_title}</h3>
           
           <img className={style.projects_banner_image} src={data.projects_banner_image} alt='' />
          <ul>
            {data.process.map((stepObj, index) => (
              <li key={index}>
                <strong>
                  {index + 1}. {stepObj.step}
                </strong>
                <p>{stepObj.details}</p>
              </li>
            ))}
          </ul>
            <div className={style.why_choose_wrapper}>
              <div>
                <h3>{data.why_choose_title}</h3>
                <ul>
                  {data.why_choose.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
              <div>
                <img className={style.why_choose_image} src={data.why_choose_image} alt='' />
              </div>
            </div>
          

          <h3>{data.recent_projects_title}</h3>
          <ul>
            {data.projects.map((proj, index) => (
              <li key={index}>
                <strong>{proj.name}</strong>
                <p>{proj.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
