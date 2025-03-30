import React from 'react';
import { SecondHeading } from "../headings/second-heading/SecondHeading";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './textPlag.module.css';

export const TextPlagirism = ({data2, heading, para, styling, styling2}) => {
   
  return (
    <>
        <section className={`${style.plag_sec} ${styling && style.addClass}`}>
            <div className='custom-container custom_row'>
                <div className={styling && style.Plag_text}>
                    <SecondHeading heading={heading} />
                    <p className='text-sm color-grey fw-normal text-center'>{para}</p>
                </div>

                <Row className={`${style.plag_row} ${styling2 && style.plag_row2}`}>
                    {
                        data2.map(({img, title, desc, icon}, i)=>{
                            return(
                                <Col className={style.cardz}>
                                    {/* Background Image Container */}
                                    <div className={style.imageContainer} style={{ backgroundImage: `url(${img})` }}></div>

                                    {/* Content Section */}
                                    <div className={style.content}>
                                        <div className={style.icon}>
                                            <img src={icon} alt="icon" style={{ width: "40px", height: "40px" }} /> {/* Icon as an Image */}
                                        </div>
                                        <h6>{title}</h6> {/* Dynamic Title */}
                                        <p>{desc}</p> {/* Dynamic Description */}
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </section>
    </>
  )
}
