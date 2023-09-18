import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  var currentYear = new Date().getFullYear()
  return (
   
    <footer className='footer-main-box'>
      <div className='container'>
        <div className='division-flower'>
          <img width="79" height="23" src="https://osteriafrancescana.it/wp-content/uploads/2017/03/osteriafrancescana_3stelle-michelin.png" class="vc_single_image-img attachment-thumbnail" alt="Osteria Francescana - Massimo Bottura - Modena, Italy" loading="lazy"></img>
        </div>
        <div className='horizontal-line'><hr className='hr' /></div>
      
      <div className='container menu-footer-btn'>
        <a href="/home">
          <h5 className='our-story-btn'>OUR STORY</h5>
        </a>
        <a href="/home">
          <h5 className='careers-btn'>CAREERS</h5>
        </a>
        <a href="/home">
          <h5 className='contact-us-btn'>CONTACT US</h5>
        </a>
        <a href="/home">
          <h5 className='news-btn' >IN THE NEWS</h5>
        </a>
    
      </div>
       
        <div className='social-media-icons'>
          <a href="/home">
            <button className='facebookicon' type='button'>
              <FaFacebook />
            </button>
          </a>
          <a href="/home">
            <button className='twittericon' type='button'>
              <FaTwitter />
            </button>
          </a>
          <a href="/home">
            <button className='instaicon' type='button'>
              <FaInstagram />
            </button>
          </a>
          <a href="/home">
            <button className='Linkedinicon' type='button'>
              <FaLinkedinIn />
            </button>
          </a>
        </div>

        <div className='copyright-box'>
          <p className='copyright'>Mangiare Majesty Italy,Copyright © {currentYear} </p>
        </div>
      </div>
    </footer>
  )
}



export default Footer