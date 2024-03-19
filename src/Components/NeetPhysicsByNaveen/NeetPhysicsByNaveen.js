import React, { useEffect } from 'react'
import './NeetPhysicsByNaveen.css'
import { Link } from 'react-router-dom'
import neet from './neet.jpg'
import physics from './physics.jpg'

function NeetPhysicsByNaveen() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='neetphysicsnaveen-section'>
            <div className='container'>
                <div className='heading'>
                    <span>NEET PHYSICS BY NAVEEN TIWARI</span>
                </div>
                <div className='course-detail'>
                    <div className='image'>
                        <img src={neet} alt='' />
                    </div>
                    <div className='detail'>
                        <h2>The National Eligibility cum Entrance Test (NEET)</h2>
                        <p>Pursuing a medical profession is widely regarded as one of the most honorable paths one can choose. In India, aspiring individuals can achieve their dream of obtaining a medical degree by successfully clearing the National Entrance cum Eligibility Test (NEET) </p>
                        <Link className='button-86' to='/neet'>Read More</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NeetPhysicsByNaveen
