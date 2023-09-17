import React from 'react'
import Orangedrink from './orangedrink.jpg'
import Strawberry from './strawberry-splash.jpg'
import BeefBurger from './beef-burger.jpg'
import Avocado from './avocado-tortilla.jpg'


const tileimages = () => {
  return (
    <div className='tileframeMain'class='row tilebox'>
      <div className='tile1frame' class="col-6 col-sm-6 col-md-4 col-lg-3">
        <img src={Strawberry} alt="tile1" className='tile1img' />
      </div>
      <div className='tile2frame' class="col-6 col-sm-6 col-md-4 col-lg-3">
        <img src={BeefBurger} alt="tile2" className='tile2img' />
      </div>
      <div className='tile3frame' class="col-6 col-sm-6 col-md-4 col-lg-3">
         <img src={Orangedrink} alt="tile3" className='tile3img' />
      </div>
      <div className='tile4frame' class="col-6 col-sm-6 col-md-4 col-lg-3">
         <img src={Avocado} alt="tile4" className='tile4img' />
      </div>
    </div>
  )
}


export default tileimages