"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function NavigationScroll() {
 


  return (
    <>
     <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

      className='w-[400px]'
    >
      <SwiperSlide className='text-center'>Home</SwiperSlide>
      <SwiperSlide className='text-center'>Projects</SwiperSlide>
      <SwiperSlide className='text-center'>Contact</SwiperSlide>
    </Swiper>
    </>
  )
}

export default NavigationScroll
