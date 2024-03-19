import React, { useEffect } from 'react'
import './AboutTiwariClasses.css'
import img from './tiwarisir.jpg'

function AboutTiwariClasses() {
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
                        <p>Additionally, make effective use of resources such as textbooks, online tutorials, and practice exams to strengthen your understanding and problem-solving skills. Don’t hesitate to reach out to us if you encounter any difficulties or have questions.</p>
                        <p>Furthermore, prioritize understanding the fundamental principles behind each concept rather than memorizing formulae or equations. This deeper understanding will not only help you in answering exam questions but also in applying Physics principles to real-world scenarios.</p>
                        <p>Lastly, maintain a positive mind set and stay motivated throughout your preparation journey. Remember your goals and the reasons why you aspire to pursue a career in the medical field. Visualize your success and keep pushing yourself to achieve it.</p>
                        <p>I have full confidence in your abilities and dedication to succeed in the NEET Physics examination. Stay focused, work hard, and believe in yourself. Your efforts will surely yield fruitful results.</p>
                        <p className='last-p'>Wishing you all the best for your upcoming NEET exam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTiwariClasses
