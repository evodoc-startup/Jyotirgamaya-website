import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdAddCall } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

interface Social {
  name: string;
  icon: React.ReactElement;
  link: string;
}

const socials: Social[] = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://telegram.org",
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    link: "https://www.whatsapp.com",
  },
];

function Footer() {
  return (
    <footer className="w-screen bg-[#192C55]">
      <div className="w-full items-start tracking-wide gap-8 py-10 hidden sm:flex sm:px-12 lg:px-28 justify-between font-extralight text-white">
        {/* Logo Section */}
        <div className="w-full sm:w-2/5 flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            height={400}
            width={400}
            className="w-40 mr-3"
          />
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-li mb-4 text-2xl">Quick Links</h3>
          <ul className="space-y-4 text-sm mt-6">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-li mb-4 text-2xl">Our Services</h3>
          <ul className="space-y-4 text-sm mt-6">
            <li>
              <a href="/services#parent-coaching" className="hover:underline">
                Parent Coaching
              </a>
            </li>
            <li>
              <a href="/services#child-therapy" className="hover:underline">
                Child Therapy
              </a>
            </li>
            <li>
              <a href="/services#family-therapy" className="hover:underline">
                Family Therapy
              </a>
            </li>
            <li>
              <a href="/services#school-counseling" className="hover:underline">
                School Counseling
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <a href="/services" className="hover:underline text-sm">
              View All
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-2/5 tracking-wider font-extralight">
          <h3 className="mb-4 text-2xl">Contact</h3>
          <div className="my-5 text-lg leading-relaxed">
            <p>
              Jyotirgamya - Navigating Paths, <br />
              Illuminating Lives
            </p>
          </div>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center space-x-2">
              <MdEmail />
              <span>Email:</span>
              <a href="mailto:info@yourcompany.com" className="hover:underline">
                info@yourcompany.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdAddCall />
              <span>Phone:</span>
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full flex justify-between items-center text-white py-5 px-10 tracking-wider md:text-base text-xs">
        <p>&copy; 2025 Jyotirgamya. All rights reserved</p>
        <div className="flex items-center space-x-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
