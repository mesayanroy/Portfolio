"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const languages = [
  { lang: "Hello", color: "rgba(92, 90, 190, 1)" }, // English - Red
  { lang: "こんにちは", color: "rgba(236, 72, 153, 1)" }, // Japanese - Pink
  { lang: "नमस्ते", color: "rgba(249, 228, 6, 1)" }, // Hindi - Gold
  { lang: "你好", color: "rgba(237, 7, 7, 1)" }, // Mandarin - Red
]

export default function Loading() {
  const [currentLangIndex, setCurrentLangIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length)
    }, 400) // Change language every 0.7 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-[#0c0c0c] to-black">
      <div className="relative flex flex-col items-center justify-center">
        {/* Background gradient circles */}
        <motion.div
          className="absolute w-40 h-40 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(237,7,7,0.15) 0%, rgba(237,7,7,0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(249,228,6,0.15) 0%, rgba(249,228,6,0) 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Language text container */}
        <div className="relative h-24 w-64 flex items-center justify-center">
          <AnimatedLanguage
            key={currentLangIndex}
            lang={languages[currentLangIndex].lang}
            color={languages[currentLangIndex].color}
          />
        </div>

        {/* Loading indicator dots */}
        <motion.div className="mt-12 flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(237,7,7,1) 0%, rgba(249,228,6,1) 100%)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-6 text-gray-400 text-sm font-mono"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          
        </motion.p>
      </div>
    </div>
  )
}

function AnimatedLanguage({ lang, color }: { lang: string; color: string }) {
  return (
    <motion.div
      className="absolute text-center"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold font-mono italic"
        style={{ color }}
        animate={{
          textShadow: [
            `0 0 10px ${color}00`,
            `0 0 30px ${color}40`,
            `0 0 10px ${color}00`,
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {lang}
      </motion.h1>
    </motion.div>
  )
}
