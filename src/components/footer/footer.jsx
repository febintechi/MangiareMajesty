import React from 'react'


const Footer = () => {
  var currentYear = new Date().getFullYear()
  return (
   
    <footer className='footer-main-box'>
      <div className='container'>
        <div className='division-flower'>
          <img width="79" height="23" src="https://osteriafrancescana.it/wp-content/uploads/2017/03/osteriafrancescana_3stelle-michelin.png" class="vc_single_image-img attachment-thumbnail" alt="Osteria Francescana - Massimo Bottura - Modena, Italy" loading="lazy"></img>
        </div>
        <div className='horizontal-line'><hr className='hr' /></div>
       
       <div className='social-media-icons'>
         
       </div>


        <div className='copyright-box'>
          <p className='copyright'>Mangiare Majesty Italy,Copyright © {currentYear} </p>
        </div>
      </div>
    </footer>
  )
}



export default Footer