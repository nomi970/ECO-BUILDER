import React from 'react'
import { FirstHeading } from '../../global/headings/first-heading/FirstHeading';
import { Link } from 'react-router-dom';
import style from "./hero.module.css";

function CoverArea() {
    return (
        <div className={`${style.cover_areas}`}>
            <div className='container'>
                <div className={`${style.cover_areas_wrapper}`} >
                    <p>Add an Areas We Cover strip with towns listed (Slough, Windsor, Maidenhead, Ascot, Reading, West London, Iver, Uxbridge, Watford). Doesn’t need to be a separate link page, but must appear somewhere clear on the site.</p>
                </div>
            </div>
        </div>
    )
}

export default CoverArea
