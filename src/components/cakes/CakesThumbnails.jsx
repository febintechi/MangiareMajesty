import React from 'react'
import { NavLink } from 'react-router-dom';


import Regina from './Regina Rosey.jpg';
import Arnia from './Arnia Chese.jpg';
import Ricotta from './Ricotta Cheesecake.jpg';
import Raspberry from './Raspberry Chocolate.jpg';
import Macaroons from './Macaroons.jpg';
import Zeppole from './Zeppole.jpg';
import Sfogliatella from './Sfogliatella.jpg';
import Cannoli from './Cannoli.jpg';

const CakesThumbnails = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
          <img src={Regina} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Regina Rosey</h5>
          <p className='card-details'>Made with Fresh cherry & Rose petals</p>
          <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Arnia} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Arnia Cheese</h5>
          <p className='card-details'>Combination of honey and chese</p>
          <button class="btn btn-outline-warning">
            <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Ricotta} alt="card1" className='card-img-top' />
            <h5 className='card-title'>Ricotta Cheese cake</h5>
            <p className='card-details'>Blending Cheese and Chocolate</p>
            <button class="btn btn-outline-warning">
              <NavLink>ADD TO CART</NavLink>
            </button>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Raspberry} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Raspberry Chocolate</h5>
        <p className='card-details'>Rasberry & Chocolate in redwine</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Macaroons} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Macaroons</h5>
        <p className='card-details'>Delicious almond meringue cookies</p>
        <button class="btn btn-outline-warning" >
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>
     
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Zeppole} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Zeppole</h5>
        <p className='card-details'> Traditional Italian pastry</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Sfogliatella} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Sfogliatella</h5>
        <p className='card-details'>Originated in the Southern Italy</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Cannoli} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Cannoli</h5>
        <p className='card-details'>Originated in Sicilyn</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
      </div>
    </div>
   </div>
  
  )
}

export default CakesThumbnails ;
