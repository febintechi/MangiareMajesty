import React from 'react'
import Navbar from './components/navbar/navbar'
import OpeningBanner from './components/banner/openingbanner'
import Footer from './components/footer/footer'
import Tileimages from './components/tilesbelowbanner/tileimages'
import Description from './components/description/description'
import Diningvideo from './components/diningvideo/diningvideo'
const App = () => {
  return (
  <div>
   <Navbar />
   <OpeningBanner />
   <Tileimages />
   <Description />
   <Diningvideo />
   <Footer />
  </div>
  )
}




export default App

