import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import About from './About';
import Service from './Service';
import Work from './Work';
import Shop from './Shop';
import Contact from './Contact';


function Home() {
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


      <div className='welcome'>WELCOME</div>
      <div className='content'>If you still encounter the "Missing script"</div>
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