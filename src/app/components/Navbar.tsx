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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (phoneNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phoneNavOpen]);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setPhoneNavOpen(false);
      }
    };

    if (phoneNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [phoneNavOpen]);

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
    <nav ref={navRef} className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible || phoneNavOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} ${scrolled ? 'py-1 md:py-2' : 'py-3 md:py-6'}`}>
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
          {/* Mobile Trigger - Premium High-Visibility Button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setPhoneNavOpen(!phoneNavOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-watermelon-red text-white shadow-[0_8px_20px_-4px_rgba(255,94,98,0.4)] active:scale-90 transition-all duration-300"
              aria-label="Toggle Menu"
            >
               <HiOutlineMenuAlt3 className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {phoneNavOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-b-3xl overflow-hidden border-t border-gray-50 flex flex-col z-[1000]"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Mobile Menu Links */}
            <div className="px-6 py-8">
              <ul className="flex flex-col gap-y-4 text-xl font-serif text-charcoal">
                <NavItems items={navItems} phoneNavOpen={phoneNavOpen} setPhoneNavOpen={setPhoneNavOpen} mobile={true} />
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-6 bg-gray-50/50 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Connect With Us</p>
              <div className="flex gap-6">
                {socials.map((social: Social, index: number) => (
                  <Link href={social.link} key={"mob-soc" + index} className="text-xl text-charcoal/60 hover:text-watermelon-red transition-colors">
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
