import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from '../context/cartContext';

const Product = (props) => {
  const { id, productName, price, productImage, bfcardDetails } = props.data;
  const cart = useContext(CartContext);
  console.log(cart.items);

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
      <div className="card-body">
        <img src={productImage} alt={id} className="card-img-top" />
        <h5>€ {price}</h5>
        <h5 className="card-title">{productName}</h5>
        <p className="card-details">{bfcardDetails}</p>

        <NavLink to="/cart" className="btn btn-outline-warning" onClick={() => cart.addOneToCart(id)}>
          ADD TO CART
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
