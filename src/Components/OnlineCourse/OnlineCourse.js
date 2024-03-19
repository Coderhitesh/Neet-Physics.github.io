import React, { useEffect } from 'react'
// import './OnlineCourse.css'

function OnlineCourse() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='offline-section'>
            <div className='container'>
                <div className='bg'></div>
                <div className='offline-main-container'>
                    <div className='heading'>
                        <span>ONLINE COURSES</span>
                    </div>
                    <div className='offline-container'>
                        <div className='up'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.NO.</th>
                                        <th>CODE</th>
                                        <th>NAME OF COURSE</th>
                                        <th>DURATION</th>
                                        <th>FEES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>NEET/OND</td>
                                        <td>(DROPPER BATCH) XI AND XII SYLLABUS FOR NEET IN DETAIL +VIDEO LECTURES OF HC VERMA PART I and II WITH HAND WRITTEN SOLUTIONS OF HC VERMA I AND II PART IN DETAIL+ PYQS</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs10K</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='down'>
                        <span>Note:-</span>
                        <p>1) During promotional periods, there may be a Heavy Discount on the online fee for the dropper batch.</p>

                    </div>
                </div>


            </div>

        </section>
    )
}

export default OnlineCourse
