"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatbotOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatbotOverlay({ isOpen, onClose }: ChatbotOverlayProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 👋 I'm Sayan's AI assistant. Ask me anything about his skills, projects, or experience!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Rate limiting: Track requests to prevent hitting API limits
  const requestTimesRef = useRef<number[]>([])
  const MAX_REQUESTS_PER_MINUTE = 15
  const COOLDOWN_MS = 1000 // 1 second cooldown

  const myDescription =
    "I'm Sayan Roy, a full-stack developer and Web3 enthusiast. I'm in my second year at Sister Nivedita University. I have hands-on experience with Solidity, Move , Rust , EVMs & SVMs smart contracts, and blockchain,  auditing transactions , working on rush nodes onchain on solana and ethereum. Currently building Opus and GhostLend Protocol. I'm learning LLMs, blockchain wallets, and quant finance. My hobbies are football, music, and traveling. I'hv also built full stack projects both you can see in my github porfile I'm based in Kolkata, India. Feel free to reach out if you have any questions or opportunities!"
  
  // API key from environment variables (set in .env.local)
  // Get your key from: https://makersuite.google.com/app/apikey
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    // Check rate limiting
    const now = Date.now()
    requestTimesRef.current = requestTimesRef.current.filter((time) => now - time < 60000) // Keep only last minute
    
    if (requestTimesRef.current.length >= MAX_REQUESTS_PER_MINUTE) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "⏱️ Too many requests. Please wait a moment before sending another message.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      return
    }

    // Check cooldown
    const lastRequestTime = requestTimesRef.current[requestTimesRef.current.length - 1]
    if (lastRequestTime && now - lastRequestTime < COOLDOWN_MS) {
      const waitTime = Math.ceil((COOLDOWN_MS - (now - lastRequestTime)) / 1000)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `⏱️ Please wait ${waitTime}s before sending another message.`,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      return
    }

    requestTimesRef.current.push(now)

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsLoading(true)

    try {
      if (!apiKey) {
        throw new Error("API key not configured")
      }

      console.log("Calling Gemini API with message:", inputText.substring(0, 50) + "...")
      console.log("API Key configured:", apiKey ? "Yes" : "No")

      // Use gemini-2.5-flash model which is the latest stable model available
      const modelName = "gemini-2.5-flash"
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`
      
      console.log(`Calling API with model: ${modelName}`)

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Sayan's AI assistant. About Sayan: ${myDescription}

User question: ${inputText}

Answer the user's question based on Sayan's profile. Be friendly and concise.`,
                },
              ],
            },
          ],
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("API Error Details:", { status: response.status, statusText: response.statusText, data: errorData })

        // Handle specific error codes
        if (response.status === 404) {
          throw new Error("API Error: 404 - Model not found. Try a different API key from https://makersuite.google.com/app/apikey")
        } else if (response.status === 429) {
          throw new Error("API Error: 429 Rate Limit - Your quota is exceeded. Try again later or check your billing settings.")
        } else if (response.status === 401 || response.status === 403) {
          throw new Error("API Error: 401/403 - Invalid API key. Please verify your .env.local has the correct key.")
        } else if (response.status === 400) {
          throw new Error("API Error: 400 - Bad request. " + JSON.stringify(errorData))
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      
      if (!data.candidates || data.candidates.length === 0) {
        console.log("API Response:", data)
        throw new Error("No response from API")
      }
      
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm not sure how to answer that. Could you ask me something else about Sayan?"

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Chatbot Error:", error)
      let errorText = "Oops! Something went wrong. Please try again later. 😅"
      
      if (error instanceof Error) {
        const errorMsg = error.message.toLowerCase()
        if (errorMsg.includes("api key not configured")) {
          errorText = "⚠️ API key is not configured. Please check .env.local"
        } else if (errorMsg.includes("401")) {
          errorText = "⚠️ Invalid API key. Please verify your Gemini API key."
        } else if (errorMsg.includes("429")) {
          errorText = "⚠️ Rate limit exceeded. Please wait 30 seconds and try again."
        } else if (errorMsg.includes("403")) {
          errorText = "⚠️ API access denied. Check your API key permissions."
        } else if (errorMsg.includes("failed to fetch")) {
          errorText = "⚠️ Network error. Check your internet connection."
        } else if (errorMsg.includes("no response from api")) {
          errorText = "⚠️ API returned no response. Please try again."
        } else {
          console.log("Unknown error details:", error.message)
          errorText = `Error: ${error.message}`
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Chat Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Sayan's AI Assistant</h3>
                  <p className="text-xs text-white/80">Online now</p>
                </div>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-700"
                      }`}
                    >
                      {message.isUser ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.isUser
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? "text-white/70" : "text-gray-400"}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-gray-800 rounded-2xl px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 size={16} className="animate-spin text-purple-400" />
                        <span className="text-sm text-gray-300">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Sayan..."
                  className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed p-0"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
