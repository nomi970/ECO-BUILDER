

import React from 'react';
import style from "./footer.module.css";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={style.footer_bg}>
            <div className='custom-container custom_row'>
                <Row className={style.footer_row}>
                    <Col className={`${style.footer_logo_col} p-0`}>
                        <div className={style.newsletter_box}>
                        <Link to="/">
                            {/* <img 
                                src="https://connectecobuilders.com/wp-content/uploads/2024/02/cropped-34-01-3-300x117-CEB-BANN-1-1-106x35.png" 
                                alt="Houseline Logo" 
                                className={style.footer_logo} 
                            /> */}
                            <img 
                                src="https://i.ibb.co/p6LC1vPv/cropped-34-01-3-300x117-CEB-BANN-1-1-106x35-1.png" 
                                alt="Houseline Logo" 
                                className={style.footer_logo} 
                            />
                            {/* <p>LOGO</p> */}
                        </Link>                            <p>Drop your email to subscribe to our NEWSletter</p>
                            <input type="email" placeholder="Your email" className={style.email_input} />
                            <button className={style.subscribe_btn}>Subscribe</button>
                            </div>
                           
                    </Col>
                    <Col className='p-0'>
                        <h5>Company</h5>
                        <ul className={style.footer_list}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col className='p-0 address_info'>
                        <h5>Head Office</h5>
                        <p>268 Bath Road Slough SL1 4DX<br/></p>
                        <p className='d__blk pt-2'>Email: <a className={style.address_info_link} href="mailto:info@connectecobuilders.com">info@connectecobuilders.com</a></p>
                        <p className='pt-2'>Phone: <a className={style.address_info_link} href="tel:07407 556158">07407 556158</a></p>
                        <a className={style.address_info_link} href="tel:01753 376515">01753 376515</a>
                    </Col>
                   
                </Row>
                
                {/* <div className={style.footer_bottom}>
                    <p>&copy; 2024. All rights reserved.</p>
                </div> */}
                <div className={style.footer_social}>
                            <ul className={style.social_list}>
                                {/* <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook" /></Link></li>
                                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" /></Link></li>
                                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /></Link></li>
                                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="LinkedIn" /></Link></li> */}
                                <li><Link to="https://www.facebook.com/share/196LiTLvvq/"><img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook" /></Link></li>
                                                <li><Link to="https://connectecobuilders.com/"><img src="https://cdn3.iconfinder.com/data/icons/social-media-circle-6/1024/circle-10-256.png" alt="Website" /></Link></li>
                                                <li><Link to="https://www.checkatrade.com/trades/ssjbcontractorsltd"><img src="https://i.ibb.co/PsJWj2zW/favicon-180.png" alt="checkatrade" /></Link></li>
                            </ul>
                            <div className={style.footer_bottom}>
                                <p>&copy; 2025. All rights reserved.</p>
                            </div> 
                        </div>
            </div>
        </footer>
    );
}
