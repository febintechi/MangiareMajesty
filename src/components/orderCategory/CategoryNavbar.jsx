import React from 'react';
import { NavLink,Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const CategoryNavbar = () => {
  return (
    <div>
      <nav className="navbar order-bar">
        <div className="container-fluid fluibox">
          <div className="ordernow-bar-box">
            <ul className="nav">
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/breakfast">Breakfast</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/lunch">Lunch</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/snack">4PM Snack</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/dinner">Dinner</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/cake">Cakes</NavLink>
              </li>
              <li className='cart-icon'>
                <NavLink><FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} /></NavLink>
              </li>
              <li className='cart-user'>
               <NavLink><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default CategoryNavbar;
