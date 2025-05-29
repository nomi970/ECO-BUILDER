import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Components/data/data.json";
import { useParams } from "react-router-dom";
import style from "./../blog/blog-detail.module.css";
import projects from "../../Components/projects/home/projects";
import projectsData from "../../Components/data/data.json";
import RecentProjects from "../../Components/projects/home/RecentProjects";
// import Explore from "../../Components/blog/explore/explore";
import Slider from "../../Components/projects/home/slider";


function ProjectDetial() {
  const [isActive, setIsAtive] = useState({});
  const { id } = useParams();
  const result = projectsData.project__details__data_file;
  useEffect(() => {
    const project = result.find((project) => project.id === parseInt(id));
    setIsAtive(project);
  }, [result, id]);

  return (
    <div>
      <section
        key={isActive.id}
        className={style.service_detail_hero}
        style={{ backgroundImage: `url(${isActive.service1_img})` }}
      >
        <div className={style.overlay}></div>
        <div className="custom-container">
          <div className={style.about_hero_text}>
            <nav aria-label="breadcrumb">
              <p>
                <Link to="/" className={style.breadcrumb_link}>
                  Home
                </Link>
                <span className={style.breadcrumb_separator}>&gt;</span>
                <Link to="/projects" className={style.breadcrumb_link}>
                  Projects
                </Link>
                <span className={style.breadcrumb_separator}>&gt;</span>
                <span className={style.breadcrumb_title}>{isActive.title}</span>
              </p>
            </nav>
            <h1 className={style.hero_title_stl}>{isActive.title}</h1>
            <p className={style.hero_title_desc}>{isActive.service1_desc}</p>
          </div>
        </div>
      </section>
      {Object.keys(isActive).length > 0 && <RecentProjects data={isActive} />}
      {/* <Explore /> */}
      <Slider />
    </div>
    
  );
}

export default ProjectDetial;
