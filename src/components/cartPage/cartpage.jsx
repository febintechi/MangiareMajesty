import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from '../context/cartContext';
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
            <div className="container-fluid">
                <div className='row raw-outer-box justify-content-center align-items-center'>
                    <div className="cart-card col-12 col-lg-6 text-center">
                        <div className="myplate">
                            <h5 className='myplateHead'>MY PLATE</h5>
                        </div>
                        <div>
                            <button onClick={handleCloseClick} className='cart-page-close'>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        
                         <Scrollbars style={{ height: 350 }}>
                            {cart.cartItems.map((product) => {
                                const { id, productName, price, productImage, bfcardDetails, quantity } = product;

                                return (
                                    <div className='foodon-plate' key={id}>

                                        <div className=' prouct-box-full'>
                                        <div className='plate-itemcard'>
                                            <img src={productImage} alt={productName} className='plate-image' />
                                        </div>
                                        <div className='productdetail-box'>
                                            <h5 className='productName'>{productName}</h5>
                                            <h6 className='productDetails'>{bfcardDetails}</h6>
                                            <h6 className='price'>€ {price}</h6>
                                        </div>
                                        </div>

                                        <div className='Product-controls'>
                                        <h6 className='quantiy-icon'>Qty</h6>
                                        {quantity > 0 ? (
                                                <>
                                                    <button className='minus-quantity' onClick={() => cart.removeOneFromCart(id)}>-</button>
                                                    <p className='quantity-num'>{quantity}</p>
                                                    <button className='plus-quantity' onClick={() => cart.addOneToCart(id)}>+</button>
                                                </>
                                            ) : (
                                            <span>Quantity is 0</span>
                                        )}
                                        <button className='trash-button' onClick={() => cart.deleteFromCart(id)}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                        </div>
   
                                    </div>
                                );
                            })}
                        </Scrollbars>
                        
                    </div>

                    <div className="checkout-card col-12 col-lg-6 text-center">
                        <div className='total'>
                            <h5 className='totalHead'>TOTAL: € {calculateTotalPrice()}</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cartpage;

