import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from '../context/cartContext';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';


const Cartpage = () => {

    const navigate = useNavigate();
    const handleCloseClick = () => {
        navigate(-1);
    };
    
    const cart = useContext(CartContext);

    const calculateTotalPrice = () => {
        return cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className='cartpage-body'>
            <div className="container cartpage-box">
                <div className='row cards-box'>
                    <div className='cart-card'>
                        <div className="myplate">
                            <h5>MY PLATE</h5> 
                        </div>
                        <div >
                          <button onClick={handleCloseClick} className='cart-page-close'>
                            <FontAwesomeIcon icon={faXmark} />
                          </button>  
                        
                        </div>
                        <div className="container cart-item-box">
                        <Scrollbars style={{ height: 350 }}>
                            {cart.cartItems.map((product) => {
                                const { id, productName, price, productImage, bfcardDetails, quantity } = product;

                                return (
                                    <div className='foodon-plate' key={id}>
                                        <div className='plate-itemcard'>
                                            <img src={productImage} alt={productName} className='plate-image' />
                                        </div>
                                        <div className='productdetail-box'>
                                            <h5>{productName}</h5>
                                            <h6>{bfcardDetails}</h6>
                                            <h6>€ {price}</h6>
                                        </div>
                                        <h6 className='quantiy-icon'>Qty</h6>

                                        {quantity > 0 ? (
                                            <>
                                                <button className='minus-quatity' onClick={() => cart.removeOneFromCart(id)}>-</button>
                                                <p className='quntity-num'>{quantity}</p>
                                                <button className='plus-quantity' onClick={() => cart.addOneToCart(id)}>+</button>
                                            </>
                                        ) : (
                                            <span>Quantity is 0</span>
                                        )}

                                        <button className='trash-button' onClick={() => cart.deleteFromCart(id)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                );
                            })}
                        </Scrollbars>
                        </div>
                    </div>
                    <div className='checkout-card'>
                        <div className='total'>
                            <h5>TOTAL: € {calculateTotalPrice()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpage;