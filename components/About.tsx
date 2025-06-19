"use client"
import React from 'react'
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

export default function About() {
  return (
    <motion.div variants={variants} initial="hidden" whileInView={"show"} className='p-5 overflow-hidden lg:h-[600px] flex flex-col lg:flex-row items-center lg:gap-10'>
      <motion.div initial={{x: -100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='font-tertiary lg:-tracking-wider leading-none font-rozha text-[300px] lg:text-[700px] bg-[url("/src/about/image.png")] bg-clip-text text-transparent bg-center bg-no-repeat'>01</motion.div>
      <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}}>
        <div className='text-5xl text-center lg:text-left'>My Story:</div>
        <p className='mt-8 text-center lg:text-left text-base lg:text-xl'>In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.</p>
        <p className='mt-5 text-center lg:text-left text-base lg:text-xl'>Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.</p>
        <button  className='cursor-pointer mt-8 mx-auto lg:mx-0 uppercase text-black flex items-center gap-5 '>Know more <FaArrowRight className='text-2xl'/></button>
      </motion.div>
    </motion.div>
  )
}
