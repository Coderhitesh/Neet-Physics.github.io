import React from 'react'
import './OfflineCourse.css'

function OfflineCourse() {
    return (
        <section className='offline-section'>
            <div className='container'>
                <div className='bg'></div>
                <div className='offline-main-container'>
                    <div className='heading'>
                        <span>OFFLINE COURSES</span>
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
                                        <td>CBSE11P</td>
                                        <td>CBSE + PHYSICS EXPERIMENTS AND ACTIVITIES</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs50K</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>CBSE 12P</td>
                                        <td>CBSE + PHYSICS EXPERIMENTS AND ACTIVITIES</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs50K</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>NEET11P</td>
                                        <td>CBSE + NEET+PHYSICS EXPERIMENTS AND ACTIVITIES</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs70K</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>NEET12P</td>
                                        <td>CBSE + PHYSICS EXPERIMENTS AND ACTIVITIES</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs70K</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>NEET13D</td>
                                        <td>DROPPER BATCH XI AND XII SYLLABUS FOR NEET + PHYSICS EXPERIMENTS AND ACTIVITIES TO UNDERSTAND PHYSICS CONCEPTS THOROUGHLY</td>
                                        <td>ONE YEAR</td>
                                        <td>Rs70K</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </div>
                        <div className='down'>
                            <span>Note:-</span>
                            <p>1) Fee is payable in two equal  instalments. One instalment after the trial of three classes and other after two months from the date of registration.</p>
                            <p>2) For some reason if any student want to discontinue the offline classes within two months from the date of registration then 60%of the submitted fee will be refunded, thereafter no fee will be refunded.</p>
                        </div>
                </div>


            </div>

        </section>
    )
}

export default OfflineCourse
