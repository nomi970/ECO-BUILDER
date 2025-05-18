import React from 'react';
import data from "../../data/data.json";
import style from "./blog.module.css";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';


export const Blogs = () => {

    return (
        <>
            <section className='custom-container'>
                <div className={style.blog_row}>
                    {
                        data?.data?.map((item) => {
                            const title = item.title?.replace(/\s+/g, '-').toLowerCase(); 
                            return (
                                <div key={item.id} className={style.blog_col}>
                                <Link to={`/service/${item.id}?title=${title}`} className={style.blogCard}>
                                    <img src={item.blogImag} alt='' />
                                    <h2>{item.title}</h2>
                                    <div className={style.use_row}>
                                        <div>
                                            <p>{item.designation}</p>
                                        </div>
                                    </div>
                                    <div className={style.btnWrapper}>
                                        <button className={style.readmore_btn} type='button'>Learn More</button>
                                    </div>
                                </Link>

                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className={style.pagination}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div> */}
            </section>
        </>
    )
}
