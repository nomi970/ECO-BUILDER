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
      // img: "https://themewagon.github.io/builerz/img/testimonial-3.jpg",
      para: "We worked with Jafer and his team from Connect Eco Builders (SSJB Contractors Ltd) for a large demolition and complete new rebuild of a 3-storey detached house. From beginning to end, over a year in duration, it has been a real pleasure to work with him, his company and his team. The quality of work, as has been mentioned independently by surveyors and building regulations, has been excellent. Given the size of the project and that we have encountered negligible surprises is testament to the attention to detail and forwardness that the company offers as part of their detailed quote.",
      clientname: "Job location: WD3",
      des: " Demolition and Construction of 3-Storey Detached Building"
    },
    {
      para: "Overall I’m so impressed with their work. From start to end they were so professional.They kept us informed if any work was delayed. In consideration my family suffer from asthma they made sure they leave my home clean at the end of each day. I would recommend them to anyone. I paid the amount which we agreed at the start of work.They were no hidden costs. I have a neighbour who is also a builder. My neighbour was impressed with their roof work and overall quality of work and finish quality.",
      clientname: "Job location: WD24",
      des: " Loft conversion"
    },
    {
      para: "Connect Eco Builders recently completed a double storey extension, loft conversion, and full house refurbishment for us — and we’re extremely pleased with the results. The team was professional, approachable, and delivered high-quality workmanship throughout. They communicated clearly, met deadlines, and handled challenges efficiently. The finish is excellent, and the transformation has exceeded our expectations. We highly recommend them for any major building work.",
      clientname: "Job location: UB6",
      des: " Extinsion"
    },
    {
      para: "Excellent service - we needed some last minute touch ups to a property and Jafer and the team delivered on time, especially since time was of the essence.Super friendly and respectful too- also, very accommodating with last minute requests that were crucial for us. They kept the property clean too following any works,which was highly appreciated.Would definitely recommend and use again.Thank you Jafer and the team for all your hard work!",
      clientname: "Job location: SL2",
      des: " Touch ups in the property"
    },
    {
      para: "Eco Builders - Excellent Building Work I recently had the pleasure of working with Connect Eco Builders for a construction project, and I must say that their work exceeded my expectations. From start to finish, they showcased professionalism, expertise, and a commitment to sustainable building practices that truly sets them apart from other builders. Throughout the construction process, I was impressed by the high level of craftsmanship and the quality of materials used. Connect Eco Builders maintained open lines of communication, keeping me informed about the progress and addressing any con",
      clientname: "Job location: SL1",
      des: " Extension"
    },
    {
      para: "The completion of the work took a little longer than expected due to an extreme cold spell at the time. However, the team did a really good job of work and I was very pleased with the end result. The guys were courteous, polite and very professional in their work. I would have no problem in recommending Connect Eco Builders for future work and to businesses.",
      clientname: "Job location: SL1",
      des: " Refurbish 4 x offices and stairway after water damage"
    },
  ]
  return (
    <>
      <section className={style.our_customer_sec}>
        <div className='custom-container custom_row'>
          <div className={style.customer_text}>
            {/* <SecondHeading heading="What Our Clients Say About Us" /> */}
            <SecondHeading heading={<>What  <span className='color-yellow'>Our Clients</span> Say About Us </>} />
            <p className='pt-4'> Real feedback from homeowners and businesses who trusted us with their projects.</p>
            <p className='pt-4' style={{fontSize: "18px"}}> Our greatest achievement is the satisfaction of our clients. Here’s what some
              of them have to say about working with us:</p>

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
                      <p style={{ fontWeight: 700, color: 'black', paddingTop: '15px', fontSize: '20px' }}>{des}</p>
                      <h6 style={{ fontStyle: "italic" }}>" {clientname} "</h6>

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
