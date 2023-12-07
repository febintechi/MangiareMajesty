import React from 'react'
import WineBanner from '../../data/winelistData/winelistImages/Winelistbanner.jpg'
import Winelist from '../../data/winelistData/winelistImages/WineList.jpg';


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
