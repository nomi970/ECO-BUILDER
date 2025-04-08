// import React from 'react';
// import { SecondHeading } from "../../global/headings/second-heading/SecondHeading";
// import style from "./number.module.css";
// import { Row, Col } from 'react-bootstrap';


// export const Numbers = ({heading, para, data}) => {
//   return (
//     <>
//         <section className={style.number_sec}>
//             <div className='custom-container custom_row'>
//                 <div className={style.number_text}>
//                     <SecondHeading heading={heading} />
//                     <p className='pt-4'>{para}</p>
//                 </div>
//                 <Row className={style.number_row}>
//                     {
//                         data.map((items, i)=>{
//                             return(
//                                 <Col key={i.toString()} className={style.number_col}>
//                                     <h6>{items.title}</h6>
//                                     <p>{items.desc}</p>
//                                 </Col>
//                             )
//                         })
//                     }
//                 </Row>
//             </div>
//         </section>
//     </>
//   )
// }
import React, { useState, useEffect, useRef } from 'react';
import { SecondHeading } from "../headings/second-heading/SecondHeading";
import style from "./number.module.css";
import { Row, Col } from 'react-bootstrap';

export const Numbers = ({ heading, para, data }) => {
    const [visible, setVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-animation
    const sectionRef = useRef(null);
    const [counts, setCounts] = useState(data.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setVisible(true);
                    setHasAnimated(true); // Mark animation as completed
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]); // Run only if `hasAnimated` is false

    useEffect(() => {
        if (visible) {
            data.forEach((item, index) => {
                let start = 0;
                const end = parseInt(item.title);
                const duration = 2000;
                const increment = end / (duration / 16);

                const counter = setInterval(() => {
                    setCounts((prevCounts) => {
                        const newCounts = [...prevCounts];
                        if (newCounts[index] < end) {
                            newCounts[index] = Math.ceil(newCounts[index] + increment);
                        } else {
                            newCounts[index] = end;
                            clearInterval(counter);
                        }
                        return newCounts;
                    });
                }, 16);
            });
        }
    }, [visible]);

    return (
        <section ref={sectionRef} className={style.number_sec}>
            <div className='custom-container custom_row'>
                <div className={style.number_text}>
                    <SecondHeading heading={heading} />
                    <p className='pt-4'>{para}</p>
                </div>
                <Row className={style.number_row}>
                    {data.map((items, i) => (
                        <Col key={i.toString()} className={style.number_col}>
                            <h6>{counts[i]}</h6> {/* Counter Animation */}
                            <p>{items.desc}</p>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};
