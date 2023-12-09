import React from 'react'
import WineBanner from '../../data/winelistData/winelistImages/Winelistbanner.jpg'
import Winelist from '../../data/winelistData/winelistImages/winelistpage1.png';


const WineList = () => {
  return (
    <div>

    <div className='winepageBackground'>
     <img className='WinelistBanner' src={WineBanner} alt='' />
    </div>
    
    <div className='winlistpage-frame'>
      <img className='winelistpage' src={Winelist} alt='' />
    </div>

    </div>
    
  )
}

export default WineList
