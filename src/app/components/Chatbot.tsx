"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiChatBubbleBottomCenterText, HiXMark } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";

const CHAT_DATA = {
  initial: {
    message: "Welcome to Jyotirgamya! How can I illuminate your path today?",
    options: [
      { label: "🧩 Autism Support", next: "autism" },
      { label: "🎓 Career Counselling", next: "career" },
      { label: "💼 Internships", next: "internships" },
      { label: "📞 Contact Us", next: "contact" },
    ],
  },
  autism: {
    message: "Our Autism Center focuses on holistic growth. What would you like to know?",
    options: [
      { label: "Is it a cure?", answer: "Autism is a lifelong neurodevelopmental condition, not an illness. Our therapies focus on skill development and quality of life, not a 'cure'." },
      { label: "Can they be independent?", answer: "Absolutely. Many autistic individuals lead full, independent lives and excel in their careers with the right support." },
      { label: "Back to Main", next: "initial" },
    ],
  },
  career: {
    message: "Career Counselling helps you find your purpose. How can we help?",
    options: [
      { label: "How to book?", answer: "You can book a session via our Contact page or call us directly at +91 89496 94018." },
      { label: "What happens in a session?", answer: "We use specialized assessments and 1-on-1 guidance to map your strengths to the perfect career path." },
      { label: "Back to Main", next: "initial" },
    ],
  },
  internships: {
    message: "We offer transformative internships. Interested?",
    options: [
      { label: "Who can apply?", answer: "Students and professionals looking for hands-on experience in psychology and social work are welcome." },
      { label: "Duration?", answer: "Internships typically range from 1 to 3 months depending on the program." },
      { label: "Back to Main", next: "initial" },
    ],
  },
  contact: {
    message: "We're here to help! Best ways to reach us:",
    options: [
      { label: "Email", answer: "You can reach us at contact@jyotirgamya.com for any inquiries." },
      { label: "Location", answer: "Our main center is open Monday-Saturday. Check the footer for the full address!" },
      { label: "Back to Main", next: "initial" },
    ],
  },
};

const KNOWLEDGE_BASE = [
  { keywords: ["autism", "care", "child", "support", "mental"], answer: "Our Autism Care Center provides specialized developmental interventions, child therapy, and parental coaching to nurture resilience and holistic growth." },
  { keywords: ["career", "counselling", "future", "job", "work"], answer: "Career Counselling at Jyotirgamya helps you discover your true purpose through expert guidance and tailored professional planning." },
  { keywords: ["internship", "intern", "experience", "apply", "join"], answer: "We offer transformative internships for students and professionals in psychology and social work. Programs typically last 1-3 months." },
  { keywords: ["contact", "call", "email", "reach", "location", "address", "phone", "mobile"], answer: "You can reach us at contact@jyotirgamya.com or +91 89496 94018. We are located in Rajasthan, India." },
  { keywords: ["about", "story", "mission", "vission", "who", "founder"], answer: "Jyotirgamya (Navigating Path and Illuminating Lives) is a leading psychological services group dedicated to nurturing minds and transforming futures." },
  { keywords: ["price", "cost", "fee", "booking", "money", "payment"], answer: "For detailed information on session fees and booking, please use our Contact form or call us directly so we can understand your specific needs." },
];

type Message = {
  sender: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentStep, setCurrentStep] = useState<keyof typeof CHAT_DATA>("initial");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: CHAT_DATA.initial.message },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      if (!hasOpened && !isOpen) setShowWelcome(true);
    }, 4000);

    return () => {
      clearTimeout(welcomeTimer);
    };
  }, [hasOpened, isOpen]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
       scrollToBottom();
       setShowWelcome(false);
       setHasOpened(true);
    }
  }, [messages, isOpen, isTyping]);

  const handleOptionClick = (option: { label: string; next?: string; answer?: string }) => {
    setMessages((prev) => [...prev, { sender: "user", text: option.label }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (option.next) {
        const nextStep = option.next as keyof typeof CHAT_DATA;
        setCurrentStep(nextStep);
        setMessages((prev) => [...prev, { sender: "bot", text: CHAT_DATA[nextStep].message }]);
      } else if (option.answer) {
        setMessages((prev) => [...prev, { sender: "bot", text: option.answer! }]);
      }
    }, 1200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim().toLowerCase();
    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = "I'm not quite sure about that. Try asking about 'Autism', 'Career', 'Internships', or 'Contact Us'!";
      
      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(k => userText.includes(k))) {
          response = item.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200]">
      {/* Welcome Bubble */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: -20 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 w-48 bg-white p-4 rounded-2xl shadow-premium border border-indigo/10 z-10 pointer-events-none hidden md:block"
          >
            <p className="text-xs text-charcoal font-medium leading-relaxed">
              Hey there! 👋 Need any help illuminating your path?
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-indigo/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[380px] md:w-[400px] h-[70vh] md:h-[550px] max-h-[600px] bg-white md:bg-white/95 md:backdrop-blur-3xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-charcoal p-5 md:p-6 text-white flex justify-between items-center bg-gradient-to-br from-charcoal to-indigo shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint/20 border border-mint/30 flex items-center justify-center text-mint">
                  <FaRobot className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-base md:text-lg leading-tight">Jyoti Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] text-mint uppercase tracking-widest font-semibold">Active Now</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close Chat"
              >
                <HiXMark className="text-2xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-5 md:p-6 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.sender === "bot" 
                        ? "bg-indigo/5 text-charcoal rounded-tl-none border border-indigo/10" 
                        : "bg-mint text-charcoal rounded-tr-none font-medium shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-indigo/5 p-4 rounded-3xl rounded-tl-none border border-indigo/10 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-indigo/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Quick Actions & Input */}
            <div className="p-4 md:p-5 bg-gray-50/50 border-t border-indigo/5 space-y-4 shrink-0">
              <div className="flex flex-wrap gap-2">
                {CHAT_DATA[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt as any)}
                    className="px-3 py-1.5 bg-white border border-indigo/10 rounded-full text-[10px] text-charcoal hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-300 transform active:scale-95"
                  >
                    {opt.label}
                  </button>
                ))}
                {currentStep !== 'initial' && (
                   <button
                    onClick={() => {
                      setMessages(prev => [...prev, { sender: 'user', text: "🏠 Main Menu" }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        setIsTyping(false);
                        setCurrentStep('initial');
                        setMessages(prev => [...prev, { sender: 'bot', text: CHAT_DATA.initial.message }]);
                      }, 1000);
                    }}
                    className="px-3 py-1.5 bg-white border border-[#FE3E3E]/20 rounded-full text-[10px] text-[#FE3E3E] hover:bg-[#FE3E3E] hover:text-white transition-all"
                  >
                    🏠 Main Menu
                  </button>
                )}
              </div>
              
              <form onSubmit={handleSendMessage} className="relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-white border border-indigo/10 rounded-2xl px-5 py-3.5 pr-12 text-sm focus:ring-2 focus:ring-mint transition-all shadow-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-charcoal text-mint flex items-center justify-center hover:bg-indigo transition-colors"
                >
                  →
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 md:gap-4 bg-emerald text-white rounded-full p-2 pr-5 md:pr-6 shadow-2xl transition-all duration-500 hover:shadow-emerald/30"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-emerald text-xl md:text-2xl transition-transform duration-500 relative">
           {isOpen ? <HiXMark /> : <HiChatBubbleBottomCenterText />}
           {!hasOpened && (
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FE3E3E] text-[10px] flex items-center justify-center rounded-full border border-white">
               1
             </span>
           )}
        </div>
        <span className="font-semibold text-xs md:text-sm tracking-tight">
          {isOpen ? "Hide Chat" : "Need help?"}
        </span>
        <div className="absolute inset-0 rounded-full ring-4 ring-mint/20 animate-ping opacity-0 group-hover:opacity-100" />
      </motion.button>
    </div>
  );
}
