
import React, { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">Mangiare Majesty</a>
        <button className="navbar-toggler" type="button"onClick={toggleMenu}></button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="/wine-list">Wine List</a></li>
            <li className="nav-item"><a className="nav-link" href="/order-now">Order Now</a></li>
            <li className="nav-item"><a className="nav-link" href="/reservations">Reservations</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;