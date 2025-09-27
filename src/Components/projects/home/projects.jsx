import React, { useEffect, useState } from "react";
import project_data from "../../data/data.json";
import { useParams } from "react-router-dom";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import data from "./../../data/data.json";
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";

function Projects() {
  const [isActive, setIsAtive] = useState({});

  return (
    <div className={style.pt_50}>
      <section className="custom-container">
        <FirstHeading className="text-center" heading={<>Featured Projects</>} />
        <p style={{ color: '#494949ff', fontSize: '20px', paddingTop: '16px' }}>
          From 45m² extensions in Maidenhead to new build chalets in Gerrards Cross and bungalow conversions in Reading, every project we complete is backed by warranty, Building Control approval and 15+ years of local experience.
          Explore our portfolio to see how we’ve helped families and businesses turn ideas into spaces that last.

        </p>

        <div className={style.project__main_wrapper}>
          <div className={style.content_row}>
            {/* Left Column */}
            <div className={style.blog_row}>
              {project_data?.project_data?.map((item) => {
                const title = item.title?.replace(/\s+/g, "-").toLowerCase();
                console.log(title, 'title')
                return (
                  <div key={item.id} className={style.blog_col}>
                    <Link
                      to={`/projects/${item.id}?title=${title}`}
                      className={style.blogCard}
                    >
                      <img src={item.blogImag} alt="" />
                      <h2>{item.title}</h2>
                      <div className={style.use_row}>
                        <div>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                      <div className={style.btnWrapper}>
                        <button className={style.readmore_btn} type="button">
                          Learn More
                        </button>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right Sidebar */}
            <div className={style.right_sidebar}>
              <div className={style.right_mini_wrapper}>
                {project_data?.project_data?.map((item) => {
                  const title = item.title?.replace(/\s+/g, "-").toLowerCase();
                  return (
                    <div key={item.id} className={style.blog_col}>
                      <Link
                        to={`/projects/${item.id}?title=${title}`}
                        className={style.blogCard}
                      >
                        <div className={style.right_sidebar__flx_wraper}>
                          <img src={item.blogImag} alt="" />
                          <div>
                            <h2>{item.title}</h2>
                            <div className={style.use_row}>
                              <div>
                                <p className={style.right_sidebar_desc}>
                                  {item.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className={style.import_keyword}>
                <h2>Important Keywords</h2>
                <ul>
                  <li>Project Management</li>
                  <li>Construction</li>
                  <li>Engineering</li>
                  <li>Design</li>
                  <li>Consulting</li>
                  <li>Technology</li>
                  <li>Innovation</li>
                  <li>Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
