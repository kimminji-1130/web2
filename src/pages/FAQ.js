import React from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div>
      <div className='blank'></div>
      <div className='link'></div>
      <Link to="/About" className="about">ABOUT</Link>
      <Link to="/Service" className="service">SERVICE</Link>
      <Link to="/Work" className="work">WORK</Link>
      <Link to="/" className="minji">MINJI</Link>
      <Link to="/Shop" className="shop">SHOP</Link>
      <Link to="/Contact" className="contact">CONTACT</Link>

      <div className='name'>FAQ</div>
      <div className='objectbox'>
        <div className='objecttext'>분야</div>
      </div>
      <div className='objectbox2'>
        <div className='objecttext2'>제목</div>
      </div>
      <div className='objectbox3'>
        <div className='objecttext3'>검색어를 입력해주세요</div>
      </div>
      <div className='line'>
        <div className='number'>번호</div>
        <div className='title'>제목</div>
        <div className='user'>작성자</div>
        <div className='date'>작성일</div>
        <div className='ox'>해결여부</div>
      </div>
      <div classname='footer'></div>
      </div>
  );
}

export default FAQ;