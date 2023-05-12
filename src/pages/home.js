import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import About from './About';
import Service from './Service';
import Work from './Work';
import Shop from './Shop';
import Contact from './Contact';


function Home() {
  
    const txt = "Welcome";
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
          setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
          setCount(Count + 1); // 개수 만큼 체크 
      }, 100);
      if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
          clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      }
      return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  })

  const txt1 = "If you still encounter the Missing script";
    const [Text1, setText1] = useState('');
    const [Count1, setCount1] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
          setText1(Text1 + txt1[Count1]); // 이전 set한 문자 + 다음 문자
          setCount1(Count1 + 1); // 개수 만큼 체크 
      }, 100);
      if(Count1 === txt1.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
          clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      }
      return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  })
  return (
    <div className='header'>
      <ul>
        <Link to='/About'>
          <span className="about">
            About
          </span>
        </Link>
        <Link to='/Service'>
          <span className="service">
            Service
          </span>
        </Link>
        <Link to='/Work'>
          <span className="work">
            Work
          </span>
        </Link>
        <Link to="/" className="minji">MINJI</Link>
        <Link to='/Shop'>
          <span className="shop">
            SHOP
          </span>
        </Link>
        <Link to='/Contact'>
          <span className="contact">
            Contact
          </span>
        </Link>
      </ul>

      <Routes>
        <Route exact path="/About" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Contact" component={Contact} />
      </Routes>


      <div className='welcome'><p>{ Text }</p></div>
      <div className='content'>{ Text1 }</div>
      <div className='text'>If you still encounter the "Missing script: 'start'" error after following these steps, please check the contents</div>
      <div className='text1'>If you still encounter the "Missing script: 'start'" error after following these steps</div>
      <div className='content_1'>SERVICES</div>
      <div className='text1_1'>the Missing script</div>
      <div className='text1_2'>If you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text1_3'>If you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text1_4'>If you still encounter the "Missing script: 'start'" error after</div>
      <div className='text1_5'>If you still encounter the "Missing script: 'start'" error after</div>
      <div className='picture1'>
      </div>

      <div className='content_2'>SERVICES</div>
      <div className='text2_1'>the Missing script</div>
      <div className='text2_2'>If you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_3'>If you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_4'>If you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_5'>If you still encounter the "Missing script: 'start'" error after</div>
      <div className='picture2'></div>
      <div className='footer' />
    </div>
  );
}

export default Home;