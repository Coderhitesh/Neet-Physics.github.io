import React, { useEffect } from 'react'
import './contact.css'
import bg from './bg.jpg'

function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='contact-section'>

            <div className='container'>
                <div className='bg'>

                </div>

                <div className='main-content'>
                    <div className='heading'>
                        <span>Contact Us</span>
                    </div>
                    <div className='form-main-container'>
                        <div className='adress-container'>
                            <h2>Contact Information</h2>
                            <div className='adress-detail'>
                                <div className='adress-box same-address'>
                                    <div className='logo'>
                                        <i class="ri-home-4-fill"></i>
                                    </div>
                                    <div className='adress'>
                                        <p>Opposite Union Bank of India, Choma, Palam Vihar, Gurgaon</p>
                                        <p>Golf Course Road Sector-55, Near Karam hi Dharam Apartments Gurgaon</p>
                                    </div>
                                </div>
                                <div className='phone-box same-address'>
                                    <div className='logo'>
                                        <i class="ri-phone-fill"></i>
                                    </div>
                                    <div className='number'>
                                        <a href='tel:+919818280575'>9818280575</a>
                                        <a href='tel:+919971060575'>9971060575</a>
                                        {/* <a href='tel:+917428870575'>7428870575</a> */}
                                    </div>
                                </div>
                                <div className='mail-box same-address'>
                                    <div className='logo'>
                                        <i class="ri-mail-fill"></i>
                                    </div>
                                    <div className='mail'>
                                        <a href='mailto:tiwarisclassesnumberone@gmail.com'>tiwarisclassesnumberone@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className='name same-form-field'>
                                <input type='text' placeholder='Name' />
                            </div>
                            <div className='email same-form-field'>
                                <input type='email' placeholder='Email' />
                            </div>
                            <div className='phone same-form-field'>
                                <input type='text' placeholder='Phone NO.' />
                            </div>
                            <div className='messsage same-form-field'>
                                <input type='text' placeholder='Message' />
                            </div>
                            <div className='textarea'>
                                <textarea placeholder='Your Message...'></textarea>
                            </div>
                            <button className='button-86' type='submit'>Submit</button>
                        </form>
                    </div>
                    <div className='map-container'>
                        <a href='https://www.google.com/maps/place/H+Block,+Chauma+Village,+Sector+1,+Palam+Vihar,+Gurugram,+Haryana+122017/@28.5181055,77.0184465,15z/data=!3m1!4b1!4m10!1m2!2m1!1sSaini+Plaza,+Near+Shri+Ram+Mandir+%26+Andhra+Bank,+Opposite+H-Block,+Palam+Vihar,+Gurgaon!3m6!1s0x390d1a210e4f466b:0xcd45e9090f4bd8e9!8m2!3d28.5181232!4d77.0369089!15sCldTYWluaSBQbGF6YSwgTmVhciBTaHJpIFJhbSBNYW5kaXIgJiBBbmRocmEgQmFuaywgT3Bwb3NpdGUgSC1CbG9jaywgUGFsYW0gVmloYXIsIEd1cmdhb24iA4gBAZIBDG5laWdoYm9yaG9vZOABAA!16s%2Fg%2F11crz_v7rb?entry=ttu'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.875392393691!2d77.0184465439716!3d28.51810545792107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a210e4f466b%3A0xcd45e9090f4bd8e9!2sH%20Block%2C%20Chauma%20Village%2C%20Sector%201%2C%20Palam%20Vihar%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1710397634315!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
