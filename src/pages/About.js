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
            <Link to="/" className="minji">CODINFO</Link>
            <Link to="/Shop" className="shop">INFO</Link>
            <Link to="/Slog" className="slog">POTO</Link>
            <Link to="/Contact" className="contact">CONTACT</Link>
            <div className='firstmenu'>
                <div className='firsttext1'>어쩌구 저쩌구 혁신 어쩌구</div>
                <div className='firsttext2'>어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 어쩌구저쩌 구구어ㅓㅉ구저쩌구 </div>
            </div>
            <div className='secondmenu_picture'></div>
            <div className='secondmenu_line'></div>
            <div className='secondmenu1'>OUR OVERVIEW</div>
            <div className='secondmenu2'>OVERVIEW</div>
            <div className='second_line1'></div>
            <div className='second_line2'></div>
            <div className='second_line3'></div>
            <div className='second_line4'></div>
            <div className='second_line5'></div>

            <div className='thirdmenu1'>OUR OVERVIEW</div>
            <div className='thirdmenu2'>OVERVIEW</div>
            <div className='third_picture1'></div>
            <div className='third_picture2'></div>
            <div className='third_picture3'></div>
            <div className='third_picture4'></div>
            <div className='third_picture5'></div>
            <div className='fifthmenu_line'>
                <div className='fifthmenu1'>OUR OVERVIEW</div>
                <div className='fifthmenu2'>OVERVIEW</div>
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
