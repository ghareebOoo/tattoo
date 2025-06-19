"use client"
import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
type props = {
    myCount: number
    myTitle: string
}
export default function Counts({myCount , myTitle}:props) {
   
  const [count , setCount] = useState(0)   
  const countRef = useRef<HTMLDivElement | null>(null)

  const inView = useInView(countRef)

  useEffect(()=>{
    if (!inView) return;


    let start = 0
    const time = 5000
    const duration = Math.round(time / myCount)
    const realTime = Math.max(duration , 50)

    const counter = setInterval(()=>{
        start ++ 
        setCount(start)
        if(start >= myCount){
            clearInterval(counter)
        }
    },realTime)
  },[myCount , inView])

  return (

    <div ref={countRef}>
    {inView && (
      <div className="text-2xl font-bold flex flex-col justify-center items-center gap-5">
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center text-xl font-bold"
          style={{background: `conic-gradient(#111111 ${count * 3.6}deg, white 0deg)`}}
        >
          <div className="w-[125px] h-[125px] rounded-full bg-white flex items-center justify-center">{count}%</div>
        </div>
        <p>{myTitle}</p>
      </div>
    )}
  </div>
  
  )
}
