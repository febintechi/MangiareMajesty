import React from 'react'
import MenuFront from './Manire-Menu-front.jpg'
import MenuSecondPage from './MENU 2ND PAGE.jpg'



const Menu = () => {
  return (
    <div>

    <div className='menufront-frame'>
     <img className='menufront-page' src={MenuFront} alt="" />
    </div>

    <div className='menusecondPage-frame'>
      <img className='menusecond-page'src={MenuSecondPage} alt=''/>
    </div>

    </div>
  )
}

export default Menu
