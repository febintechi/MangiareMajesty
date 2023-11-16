import React from 'react';
import { NavLink,Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const CategoryNavbar = () => {
   
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);



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
                <NavLink to="/cart" >
                  <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
                  <span className='cart-total--item'>{totalQuantity}</span>
                </NavLink>
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
