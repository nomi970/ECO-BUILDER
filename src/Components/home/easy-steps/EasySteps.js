import React from 'react';
import { SecondHeading } from "../../global/headings/second-heading/SecondHeading";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./steps.module.css";
import { Link } from 'react-router-dom';

export const EasySteps = () => {
    const data = [
        {
            img: "https://houselineconstruction.co.uk/wp-content/uploads/2024/05/new-build-3.jpg",
            title: "About Houseline Construction",
            desc: "We take pride in being one of the leading construction firms across West London, Thames Valley, Hertfordshire and Buckinghamshire We specialise in residential and commercial projects, combining skilled craftsmanship, modern design and eco-friendly practices to create spaces that last a lifetime. Our mission is simple: to provide quality, transparency and innovation at every step from planning and design to construction and final delivery.Whether it’s a new build, extension or refurbishment, we are committed to turning your vision into reality.",
            
        },
    ]
    return (
        <>
            <section>
                <div className='custom-container custom_row'>
                    <SecondHeading heading={<>WHO<span className='color-yellow'> WE ARE</span> </>} />
                    <p className='text-sm color-grey text-center pt-3'>Trusted builders delivering excellence in every project</p>

                    {
                        data.map(({ img, title, desc }, i) => {
                            return (
                                <Row className={style.steps_row}>
                                    <Col key={i.toString()}>
                                        <Row className={style.steps_inner__row}>
                                            <Col className='p-0'>
                                                <img src={img} alt='' />
                                            </Col>
                                            <Col className='p-0'>
                                                {/* <h3>{i+1}</h3> */}
                                                <h2>{title}</h2>
                                                <p>{desc}</p>
                                                <div className={style.steps_btn}>
                                                    <Link to="/about" className={`${style.readmore}`}>Read More</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}