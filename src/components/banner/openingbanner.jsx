import React from 'react';
import Banner from './banner.jpg';


const OpeningBanner = () => {
  return (

    <div className='bannerFrame'>
      <img className='banner' src={Banner} alt="banner" />
    </div>  
    
  );
}

export default OpeningBanner;
