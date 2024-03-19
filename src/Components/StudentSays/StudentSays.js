import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './StudentSays.css'
import komal from './Komal.png'
import lalit from './Lalit.png'
import vikas from './Vikas.png'

function StudentSays() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='studentsay-section'>
            <div className='container'>
                <div className='heading'>
                    <span>What Students Say</span>
                </div>
                <div className='studentsays-detail'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                            310: {
                              slidesPerView: 1,
                              spaceBetween: 40,
                            },
                            933: {
                              slidesPerView: 2,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination]}
                        className="swiper-2"
                    >
                        <SwiperSlide className='slide-1'>
                            <p>I was lucky to have joined Tiwari Classes to prepare for MBBS entrances. They helped me develop key concepts and strategies which are essential to succeeding at any task.</p>
                            <div className='img'>
                                <img src={komal} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-1'>
                            <p>I was lucky to have joined Tiwari Classes to prepare for MBBS entrances. They helped me develop key concepts and strategies which are essential to succeeding at any task.</p>
                            <div className='img'>
                                <img src={lalit} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-1'>
                            <p>I was lucky to have joined Tiwari Classes to prepare for MBBS entrances. They helped me develop key concepts and strategies which are essential to succeeding at any task.</p>
                            <div className='img'>
                                <img src={vikas} alt=''/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default StudentSays
