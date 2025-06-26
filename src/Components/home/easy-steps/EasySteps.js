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
            desc: "Housline Construction company is emerging with an elite and professional status in the South East that offers refurbishment and construction services. We translate your dreams into building elements by approaching the best ways of communication with clients. Besides best strategies and plans, we prioritize the client’s satisfaction and take pride in constructing dreams."
        },
    ]
    return (
        <>
            <section>
                <div className='custom-container custom_row'>
                    <SecondHeading heading={<>WHO<span className='color-yellow'> WE ARE</span> </>} />
                    <p className='text-sm color-grey text-center pt-3'>About Houseline Construction</p>

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