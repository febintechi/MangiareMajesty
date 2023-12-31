import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import "./components/navbar/navbar.css";
import "./components/banner/openingbanner.css";
import "./components/tilesbelowbanner/tilebelowbanner.css";
import "./components/description/description.css";
import "./components/diningvideo/dining.css";
import "./components/footer/footer.css";

import "./components/breakfast/breakfast.css";
import "./components/lunch/lunch.css";


import "./components/orderCategory/CategoryNavbar.css";
import './components/cartPage/cartpage.css'
import './components/wineList/winelist.css'
import './components/menu/menu.css'
import './components/reservations/Reservations.css'

import CartProvider from './components/context/cartContext';
import { FilterProvider } from './components/filterContext/filterContext';

import './components/OrdernowPopUp/OrdernowModal.css';
import './components/addedToCartNotificationBar/addedTocartNotification.css';
import './components/filter/filterOption.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
