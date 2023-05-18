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
            <Link to="/" className="minji">MINJI</Link>
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
                <div className='codineline1'></div>
                <div className='basic'>BASIC</div>
                <div className='codinglink1'></div>
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
