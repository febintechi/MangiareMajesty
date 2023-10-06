import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Menu from './components/menu/Menu'; 
import WineList from './components/wineList/WineList';
import Reservations from './components/reservations/Reservations';
import Home from './pages/homepage/Home';
import Footer from './pages/footerpage/footerpage';
import Errorpage from './components/errorPage/Errorpage';

import CategoryNavbar from './components/orderCategory/CategoryNavbar';
import BreakfastPage from './pages/breakfastpage/breakfstPage';
import Lunchpage from './pages/lunchpage/lunchpage';
import SnacksPage from './pages/snackpage/snacksPage.jsx';
import DinnerPage from './pages/dinnerpage/dinnerpage';
import CakesPage from './pages/cakepastrypage/cakesPage';


const App = () => {
  return (
    <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
             
            <Route path="/ordernow" element={<CategoryNavbar />}>
              <Route index element={<BreakfastPage />} />
              <Route path="breakfast" element ={<BreakfastPage />} />
              <Route path="lunch" element={<Lunchpage />} />
              <Route path="snack" element={<SnacksPage />} />
              <Route path="dinner" element={<DinnerPage />} />
              <Route path="cake" element={<CakesPage />} />
            </Route>
  

          <Route path="/menu" element={<Menu />} />
          <Route path="/winelist" element={<WineList />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;

