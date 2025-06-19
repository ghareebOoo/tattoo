"use client"
import React, { useMemo } from 'react'
import Counts from './Counts'
import {motion} from "framer-motion"

export default function Counter() {
    const data = useMemo(()=>(
        [
            {
                count: 90,
                title: "Full Body Tattoo"
            },
            {
                count: 80,
                title: "Safely Piercing",
            },
            {
                count: 75,
                title: "Full color Tattoo",
            },
            {
                count: 95,
                title: "Temporary Tattoo"
            },
        ]
    ),[])
  return (
    <motion.div initial={{y: 100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} transition={{duration: 1 }} viewport={{once: false}} className='p-5 mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {data.map((item , index)=>{
            return <Counts key={index} myCount={item.count} myTitle={item.title} />
        })}
    </motion.div>
  )
}
