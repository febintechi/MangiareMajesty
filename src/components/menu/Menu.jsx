import React from 'react';
import MenuFront from './Manire-Menu-front.jpg';
import MenuSecondPage from './MENU 2ND PAGE.jpg';
import Menu3rdPage from './MENU 3RD PAGE.jpg';


const Menu = () => {
  return (
    <div>
      <div className='menufront-frame'>
        <img className='menufront-page' src={MenuFront} alt="" />
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="menufront-frame carousel-item active">
            <img src={MenuSecondPage} className="menufront-page" alt="..."/>
          </div>
          <div className="menusecondPage-frame carousel-item">
            <img src={Menu3rdPage} className="menusecond-page" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" ></span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
