import React, { useEffect } from 'react'
import './StudyMaterial.css'
import bg from './bg.jpg'

function StudyMaterial() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='studymaterial-section'>
            <div className='container'>
                <div className='bg'>
                </div>
                <div className='studymaterial-main-container'>
                    <div className='heading'>
                        <span>STUDY MATERIAL</span>
                    </div>
                    <div className='studymaterial-container'>
                        <div className='left'>
                            <div className='up'>
                                <p>(a). Topic wise notes on each chapter</p>
                                <p>Download our App ‘NEET PHYSICS By Naveen Tiwari ‘ from Google Play Store, from where you can get following support material.</p>
                                <p>(i) All chapterwise  notes of XI/XII/NEET PHYSICS</p>
                                <p>(ii) All chapterwise MCQ’s of NEET PHYSICS</p>
                                <p>(iii) Solution Of HC VERMA Part I &II</p>
                                <a className='button-86' href='https://play.google.com/store/apps/details?id=co.diy17.yxvop'>Download App</a>
                            </div>
                            <div className='down'>
                                <span>Topic wise video lectures on each chapter</span>
                                <p>Download my app ‘NEET PHYSICS By Naveen Tiwari ‘ from Google Play Store, https://play.google.com/store/apps/details?id=co.diy17.yxvop and subscribe my youtube channel ‘ Tiwaris Classes ‘ https://play.google.com/store/apps/details?id=co.diy17.yxvop from where you will get the following support material.</p>
                                <p>(i) All chapterwise  videos of XI/XII/NEET PHYSICS</p>
                                <p>(ii) All chapterwise videos of MCQ’s of NEET PHYSICS From PYQs</p>
                                <p>(iii) Video Solutions Of HC VERMA Part I &II</p>
                                <a className='button-86' href='https://play.google.com/store/apps/details?id=co.diy17.yxvop'>Download App</a>
                            </div>
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

export default StudyMaterial
