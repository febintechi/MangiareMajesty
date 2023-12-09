import React from 'react';
import ReactDOM from 'react-dom/client';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
