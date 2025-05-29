import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import data from "../../Components/data/data.json";
import { useParams } from 'react-router-dom';
import style from "./blog-detail.module.css";
import Touch  from '../../Components/global/touch/touch';

export const BlogDetail = () => {
  const [isActive, setIsAtive] = useState({});
  const { id } = useParams();
  const result = data.data;
  useEffect(() => {
    const blog = result.find(blog => blog.id === parseInt(id))
    setIsAtive(blog);
    document.title = blog.title;
  }, [result, id])
  
  return (
    <>
     <section key={isActive.id} className={style.service_detail_hero} style={{ backgroundImage: `url(${isActive.service1_img})` }}>
     <div className={style.overlay}></div>
        <div className='custom-container'>
          <div className={style.about_hero_text}>
            <nav aria-label="breadcrumb">
              <p>
                <Link to="/" className={style.breadcrumb_link}>Home</Link>
                <span className={style.breadcrumb_separator}>&gt;</span>
                <Link to="/blog" className={style.breadcrumb_link}>Service</Link>
                <span className={style.breadcrumb_separator}>&gt;</span>
                <span className={style.breadcrumb_title}>{isActive.title}</span>
              </p>
            </nav>
            <h1 className={style.hero_title_stl}>{isActive.title}</h1>
            <p className={style.hero_title_desc}>{isActive.service1_desc}</p>
          </div>
        </div>
      </section>
      <section>
        <div className='custom-container'>
        <h2 className={style.service1_sec2_title}><span className='color-yellow'>{isActive.service_detail_sec_1_title1_spn}</span>{isActive.service_detail_sec_1_title1}</h2>
        <div className={style.sectionContainer}>
      <div className={style.boxContainer}>
        <div className={`${style.box} ${style.boxBack}`}></div>
        <div className={`${style.box} ${style.boxFront}`}></div>
      </div>
      <div className={style.textContainer}>
        <p>{isActive.service_detail_sec_1_title1_desc}</p>
        <ul>
          <h2>{isActive.service_detail_sec_1_title1_desc_ul_title}</h2>
          <li>{isActive.desc_ul_title_li1}</li>
          <li>{isActive.desc_ul_title_li2}</li>
          <li>{isActive.desc_ul_title_li3}</li>
          <li>{isActive.desc_ul_title_li4}</li>
          <li>{isActive.desc_ul_title_li5}</li>
        </ul>
      </div>
    </div>
        </div>
      </section>
      <section>
  <div className="custom-container">
  <h2 className={style.service1_sec2_title}>{isActive.service_detail_sec_2_title01}<span className='color-yellow'>{isActive.service_detail_sec_2_title1_spn}</span>{isActive.service_detail_sec_2_title}</h2>
  <p className={style.service1_sec2_desc}>{isActive.service_detail_sec_2_title_desc}</p>
    <div className={style.missionWrapper}>
      <div className={style.leftBox}>
        {/* Image */}
      </div>
      <div className={style.building_services_main}>
  {/* Personalized Design */}
  <div className={style.flx__war_500} style={{ display: 'flex', marginBottom: '40px', gap: '20px'  }}>
    <div style={{ width: '120px', marginRight: '20px' }}>
      <img src='../../../images/Personalized_Design.png'></img>
    </div>
    <div>
      <h2 className={style.building_services_title}>{isActive.sec_3_title01}</h2>
      <p className={style.building_services_desc}>{isActive.sec_3_title01_desc}</p>
    </div>
  </div>

  {/* Quality Craftsmanship */}
  <div className={style.flx__war_500} style={{ display: 'flex', marginBottom: '40px', gap: '20px' }}>
    <div style={{ width: '100px', marginRight: '20px' }}>
    <img src='../../../images/Quality_Craftsmanship.png'></img>
    </div>
    <div>
      <h2 className={style.building_services_title}>{isActive.sec_3_title02}</h2>
      <p className={style.building_services_desc}>
      {isActive.sec_3_title02_desc}</p>
    </div>
  </div>

  {/* Innovative Solutions */}
  <div className={style.flx__war_500} style={{ display: 'flex', gap: '20px' , marginBottom: '40px',  }}>
    <div style={{ width: '90px', marginRight: '20px' }}>
    <img src='../../../images/Innovative_Solutions.png'></img>
    </div>
    <div>
      <h2 className={style.building_services_title}>{isActive.sec_3_title03} </h2>
      <p className={style.building_services_desc}>{isActive.sec_3_title03_desc}</p>
    </div>
  </div>

    {/* Innovative Solutions */}
    <div className={style.flx__war_500} style={{ display: 'flex', gap: '20px' }}>
    <div style={{ width: '90px', marginRight: '20px' }}>
    {/* <img src='../../../images/roff-light.png'></img> */}
    </div>
    <div>
      <h2 className={style.building_services_title}>{isActive.sec_3_title04} </h2>
      <p className={style.building_services_desc}>{isActive.sec_3_title04_desc}</p>
    </div>
  </div>

</div>

    </div>
  </div>
</section>

      <Touch />
    </>
  )
}
