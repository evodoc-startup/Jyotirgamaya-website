import React from "react";
import Image from "next/image";
import { MdEmail, MdAddCall } from "react-icons/md";

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

        {/* Links Section */}
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
              <MdEmail className=""/>
              <p>Email:</p>
              <a href="mailto:info@yourcompany.com" className="hover:underline">
                info@yourcompany.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdAddCall className=""/>
              <p>Phone:</p>
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center text-white py-5 px-5 tracking-wider md:text-base text-xs">
        <p>Copyright &copy; 2025 Jyotirgamya. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
