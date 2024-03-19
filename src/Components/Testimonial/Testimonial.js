import React, { useEffect } from 'react'
import './Testimonial.css'

function Testimonial() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <section className='testimonial-section'>
      <div className='container'>
        <div className='bg'></div>
        <div className='main-testimonial-section'>
          <div className='heading'>
            <span>Testimonial</span>
          </div>
          <div className='testimonial-container'>
            <div className='left'>
              <p>“Embark on a journey of inspiration as we share the remarkable stories of our top-performing students. Their achievements not only reflect their dedication but also serve as a testament to the excellence fostered within our academic community. Join us in celebrating their success and drawing inspiration for your own academic endeavours.”  </p>
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

export default Testimonial
