import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Mangiare Majesty</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}></button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/orderNow">Order Now</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/winelist">Wine List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/reservation">Reservations</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
