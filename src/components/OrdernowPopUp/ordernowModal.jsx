import React from 'react';
import Wineposter from './Ordernowposter.jpg';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const OrdernowModal = ({ open ,onClose }) => {
  if (!open) return null;

  return (
    <div className='modal-overlay'>
    <div className='wineposter-frame'>
      <img className='wineposter' src={Wineposter} alt="" />
      <button className="close-button" onClick={onClose}><IoIosCloseCircleOutline /></button>
      <button className="OrdernowPoster-btn">
      <NavLink className="ordernowPoster-navlink" to="/orderNow/breakfast">ORDER NOW</NavLink>
      </button>
    </div>
    </div>
  );
};

export default OrdernowModal;


