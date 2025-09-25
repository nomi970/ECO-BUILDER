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
            title: "Builders with Experience You Can Trust",
            desc: "For over 15 years, we’ve built our reputation on quality, compliance and client trust across Berkshire and West London. On average, we deliver 7–8 smaller projects each year (£5k–£20k), alongside 2–3 major builds ranging from £100k–£500k. Whether it’s a new build, extension or refurbishment, clients know they’ll get the same care and attention on every project. Our team works with subcontractors we’ve trusted for years - electricians, plasterers, plumbers but all warranties are provided directly by Connect Eco Builders, so clients only ever deal with us. Much of our work comes from repeat customers who value reliability, clear communication, and projects that pass Building Control approval for the first time.",
            
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