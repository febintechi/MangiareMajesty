import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const CakeChild = (props) => {
  const { itemType, id, productName, price, productImage, cardDetails } = props.data;
  const cart = useContext(CartContext);
  console.log(cart.items);

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
      <div className="card-body">
        <img src={productImage} alt={id} className='card-img-top' />
        <h5>€ {price}</h5>
        <h5 className="card-title">{productName}</h5>
        <p className="card-details">{cardDetails}</p>
        <button className="btn btn-outline-warning" onClick={() => {
          console.log("Add to Cart clicked for ID:", id);
          cart.addOneToCart(itemType, id);
          }}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CakeChild;
