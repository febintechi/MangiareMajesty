import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars-2';


import { BREAKFASTITEMS } from '../../data/breakfastData/products';



const Cartpage = () => {

  return (
    <body className='cartpage-body'>
      <div className="container cartpage-box">
        <div className='row cards-box'>


          <div className='cart-card'>


            <div className="myplate">
              <h5>MY PLATE</h5>
            </div>
            
            
            <Scrollbars style={{height: 400 }}>

             
               {BREAKFASTITEMS.map((product,id) =>(

                <div className='foodon-plate'>
                <div className='plate-itemcard'>
                  <img src={product.productImage} alt="imageee" className='plate-image' />
                </div>
                <div className='productdetail-box'>
                  <h5 key={id}>{product.productName}</h5>
                  <h6>{product.bfcardDetails}</h6>
                  <h6>€ {product.price}</h6>
                </div>
                <h6 className='quantiy-icon'>Qty</h6>
                <button className='minus-quatity'>-</button>
                <p className='quntity-num'>1</p>
                <button className='plus-quantity'>+</button>
                <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
              </div>
                
              ))}
  

            </Scrollbars>
            
          </div>


          <div className='checkout-card'>
            <div className='total'>
              <h5>TOTAL</h5>
            </div>
          </div>

        </div>
       
      </div>
    </body>
  );
}


export default Cartpage;