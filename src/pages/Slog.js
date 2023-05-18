import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import './Slog.css';

function Slog() {
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

            <div className='poto'>사진갤러리</div>
            <div className='pototitlebox'>
                <div className='pototitle'>제목</div>
            </div>
            <div className='search'></div>
            <div className='bar'></div>
            <div className='potopage'>페이지 : 1/2</div>
            <div className='post'>총게시물: 33</div>
            <div className='post1'>
                <div className='post1poto'></div>
                <div className='post1title'>2023년 어쩌구</div>
                <div className='post1date'>2023-05-03</div>
            </div>
            <div className='post2'>
                <div className='post2poto'></div>
                <div className='post2title'>2023년 어쩌구</div>
                <div className='post2date'>2023-05-03</div>
            </div>
            <div className='post3'>
                <div className='post3poto'></div>
                <div className='post3title'>2023년 어쩌구</div>
                <div className='post3date'>2023-05-03</div>
            </div>
            <div className='post4'>
                <div className='post4poto'></div>
                <div className='post4title'>2023년 어쩌구</div>
                <div className='post4date'>2023-05-03</div>
            </div>
            <div className='post5'>
                <div className='post5poto'></div>
                <div className='post5title'>2023년 어쩌구</div>
                <div className='post5date'>2023-05-03</div>
            </div>
            <div className='post6'>
                <div className='post6poto'></div>
                <div className='post6title'>2023년 어쩌구</div>
                <div className='post6date'>2023-05-03</div>
            </div>
            <div className='post7'>
                <div className='post7poto'></div>
                <div className='post7title'>2023년 어쩌구</div>
                <div className='post7date'>2023-05-03</div>
            </div>
            <div className='post8'>
                <div className='post8poto'></div>
                <div className='post8title'>2023년 어쩌구</div>
                <div className='post8date'>2023-05-03</div>
            </div>
            <div className='potofooter'></div>
    </div>
  );
}

export default Slog;