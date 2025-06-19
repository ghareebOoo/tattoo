"use client"

import React, { useMemo, useRef, useState } from 'react'
import ImageOne from "../public/src/gallery/1.png"
import ImageTwo from "../public/src/gallery/2.png"
import ImageThree from "../public/src/gallery/3.png"
import ImageFour from "../public/src/gallery/4.png"
import ImageFive from "../public/src/gallery/5.png"
import ImageSix from "../public/src/gallery/6.png"
import ImageSeven from "../public/src/gallery/7.png"
import ImageEight from "../public/src/gallery/8.png"
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRight } from 'react-icons/fa6'

import {motion} from "framer-motion"

const variants = {
  hidden: {},
  show: {
    transition:{
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}



export default function Gallery() {

  const swiperRef = useRef<SwiperType | null>(null)

  const [showSwiper , setShowSwiper] = useState(false)

  const dataGallery = useMemo(() => (
    [
      { img: ImageOne },
      { img: ImageTwo },
      { img: ImageThree },
      { img: ImageFour },
      { img: ImageFive },
      { img: ImageSix },
      { img: ImageSeven },
      { img: ImageEight },
    ]
  ), [])

  return (
    <motion.div variants={variants} initial="hidden" whileInView={"show"} className='bg-[#f9f9f9] p-5 mt-5'>
      <motion.h2 initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Check my gallery:</motion.h2>


      <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {dataGallery.map((item, index) => (
          <div
            key={index}
            className='cursor-pointer'
            onClick={() => {swiperRef?.current?.slideTo(index); setShowSwiper(true);}}
          >
            <Image
              src={item.img}
              alt={`gallery-image-${index}`}
              width={500}
              height={500}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </motion.div>

      <motion.button initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='cursor-pointer uppercase mx-auto mt-8 bg-dark flex items-center justify-center gap-4 text-white px-6 py-4'>View all <FaArrowRight className='text-2xl'/></motion.button>

      {showSwiper &&       <div className='fixed inset-0 w-full z-50'>
        <div onClick={()=> setShowSwiper(false)} className='cursor-pointer absolute right-5 top-5 z-50'>
            <IoCloseOutline className='text-3xl text-white'/>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='h-full'
        >
          {dataGallery.map((item, index) => (
            <SwiperSlide key={index} className='relative'>
              <div className='absolute inset-0 bg-[rgba(0,0,0,0.9)]'></div>
              <div className='p-5 w-full h-full flex justify-between items-center relative'>
                <div className='prevBtn cursor-pointer text-white'>
                  <IoIosArrowBack className='text-3xl' />
                </div>
                <div className='w-[500px]'>
                <Image src={item.img} alt={`swiper-image`} width={500} height={500} className='w-full'/>
                </div>
                <div className='nextBtn cursor-pointer text-white'>
                  <IoIosArrowForward className='text-3xl' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>}
    </motion.div>
  )
}
