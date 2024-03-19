import React, { useEffect } from 'react'
import './Neet.css'
import neet from './neet.jpg'

function Neet() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='neet-section'>
      <div className='container'>
        <div className='bg'></div>
        <div className='neet-main-container'>
            <div className='heading'>
                <span>National Eligibility cum Entrance Test</span>
            </div>
            <div className='neet-container-box'>
                <div className='left'>
                    <div className='up'>
                        <img src={neet} alt=''/>
                        <p>Pursuing a medical profession is widely regarded as one of the most honorable paths one can choose. In India, aspiring individuals can achieve their dream of obtaining a medical degree by successfully clearing the National Entrance cum Eligibility Test (NEET) after completing their Class 12 education from a reputable institution. The country boasts numerous esteemed medical institutions that admit candidates based on their merit, granting them the privilege to embark on a comprehensive curriculum and earn a bachelor’s degree in medicine. Before setting your sights on becoming a medical professional, it is essential to explore the list of medical courses available.</p>
                    </div>
                    <div className='down'>
                        <h2>List of Undergraduate Medical Degrees Under NEET</h2>
                        <p>In order to make the right decision, you must have a full-proof idea of the different medical courses offered by the leading medical institutions in India. In fact, you also need to consider the fact that you will pursue a postgraduate degree after completing a doctorate course in one of the NEET-recognized institutions.</p>
                        <p>For your convenience, here is the list of medical degrees you need to consider and prepare wisely.</p>
                        <p>01) Bachelor of Medicine, Bachelor of Surgery – MBBS</p>
                        <p>02) Bachelor of Dental Surgery – BDS</p>
                        <p>03) Bachelor of Ayurvedic Medicine and Surgery – BAMS</p>
                        <p>04) Bachelor of Unani Medicine and Surgery – BUMS</p>
                        <p>05) Bachelor of Homeopathy Medicine and Surgery – BHMS</p>
                        <p>06) Bachelor of Naturopathy and Yogic Science – BNYS</p>
                        <p>07) Bachelor of Veterinary Sciences and Animal Husbandry – B.V.Sc & AH</p>
                        <p>08) Bachelor of Physiotherapy – B.Pth or BPT</p>
                        <p>09) Bachelor of Siddha Medicine and Surgery – BSMS</p>
                    </div>
                </div>
                <div className='right'>
                   <div className='main'>
                   <h2>Get in Touch</h2>
                    <form>
                        <div className='same-field'>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='same-field'>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='same-field'>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className='same-field'>
                            <input type="text" placeholder='Number' />
                        </div>
                        <div className='textarea'>
                            <textarea placeholder='Message..'></textarea>
                        </div>
                        <button type='submit' className='button-86'>Submit</button>
                    </form>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Neet
