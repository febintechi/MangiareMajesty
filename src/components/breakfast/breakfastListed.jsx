import React from 'react'
import { NavLink } from 'react-router-dom'

import Pancake from './1.jpg';
import Melon from './2.jpg';
import Salmon from './3.jpg';
import Egg from './4.jpg';
import Sandwich from './5.jpg';
import Corrisant from './6.jpg'
import Frittata from './7.jpg'
import Frutita from './8.jpg'

const BreakfastListed = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
          <img src={Pancake} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Banana Pancake</h5>
          <p className='card-details'>Pancake with honey and banana</p>
          <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Melon} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Prosciutto</h5>
          <p className='card-details'>Italian prosciutto with melon</p>
          <button class="btn btn-outline-warning">
            <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Salmon} alt="card1" className='card-img-top' />
            <h5 className='card-title'>Open Sandwich With Salmon</h5>
            <p className='card-details'>Open andwich with salmon cream</p>
            <button class="btn btn-outline-warning">
              <NavLink>ADD TO CART</NavLink>
            </button>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Egg} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Avocado Egg Sandwich</h5>
        <p className='card-details'>Avocado egg cream sandwich</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Sandwich} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Club Sandwich</h5>
        <p className='card-details'>Sandwich with meat, prosciutto, salami</p>
        <button class="btn btn-outline-warning" >
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>
     
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Corrisant} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Croissant</h5>
        <p className='card-details'>Homemade butter corissant</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Frittata} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Frittata</h5>
        <p className='card-details'>Flavorful spinach frittata</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Frutita} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Yogurt E Frutta </h5>
        <p className='card-details'>Italian frutta with yogurt</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default BreakfastListed
