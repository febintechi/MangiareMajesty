import React from 'react'
import { NavLink } from 'react-router-dom'

import Arancini from './Arancini.jpg';
import Salad from './Caprese Salad.jpg';
import Lasagna from './Lasagna.jpg';
import Sandwich from './Panini Sandwich.jpg';
import Piza from './Pizza Margritta.jpg';
import Minestrone from './minestrone.jpg'
import Risotto from './Shrimp Risotto.jpg'
import Pasta from './Pasta Carbonara.jpg'

const Lunchthumbnails = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
          <img src={Arancini} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Arancini</h5>
          <p className='card-details'>Deep fried rice cutlets stuffed meat sauce </p>
          <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Salad} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Caprese Salad</h5>
          <p className='card-details'>Simple salad made with fresh tomatoes</p>
          <button class="btn btn-outline-warning">
            <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Lasagna} alt="card1" className='card-img-top' />
            <h5 className='card-title'>Lasagna</h5>
            <p className='card-details'> Layers of wide flat pasta</p>
            <button class="btn btn-outline-warning">
              <NavLink>ADD TO CART</NavLink>
            </button>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Sandwich} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Panini Sandwich</h5>
        <p className='card-details'>Grilled sandwiches with Italian bread </p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Piza} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Pizza Margherita</h5>
        <p className='card-details'>Classic Italian pizza</p>
        <button class="btn btn-outline-warning" >
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>
     
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Minestrone} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Minestrone</h5>
        <p className='card-details'>Hearty vegetable soup </p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Risotto} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Shrimp Risotto</h5>
        <p className='card-details'> Risotto ai Frutti di Mare (with seafood)</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Pasta} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Pasta Carbonara</h5>
        <p className='card-details'>Spaghetti pasta with a creamy sauce</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Lunchthumbnails

