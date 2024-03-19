import React, { useEffect, useState } from 'react'
import './Query.css'

function Query() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const faqData = [
        {
            question: 'What is NEET?',
            answer: 'NEET stands for the National Eligibility cum Entrance Test, which is a competitive exam in India for admission into medical and dental colleges.',
        },
        {
            question: 'Why is NEET important for medical aspirants?',
            answer: 'NEET is the gateway to pursuing undergraduate medical and dental courses in India. It is essential for aspiring doctors and dentists to qualify NEET to secure admission into reputable institutions.',
        },
        {
            question: 'What subjects are covered under the NEET syllabus?',
            answer: 'The NEET syllabus includes Physics, Chemistry, and Biology. It is important to have a strong foundation in all three subjects to excel in the exam.'
        },
        {
            question: 'How can TiwarisClasses help me prepare for NEET and Physics?',
            answer: 'Tiwaris Classes offers comprehensive courses and resources specifically designed to prepare students for NEET and excel in Physics. Our experienced faculty, interactive teaching methods, and extensive study materials ensure effective learning.'
        },
        {
            question: 'What teaching methods are employed at Tiwaris Classes?',
            answer: 'At Tiwaris Classes, we employ a combination of interactive lectures, problem-solving sessions, concept reinforcement through practical examples, and regular assessments to enhance students’ understanding and retention of Physics concepts.'
        },
        {
            question: 'Are there separate courses for NEET and Physics?',
            answer: 'Yes, we offer dedicated courses for NEET preparation as well as Physics excellence. Students can choose the course that aligns with their specific needs and goals.'
        },
        {
            question: 'Are doubt-clearing sessions available?',
            answer: 'Absolutely! TiwarisClasses conducts regular doubt-clearing sessions where students can seek clarification on challenging concepts, problem-solving techniques, and exam-related queries.'
        },
        {
            question: 'Do you provide mock tests and assessments?',
            answer: 'Yes, we conduct regular mock tests and assessments to evaluate students’ progress, identify areas of improvement, and provide personalized feedback. This helps students gauge their performance and develop exam strategies.'
        }
        ,
        {
            question: 'How can I enroll in TiwarisClasses for NEET and Physics courses?',
            answer: 'To enroll in our courses, you can visit our website fill the form or contact our admissions team directly. We will guide you through the enrollment process and provide any necessary information or assistance.'
        }
    ];


    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className='query-section'>
            <div className='container'>
                <div className='left'>
                    <div className='heading'>
                        <span>Frequently Asked Questions</span>
                    </div>
                    <div className='faq-box'>
                    <div className="faq-content">
                        {faqData.map((item, index) => (
                            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => handleToggle(index)}>
                                <div className="question">{item.question}
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </div>
                                <div className="answer">{openIndex === index && item.answer}</div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='right-heading'>
                        <span>Send Your Enquiry</span>
                    </div>
                    <form>
                        <div className='name same-form-detail'>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='name same-form-detail'>
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className='name same-form-detail'>
                            <input type='text' placeholder='Phone No.' />
                        </div>
                        <div className='name same-form-detail'>
                            <input type='text' placeholder='Subject' />
                        </div>
                        <div className='textarea same-form-detail'>
                            <textarea name='message' id='message' placeholder='Message'></textarea>
                        </div>
                        <button className='button-86' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Query
