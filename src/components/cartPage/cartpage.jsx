import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars-2';




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
            <div className='foodon-plate'>
              <div className='plate-itemcard'>
                <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="imageee" className='plate-image' />
              </div>
              <div className='productdetail-box'>
                <h5>Calmari fritti</h5>
                <h6>Pancake with honey and banana</h6>
                <h6>€ 10</h6>
              </div>
              <h6 className='quantiy-icon'>Qty</h6>
              <button className='minus-quatity'>-</button>
              <p className='quntity-num'>1</p>
              <button className='plus-quantity'>+</button>
              <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            
            <div className='foodon-plate'>
              <div className='plate-itemcard'>
                <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="imageee" className='plate-image' />
              </div>
              <div className='productdetail-box'>
                <h5>Calmari fritti</h5>
                <h6>Pancake with honey and banana</h6>
                <h6>€ 10</h6>
              </div>
              <h6 className='quantiy-icon'>Qty</h6>
              <button className='minus-quatity'>-</button>
              <p className='quntity-num'>1</p>
              <button className='plus-quantity'>+</button>
              <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>

            <div className='foodon-plate'>
              <div className='plate-itemcard'>
                <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="imageee" className='plate-image' />
              </div>
              <div className='productdetail-box'>
                <h5>Calmari fritti</h5>
                <h6>Pancake with honey and banana</h6>
                <h6>€ 10</h6>
              </div>
              <h6 className='quantiy-icon'>Qty</h6>
              <button className='minus-quatity'>-</button>
              <p className='quntity-num'>1</p>
              <button className='plus-quantity'>+</button>
              <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>

            <div className='foodon-plate'>
              <div className='plate-itemcard'>
                <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="imageee" className='plate-image' />
              </div>
              <div className='productdetail-box'>
                <h5>Calmari fritti</h5>
                <h6>Pancake with honey and banana</h6>
                <h6>€ 10</h6>
              </div>
              <h6 className='quantiy-icon'>Qty</h6>
              <button className='minus-quatity'>-</button>
              <p className='quntity-num'>1</p>
              <button className='plus-quantity'>+</button>
              <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>

            <div className='foodon-plate'>
              <div className='plate-itemcard'>
                <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" alt="imageee" className='plate-image' />
              </div>
              <div className='productdetail-box'>
                <h5>Calmari fritti</h5>
                <h6>Pancake with honey and banana</h6>
                <h6>€ 10</h6>
              </div>
              <h6 className='quantiy-icon'>Qty</h6>
              <button className='minus-quatity'>-</button>
              <p className='quntity-num'>1</p>
              <button className='plus-quantity'>+</button>
              <button className='trash-button'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
           
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