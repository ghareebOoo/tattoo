"use client"
import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion"

import 'swiper/css';

export default function Information() {
  return (
    <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='p-5 mt-5'>

       <Swiper
        slidesPerView={1}
       >
      <SwiperSlide>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
            <div>
                <ImQuotesLeft  className='text-9xl text-gray-400'/>
            </div>
            <div>
                <p className='text-base md:text-xl lg:text-2xl font-bold text-dark font-raleway lg:max-w-[700px] leading-[25px] md:leading-[35px] lg:leading-[40px]'>The entire team is extremely kind and friendly. They{`'`}re fantastic. They{`'`}re great at what they do! And it{`'`}s unique.They will properly consult with you.</p>
                <div className='mt-8 flex items-center gap-5'>
                    <h2 className='text-2xl font-bold font-rozha'>Jack Geoffrey</h2>
                    <div className='w-[4px] h-[30px] bg-dark'></div>
                    <h3 className='font-medium font-raleway text-xl'>Tattoo Artist</h3>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
            <div>
                <ImQuotesLeft  className='text-9xl text-gray-400'/>
            </div>
            <div>
                <p className='text-base md:text-xl lg:text-2xl font-bold text-dark font-raleway lg:max-w-[700px] leading-[25px] md:leading-[35px] lg:leading-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?</p>
                <div className='mt-8 flex items-center gap-5'>
                    <h2 className='text-2xl font-bold font-rozha'>Douglas Hane</h2>
                    <div className='w-[4px] h-[30px] bg-dark'></div>
                    <h3 className='font-medium font-raleway text-xl'>Tattoo Artist</h3>
                </div>
            </div>
        </div>
      </SwiperSlide>
        </Swiper>

    </motion.div>
  )
}
