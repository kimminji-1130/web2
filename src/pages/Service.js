import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import './About.css';


function Service() {
 /* global kakao */
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.54351628948693, 128.79627061068447),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(36.54351628948693, 128.79627061068447); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    }, [])

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
      <div className='smalltext'>minjiminjiminjiminji</div>
      <div className='bigtext'>1:1  맞춤식 종합교육 시스템</div>
      <div className='bigpicture'></div>
      <div className='sidemenu'></div>
      <div className='secondpic1'></div>
      <div className='secondpic2'></div>
      <div className='secondpic3'></div>
      <div className='secondtext'>설명설명설명설명설명설명설명설명설명설명설명설명 설명설명설명
        설명설명설명설명설명설명설명설명설명설명설명설명 설명설
        설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명 설명설명설명
        설명설명설명설명설명설명설명설명설명설명설명설명 설명설
        설명설명설명설명설명설명설명설명</div>
      <div className='third'>
      <div className='thirdtitle1'>상담은 언제나 환영합니다.</div>
      <div className='thirdtitle2'>프로세스는 다음과 같습니다.</div>
      </div>
      <div className='fourthtext'>
        어떤 사람들에게 항상 열려 있습니다.어쩌구 저쩌구 이러쿵 저러쿵쿵
      </div>
      <div className='fourthmap'>
      <div id="map" style={{width:"967px", height:"688px"}}></div>
      </div>
      <div className='servicefooter'></div>
    </div>
  );
}

export default Service;
