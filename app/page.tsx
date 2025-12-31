"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  ExternalLink,
  Play,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import ChatBubble from "@/components/chat-bubble"
import ChatbotOverlay from "@/components/chatbot-overlay"
import LiveClock from "@/components/live-clock"

const hackathonData = [
  {
    id: 1,
    name: "Scaller Coding Fest 2024",
    achievement: "🥇 1st Place Winner",
    date: "November 2024",
    description: "Built a decentralized lending protocol with ZK privacy features in 48 hours. Impressed judges with innovative architecture.",
    tech: ["Solidity", "React", "ZK-SNARKs", "Hardhat"],
  },
  {
    id: 2,
    name: "Hackfest 2025",
    achievement: "🏆 National Finalist",
    date: "September 2024",
    description: "Created a cross-chain bridge protocol enabling seamless asset transfers. Demonstrated advanced blockchain engineering.",
    tech: ["Go", "TypeScript", "Web3", "Ethereum"],
  },
  {
    id: 3,
    name: "Aptos Hackathon 2025",
    achievement: "🎖️ Top 15 Builders - DeFi Track",
    date: "August 2024",
    description: "Developed an AMM with dynamic fee mechanisms. Showcased deep understanding of DeFi mechanics and optimization.",
    tech: ["Solidity", "Next.js", "Foundry", "Uniswap"],
  },
  {
    id: 4,
    name: "Hack4Bengal 4.0",
    achievement: "🏅 Community Choice Award",
    date: "July 2024",
    description: "Built a social media platform with blockchain tokenomics. Focus on user experience and community engagement.",
    tech: ["React", "Node.js", "MongoDB", "Web3.js"],
  },
  {
    id: 5,
    name: "Hack4Bengal 4.0 (Online Round)",
    achievement: "🎖️ Top 10 Finalist",
    date: "June 2024",
    description: "Identified and documented critical vulnerabilities in smart contracts. Strong focus on security best practices.",
    tech: ["Solidity", "Hardhat", "Slither", "Testing"],
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [chatbotOpen, setChatbotOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Compact Hero + About Grid */}
      <section id="home" className="relative overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 overflow-hidden">
                  <motion.span
                    className="inline-block bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                      fontFamily: '"Noto Color Emoji"',
                      backgroundImage:
                        "linear-gradient(178deg, rgba(255, 0, 0, 1) 42%, rgba(236, 72, 153, 1) 50%, rgba(255, 234, 0, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Hey!{" "}
                  </motion.span>
                  <motion.span
                    className="inline-block bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                      fontFamily: '"Noto Color Emoji"',
                      backgroundImage:
                        "linear-gradient(178deg, rgba(255, 0, 0, 1) 42%, rgba(236, 72, 153, 1) 50%, rgba(255, 234, 0, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    It's{" "}
                  </motion.span>
                  <br className="block md:hidden" />
                  <motion.span
                    className="inline-block bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    style={{
                      fontFamily: '"Noto Color Emoji"',
                      backgroundImage:
                        "linear-gradient(178deg, rgba(255, 0, 0, 1) 42%, rgba(236, 72, 153, 1) 50%, rgba(255, 234, 0, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Sayan{" "}Roy
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-yellow-500/20 blur-xl -z-10 rounded-lg"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.span>
                </h1>
                <h2
                  className="text-lg md:text-xl text-gray-300 relative inline-block"
                  style={{ fontFamily: '"__nextjs-Geist Mono"' }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Blockchain Innovator | Full-Stack Developer | Tech Explorer
                  </motion.span>
                  <motion.span
                    className="inline-block w-0.5 h-5 md:h-6 bg-gradient-to-b from-red-500 to-yellow-500 ml-1 align-middle"
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />
                </h2>
                
                {/* Status Bar: Open to Work + IST Clock */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4"
                >
                  {/* Open to Work Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-300">Open to Work</span>
                  </div>

                  {/* IST Clock */}
                  <LiveClock />
                </motion.div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I design and build bold futuristic products across blockchain, AI, and full-stack web. Fast, secure, and with
                delightful experiences.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <ScrollLink to="work" smooth duration={500}>
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    style={{ background: "linear-gradient(214deg, rgba(234, 52, 6, 1) 0%, rgba(219, 39, 119, 1) 56%)" }}
                  >
                    View Projects
                  </Button>
                </ScrollLink>
                <ScrollLink to="contact" smooth duration={500}>
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                    style={{ borderColor: "rgba(255, 0, 0, 1)" }}
                  >
                    Contact Me
                  </Button>
                </ScrollLink>
              </div>
            </motion.div>

            {/* Compact About Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900/70 border border-gray-800/80 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-red-500/50">
                  <Image
                    src="https://i.ibb.co/S4K4HCsY/sayanprofilepic.jpg"
                    alt="Sayan Roy"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">About Me</p>
                  <h3
                    className="text-2xl font-bold text-gray-300"
                  >
                    Sayan Roy
                  </h3>
                  <p className="text-sm text-gray-400">Kolkata, India</p>
                </div>
              </div>

              <div className="space-y-3 text-gray-200 leading-relaxed text-sm md:text-base">
                <p>
                  A <strong style={{ color: "rgba(255, 0, 0, 1)" }}>Blockchain Wizard</strong> and
                  <strong style={{ color: "rgba(255, 0, 0, 1)" }}> Full Stack Alchemist</strong>, crafting secure,
                  scalable systems from smart contracts to full-stack apps.
                </p>
                <p>
                  I thrive on <strong style={{ color: "rgba(255, 0, 0, 1)" }}>Solidity, Go, Rust</strong>, and dive
                  deep into <strong style={{ color: "rgba(255, 0, 0, 1)" }}>DeFi rabbit holes</strong> and
                  <strong style={{ color: "rgba(255, 0, 0, 1)" }}> open-source chaos</strong>.
                </p>
                <p>
                  Let's <strong style={{ color: "rgba(255, 0, 0, 1)" }}>connect, build, and break things</strong>—the
                  future is decentralized, and I'm here for it.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <ScrollLink to="services" smooth duration={500}>
                  <Button
                    variant="secondary"
                    className="bg-gray-800 text-white border border-gray-700 hover:border-red-500"
                  >
                    View Expertise
                  </Button>
                </ScrollLink>
                <ScrollLink to="work" smooth duration={500}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    See Projects
                  </Button>
                </ScrollLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full About Section with Timeline & Skills */}
      <section
        id="about"
        className="py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900"
        style={{ color: "rgba(255, 31, 31, 1)" }}
      >
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: "-apple-system" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(237, 7, 7, 1) 27%, rgba(249, 228, 6, 1) 64%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" style={{ color: "rgba(247, 85, 85, 1)" }} />}
                title="Blockchain Development"
                description="Custom blockchain solutions, smart contracts, and decentralized applications with a focus on security and efficiency."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="ZK & FHE Implementation"
                description="Zero-knowledge proofs and fully homomorphic encryption solutions for privacy-preserving applications."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" style={{ color: "rgba(254, 11, 11, 1)" }} />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Smart Contract Auditing"
                description="Comprehensive security audits for smart contracts to identify vulnerabilities and ensure robust implementation."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" style={{ color: "rgba(247, 85, 85, 1)" }} />}
                title="Web3 Integration"
                description="Seamless integration of Web3 technologies into existing applications and platforms."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Technical Consultation"
                description="Expert advice on blockchain architecture, technology stack selection, and implementation strategies."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: '"__nextjs-Geist Mono"' }}
            >
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  fontFamily: '"Noto Color Emoji"',
                    backgroundImage: "linear-gradient(90deg, rgba(240, 24, 0, 1) 0%, rgba(249, 217, 11, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                }}
              >
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <ProjectCard
                title="Aptos Swap"
                description="A trusted and protected De-Fi payment gateway for secure payments with minimum gas fees via meta transaction Cross-chain and Efficient Crypto payments."
                tags={["Next.js", "Cross-Chain " ,"Move", "Solidity", "Typescript", "DeFi"]}
                image="/projects/aptos-swap.png"
                liveUrl="https://github.com/mesayanroy/AptosSwap"
                demoUrl="https://example.com/aptos-swap-demo"
              />
              <ProjectCard
                title="Surge"
                description=" A secure Game-Fi  Staking protocol made Onchain on EVM, where players can Stake their token asset and win the duals online. Its trusted and a complete mutiplayer gaming platform with proctected Stacking.
                 & easy cashout , secure bridge for asset transfers between different chains and personal accounts."
                tags={["On-chain", "Interoperability", "Game-Fi"]}
                image="/projects/surge.png"
                liveUrl="https://github.com/mesayanroy/Surge"
                demoUrl="https://example.com/surge-demo"
              />
              <ProjectCard
                title="LOLand"
                description="Decentralized Social Media Meme Platform using blockchain technology . Therefore a personal Meme platform with a custom content management system for easy posting with DeFi NFTs and secure minting of tokens in a form of Meme's."
                tags={["Hardhat", "Typescript", "Nextjs", "Superbase", "Solidity", "NFT"]}
                image="/projects/loland.png"
                liveUrl="https://github.com/mesayanroy/LOLand"
                demoUrl="https://example.com/loland-demo"
              />
              <ProjectCard
                title="Opus"
                description="Create your own AI trading Agents that will do the trade and maintain your trading portfolio , ask them them to do swaps, DEX , CEX , Sell, Buy or liquidate assests on your will with easy cash in and cash out. Featuring real-time market analysis, automated trading insights, multi-chain wallet support, and copy trading capabilities.."
                tags={["Typescript", "RESTfull API", "langchain", "Nextjs", "lang-graph" , "Onchain" , "AI" , "Crypto-Trade" ]}
                image="/projects/opus.png"
                liveUrl="https://opus-cryptotrade.vercel.app/"
                demoUrl="https://example.com/opus-demo"
              />
              <ProjectCard
                title="SR Games"
                description="A fast-paced shooting game set on a dynamic urban map where players navigate rooftops, alleys, and abandoned buildings to eliminate enemies and control key zones. Strategic positioning and map awareness are crucial to survival."
                tags={["Javascript", "RESTfull API", "Firebase", "GunJS", ]}
                image="/projects/sr-games.png"
                liveUrl="https://sr-games.vercel.app/"
                demoUrl="https://example.com/sr-games-demo"
              />
               <ProjectCard
                title="Zinko Protocol"
                description="A trusted and protected ZK lending protocol offering private, permissionless access to global liquidity. Users can borrow and lend assets anonymously using zero-knowledge proofs, ensuring privacy without sacrificing security or transparency.
                With Zinko, experience seamless DeFi interactions while keeping your financial activities confidential."
                tags={["zk proofs", " zk snarks " ,"zk circuits", "Solidity", "Typescript", "DeFi"]}
                image="/projects/zinko.png"
                liveUrl="https://github.com/mesayanroy/dashboard-zinko"
                demoUrl="https://example.com/zinko-demo"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-16 lg:py-20 bg-black">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(0deg, rgba(237, 7, 7, 1) 27%, rgba(249, 228, 6, 1) 64%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Hackathons 
              </span>
              <span className="ml-2 text-white">🏆</span>
            </h2>

            <div className="relative pl-4 md:pl-8">
              {/* Vertical Timeline Bar (Left Side) */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 hidden sm:block"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(237, 7, 7, 0.9) 0%, rgba(249, 228, 6, 0.8) 100%)",
                }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {hackathonData.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Dot Connector (hidden on mobile) */}
                    <div
                      className="absolute -left-3.5 top-4 w-3 h-3 rounded-full hidden sm:block"
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(237, 7, 7, 1) 0%, rgba(249, 228, 6, 1) 100%)",
                        boxShadow: "0 0 10px rgba(237,7,7,0.4)",
                      }}
                    ></div>

                    {/* Card */}
                    <div
                      className="p-4 md:p-5 bg-gray-900/70 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-red-500/60 transition-all duration-300"
                      style={{
                        borderColor: "rgba(255, 0, 0, 0.3)",
                        backgroundColor: "rgba(18, 18, 18, 0.6)",
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white">{hackathon.name}</h3>
                          <p
                            className="text-sm md:text-base text-gray-300 mb-2"
                            style={{ color: "rgba(209, 35, 114, 1)" }}
                          >
                            {hackathon.achievement}
                          </p>
                          <p className="text-xs md:text-sm text-gray-400 mb-2">{hackathon.date}</p>
                          <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-3">{hackathon.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {hackathon.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-200 border border-purple-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-black relative overflow-hidden" style={{ fontFamily: "Geist" }}>
        {/* Subtle Gradient Background */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/3 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-500/3 rounded-full blur-3xl translate-x-1/2"></div>

        <div className="container px-4 mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Heading */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500">
                  Ping Me
                </span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">Let's work on something amazing</p>
            </div>

            {/* Contact Card - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Gradient Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 rounded-xl blur opacity-15 group-hover:opacity-35 transition duration-500"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-xl border border-gray-800/40 group-hover:border-gray-700/60 transition-all duration-500">
                <form className="space-y-3.5" onSubmit={handleSubmit}>
                  {/* Name & Email Row (Mobile: stacked, Desktop: row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.12 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-3 py-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-gray-800/60 transition-all duration-300 hover:border-gray-700/60"
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-gray-800/60 transition-all duration-300 hover:border-gray-700/60"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell me about your project..."
                      className="w-full px-3 py-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-gray-800/60 transition-all duration-300 hover:border-gray-700/60 resize-none"
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.21 }}
                    viewport={{ once: true }}
                    className="pt-1"
                  >
                    <Button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 hover:from-red-600 hover:via-pink-600 hover:to-yellow-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/20 active:scale-95"
                    >
                      Send Message ✨
                    </Button>
                  </motion.div>
                </form>

                {/* Compact Divider */}
                <div className="my-4 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
                  <span className="text-xs text-gray-500">or</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col xs:flex-row gap-2.5">
                  <motion.a
                    href="https://calendly.com/rsayan570"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-red-600/15 to-pink-600/15 border border-red-500/25 hover:border-red-500/50 text-gray-100 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600/25 hover:to-pink-600/25 group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Schedule</span>
                    <span className="sm:hidden">Book</span>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/185Yp16hl8GX7TDkBnD0ILd68qlRHgSWQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-yellow-600/15 to-orange-600/15 border border-yellow-500/25 hover:border-yellow-500/50 text-gray-100 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-600/25 hover:to-orange-600/25 group/btn"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5 group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">View CV</span>
                    <span className="sm:hidden">CV</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Compact Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex justify-center gap-1"
            >
              <a href="https://twitter.com/im_sayan08" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 text-xs transition-colors">Twitter</a>
              <span className="text-gray-600">•</span>
              <a href="https://linkedin.com/in/sayan-roy-111278321" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 text-xs transition-colors">LinkedIn</a>
              <span className="text-gray-600">•</span>
              <a href="https://github.com/mesayanroy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 text-xs transition-colors">GitHub</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/mesayanroy" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/sayan-roy-111278321" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/im_sayan08" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/mesayanroy" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@rsayan570" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                // You can add a console.log here if you want to verify it's working
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Sayan Roy. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
      {/* Chatbot */}
      <ChatBubble onClick={() => setChatbotOpen(true)} isOpen={chatbotOpen} />
      <ChatbotOverlay isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div 
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-500 transition-all duration-300 text-center md:text-left"
      style={{ borderColor: "rgba(255, 0, 0, 1)" }}
    >
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image, liveUrl, demoUrl }: { title: string; description: string; tags: string[]; image: string; liveUrl: string; demoUrl: string }) {
  const liveDisabled = !liveUrl
  const demoDisabled = !demoUrl
  return (
    <div
      className="rounded-xl bg-gray-900/80 border border-gray-800 hover:border-red-500/80 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-red-800/30"
      style={{
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] group">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">Preview coming soon</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(120deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 80%)" }}
        />
      </div>

      <div className="px-3 pb-3 pt-2.5 flex-1 flex flex-col">
        <h3 className="text-base font-bold mb-1.5 text-white text-center md:text-left">{title}</h3>
        <p className="text-gray-400 mb-2.5 text-center md:text-left leading-tight text-xs">{description}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 justify-center md:justify-start">
          <a
            href={liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white transition-transform duration-200 ${
              liveDisabled
                ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
                : "bg-gradient-to-r from-red-600 to-amber-400 hover:from-red-500 hover:to-amber-300 hover:-translate-y-0.5"
            }`}
            aria-disabled={liveDisabled}
          >
            <ExternalLink className="w-4 h-4" /> {liveDisabled ? "Live soon" : "Live"}
          </a>
          <a
            href={demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white transition-transform duration-200 ${
              demoDisabled
                ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
                : "border border-red-500/60 hover:border-amber-300/80 hover:-translate-y-0.5"
            }`}
            aria-disabled={demoDisabled}
          >
            <Play className="w-4 h-4" /> {demoDisabled ? "Demo soon" : "Demo"}
          </a>
        </div>
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:rsayan570@gmail.com" className="text-purple-400 hover:text-purple-300">
        rsayan570@gmail.com
      </a>
    </div>
  )
}
