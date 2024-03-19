import React, { useEffect } from 'react'
import './PhysicsExperiments.css'
// import hero from './hero.jpg'
import hero from './hero-2.jpg'

function PhysicsExperiments() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='physics-section'>
      <div className='container'>
        <div className='bg'></div>
        <div className='physics-main-section'>
            <div className='heading'>
                <span>Physics Experiments And Activities</span>
            </div>
            <div className='main'>
            <div className='up'>
                <div className='left'>
                <img src={hero} alt=''/>
                </div>
                <div className='right'>
                    <div className='same-detail first'>
                        <span>Dear Parents and Students,</span>
                        <p>We are thrilled to announce the availability of engaging Physics experiments and activities at our coaching institute</p>
                    </div>
                    <div className='same-detail second'>
                        <h4>Hands-On Learning Experience:</h4>
                        <p>Discover the world of physics through interactive experiments that bring theoretical concepts to life. Institute is equipped to provide a hands-on learning experience, fostering a deeper understanding of the subject.</p>
                    </div>
                    <div className='same-detail third'>
                        <h4>Igniting Curiosity:</h4>
                        <p>Encourage your child’s curiosity as they explore the wonders of physics. Our carefully crafted activities are designed to spark interest and passion for the subject, making learning a fun and exciting journey.</p>
                    </div>
                    <div className='same-detail fourth'>
                        <h4>Collaborative Learning Environment:</h4>
                        <p>Join a community of learners where collaboration is key. Students will have the opportunity to work together on experiments, promoting teamwork and a supportive learning atmosphere.</p>
                    </div>
                    <div className='same-detail fifth'>
                        <h4>Comprehensive Curriculum:</h4>
                        <p>Our physics program goes beyond traditional teaching methods. With a comprehensive curriculum, we aim to prepare students not only for exams but also for real-world applications of physics principles.</p>
                    </div>
                </div>
            </div>
            <div className='down'>
                <div className='same-detail'>
                    <h4>Dedicated Faculty:</h4>
                    <p>Our experienced faculty is committed in guiding the students through every experiment, ensuring a safe and enriching learning environment. They are passionate about nurturing young minds and helping them excel in physics.</p>
                </div>
                <div className='same-detail'>
                    <h4>So now Get Ready for an Exciting Journey!</h4>
                    <p>Mark your calendars for upcoming physics  sessions and dive into a world of discovery! For more information and enrollment details, visit our centres in Sector-55 Gurgaon or Palam Vihar Gurgaon  or contact us at tiwarisclassesnumberone@gmail.com | 9818280575,9971060575</p>
                </div>
                <p>Let’s embark on this physics adventure together!</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PhysicsExperiments
