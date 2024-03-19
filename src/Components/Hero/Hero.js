import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './hero.css'
import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import b4 from './banner-4.jpg'
import b5 from './banner-5.jpg'

function Hero() {
    const bannerImage = [
        {
            id:1,
            img : b5
        },
        {
            id:2,
            img : b3
        },
        {
            id:3,
            img : b4  
        }
    ]
  return (
    <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            bannerImage && bannerImage.map((item,index)=>(
                <SwiperSlide key={index}><img className='bannerImage' src={item.img} /></SwiperSlide>
            ))
        }
      </Swiper> 
    </>
  )
}

export default Hero
