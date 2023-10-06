import React from 'react'
import { NavLink } from 'react-router-dom'

import Biscotti from './Biscotti.jpg';
import Bruschetta from './Bruschetta.jpg';
import Crostini from './Crostini.jpg';
import Focaccia from './Focaccia.jpg';
import Tiramisu from './Tiramisu.jpg';
import Pizzette from './Pizzette.jpg';
import Panzerotti from './Panzerotti.jpg';
import Taralli from './Taralli.jpg';

const SnacksThumbnail = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
          <img src={Biscotti} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Biscotti</h5>
          <p className='card-details'>Italian cookies that are twice-baked</p>
          <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Bruschetta} alt="card1" className='card-img-top' />
          <h5 className='card-title'>Bruschetta</h5>
          <p className='card-details'>Toasted bread topped diced tomatoes</p>
          <button class="btn btn-outline-warning">
            <NavLink>ADD TO CART</NavLink>
          </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
          <img src={Focaccia} alt="card1" className='card-img-top' />
            <h5 className='card-title'>Focaccia</h5>
            <p className='card-details'>flatbread topped olive oil & herbs</p>
            <button class="btn btn-outline-warning">
              <NavLink>ADD TO CART</NavLink>
            </button>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Crostini} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Crostini</h5>
        <p className='card-details'>Small slices of toasted bread,</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Tiramisu} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Tiramisu</h5>
        <p className='card-details'>A classic Italian dessert</p>
        <button class="btn btn-outline-warning" >
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>
     
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Pizzette} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Pizzette</h5>
        <p className='card-details'>Miniature pizzas</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Panzerotti} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Panzerotti</h5>
        <p className='card-details'>small calzones</p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card-body">
        <img src={Taralli} alt="card1" className='card-img-top' />
        <h5 className='card-title'>Taralli</h5>
        <p className='card-details'>crunchy snack </p>
        <button class="btn btn-outline-warning">
          <NavLink>ADD TO CART</NavLink>
        </button>
        </div>
      </div>
    </div>
   </div>
  
  )
}

export default SnacksThumbnail
