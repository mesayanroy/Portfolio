"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function LiveClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "000",
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateTime = () => {
      const now = new Date()
      
      // Get IST time correctly
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000
      const istTime = new Date(utcTime + (5.5 * 60 * 60 * 1000))
      
      setTime({
        hours: String(istTime.getHours()).padStart(2, "0"),
        minutes: String(istTime.getMinutes()).padStart(2, "0"),
        seconds: String(istTime.getSeconds()).padStart(2, "0"),
        milliseconds: String(istTime.getMilliseconds()).padStart(3, "0"),
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 50) // Update every 50ms for smooth milliseconds

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-900/90 to-gray-950/90 border border-gray-700/30 backdrop-blur-md hover:border-gray-600/50 transition-colors duration-300 shadow-lg"
    >
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500/80 to-yellow-500/80"
      />
      
      <div className="flex items-center gap-0.5 font-mono text-xs md:text-sm tracking-wider">
        <motion.span
          className="text-gray-500 font-semibold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          IST
        </motion.span>
        
        <span className="text-gray-700 mx-1">|</span>
        
        <motion.span
          className="text-gray-300 font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {time.hours}
        </motion.span>
        <span className="text-gray-700">:</span>
        
        <motion.span
          className="text-gray-300 font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
        >
          {time.minutes}
        </motion.span>
        <span className="text-gray-700">:</span>
        
        <motion.span
          className="text-gray-300 font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
        >
          {time.seconds}
        </motion.span>
        <span className="text-gray-700">.</span>
        
        <motion.span
          className="text-gray-500 text-[10px] md:text-xs font-medium tracking-tight"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {time.milliseconds}
        </motion.span>
      </div>
    </motion.div>
  )
}
