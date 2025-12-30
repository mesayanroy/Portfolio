"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const createLogoDataUri = (text: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#ed0707'/><stop offset='1' stop-color='#f9e406'/></linearGradient></defs>` +
      `<rect width='64' height='64' rx='12' fill='url(#g)'/>` +
      `<text x='50%' y='55%' text-anchor='middle' fill='white' font-size='22' font-family='Inter, Arial, sans-serif' font-weight='700'>${text}</text>` +
    `</svg>`
  )}`

const timelineData = [
  {
    id: 1,
    company: "Girlscript Summer Of Code (GSSOC)",
    role: "Senior Open Source Contributor",
    period: "oct 2024 - nov 2024",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("GS"),
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Goldman Sachs",
    role: "SDE-1 Internship (Job Simulation)",
    period: "Jan 2025 Jan 2025",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("GS"),
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Deloitte",
    role: "Data Analyst - Internship (Job Simulation)",
    period: "Apr 2025 - Apr 2025",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("DE"),
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "GeeksforGeeks Sister Nivedita University (SNU) Chapter",
    role: "Technical Executive",
    period: "Mar 2025 - Present",
    location: "Kolkata, WB",
    type: "Full-time",
    logo: createLogoDataUri("GfG"),
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
   {
    id: 1,
    company: "HackQuest",
    role: "Developer Advocate",
    period: "Apr 2025 - Present",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("HQ"),
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 1,
    company: "Hack4Bengal 4.0",
    role: "Evangelist",
    period: "Apr 2025 - July 2025 ",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("H4B"),
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 1,
    company: "AI Wallah",
    role: "Generative AI Developer Intern",
    period: "May 2025 - June 2025",
    location: "Remote",
    type: "Part-time",
    logo: createLogoDataUri("AI"),
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 1,
    company: "Snaapify",
    role: "Full Stack Developer",
    period: "July 2025 - current",
    location: "Hybrid",
    type: "Full - Time",
    logo: createLogoDataUri("SN"),
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
              <div className="space-y-4 md:space-y-5">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 lg:gap-6 relative`}
                  >
                    {/* Content */}
                    <div 
                      className="md:w-1/2 p-3 md:p-4 bg-gray-900/60 rounded-lg backdrop-blur-sm border border-gray-800"
                      style={{
                        color: "rgba(5, 5, 5, 1)",
                        backgroundColor: "rgba(18, 18, 18, 0.5)",
                        borderColor: "rgba(250, 0, 0, 1)",
                        fontFamily: '"__nextjs-Geist Mono"'
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-3" style={{ color: "rgba(0, 0, 0, 1)" }}>
                        <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-2 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={48}
                            height={48}
                            className="rounded-full"
                            style={{ color: "rgba(228, 221, 221, 1)" }}
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-base md:text-lg font-bold text-white">{item.role}</h3>
                          <h4
                            className="text-sm md:text-base text-purple-400"
                            style={{ color: "rgba(209, 35, 114, 1)" }}
                          >
                            {item.company}
                          </h4>
                          <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mt-0.5">
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400">
                            <Building2 className="w-3 h-3" />
                            <span className="text-xs">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                              style={{ borderColor: skillIndex === 0 ? "rgba(240, 0, 0, 0.2)" : undefined }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full hidden md:block"
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(237, 7, 7, 1) 0%, rgba(249, 228, 6, 1) 100%)",
                        boxShadow: "0 0 12px rgba(237,7,7,0.35)",
                      }}
                    ></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block"
                        style={{
                          top: "100%",
                          height: "100px",
                          backgroundImage:
                            "linear-gradient(180deg, rgba(237, 7, 7, 0.85) 0%, rgba(249, 228, 6, 0.75) 100%)",
                        }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
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
