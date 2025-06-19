"use client"
import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import {motion} from "framer-motion"


export default function Contact() {
  return (
    <div className='p-5 mt-5 overflow-hidden'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>Get in touch with me:</h2>
        <div className='mt-8 flex flex-col xl:flex-row gap-10'>
            <motion.div initial={{x: -100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='w-full xl:max-w-[45%] grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                    <h3 className='text-xl text-dark font-bold font-rozha'>LA office</h3>
                    <p className='text-base font-medium mt-4'>In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus</p>
                    <ul className='mt-4 flex flex-col gap-2'>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><HiLocationMarker className='text-xl'/>784 Norman Street, Los Angeles</li>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><MdPhone className='text-xl'/>+49 93 30493943</li>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><MdOutlineMail className='text-xl'/>contact@yourcompany.com</li>
                    </ul>
                    <h4 className='cursor-pointer mt-8 text-xl w-fit relative before:absolute before:w-full before:h-[2px] before:bg-dark before:-bottom-1'>Get location</h4>
                </div>
                <div>
                    <h3 className='text-xl text-dark font-bold font-rozha'>NYC office</h3>
                    <p className='text-base font-medium mt-4'>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</p>
                    <ul className='mt-4 flex flex-col gap-2'>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><HiLocationMarker className='text-xl'/>1630 Elm Drive, New York City</li>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><MdPhone className='text-xl'/>+49 34 36573355</li>
                        <li className='text-base font-normal font-raleway flex items-center gap-1'><MdOutlineMail className='text-xl'/>contact@yourcompany.com</li>
                    </ul>
                    <h4 className='cursor-pointer mt-8 text-xl w-fit relative before:absolute before:w-full before:h-[2px] before:bg-dark before:-bottom-1'>Get location</h4>
                </div>
            </motion.div >
            <motion.form initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='w-full xl:max-w-[55%] flex flex-col gap-10'>
                <input type='text' placeholder='Write Your Name Here' className='text-xl font-semibold font-raleway outline-none border-b-[2px] border-dark placeholder:tracking-[12px] pb-2'/>
                <input type='email' placeholder='Write Your Email Address' className='text-xl font-semibold font-raleway outline-none border-b-[2px] border-dark placeholder:tracking-[12px] pb-2'/>
                <input type='text' placeholder='Write Your Message' className='text-xl font-semibold font-raleway outline-none border-b-[2px] border-dark placeholder:tracking-[12px] pb-2'/>
                <button className='cursor-pointer text-xl text-white py-3 px-5 bg-dark uppercase w-fit'>send it</button>
            </motion.form>
        </div>
    </div>
  )
}
