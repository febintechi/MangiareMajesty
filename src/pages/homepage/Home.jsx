import React, { useState, useEffect } from 'react';
import OpeningBanner from '../../components/banner/openingbanner';
import TileImages from '../../components/tilesbelowbanner/tileimages.jsx';
import Description from '../../components/description/description';
import Diningvideo from '../../components/diningvideo/diningvideo';
import OrdernowModal from '../../components/OrdernowPopUp/ordernowModal.jsx';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 9000); // 9 milliseconds = 2000 microseconds

    return () => clearTimeout(timeout);
  }, []);
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <OpeningBanner />
      <TileImages />
      <Description />
      <Diningvideo />
      {showModal && <OrdernowModal open={showModal} onClose={closeModal} />}
    </div>
  );
};

export default Home;
