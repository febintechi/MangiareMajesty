import React from 'react'

import OpeningBanner from '../../components/banner/openingbanner';
import TileImages from '../../components/tilesbelowbanner/TileImages';
import Description from '../../components/description/description';
import Diningvideo from '../../components/diningvideo/diningvideo';



const Home = () => {
  return (
    <div>
      <OpeningBanner />
      <TileImages />
      <Description />
      <Diningvideo />
  
    </div>
  )
}

export default Home;