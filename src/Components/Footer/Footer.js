import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <span className="logo_name"><img src='https://i.ibb.co/mNjTmTm/tc-logo.png' /></span>
        </div>
        <div className="media-icons">
          <a to="#"><i className="fab fa-facebook-f"></i></a>
          <a to="#"><i className="fab fa-twitter"></i></a>
          <a to="#"><i className="fab fa-instagram"></i></a>
          <a to="#"><i className="fab fa-linkedin-in"></i></a>
          <a to="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="midle-section">
        <div className='box box-1'>
          <h3 className='link_name'>About Us</h3>
          <p style={{color:'white'}}>
          Firstly, I would like to communicate my appreciation for the belief you have shown in Tiwari’s Classes. At Tiwaris Classes...
          </p>
        </div>
        <div className="box">
          <li className="link_name">Main Links</li>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About Us</Link></li> */}
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </div>
        <div className="box">
          <li className="link_name">Important Links</li>
          {/* <li><Link to="/course">COURSE & FEE</Link></li> */}
          <li><Link to="/study-material">STUDY MATERIAL</Link></li>
          <li><Link to="/test">TESTS</Link></li>
          <li><Link to="/doubt-resolution">DOUBT RESOLUTION</Link></li>
          <li><Link to="/physics-experiments-activities">EXPERIMENTS & ACTIVITIES</Link></li>
        </div>
        <div className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email" /></li>
          <li><input type="button" value="Subscribe" /></li>
        </div>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2024 <Link to="/">NEET Physics</Link>All rights reserved</span>
        <span className="copyright_text">Designed By <Link to="https://digiindiasolutions.com/">DIGI Solution</Link></span>
        {/* <span className="policy_terms">
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms & condition</Link>
        </span> */}

      </div>
    </div>
  </footer>
  )
}

export default Footer
