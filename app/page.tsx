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
import { TypingAnimation } from "@/components/ui/typing-animation"

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

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: "Aptos Swap",
    description:
      "A trusted and protected De-Fi payment gateway for secure payments with minimum gas fees via meta transaction Cross-chain and Efficient Crypto payments.",
    tags: ["Next.js", "Cross-Chain", "Move", "Solidity", "Typescript", "DeFi"],
    image: "/projects/aptos-swap.png",
    liveUrl: "https://github.com/mesayanroy/AptosSwap",
    demoUrl: "https://example.com/aptos-swap-demo",
  },
  {
    title: "Surge",
    description:
      "A secure Game-Fi staking protocol on EVM where players stake tokens and duel, with protected stacking, easy cashout, and a secure bridge for asset transfers.",
    tags: ["On-chain", "Interoperability", "Game-Fi"],
    image: "/projects/surge.png",
    liveUrl: "https://github.com/mesayanroy/Surge",
    demoUrl: "https://example.com/surge-demo",
  },
  {
    title: "LOLand",
    description:
      "Decentralized social meme platform with CMS, DeFi NFTs, and secure minting of tokens in meme form.",
    tags: ["Hardhat", "Typescript", "Nextjs", "Superbase", "Solidity", "NFT"],
    image: "/projects/loland.png",
    liveUrl: "https://github.com/mesayanroy/LOLand",
    demoUrl: "https://example.com/loland-demo",
  },
  {
    title: "Opus",
    description:
      "Create AI trading agents for swaps, DEX/CEX, sell/buy, liquidations, with real-time analysis, multi-chain wallet support, and copy trading.",
    tags: ["Typescript", "REST API", "LangChain", "Next.js", "LangGraph", "Onchain", "AI", "Crypto-Trade"],
    image: "/projects/opus.png",
    liveUrl: "https://opus-cryptotrade.vercel.app/",
    demoUrl: "https://example.com/opus-demo",
  },
  {
    title: "SR Games",
    description:
      "Fast-paced shooter on dynamic urban map; navigate rooftops, alleys, and abandoned buildings to control zones and survive.",
    tags: ["JavaScript", "REST API", "Firebase", "GunJS"],
    image: "/projects/sr-games.png",
    liveUrl: "https://sr-games.vercel.app/",
    demoUrl: "https://example.com/sr-games-demo",
  },
  {
    title: "Zinko Protocol",
    description:
      "ZK lending protocol offering private, permissionless access to global liquidity with zero-knowledge proofs for confidential DeFi.",
    tags: ["zk proofs", "zk snarks", "zk circuits", "Solidity", "Typescript", "DeFi"],
    image: "/projects/zinko.png",
    liveUrl: "https://github.com/mesayanroy/dashboard-zinko",
    demoUrl: "https://example.com/zinko-demo",
  },
]

type Contribution = {
  title: string
  description: string
  tags: string[]
  link: string
}

const contributions: Contribution[] = [
  {
    title: "Open Source & GSSOC",
    description: "Senior contributor in GSSOC; shipped fixes and features across multiple repos.",
    tags: ["GSSOC", "Open Source", "PRs"],
    link: "https://github.com/mesayanroy",
  },
  {
    title: "Blockchain Audits",
    description: "Security reviews and audit reports for EVM smart contracts and DeFi protocols.",
    tags: ["Security", "EVM", "Audits"],
    link: "https://github.com/mesayanroy",
  },
  {
    title: "Hackathon Builds",
    description: "Multiple prize-winning hackathon builds across DeFi, bridges, and social Web3.",
    tags: ["Hackathons", "DeFi", "Bridges"],
    link: "https://github.com/mesayanroy",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [activeWorkTab, setActiveWorkTab] = useState<"projects" | "contributions">("projects")

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
    
    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Create mailto link with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    const mailtoLink = `mailto:rsayan570@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink
  }

  const totalProjects = projects.length
  const handlePrevProject = () =>
    setActiveProjectIndex((idx) => (idx - 1 + totalProjects) % totalProjects)
  const handleNextProject = () =>
    setActiveProjectIndex((idx) => (idx + 1) % totalProjects)

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
                    className="inline-block text-lg md:text-xl lg:text-2xl font-normal"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                      fontFamily: '"Noto Color Emoji"',
                      color: "rgb(148, 163, 184)",
                    }}
                  >
                    Hey!{" "}
                  </motion.span>
                  <motion.span
                    className="inline-block text-lg md:text-xl lg:text-2xl font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                      fontFamily: '"Noto Color Emoji"',
                      color: "rgb(148, 163, 184)",
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
                <div className="relative inline-block">
                  <TypingAnimation
                    words={["Blockchain Innovator", "Full-Stack Developer", "Tech Explorer"]}
                    className="text-lg md:text-xl text-white"
                    typeSpeed={50}
                    deleteSpeed={30}
                    pauseDelay={1500}
                    delay={0.8}
                    loop={true}
                    showCursor={true}
                    blinkCursor={true}
                    cursorStyle="line"
                    style={{ fontFamily: '"__nextjs-Geist Mono"' }}
                  />
                </div>
                
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

            {/* Compact About Card - Magic UI Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full"
            >
              <div
                className="rounded-xl overflow-hidden shadow-2xl backdrop-blur-md border border-gray-800/70 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#101010]"
              >
                {/* Terminal Header */}
                <div className="px-4 py-2.5 flex items-center justify-between border-b border-gray-800/80 bg-gradient-to-b from-gray-800/80 to-gray-900/80">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(255,99,71,0.5)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-[0_0_6px_rgba(255,215,0,0.45)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(52,211,153,0.45)]" />
                  </div>
                  <span className="text-xs font-medium text-gray-300/80">sayan@portfolio ~</span>
                  <div className="w-6" />
                </div>

                {/* Terminal Body */}
                <div className="p-4 md:p-5 font-mono text-xs md:text-sm space-y-3">
                  {/* Profile row */}
                  <div className="flex items-center gap-3 rounded-lg border border-gray-800/70 bg-black/40 px-3 py-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700/70 bg-gray-900/70 flex-shrink-0">
                      <Image
                        src="https://i.ibb.co/S4K4HCsY/sayanprofilepic.jpg"
                        alt="Sayan Roy"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="leading-tight text-gray-200">
                      <div><span className="text-amber-300">user</span>: Sayan Roy</div>
                      <div className="text-[11px] text-gray-400"><span className="text-amber-300">location</span>: Kolkata, India</div>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="flex items-start gap-2 text-gray-200">
                    <span className="text-amber-300">➜</span>
                    <span className="text-emerald-400">about_me --detail</span>
                  </div>

                  {/* Output */}
                  <div className="space-y-2 text-[12px] md:text-[13px] text-sky-200 leading-relaxed ml-1">
                    <div><span className="text-emerald-300">Blockchain Wizard</span> & Full Stack Alchemist</div>
                    <div className="text-sky-300/90">Solidity • Go • Rust | DeFi • Open-source</div>
                    <div className="text-sky-300/90">Building secure, decentralized systems</div>
                  </div>

                  {/* Cursor */}
                  <div className="flex items-center gap-2 pt-1 text-amber-300">
                    <span>➜</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="text-emerald-400"
                    >
                      █
                    </motion.span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2.5 border-t border-gray-800/70 bg-black/40">
                  <ScrollLink to="services" smooth duration={500} className="flex-1 sm:flex-none">
                    <Button
                      variant="secondary"
                      className="w-full sm:w-auto bg-gray-900 text-white border border-gray-700 hover:border-red-500 text-xs md:text-sm"
                    >
                      Expertise
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="work" smooth duration={500} className="flex-1 sm:flex-none">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white text-xs md:text-sm">
                      Projects
                    </Button>
                  </ScrollLink>
                </div>
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
                Proof of work
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="space-y-6">
              {/* Mobile: single card carousel with nav buttons */}
              <div className="md:hidden">
                <ProjectCard
                  project={projects[activeProjectIndex]}
                  showNav
                  onPrev={handlePrevProject}
                  onNext={handleNextProject}
                />
              </div>

              {/* Desktop/Tablet: terminal switcher + grid */}
              <div className="hidden md:grid grid-cols-[minmax(320px,360px)_1fr] gap-8 items-start">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-gray-800/80 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-[0_20px_70px_rgba(0,0,0,0.5)] overflow-hidden sticky top-24"
                >
                  <div className="px-5 py-3.5 border-b border-gray-800/90 flex items-center justify-between bg-gradient-to-r from-red-600/40 via-pink-600/30 to-amber-500/30 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 text-sm text-gray-100 font-semibold font-mono">
                      <span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,99,71,0.8)] animate-pulse" />
                      <span className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                      <span className="ml-2 text-base">workstation.sh</span>
                    </div>
                    <span className="text-xs text-gray-300 font-mono">~/workspace</span>
                  </div>
                  <div className="p-5 space-y-5 text-sm text-gray-200 font-mono">
                    <motion.div 
                      className="flex gap-2.5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveWorkTab("projects")}
                        className={`flex-1 px-4 py-2.5 rounded-lg border text-sm font-bold transition-all duration-300 ${
                          activeWorkTab === "projects"
                            ? "border-red-500/80 bg-gradient-to-r from-red-500/25 to-pink-500/20 text-white shadow-lg shadow-red-500/20"
                            : "border-gray-700/60 bg-gray-800/50 text-gray-300 hover:border-red-500/50 hover:bg-gray-800/70"
                        }`}
                      >
                        📂 Projects
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveWorkTab("contributions")}
                        className={`flex-1 px-4 py-2.5 rounded-lg border text-sm font-bold transition-all duration-300 ${
                          activeWorkTab === "contributions"
                            ? "border-amber-400/80 bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-white shadow-lg shadow-amber-500/20"
                            : "border-gray-700/60 bg-gray-800/50 text-gray-300 hover:border-amber-400/50 hover:bg-gray-800/70"
                        }`}
                      >
                         Contributions
                      </button>
                    </motion.div>
                    <motion.div 
                      className="bg-black/60 border border-gray-800/70 rounded-xl p-4 space-y-3 shadow-inner"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 text-sm">➜</span>
                        <span className="text-sky-400 text-sm">ls</span>
                        <span className="text-gray-300 text-sm">./work</span>
                      </div>
                      <div className="text-amber-300 text-sm pl-4">{activeWorkTab === "projects" ? "📁 projects/" : "📁 contributions/"}</div>
                      
                      <div className="border-t border-gray-800/50 pt-3">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 text-sm">➜</span>
                          <span className="text-sky-400 text-sm">cat</span>
                          <span className="text-gray-300 text-sm">README.md</span>
                        </div>
                        <div className="text-gray-400 text-sm mt-2 pl-4 leading-relaxed border-l-2 border-red-500/30 ml-2">
                          {activeWorkTab === "projects"
                            ? " Curated builds showcasing Web3, AI, and full-stack expertise. Each project demonstrates production-ready code and innovative solutions."
                            : " Active open-source contributions, security audits, and hackathon projects. Committed to building in public and shipping quality code."}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-emerald-400 text-sm">➜</span>
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="text-gray-400 text-sm"
                        >
                          █
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                  {activeWorkTab === "projects"
                    ? projects.map((project) => <ProjectCard key={project.title} project={project} />)
                    : contributions.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-gray-800 bg-gray-900/70 p-4 flex flex-col gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-amber-400/60 transition-colors"
                        >
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          <p className="text-xs text-gray-300 leading-relaxed flex-1">{item.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 to-red-500/15 text-amber-200 border border-amber-400/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 transition-colors"
                          >
                            View work ↗
                          </a>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-14 lg:py-16 bg-black relative overflow-hidden">
        {/* Subtle animated background glows (compact) */}
        <motion.div
          className="pointer-events-none absolute top-24 left-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-24 right-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        <div className="container px-4 mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, rgba(240, 24, 0, 1) 0%, rgba(249, 217, 11, 1) 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Hackathons
              </span>
              <span className="ml-2 text-white">🏆</span>
            </motion.h2>

            <div className="relative pl-4 md:pl-8">
              {/* Compact vertical timeline */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] md:w-1 hidden sm:block rounded-full"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(237,7,7,0.9) 0%, rgba(249,228,6,0.8) 100%)" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Items */}
              <div className="space-y-5">
                {hackathonData.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.id}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.015, x: 3 }}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-3 top-4 w-2.5 h-2.5 rounded-full hidden sm:block"
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(237,7,7,1) 0%, rgba(249,228,6,1) 100%)",
                        boxShadow: "0 0 10px rgba(237,7,7,0.5)",
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
                      viewport={{ once: true }}
                    />

                    {/* Compact card */}
                    <motion.div
                      className="p-4 md:p-5 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 rounded-lg border border-gray-800/50 relative overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                      whileHover={{ boxShadow: "0 12px 35px rgba(237,7,7,0.12)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2.5">
                        <div className="flex-1 space-y-2">
                          <h3 className="text-base md:text-lg font-bold text-white">{hackathon.name}</h3>
                          <p className="text-xs md:text-sm font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                            {hackathon.achievement}
                          </p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-gray-500" />
                            <p className="text-xs text-gray-400">{hackathon.date}</p>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed">{hackathon.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {hackathon.tech.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-500/30"
                                whileHover={{ scale: 1.05, y: -1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
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

        <div className="container px-4 mx-auto max-w-6xl relative z-10">
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
                  Get in Touch
                </span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">Let's work on something amazing</p>
            </div>

            {/* Two Column Layout: Contact Terminal + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start">
              {/* Contact Terminal - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-800/80 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-[0_20px_70px_rgba(0,0,0,0.5)] overflow-hidden lg:sticky lg:top-24"
              >
                <div className="px-5 py-3.5 border-b border-gray-800/90 flex items-center justify-between bg-gradient-to-r from-red-600/40 via-pink-600/30 to-yellow-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5 text-sm text-gray-100 font-semibold font-mono">
                    <span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,99,71,0.8)] animate-pulse" />
                    <span className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="ml-2 text-base">contact.sh</span>
                  </div>
                  <span className="text-xs text-gray-300 font-mono">~/reach-me</span>
                </div>
                <div className="p-5 space-y-4 text-sm font-mono">
                  <motion.div 
                    className="bg-black/60 border border-gray-800/70 rounded-xl p-4 space-y-3 shadow-inner"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-sky-400">cat</span>
                      <span className="text-gray-300">contact_info.json</span>
                    </div>
                    <div className="pl-4 space-y-2.5 text-xs">
                      <div className="flex flex-col gap-1">
                        <span className="text-pink-400">"email":</span>
                        <a href="mailto:rsayan570@gmail.com" className="text-sky-300 hover:text-sky-200 transition-colors pl-2 flex items-center gap-1">
                          <span>📧</span>
                          <span>rsayan570@gmail.com</span>
                        </a>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-pink-400">"location":</span>
                        <span className="text-gray-300 pl-2">📍 Kolkata, India</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-pink-400">"availability":</span>
                        <span className="text-emerald-400 pl-2">✅ Open to Work</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-black/60 border border-gray-800/70 rounded-xl p-4 space-y-3 shadow-inner"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-sky-400">ls</span>
                      <span className="text-gray-300">./socials</span>
                    </div>
                    <div className="pl-4 space-y-2 text-xs">
                      <a href="https://github.com/mesayanroy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                        <span className="text-amber-300">github</span>
                      </a>
                      <a href="https://linkedin.com/in/sayan-roy-111278321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-amber-300">linkedin</span>
                      </a>
                      <a href="https://x.com/mesayanroy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                        <span className="text-amber-300">twitter</span>
                      </a>
                    </div>
                  </motion.div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-emerald-400">➜</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-gray-400"
                    >
                      █
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Right Side */}
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
                        required
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
                        required
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
                      required
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
                      Send Message 
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/mesayanroy" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/sayan-roy-111278321" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="https://x.com/mesayanroy" label="Twitter" />
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

function ProjectCard({
  project,
  showNav = false,
  onPrev,
  onNext,
}: {
  project: Project
  showNav?: boolean
  onPrev?: () => void
  onNext?: () => void
}) {
  const { title, description, tags, image, liveUrl, demoUrl } = project
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
        <div className={`mt-auto flex flex-wrap gap-2 ${showNav ? "justify-center" : "justify-center md:justify-start"}`}>
          <a
            href={liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white transition-transform duration-200 ${
              liveDisabled
                ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
                : "bg-gradient-to-r from-red-600 to-amber-400 hover:from-red-500 hover:to-amber-300 hover:-translate-y-0.5"
            }`}
            aria-disabled={liveDisabled ? true : undefined}
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
            aria-disabled={demoDisabled ? true : undefined}
          >
            <Play className="w-4 h-4" /> {demoDisabled ? "Demo soon" : "Demo"}
          </a>
          {showNav && (
            <>
              <button
                onClick={onPrev}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white border border-gray-700 hover:border-red-500 transition-colors"
                type="button"
              >
                ← Prev
              </button>
              <button
                onClick={onNext}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white border border-gray-700 hover:border-amber-400 transition-colors"
                type="button"
              >
                Next →
              </button>
            </>
          )}
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
