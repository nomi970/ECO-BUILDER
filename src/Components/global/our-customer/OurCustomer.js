import React from 'react'
import { SecondHeading } from '../headings/second-heading/SecondHeading';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import style from "./customer.module.css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const OurCustomer = () => {
    const slide = [
        {
            img: "https://themewagon.github.io/builerz/img/testimonial-3.jpg",
            para: "The team delivered exceptional quality on our commercial project. From planning to execution, everything was flawless!",
            clientname: "John Miller",
            des: " Real Estate Developer"
        },
        {
            img: "https://themewagon.github.io/builerz/img/testimonial-2.jpg",
            para: "Our home renovation was completed on time and exceeded our expectations. The craftsmanship is top-notch!",
            clientname: "Lisa Brown",
            des: " Homeowner"
        },
        {
            img: "https://themewagon.github.io/builerz/img/testimonial-1.jpg",
            para: "Highly professional and reliable! They handled our high-rise construction efficiently and met all deadlines.",
            clientname: "Robert Wilson",
            des: " Project Manager"
        },
    ]
    return (
        <>
            <section>
                <div className='custom-container custom_row'>
                   <div className={style.customer_text}>
                        {/* <SecondHeading heading="What Our Clients Say About Us" /> */}
                        <SecondHeading heading={<>What  <span className='color-yellow'>Our Clients</span> Say About Us </>} />
                        <p className='pt-4'> At the core of our construction projects is customer satisfaction. We take pride in delivering top-quality work that exceeds expectations. See what our clients have to say about their journey with us!</p>

                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true} modules={[Navigation]}

                        className="mySwiper"
                    >

                        {
                            slide.map(({ img, para, clientname, des }, i) => {
                                return (
                                    <SwiperSlide>
                                        <div className={style.testimonial_col}>
                                            <img src={img} alt='' />
                                            <p>{para}</p>
                                            <h6>{clientname}</h6>
                                            <p>{des}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>

            </section>
        </>
    )
}
