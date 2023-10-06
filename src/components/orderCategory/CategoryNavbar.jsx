import React from 'react';
import { NavLink,Outlet} from 'react-router-dom';


const CategoryNavbar = () => {
  return (
    <div>
      <nav className="navbar order-bar">
        <div className="container-fluid fluibox">
          <div className="ordernow-bar-box">
            <ul className="nav">
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/breakfast">Breakfast</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/lunch">Lunch</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/snack">4PM Snack</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/dinner">Dinner</NavLink>
              </li>
              <li className="nav-item-order">
                <NavLink className="order-catogry" to="/orderNow/cake">Cake & Pastry</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default CategoryNavbar;

