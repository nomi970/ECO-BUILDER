import React from 'react';
import { SecondHeading } from '../../global/headings/second-heading/SecondHeading';
import style from "./pricing.module.css";
import { Row, Col } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch, { SwitchProps } from '@mui/material/Switch';


export const PlansPricing = () => {
    const data = [
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
    ]
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#2EA399' : '#2EA399',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));
   
  return (
    <>
        <section className={style.pricing_sec}>
            <div className='custom-container custom_row'>
                <div className={style.pricing_col}>
                    <SecondHeading heading="Plans and Pricings" />
                    <p className='pt-3'>Our pricing model reflects flexibility and value. Tailored plans cater to diverse needs, ensuring access to accurate AI plagiarism detection without compromising affordability. Choose a plan that suits you best.</p>
                </div>
                <FormGroup className={style.tggle_row}>
                    <p>Pay Monthly</p>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} className={style.switch}/>
                    <p>Pay Yearly</p>
                    <img src='./images/save.png' alt='' />
                </FormGroup>
                <Row className={style.pricing_row}>
                    {
                        data.map(({title, desc, price, list})=>{
                            return(
                                <Col className={style.price_col}>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <h3>{price} <span>/Month</span></h3>
                                    <a href='#'>Get Started Now</a>
                                    <ul>
                                        {
                                            list.map(({titleList, img})=>{
                                                return(
                                                    <li>
                                                        <img src={img} alt="" />
                                                        {titleList}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
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


