import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TbSend } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='px-5 py-10 mt-5 bg-dark'>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <div>
                <h2 className='text-xl font-bold text-white'>About void tattoo</h2>
                <p className='text-white mt-1 text-base font-semibold'>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</p>
                <ul className='mt-4 flex flex-col gap-4'>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'><HiLocationMarker className='text-xl'/>784 Norman Street, Los Angeles</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'><MdPhone className='text-xl'/>+49 93 30493943</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'><MdOutlineMail className='text-xl'/>contact@yourcompany.com</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-bold text-white'>Useful links</h2>
                <ul className='mt-4 flex flex-col gap-4'>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>About me</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>My gallery</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>My services</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>Contact me</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-bold text-white'>Working Time</h2>
                <ul className='mt-4 flex flex-col gap-4'>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>Mon - Tue / Appointment</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>Wed - Fri / 10:00 - 9:00pm</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>Sat / 10:00 - 6:00pm</li>
                    <li className='text-white text-base font-normal font-raleway flex items-center gap-1'>Sun / no work on this day</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-bold text-white'>Newsletter</h2>
                <p className='mt-4 text-white text-base font-normal font-raleway'>Elit duis porttitor massa tellus nun in velit arcu posuere integer.</p>
                <form className='w-full relative mt-5'>
                    <input type='email' placeholder='Your Email Address' className='w-full text-xl font-semibold font-raleway outline-none border-b-[2px] border-white placeholder:text-gray-400 pb-2'/>
                    <div className='absolute right-2 top-0'>
                        <TbSend className='text-3xl text-white'/>
                    </div>
                </form>
            </div>
        </div>
        <div className='mt-10 w-full h-[1px] bg-white'></div>
        <p className='mt-3 text-base font-medium text-white'>© 2022 The Void Tattoo.All rights reserved.</p>
    </div>
  )
}
