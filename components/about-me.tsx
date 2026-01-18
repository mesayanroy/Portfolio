"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Girlscript Summer Of Code (GSSOC)",
    role: "Senior Open Source Contributor",
    period: "oct 2024 - nov 2024",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/girlscript.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Goldman Sachs",
    role: "SDE-1 Internship (Job Simulation)",
    period: "Jan 2025 Jan 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/goldman-sachs.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "Deloitte",
    role: "Data Analyst - Internship (Job Simulation)",
    period: "Apr 2025 - Apr 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/deloitte.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    company: "GeeksforGeeks Sister Nivedita University (SNU) Chapter",
    role: "Technical Executive",
    period: "Mar 2025 - Present",
    location: "Kolkata, WB",
    type: "Full-time",
    logo: "/logos/geeksforgeeks.png",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
   {
    id: 5,
    company: "HackQuest",
    role: "Developer Advocate",
    period: "Apr 2025 - Present",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/hackquest.png",
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 6,
    company: "Hack4Bengal 4.0",
    role: "Evangelist",
    period: "Apr 2025 - July 2025 ",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/hack4bengal.png",
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 7,
    company: "AI Wallah",
    role: "Generative AI Developer Intern",
    period: "May 2025 - June 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/logos/aiwallah.png",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 8,
    company: "Snaapify",
    role: "Full Stack Developer",
    period: "July 2025 - current",
    location: "Hybrid",
    type: "Full - Time",
    logo: "/logos/snaapify.png",
    skills: ["Typescript", "Nextjs", "express.js" , "MongoDB"],
  },
   {
    id: 9,
    company: "Stellar",
    role: "Ambassador & Developer",
    period: "Jan 2026 - current",
    location: "Remote",
    type: "Full - Time",
    logo: "/logos/stellar.png",
    skills: ["Typescript", "Nextjs", "express.js" , "MongoDB"],
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 80 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Solidity", proficiency: 70 },
    { name: "Go", proficiency: 40 },
    { name: "Rust", proficiency: 50 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "Node.js", proficiency: 75 },
    { name: "Express.js", proficiency: 65 },
  ],
  Tools: [
    { name: "Git", proficiency: 88 },
    { name: "Docker", proficiency: 60 },
    { name: "Kubernetes", proficiency: 50 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-10 lg:py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              
            </span>
            <span className="ml-2" style={{ fontFamily: '"Segoe UI Symbol"', color: "rgba(255, 255, 255, 1)" }}>☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-10 mb-12 lg:mb-14">
            <div className="md:w-1/3">
              <div className="relative w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
                <Image
                  src="https://i.ibb.co/S4K4HCsY/sayanprofilepic.jpg"
                  alt="Sayan Roy"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(233, 1, 1, 1)",
                    color: "rgba(250, 254, 11, 1)"
                  }}
                />
              </div>
            </div>
            <div className="md:w-2/3" style={{ color: "rgba(255, 255, 255, 1)" }}>
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Blockchain Sorcerer 🧙‍♂️ and Full Stack Dev 💻. Building secure, scalable solutions in the
                  crypto-verse. From DeFi to Web3, turning complex tech into seamless experiences. ⛓⚡🔥
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-3">
                     <strong></strong>
                  </p>
                  <p className="mb-3 leading-relaxed">
                    A <strong style={{ color: "rgba(255, 0, 0, 1)" }}>Blockchain Wizard 🧙‍♂️</strong> and{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>Full Stack Alchemist 💻</strong>, turning{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>lines of code</strong> into{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>decentralized magic</strong>! Whether it's{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>smart contracts</strong>,{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>ZK proofs</strong>, or{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>FHE sorcery</strong>, I love pushing Web3 to the
                    next level.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    I spend my days {""}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>hacking away in Solidity, Go, and Rust</strong>
                    —and my nights wondering why gas fees still exist. When I'm not coding, I'm probably deep-diving
                    into {""}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>DeFi rabbit holes</strong>, contributing to {""}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>open-source chaos</strong>, or evangelizing
                    blockchain to anyone who'll listen (or can't escape).
                  </p>
                  <p className="leading-relaxed">
                    Let's {""}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>connect, build, and break things</strong>—because
                    the {""}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>
                      future is decentralized, and I refuse to be left behind!
                    </strong>{" "}
                    ⛓⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-10 lg:mb-12">
            <h3
              className="text-xl md:text-2xl font-bold mb-8 text-center"
              style={{ fontFamily: "-apple-system" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(239, 68, 68, 1) 0%, rgba(236, 72, 153, 1) 45%, rgba(249, 115, 22, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                
              </span>
              <span className="ml-2 text-white">🎓</span>
            </h3>

            {/* Compact Education Bars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                {
                  degree: "Bachelor of Technology",
                  field: "Computer Science Engineering",
                  institution: "Sister Nivedita University",
                  year: "2024 - 2028",
                  status: "ongoing",
                  icon: "🏫",
                  barGradient: "from-red-600/25 via-pink-600/20 to-amber-500/20",
                  glow: "linear-gradient(135deg, rgba(248,113,113,0.6) 0%, rgba(236,72,153,0.45) 45%, rgba(249,115,22,0.4) 100%)",
                  statusColor: "emerald"
                },
                {
                  degree: "Higher Secondary Education",
                  field: "Science Stream",
                  institution: "Haryana Vidya Mandir School",
                  year: "2022 - 2024",
                  status: "completed",
                  icon: "📚",
                  barGradient: "from-rose-600/25 via-red-500/20 to-amber-500/15",
                  glow: "linear-gradient(135deg, rgba(244,63,94,0.55) 0%, rgba(248,113,113,0.45) 40%, rgba(251,191,36,0.35) 100%)",
                  statusColor: "sky"
                },
                {
                  degree: "Secondary Education",
                  field: "General Studies",
                  institution: "St. Mary's High School",
                  year: "2015 - 2022",
                  status: "completed",
                  icon: "🎒",
                  barGradient: "from-amber-600/25 via-orange-500/20 to-red-600/15",
                  glow: "linear-gradient(135deg, rgba(251,191,36,0.55) 0%, rgba(249,115,22,0.45) 45%, rgba(239,68,68,0.35) 100%)",
                  statusColor: "sky"
                }
              ].map((edu, index) => {
                const [isHovered, setIsHovered] = useState(false)

                const codeLines = [
                  "// education record",
                  "struct education {",
                  `  const char *institution = \"${edu.institution}\";`,
                  `  const char *degree      = \"${edu.degree}\";`,
                  `  const char *field       = \"${edu.field}\";`,
                  `  const char *year_range  = \"${edu.year}\";`,
                  `  const char *status      = \"${edu.status === "ongoing" ? "in_progress" : "completed"}\";`,
                  "};",
                ]

                const toggleHover = () => setIsHovered((prev) => !prev)

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={toggleHover}
                    className="relative group cursor-pointer"
                  >
                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: edu.glow }}
                    />

                    {/* Main Bar */}
                    <motion.div
                      animate={{
                        height: isHovered ? "auto" : "60px",
                        paddingTop: isHovered ? "16px" : "12px",
                        paddingBottom: isHovered ? "16px" : "12px"
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`relative bg-gradient-to-br ${edu.barGradient} backdrop-blur-md border rounded-lg overflow-hidden p-4 border-red-500/30 hover:border-amber-400/60`}
                      style={{
                        boxShadow: isHovered
                          ? "0 10px 30px rgba(248,113,113,0.25), 0 4px 14px rgba(236,72,153,0.2)"
                          : "0 2px 8px rgba(0,0,0,0.35)"
                      }}
                    >
                      {/* Header - Always visible */}
                      <motion.div
                        animate={{ marginBottom: isHovered ? "12px" : "0px" }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-lg md:text-xl flex-shrink-0">{edu.icon}</span>
                        <div className="flex-1 min-w-0">
                          <motion.h4
                            animate={{ fontSize: isHovered ? "14px" : "13px" }}
                            transition={{ duration: 0.3 }}
                            className="font-bold text-white leading-tight truncate"
                          >
                            {edu.institution}
                          </motion.h4>
                          <motion.p
                            animate={{ 
                              fontSize: isHovered ? "12px" : "11px",
                              opacity: isHovered ? 1 : 0.85,
                              color: isHovered ? "rgba(255,255,255,0.92)" : "rgba(226,232,240,0.85)"
                            }}
                            transition={{ duration: 0.3 }}
                            className="mt-0.5 truncate"
                          >
                            {edu.year}
                          </motion.p>
                          {/* Status Badge - appears on hover */}
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              height: isHovered ? "auto" : 0,
                              marginTop: isHovered ? "6px" : 0
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            <span className={`inline-block text-[11px] font-bold px-2 py-1 rounded-full ${
                              edu.status === "ongoing"
                                ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/50"
                                : "bg-sky-500/25 text-sky-200 border border-sky-400/50"
                            }`}>
                              {edu.status === "ongoing" ? "▶ In Progress" : "✓ Completed"}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Details - Show on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="border-t border-white/10 pt-3">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 }}
                            className="rounded-md bg-black/50 border border-red-500/30 p-3 font-mono text-[11px] md:text-xs leading-relaxed text-gray-200"
                            style={{
                              boxShadow: "inset 0 0 10px rgba(0,0,0,0.35), 0 4px 20px rgba(0,0,0,0.25)",
                              textAlign: "left"
                            }}
                          >
                            <pre className="whitespace-pre-wrap leading-relaxed text-left">
{codeLines.map((line, idx) => ` ${line}`).join("\n")}
                            </pre>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-8 lg:mb-10">
            <h3
              className="text-xl md:text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: "-apple-system" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(237, 7, 7, 1) 27%, rgba(249, 228, 6, 1) 64%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Road So Far :
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(237, 7, 7, 0.85) 0%, rgba(249, 228, 6, 0.75) 100%)",
                }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-2 md:space-y-2.5">
                {timelineData.map((item, index) => {
                  const [isHovered, setIsHovered] = useState(false)
                  return (
                  <motion.div
                    key={`${item.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 120 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-2 lg:gap-2.5 relative group`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Content */}
                    <motion.div 
                      className="w-full md:w-1/2 bg-black/80 backdrop-blur-sm border rounded-lg cursor-pointer overflow-hidden"
                      animate={{
                        padding: isHovered ? "16px" : "10px",
                        backgroundColor: isHovered ? "rgba(10, 10, 10, 0.95)" : "rgba(0, 0, 0, 0.8)"
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -3
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{
                        borderColor: isHovered ? "rgba(237, 7, 7, 0.9)" : "rgba(237, 7, 7, 0.4)",
                        boxShadow: isHovered 
                          ? "0 0 25px rgba(237, 7, 7, 0.3), 0 0 15px rgba(249, 228, 6, 0.2), inset 0 0 20px rgba(237, 7, 7, 0.05)" 
                          : "0 2px 8px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(237, 7, 7, 0.02)",
                        fontFamily: '"Courier New", monospace'
                      }}
                    >
                      <motion.div 
                        className="flex flex-col md:flex-row items-center gap-2 sm:gap-2.5" 
                        animate={{ opacity: isHovered ? 1 : 0.9 }}
                        transition={{ duration: 0.25 }}
                      >
                        <motion.div 
                          className="rounded-lg bg-black/40 flex items-center justify-center overflow-hidden mx-auto md:mx-0 flex-shrink-0 border border-red-900/30"
                          animate={{
                            width: isHovered ? "48px" : "36px",
                            height: isHovered ? "48px" : "36px"
                          }}
                          whileHover={{ borderColor: "rgba(237, 7, 7, 0.7)" }}
                          transition={{ duration: 0.3 }}
                          style={{
                            boxShadow: isHovered ? "0 0 15px rgba(237, 7, 7, 0.3)" : "0 1px 4px rgba(0, 0, 0, 0.4)",
                          }}
                        >
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                            style={{ 
                              filter: isHovered ? "brightness(1.15) drop-shadow(0 0 5px rgba(237, 7, 7, 0.3))" : "brightness(0.95)",
                              transition: "filter 0.3s ease",
                              padding: isHovered ? "4px" : "2px"
                            }}
                          />
                        </motion.div>
                        <div className="text-center md:text-left flex-1 min-w-0">
                          <motion.h3 
                            className="font-bold text-white leading-tight mb-0.5"
                            animate={{
                              fontSize: isHovered ? "14px" : "12px",
                              lineHeight: isHovered ? "1.3" : "1.2"
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: isHovered ? 2 : 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >{item.role}</motion.h3>
                          <motion.h4
                            className="font-medium leading-tight"
                            animate={{
                              fontSize: isHovered ? "13px" : "11px",
                              color: isHovered ? "rgba(237, 7, 7, 1)" : "rgba(249, 228, 6, 0.9)"
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {item.company}
                          </motion.h4>
                          <motion.div 
                            className="flex items-center justify-center md:justify-start gap-1 text-gray-500 flex-wrap"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ 
                              opacity: isHovered ? 1 : 0, 
                              height: isHovered ? "auto" : 0,
                              marginTop: isHovered ? "8px" : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="flex items-center gap-0.5 text-xs">
                              <Calendar className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "rgba(237, 7, 7, 0.8)" }} />
                              <span className="whitespace-nowrap">{item.period}</span>
                            </div>
                            <span className="text-xs text-red-800">│</span>
                            <div className="flex items-center gap-0.5 text-xs">
                              <MapPin className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "rgba(237, 7, 7, 0.8)" }} />
                              <span className="whitespace-nowrap">{item.location}</span>
                            </div>
                            <span className="text-xs text-red-800">│</span>
                            <div className="flex items-center gap-0.5 text-xs">
                              <Building2 className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "rgba(237, 7, 7, 0.8)" }} />
                              <span className="whitespace-nowrap">{item.type}</span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Skills - Show on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0, 
                          height: isHovered ? "auto" : 0,
                          marginTop: isHovered ? "10px" : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {item.skills.length > 0 && (
                          <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                            {item.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: skillIndex * 0.04 }}
                                className="px-2 py-0.5 text-xs font-mono rounded whitespace-nowrap"
                                style={{ 
                                  background: "rgba(237, 7, 7, 0.1)",
                                  color: "rgba(249, 228, 6, 0.95)",
                                  border: "1px solid rgba(237, 7, 7, 0.4)",
                                  boxShadow: "0 1px 4px rgba(237, 7, 7, 0.2)"
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Timeline Point (hidden on mobile) */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 rounded-full hidden md:block"
                      animate={{
                        width: isHovered ? "10px" : "6px",
                        height: isHovered ? "10px" : "6px"
                      }}
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(237, 7, 7, 1) 0%, rgba(249, 228, 6, 1) 100%)",
                      }}
                      whileHover={{ 
                        boxShadow: ["0 0 10px rgba(237,7,7,0.6)", "0 0 18px rgba(237,7,7,0.9)", "0 0 10px rgba(237,7,7,0.6)"]
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: (index + 1) * 0.08 }}
                        className="absolute left-1/2 transform -translate-x-1/2 hidden md:block origin-top"
                        style={{
                          top: "100%",
                          width: "1px",
                          height: "10px",
                          backgroundImage:
                            "linear-gradient(180deg, rgba(237, 7, 7, 0.6) 0%, rgba(249, 228, 6, 0.4) 100%)",
                        }}
                      ></motion.div>
                    )}
                  </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* GitHub Contributions */}
          <div className="mb-8 lg:mb-10">
            <h3
              className="text-xl md:text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: "-apple-system" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(237, 7, 7, 1) 27%, rgba(249, 228, 6, 1) 64%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div
              className="p-4 md:p-5 bg-gray-900/60 rounded-lg backdrop-blur-sm border border-gray-800 overflow-hidden"
              style={{
                borderColor: "rgba(254, 6, 6, 1)",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  src="https://ghchart.rshah.org/ed0707/mesayanroy"
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto rounded-md"
                  style={{
                    filter: "brightness(1.1) contrast(1.05)",
                    imageRendering: "crisp-edges"
                  }}
                />
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-gray-400">
                  <a
                    href="https://github.com/mesayanroy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700 hover:border-red-500/60 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Profile</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundImage: "linear-gradient(135deg, rgba(237, 7, 7, 1) 0%, rgba(249, 228, 6, 1) 100%)",
                        }}
                      ></div>
                      <span className="text-xs">Active Contributor</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-8 lg:mt-10">
            <h3
              className="text-xl md:text-2xl font-bold mb-5 text-center"
              style={{ fontFamily: "-apple-system" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(237, 7, 7, 1) 27%, rgba(249, 228, 6, 1) 64%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div 
                  key={category} 
                  className="p-4 md:p-5 bg-gray-900/60 rounded-lg backdrop-blur-sm border border-gray-800"
                  style={{
                    borderColor: "rgba(254, 6, 6, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                  }}
                >
                  <h4 className="text-lg font-bold mb-3 text-purple-400 text-center md:text-left" style={{ color: "rgba(228, 232, 236, 1)" }}>{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            background: "linear-gradient(90deg, rgba(245, 0, 0, 1) 23%, rgba(246, 214, 4, 1) 100%)",
            color: "rgba(255, 31, 31, 1)"
          }}
        />
      </div>
    </div>
  )
}
