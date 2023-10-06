import React from 'react';
import { NavLink } from 'react-router-dom';

import Calmari from './Calamari Fritti.jpg';
import Quattro from './Quattro Formaggi.jpg';
import Osso from './Osso Buco.jpg';
import Parmesan from './Eggplant Parmesan.jpg';
import Panna from './Panna Cotta.jpg';
import Linguine from './Linguine alle Vongole.jpg';
import Polenta from './Polenta.jpg';
import Fettuccine from './Fettuccine Alfredo.jpg';



const DinnerThumbnails = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
          <img src={Calmari} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Calamari Fritti</h5>
          <p className='card-details'>Fried squid rings with marinara sauce</p>
          <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Quattro} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Quattro Formaggi</h5>
          <p className='card-details'>pizza topped with tomatoes</p>
          <button class="btn btn-outline-warning">
            <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Osso} alt="card1" className='card-img-top' />
            <h5 className='card-title'>Osso Buco</h5>
            <p className='card-details'>Braised veal shanks with white wine</p>
            <button class="btn btn-outline-warning">
              <NavLink>ADD TO CART</NavLink>
            </button>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Parmesan} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Parmesan</h5>
        <p className='card-details'>Bread & fried eggplant slices</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Panna} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Panna Cotta</h5>
        <p className='card-details'>Creamy dessert with strawberry</p>
        <button class="btn btn-outline-warning" >
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>
     
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Linguine} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Linguine Vongle</h5>
        <p className='card-details'>Linguine pasta with fresh clams</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Polenta} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Polenta</h5>
        <p className='card-details'>Cornmeal porridge with various sauces</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Fettuccine} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Fettuccine Alfredo</h5>
        <p className='card-details'>Flat pasta in parmesan</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
      </div>
    </div>
   </div>
  
  )
}

export default DinnerThumbnails
