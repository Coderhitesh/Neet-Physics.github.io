import React, { useEffect } from 'react'
import './PracticeTest.css'

function PracticeTest() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='practice-section'>
            <div className='container'>
                <div className='bg'></div>
                <div className='test-main-container'>
                    <div className='heading'>
                        <span>PRACTICE TESTS</span>
                    </div>
                    <div className='test-main-box'>
                        <div className='left'>
                            <p>Dear  students our  App  offers practice tests in physics classwise and chapterwise  to enhance your understanding and boost confidence. Dive into interactive assessments designed to reinforce concepts. Embrace the journey of learning and mastering physics.</p>
                            <p>You can access Physics Practice Tests for XI/XII/NEET from the following App</p>
                            <p>‘NEET PHYSICS By Naveen Tiwari‘  <a href='https://play.google.com/store/apps/details?id=co.diy17.yxvop'>https://play.google.com/store/apps/details?id=co.diy17.yxvop</a></p>
                            <p>Solutions of these practice tests will be uploaded on this App only.</p>
                            <a className='button-86' href='https://play.google.com/store/apps/details?id=co.diy17.yxvop'>Download App</a>
                        </div>
                        <div className='right'>
                            <div className='input-search-box'>
                                <span>Search</span>
                                <div className='input-search-content'>
                                    <input type='text' />
                                    <button className='btn'><i class="ri-search-2-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PracticeTest
