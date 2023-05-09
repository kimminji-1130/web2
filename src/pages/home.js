import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Work from '../pages/Work';

function Home() {
    return (

        <BrowserRouter>
            <div className='header'>
                <ul>
                    <Link to="/About">
                        <span className="about">
                            About
                        </span>
                    </Link>
                    <Link to="/Service">
                        <span className="service">
                            Service
                        </span>
                    </Link>
                    <Link to="/Work">
                    <span className="work">
                            WORK
                        </span>
                    </Link>
                    <Link to="/Shop">
                    <span className="shop">
                            SHOP
                        </span>
                    </Link>
                    <Link to="/Contact">
                        <span className="contact">
                            Contact
                        </span>
                        </Link>
                </ul>
            </div>
            <Routes>
                <Route path="/About" element={<div className='about'><About /></div>}>ABOUT</Route>
                <Route path="/Service" element={<div className="service"><Service /></div>}>SERVICE</Route>
                <Route path="/Work" element={<div className="work"><Work /></div>}>WORK</Route>
                <Route path="/Shop" element={<div className="shop"><Shop /></div>}>SHOP</Route>
                <Route path="/Contact" element={<div className="contact"><Contact /></div>}>CONTACT</Route>
            </Routes>

            <div className='welcome'>WELCOME</div>
            <div className='contant'>If you still encounter the "Missing script</div>
            <div className='text'>If you still encounter the "Missing script: 'start'" error after following these steps, please check the contents</div>
            <div className='text1'>If you still encounter the "Missing script: 'start'" error after following these steps</div>
            <div className='contants_1'>SERVICES</div>
            <div className='text1_1'> the Missing script</div>
            <div className='text1_2'>If you still encounter the "Missing script: 'start'" error after following</div>

            <div className='text1_3'>If you still encounter the "Missing script: 'start'" error after following</div>
            <div className='text1_4'>If you still encounter the "Missing script: 'start'" error after</div>
            <div className='text1_5'>If you still encounter the "Missing script: 'start'" error after</div>
            <div className='picture1'></div>
            <div className='contants_2'>SERVICES</div>
            <div className='text2_1'>the Missing script</div>
            <div className='text2_2'>If you still encounter the "Missing script: 'start'" error after following</div>
            <div className='text2_3'>If you still encounter the "Missing script: 'start'" error after following</div>
            <div className='text2_4'>If you still encounter the "Missing script: 'start'" error after following</div>
            <div className='text2_5'>If you still encounter the "Missing script: 'start'" error after</div>
            <div className='picture2'></div>
            <div className='footer'>

            </div>



        </BrowserRouter>
    );
}

export default Home;