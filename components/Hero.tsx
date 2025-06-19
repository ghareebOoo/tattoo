"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
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

export default function Hero() {
  return (
    <div className='mt-32 bg-[url("/src/hero/bg.png")] bg-cover bg-no-repeat bg-center min-h-[40vh] lg:h-[1000px] relative z-40'>
        <motion.div variants={variants} initial="hidden" whileInView={"show"} className='min-h-[40vh] lg:h-full flex items-center justify-center lg:justify-end'>
            <div className='px-5 py-8 lg:w-[50vw]'>
                <motion.h2 initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='text-center lg:text-left text-5xl  md:text-6xl font-raleway text-white font-bold'>I{`’`}m Void Sir.</motion.h2>
                <motion.p initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='text-center lg:text-left mt-5 text-lg text-white font-medium'>Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.</motion.p>
                <motion.button initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='cursor-pointer mt-8 mx-auto lg:mx-0 border-[2px] border-white w-[200px] h-[70px] uppercase text-white flex items-center justify-center gap-5 transition-all duration-500 hover:text-black hover:bg-white'>Read more <FaArrowRight className='text-2xl'/></motion.button>
            </div>
        </motion.div>
        <div className="hidden lg:block absolute -bottom-2 left-0 right-0 h-[150px]">
          <div className="bg-[url('/src/hero/outline-text.svg')] bg-cover bg-center bg-no-repeat w-full h-full"></div>
        </div>
    </div>
  )
}
