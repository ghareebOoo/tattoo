"use client"
import React, { useEffect, useMemo, useState } from 'react'
import logoImage from "../public/src/header/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion"


export default function Header() {

    
    const links = useMemo(()=>(
        [
            {
                label: "Home",
            },
            {
                label: "About",
            },
            {
                label: "Gallery",
            },
            {
                label: "Interview",
            },
            {
                label: "Articles",
            },
            {
                label: "Contact",
            },
        ]
    ),[])


    const socials = useMemo(()=>(
        [
            {
                icon: <FaFacebookF className='text-2xl text-dark'/>,
            },
            {
                icon: <FaInstagram className='text-2xl text-dark'/>,
            },
            {
                icon: <FaPinterest className='text-2xl text-dark'/>,
            },
            {
                icon: <FaTwitter className='text-2xl text-dark'/>,
            },
            {
                icon: <FaYoutube className='text-2xl text-dark'/>,
            },
        ]
    ),[])
     

    const [showShadow , setShowShadow] = useState(false)
    const [showNav , setShowNav] = useState(false)
    const [showIcon , setShowIcon] = useState(false)

    useEffect(()=>{
        const handelShwoShadow = ()=>{
            if(window.scrollY > 100){
                setShowShadow(true)
            }else{
                setShowShadow(false)
            }
        }

        window.addEventListener("scroll" , handelShwoShadow)

        return ()=>{
            window.removeEventListener("scroll" , handelShwoShadow)
        }
    },[])

    
  return (
    <>
        <div className={`${showShadow ? "shadow-xl" : ""} bg-white w-full fixed z-50 top-0 p-5 h-[130px]`}>
            <div className='w-full h-full flex justify-between items-center'>
                <div>
                    <Image src={logoImage} alt='' width={200} height={200} />
                </div>
                <div className='hidden lg:flex items-center gap-5'>
                    {links.map((item , index)=>{
                        return <Link key={index} href="#" className='text-dark text-xl relative before:absolute before:bg-dark before:bottom-0 before:h-[1px] before:w-0 before:left-[50%] before:-translate-x-1/2 before:transition-all before:duration-500 hover:before:w-full'>{item.label}</Link>
                    })}
                </div>
                <div className='hidden lg:flex items-center gap-5'>
                    {socials.map((item , index)=>{
                        return <Link key={index} href="#" className='transition-all duration-500 hover:scale-110'>{item.icon}</Link>
                    })}
                </div>
                {showIcon ? <div className='cursor-pointer lg:hidden' onClick={()=>{setShowNav(false);setShowIcon(false)}}><FaRegWindowClose className='text-5xl'/></div> : <div onClick={()=>{setShowNav(true);setShowIcon(true)}} className='cursor-pointer bg-dark p-2 rounded-md w-10 h-10 lg:hidden flex flex-col justify-center items-center'>
                    <div className='w-8 h-2 rounded-xl border-[2px] border-gray-200'></div>
                    <div className='w-8 h-2 rounded-xl border-[2px] border-gray-200'></div>
                    <div className='w-8 h-2 rounded-xl border-[2px] border-gray-200'></div>
                </div>}      
            </div>
        </div>
        <div className={`fixed z-50 lg:hidden top-[130px] overflow-hidden ${showNav ? "h-full" : "h-0"} w-full bg-white transition-all duration-500`}>
            <div className='w-full h-full flex flex-col justify-satrt gap-5 items-center'>
                <AnimatePresence> {showNav && (
                    <>
                    {links.map((item, index) => (
                    <motion.div key={item.label} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 1, delay: index * 0.03 }}>
                        <Link href="#" className="text-dark text-xl w-fit relative before:absolute before:bg-dark before:bottom-0 before:h-[1px] before:w-0 before:left-[50%] before:-translate-x-1/2 before:transition-all before:duration-500 hover:before:w-full">{item.label}</Link>
                    </motion.div>
                    ))}
                    </>
                    )}
                </AnimatePresence>
                <div className='flex items-center gap-5'>
                    <AnimatePresence> {showNav && (
                        <>
                        {socials.map((item , index)=>(
                        <motion.div key={index} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
                            <Link  href="#" className='transition-all duration-500 hover:scale-110'>{item.icon}</Link>
                        </motion.div>
                        ))}
                        </>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </>
  )
}
