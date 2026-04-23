"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import type { Social, NavigationItem } from "@/types";
import NavItems from "./NavItems";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

function Navbar() {
  const [phoneNavOpen, setPhoneNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      // Robust hide-on-scroll logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavigationItem[] = [
    { name: "Home", link: "/" },
    { name: "Autism Care Center", link: "/autism-care-center" },
    { name: "Career Counselling", link: "/career-counselling" },
    { name: "Services", link: "/services" },
    { name: "Internships", link: "/internships" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socials: Social[] = [
    { name: "Instagram", icon: <FaInstagram />, link: "www.instagram.com" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "www.linkedin.com" },
    { name: "Telegram", icon: <FaTelegramPlane />, link: "www.telegram.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "www.whatsapp.com" },
  ];

  // Update the return statement with enriched transitions
  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} ${scrolled ? 'py-1 md:py-2' : 'py-3 md:py-6'}`}>
      <div className={`mx-auto max-w-[95%] xl:max-w-7xl px-4 md:px-8 rounded-full transition-all duration-1000 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-premium py-2 md:py-3 border border-gray-100' : 'bg-white py-3 md:py-6 shadow-sm shadow-black/5'}`}>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="transition-transform duration-500 hover:scale-105 active:scale-95 group">
            <Image 
              src="/Logo.png" 
              height={300} 
              width={300} 
              alt="Logo" 
              className="h-12 md:h-14 w-auto drop-shadow-sm" 
            />
          </Link>
          <ul className="lg:flex hidden items-center space-x-10 text-[13px] font-semibold tracking-tight">
            <NavItems items={navItems} phoneNavOpen={phoneNavOpen} setPhoneNavOpen={setPhoneNavOpen} />
          </ul>
          <div className="hidden space-x-6 lg:flex items-center">
            {socials.map((social: Social, index: number) => (
              <Link
                href={social.link}
                target="_blank"
                key={"icon" + index}
                className="text-xl text-charcoal/80 hover:text-[#FE3E3E] transition-all duration-300">
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden text-3xl items-center text-charcoal">
             <HiOutlineMenuAlt3 
              onClick={() => setPhoneNavOpen(true)} 
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
             />
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {phoneNavOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-[110] bg-charcoal/95 backdrop-blur-3xl overflow-hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col h-full p-12">
              <div className="flex justify-between items-center mb-16">
                 <Image src="/Logo.png" height={150} width={150} alt="Logo" className="h-10 w-auto brightness-0 invert" />
                 <div 
                   className="text-5xl text-white cursor-pointer hover:rotate-90 transition-transform duration-500" 
                   onClick={() => setPhoneNavOpen(false)}
                 >
                   &times;
                 </div>
              </div>
              <ul className="flex flex-col gap-y-8 text-4xl md:text-5xl font-serif text-white">
                <NavItems items={navItems} phoneNavOpen={phoneNavOpen} setPhoneNavOpen={setPhoneNavOpen} />
              </ul>
              <div className="mt-auto pt-10 border-t border-white/10 flex gap-8 justify-center">
                {socials.map((social: Social, index: number) => (
                  <Link href={social.link} key={"mob-soc" + index} className="text-3xl text-white/50 hover:text-mint transition-colors duration-300">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
