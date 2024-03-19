import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [isEnter , setIsEnter] = useState(false)
    const  handleMouseOver = () =>{setIsEnter(true)};
    const handleMouseOut = () =>{setIsEnter(false)}
    

    const [isOpen , setIsOpen] = useState(false);

    const handlechangeopen = () =>{
        setIsOpen(!isOpen)
    }

    const handlechangeclose = () =>{
        setIsOpen(false)
    }

    return (
      
        <header>
            <div className='conatiner'>
                <nav>
                   
                    <Link to={'/'} className="logo">
                        <img src='https://i.ibb.co/mNjTmTm/tc-logo.png' />
                    </Link>
                    <ul className={`${isOpen ? "open" : ''}`}>
                        <li><Link  className="forlinkhover active " onClick={handlechangeclose} to="/">Home</Link></li>
                        <li className='dropdown-hover-link' onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver}>
                            <Link className='forlinkhover'>COURSE & FEE</Link>
                            <ul className={`dropdown-two-link ${isEnter ? 'hover' : ''}`}>
                                <Link onClick={handlechangeclose} className='forlinkhover' to='/offline-courses'>Offline Courses</Link>
                                <Link onClick={handlechangeclose} className='forlinkhover' to={'/online-courses'}>Online Courses</Link>
                            </ul>
                            </li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/study-material">STUDY MATERIAL</Link></li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/test">TESTS</Link></li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/doubt-resolution">DOUBT RESOLUTION</Link></li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/physics-experiments-activities">EXPERIMENTS & ACTIVITIES</Link></li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/testimonial">TESTIMONIALS</Link></li>
                        <li><Link onClick={handlechangeclose} className='forlinkhover' to="/contact">CONTACT US</Link></li>
                    </ul>
                    <i onClick={handlechangeopen} className="fas fa-bars menu"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header
