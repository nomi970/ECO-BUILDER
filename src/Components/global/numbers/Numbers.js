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







// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
// import "./ContactCardFuturistic.css";

// export default function ContactCardFuturistic() {
//   return (
//     <div className={{
//       minHeight: "100vh",
//       background: "linear-gradient(to bottom right, black, indigo, black)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "1.5rem"
//     }}>
//       <Card className="contact-card">
//         <CardContent className="contact-card-content">
//           <h1 className="contact-title">GET IN TOUCH</h1>
//           <p className="contact-description">
//             Reach out to us for any construction-related inquiries, and let’s build something great together.
//           </p>
//           <div className="contact-details">
//             <div className="contact-item">
//               <MapPin className="icon" />
//               <span>123 Skyline Ave, Suite 400, Metropolis, NY</span>
//             </div>
//             <div className="contact-item">
//               <Mail className="icon" />
//               <span>contact@housellin.com</span>
//             </div>
//             <div className="contact-item">
//               <Phone className="icon" />
//               <span>+1 (555) 123-4567</span>
//             </div>
//           </div>

//           <div className="social-icons">
//             <Facebook className="icon-hover" />
//             <Twitter className="icon-hover" />
//             <Linkedin className="icon-hover" />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// .contact-card {
//     max-width: 768px;
//     width: 100%;
//     background-color: rgba(0, 0, 0, 0.6);
//     backdrop-filter: blur(12px);
//     border: 1px solid #3730a3;
//     border-radius: 1rem;
//     box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
//     color: white;
//   }
  
//   .contact-card-content {
//     padding: 2rem;
//   }
  
//   .contact-title {
//     font-size: 2.25rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: #818cf8;
//     border-bottom: 1px solid #3730a3;
//     padding-bottom: 0.5rem;
//   }
  
//   .contact-description {
//     font-size: 0.875rem;
//     color: #9ca3af;
//     margin-bottom: 1.5rem;
//   }
  
//   .contact-details {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
  
//   .contact-item {
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;
//   }
  
//   .icon {
//     color: #818cf8;
//   }
  
//   .social-icons {
//     display: flex;
//     gap: 1.5rem;
//     margin-top: 2rem;
//   }
  
//   .icon-hover {
//     cursor: pointer;
//     transition: color 0.3s;
//   }
  
//   .icon-hover:hover {
//     color: #6366f1;
//   }
  