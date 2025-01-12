"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import type { Social, NavigationItem } from "@/types";
import { colors } from "@/globals";
import { usePathname } from "next/navigation";
import random from "random";
import NavItems from "./NavItems";

function Navbar() {
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);

  function getRandomColor() {
    const randomIndex = Math.floor(random.int(1, colors.length - 1));
    console.log(randomIndex);
    return colors[randomIndex];
  }

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

  useEffect(() => {
    setNavItems([
      {
        name: "Home",
        link: "/",
        color: getRandomColor(),
      },
      {
        name: "Autism Care Center",
        link: "/autism-care-center",
        color: getRandomColor(),
      },
      {
        name: "Services",
        link: "/services",
        color: getRandomColor(),
      },
      {
        name: "Internships",
        link: "/internships",
        color: getRandomColor(),
      },
      {
        name: "About Us",
        link: "/about-us",
        color: getRandomColor(),
      },
    ]);
  }, []);

  return (
    <nav className="bg-white py-2">
      <div className="container mx-auto flex justify-between items-center cursor-pointer">
        <Link href={"/"}>
          <img src="logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>
        <ul className="flex w-fit space-x-10 text-base">
          <NavItems items={navItems} />
        </ul>
        <div className="flex space-x-5">
          {socials.map((social: Social, index: number) => (
            <Link
              href={social.link}
              target="_blank"
              key={"icon" + index + 1}
              className="text-xl hover:text-pink">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
