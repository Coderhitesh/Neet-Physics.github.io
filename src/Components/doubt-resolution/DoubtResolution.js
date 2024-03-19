import React, { useEffect } from 'react'
import './DoubtResolution.css'

function DoubtResolution() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='doubts-section'>
            <div className='container'>
                <div className='bg'></div>
                <div className='doubts-main-container'>
                    <div className='heading'>
                        <span>Doubt Resolution</span>
                    </div>
                    <div className='doubt-main-box'>
                        <div className='left'>
                            <p>Dear students feel free to ask any question or seek clarification on physics concepts. Our dedicated team is here to assist you in understanding and mastering the physics subject. Let’s work together to make learning physics an engaging and enjoyable experience.</p>
                            <p>Send your doubts in your class whatsapp group .You will be added in the group after registration.</p>
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

export default DoubtResolution
