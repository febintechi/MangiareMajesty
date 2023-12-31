import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import FilterOption from '../filter/filterOption';

import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const CategoryNavbar = () => {

  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='row col-sm-12 col-md-12 col-lg-12'>
      <nav className="navbar order-bar">
        <div className="container-fluid fluibox">

          <ul className="nav ordernow-option-mainbox ">

            <div className='ordernow-options'>
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
            </div>

            <div className='d-flex catnav-icon-box'>
              <li className='cart-icon'>
                <NavLink to="/cart" >
                  <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
                  <span className='cart-total--item'>{totalQuantity}</span>
                </NavLink>
              </li>
              <li className='cart-user'>
                <NavLink><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /></NavLink>
              </li>
            </div>

          </ul>

        </div>
      </nav>
      <Outlet />
      <FilterOption />
    </div>
  );
};

export default CategoryNavbar;
