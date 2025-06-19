"use client"
import React, { useState } from 'react'
import { MdPlayArrow } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import {motion} from "framer-motion"


export default function Watch() {
    const [watch , setWatch] = useState(false)
  return (
    <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className="p-5 mt-5 interview h-[800px] bg-center bg-cover flex flex-col justify-center gap-5">
        <p className='text-white text-2xl md:text-3xl lg:text-5xl font-bold font-raleway lg:max-w-[800px] leading-[35px] md:leading-[40px] lg:leading-[60px]'>“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”</p>
        {!watch &&     <div onClick={()=>{setWatch(true)}} className='flex items-center gap-5'>
            <div className='cursor-pointer w-40 h-40 rounded-full border-[1px] border-gray-300 p-5 flex items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-white flex items-center justify-center'>
                    <MdPlayArrow  className='text-6xl'/>
                </div>
            </div>
            <p className='uppercase cursor-pointer text-white text-xl font-semibold'>Watch it now</p>
        </div>}
        {watch &&  <div onClick={()=>{setWatch(false)}} className='flex items-center gap-5'>
            <CgCloseO className='text-9xl cursor-pointer'/>
            <p className='uppercase cursor-pointer text-white text-xl font-semibold'>Close it</p>
        </div>}
        {watch &&<iframe className='w-full h-full' width="560" height="315" src="https://www.youtube.com/embed/fZLy8ploW5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>}
    </motion.div>
  )
}
