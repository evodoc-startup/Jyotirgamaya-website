"use client";
import React, { useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems: NavigationItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Autism Care Center",
      link: "/autism-care-center",
    },
    {
      name: "Career Counselling",
      link: "/career-counselling",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Internships",
      link: "/internships",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const socials: Social[] = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "www.google.com",
    },
    {
      name: "Instagram",
      icon: <FaLinkedin />,
      link: "www.google.com",
    },
    {
      name: "Instagram",
      icon: <FaTelegramPlane />,
      link: "www.google.com",
    },
    {
      name: "Instagram",
      icon: <FaWhatsapp />,
      link: "www.google.com",
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`mx-auto max-w-7xl px-6 rounded-full transition-all duration-700 ${scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-premium py-3 border border-white/20' : 'bg-transparent py-4'}`}>
        <div className="flex justify-between items-center cursor-pointer">
          <Link href={"/"} className="transition-transform duration-500 hover:scale-105 active:scale-95 group">
            <Image 
              src="/Logo.png" 
              height={200} 
              width={200} 
              alt="Logo" 
              className="h-10 md:h-12 w-auto aspect-auto transition-all duration-500 group-hover:brightness-110 mix-blend-multiply" 
            />
          </Link>
          <ul className="lg:flex hidden items-center space-x-6 text-sm font-semibold tracking-wider uppercase">
            <NavItems items={navItems} phoneNavOpen={phoneNavOpen} setPhoneNavOpen={setPhoneNavOpen} />
          </ul>
          <div className="hidden space-x-8 lg:flex items-center">
            {socials.map((social: Social, index: number) => (
              <Link
                href={social.link}
                target="_blank"
                key={"icon" + index}
                className="text-lg text-charcoal/60 hover:text-mint hover:-translate-y-1 transition-all duration-300">
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
