import React from 'react'
import { NavLink } from 'react-router-dom'



const dinnerChild = (props) => {
  const { id, productName, price, productImage,bfcardDetails } = props.data;  
    return (
    
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="card-body">
            <img src={productImage} alt={id} className='card-img-top' />
            <h5>€ {price}</h5>
            <h5 className="card-title">{productName}</h5>
            <p className="card-details">{ bfcardDetails}</p>
            <button className="btn btn-outline-warning">
            <NavLink to="/cart">ADD TO CART</NavLink>
            </button> 
          </div>
        </div>
      
    )

}

export default dinnerChild
