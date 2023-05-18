import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import './Shop.css';

function Shop() {
  return (
    <div>
      <div className='blank'></div>
      <div className='link'></div>
      <Link to="/About" className="about">ABOUT</Link>
      <Link to="/Service" className="service">SERVICE</Link>
      <Link to="/Work" className="work">WORK</Link>
      <Link to="/" className="minji">CODINFO</Link>
      <Link to="/Shop" className="shop">INFO</Link>
      <Link to="/Slog" className="slog">POTO</Link>
      <Link to="/Contact" className="contact">CONTACT</Link>

      <div className='infoblank'>
        <div className='coding'>Coding</div>
        <div className='edutation'>Education</div>
        <div className='자격증'>자격증</div>
        <div className='feedback'>Feedback</div>
        <div className='infowork'>취준</div>

        <div className='codingline'>
          Coding
          <div className='codingline1'></div>
          <div className='basic'>BASIC</div>
          <Link to="https://www.codetree.ai/" target="_blank" rel="noopener noreferrer" className="codinglink1">
            <div className='codetreeicon'>
          <img src="https://www.codetree.ai/_next/image?url=https%3A%2F%2Fcodetreepublic.s3.ap-northeast-2.amazonaws.com%2Fhomepage%2Fimages%2Flogos%2FHorizontal_logo_white_transparent.png&w=256&q=75" alt="CodeTree Icon" />
          </div>
          </Link>
          <div className='codinglink2'></div>
          <div className='codinglink3'></div>
          <div className='hard'>HARD</div>
          <div className='codinglink4'></div>
          <div className='codinglink5'></div>
          <div className='codinglink6'></div>
          <div className='payofcharde'>PAY OF CHARDE</div>
          <div className='codinglink7'></div>
          <div className='codinglink8'></div>
          <div className='codinglink9'></div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
