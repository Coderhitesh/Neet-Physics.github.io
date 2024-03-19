import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import './StudentSuccess.css'

import s1 from './one.png'
import s2 from './two.png'
import s3 from './three.png'
import s4 from './four.png'
import s5 from './five.png'
import s6 from './six.png'
import s7 from './seven.png'

function StudentSuccess() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <section className='studentsuccess-section'>
            <div className='container'>
                <div className='heading'>
                    <span>STUDENT SUCCESS STORIES</span>
                </div>
                <div className='success-detail'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            310:{
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination]}
                        className="mySwiper-success"
                    >
                        <SwiperSlide className='image'><img src={s1} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s2} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s3} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s4} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s5} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s6} alt=''/></SwiperSlide>
                        <SwiperSlide className='image'><img src={s7} alt=''/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default StudentSuccess