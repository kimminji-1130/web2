import React from 'react';
import './Home.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
    <div className='header'>
      <div className='about'>
        <Link to='/'>ABOUT</Link>
      </div>
      <div className='service'>
      <Link to='/'>SERVICE</Link>
      </div>
      <div className='work'>
      <Link to='/'>WORK</Link>
      </div>
      <div className='name'>
      <Link to='/'>MINJI</Link>
      </div>
      <div className='shop'>
      <Link to='/'>SHOP</Link>
      </div>
      <div className='slog'>
      <Link to='/'>SLOG</Link>
      </div>
      <div className='contact'>
      <Link to='/'>SERVICE</Link>
      </div>
      <div className='welcome'>WELLCOME</div>
      <div className='contant'>f you still encounter the "Missing script</div>
      <div className='text'>f you still encounter the "Missing script: 'start'" error after following these steps, please check the contents</div>
      <div className='text1'>f you still encounter the "Missing script: 'start'" error after following these steps</div>
      <div className='contants_1'>SERVICES</div>
      <div className='text1_1'> the Missing script</div>
      <div className='text1_2'>f you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text1_3'>f you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text1_4'>f you still encounter the "Missing script: 'start'" error after</div>
      <div className='text1_5'>f you still encounter the "Missing script: 'start'" error after</div>
      <div className='picture1'></div>
      <div className='contants_2'>SERVICES</div>
      <div className='text2_1'>the Missing script</div>
      <div className='text2_2'>f you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_3'>f you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_4'>f you still encounter the "Missing script: 'start'" error after following</div>
      <div className='text2_5'>f you still encounter the "Missing script: 'start'" error after</div>
      <div className='picture2'></div>
      <div className='footer'>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default Home;