import React, { useEffect } from 'react'
import img from './tiwarisir.jpg'
import './AboutTiwariClassesHome.css'
import { Link } from 'react-router-dom'

function AboutTiwariClassesHome() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='abouttiwariclasses-section'>
            <div className='container'>
                {/* <div className='heading'>
                    <span>WELCOME TO TIWARI’S CLASSES</span>
                </div> */}
                <div className='tiwariclasses-detail'>
                    <div className='left'>
                        <div className='image'>
                            <img src={img} alt='Tiwari Class Image' />
                        </div>
                        <div className='left-detail'>
                            <p>Naveen Tiwari</p>
                            <p>M.Sc. Physics</p>
                            <p>Jawaharlal Nehru University ,New Delhi</p>
                            <p>B.Ed. (MDU)</p>
                            <p>Gold Medalist</p>
                        </div>
                    </div>
                    <div className='right'>
                        <span>Dear Students,</span>
                        <p>I hope this message finds you well and in high spirits as you prepare for the upcoming NEET Physics examination. As your Physics mentor, I want to take a moment to share some important insights and advice to support your preparation journey.</p>
                        <p>First and foremost, remember that consistent and focused practice is key to mastering Physics concepts. Set aside dedicated study time each day and ensure you cover all the essential topics outlined in the NEET syllabus.</p>
                        <p className='button-up'>Additionally, make effective use of resources such as textbooks, online tutorials, and practice exams to strengthen your understanding and problem-solving skills. Don’t hesitate to reach out to us if you encounter any difficulties or have questions.......</p>
                        <Link to={'/about-tiwari-sir'} className='button-86'>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutTiwariClassesHome
