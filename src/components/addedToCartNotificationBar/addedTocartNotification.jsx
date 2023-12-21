import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const AddedToCartNotification = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return totalQuantity >= 1 ? (
    <div className='notification-box'>
      <h4 className='QuantityNotification-text'>{totalQuantity}{' '}Items added |</h4>
      <h5 className='totalHead-notification'>€ {calculateTotalPrice()}</h5>

      <NavLink to="/cart" className='cart-icon-notification'>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
      </NavLink>
    </div>
  ) : null;
};

export default AddedToCartNotification;
