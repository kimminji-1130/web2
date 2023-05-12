import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className='blank'></div>
            <div className='link'></div>
            <Link to="/About" className="about">ABOUT</Link>
            <Link to="/Service" className="service">SERVICE</Link>
            <Link to="/Work" className="work">WORK</Link>
            <Link to="/" className="minji">MINJI</Link>
            <Link to="/Shop" className="shop">SHOP</Link>
            <Link to="/Contact" className="contact">CONTACT</Link>
            <div className='firstmenu'></div>
            <div className='secondmenu_picture'></div>
            <div className='secondmenu_line'></div>
            <div className='thirdmenu'>OUR OVERVIEW</div>
            <div className='third_picture1'></div>
            <div className='third_picture2'></div>
            <div className='third_picture3'></div>
            <div className='third_picture4'></div>
            <div className='third_picture5'></div>
            <div className='fifthmenu_line'>
                <div className='fifthmenu_picture1'></div>
                <div className='fifthmenu_picture2'></div>
                <div className='fifthmenu_picture3'></div>
                <div className='fifthmenu_picture4'></div>
            </div>
            <div className='footer_about'></div>
        </div>

    );
}

export default About;
