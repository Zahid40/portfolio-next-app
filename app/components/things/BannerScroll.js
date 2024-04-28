import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay , FreeMode } from 'swiper/modules';

function BannerScroll() {
  return (
    <>
      <Swiper
      spaceBetween={2}
      slidesPerView={15.5}
      freeMode={true}
      loop={true}
      speed= {1000}
      
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log('')}
      onSwiper={(swiper) => console.log()}
      modules={[Autoplay , FreeMode]}
      className='bg-zbg flex justify-center items-center'
    >
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Design</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Develop</span></SwiperSlide>
      <SwiperSlide ><div className='flex justify-center items-center'><img src="/Zlogo_blue.svg" alt="" className='w-12 h-12 ' /></div></SwiperSlide>
      <SwiperSlide><span className='font-medium text-white h-12 flex items-center justify-center'>Create</span></SwiperSlide>
    </Swiper>
    </>
  )
}


export default BannerScroll
