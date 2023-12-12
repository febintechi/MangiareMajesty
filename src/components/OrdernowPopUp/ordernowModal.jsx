import React from 'react';
import Wineposter from './Ordernowposter.jpg';

const OrdernowModal = ({ open ,onClose }) => {
  if (!open) return null;

  return (
    <div className='modal-overlay'>
    <div className='wineposter-frame'>
      <img className='wineposter' src={Wineposter} alt="" />
      <button className="close-button" onClick={onClose}>CLOSE</button>
    </div>
    </div>
  );
};

export default OrdernowModal;
