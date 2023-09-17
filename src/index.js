import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/navbar/navbar.css"
import "./components/banner/openingbanner.css"
import "./components/tilesbelowbanner/tilebelowbanner.css"
import "./components/description/description.css"
import "./components/diningvideo/dining.css"
import "./components/footer/footer.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
