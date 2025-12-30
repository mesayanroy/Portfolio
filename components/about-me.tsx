"use client"

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
    logo: "/company-b-logo.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Goldman Sachs",
    role: "SDE-1 Internship (Job Simulation)",
    period: "Jan 2025 Jan 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Deloitte",
    role: "Data Analyst - Internship (Job Simulation)",
    period: "Apr 2025 - Apr 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "GeeksforGeeks Sister Nivedita University (SNU) Chapter",
    role: "Technical Executive",
    period: "Mar 2025 - Present",
    location: "Kolkata, WB",
    type: "Full-time",
    logo: "/company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
   {
    id: 1,
    company: "HackQuest",
    role: "Developer Advocate",
    period: "Apr 2025 - Present",
    location: "Remote",
    type: "Part-time",
    logo: "/company-b-logo.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 1,
    company: "Hack4Bengal 4.0",
    role: "Evangelist",
    period: "Apr 2025 - July 2025 ",
    location: "Remote",
    type: "Part-time",
    logo: "/company-b-logo.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
   {
    id: 1,
    company: "AI Wallah",
    role: "Generative AI Developer Intern",
    period: "May 2025 - June 2025",
    location: "Remote",
    type: "Part-time",
    logo: "/company-b-logo.svg",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 1,
    company: "Snaapify",
    role: "Full Stack Developer",
    period: "July 2025 - current",
    location: "Hybrid",
    type: "Full - Time",
    logo: "/company-b-logo.svg",
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
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
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
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
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
                  <p className="text-xl mb-4">
                     <strong></strong>
                  </p>
                  <p className="mb-4">
                    A <strong className="text-[rgba(255,0,0,1)]">Blockchain Wizard 🧙‍♂️</strong> and{" "}
                    <strong style={{ color: "rgba(255, 0, 0, 1)" }}>Full Stack Alchemist 💻</strong>, turning{" "}
                    <strong>lines of code</strong> into <strong>decentralized magic</strong>! Whether it's{" "}
                    <strong>smart contracts</strong>, <strong>ZK proofs</strong>, or <strong>FHE sorcery</strong>, I
                    love pushing Web3 to the next level.
                  </p>
                  <p className="mb-4">
                    I spend my days <strong>hacking away in Solidity, Go, and Rust</strong>—and my nights wondering why
                    gas fees still exist. When I'm not coding, I'm probably deep-diving into{" "}
                    <strong>DeFi rabbit holes</strong>, contributing to <strong>open-source chaos</strong>, or
                    evangelizing blockchain to anyone who'll listen (or can't escape).
                  </p>
                  <p>
                    Let's <strong>connect, build, and break things</strong>—because the{" "}
                    <strong>future is decentralized, and I refuse to be left behind!</strong> ⛓⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div 
                      className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                      style={{
                        color: "rgba(5, 5, 5, 1)",
                        backgroundColor: "rgba(18, 18, 18, 0.5)",
                        borderColor: "rgba(250, 0, 0, 1)",
                        fontFamily: '"__nextjs-Geist Mono"'
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4" style={{ color: "rgba(0, 0, 0, 1)" }}>
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                            style={{ color: "rgba(228, 221, 221, 1)" }}
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4
                            className="text-lg text-purple-400"
                            style={{ color: "rgba(209, 35, 114, 1)" }}
                          >
                            {item.company}
                          </h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                              style={{ borderColor: skillIndex === 0 ? "rgba(240, 0, 0, 0.2)" : undefined }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "rgba(222, 23, 23, 1)" }}>
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                style={{ color: "transparent" }}
              >
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div 
                  key={category} 
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                  style={{
                    borderColor: "rgba(254, 6, 6, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                  }}
                >
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left" style={{ color: "rgba(228, 232, 236, 1)" }}>{category}</h4>
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
