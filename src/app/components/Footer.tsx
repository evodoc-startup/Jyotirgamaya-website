import React from 'react'
import Image from 'next/image'
import { MdEmail, MdAddCall } from 'react-icons/md'
import {
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp
} from 'react-icons/fa'

interface Social {
  name: string
  icon: React.ReactElement
  link: string
}

const socials: Social[] = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com'
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com'
  },
  {
    name: 'Telegram',
    icon: <FaTelegramPlane />,
    link: 'https://telegram.org'
  },
  {
    name: 'Whatsapp',
    icon: <FaWhatsapp />,
    link: 'https://www.whatsapp.com'
  }
]

function Footer () {
  return (
    <footer className="w-full bg-charcoal text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {/* Brand Section */}
        <div className="space-y-8">
          <Image
            src="/Logo.png"
            alt="Logo"
            height={200}
            width={200}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="text-white/60 font-light leading-relaxed max-w-xs">
            "Jyotirgamya - Navigating Paths, Illuminating Lives. Empowering every individual to unlock their true potential."
          </p>
          <div className="flex gap-5">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg hover:bg-mint hover:text-charcoal hover:border-mint transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="font-serif text-xl mb-8 tracking-tight">Quick Links</h3>
          <ul className="space-y-4 text-white/50 font-light">
            <li><a href="/about-us" className="hover:text-mint transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-mint transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-mint transition-colors">Contact</a></li>
            <li><a href="/privacy" className="hover:text-mint transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="font-serif text-xl mb-8 tracking-tight">Our Services</h3>
          <ul className="space-y-4 text-white/50 font-light text-sm">
            <li><a href="/services#parent-coaching" className="hover:text-mint transition-colors">Parent Coaching</a></li>
            <li><a href="/services#child-therapy" className="hover:text-mint transition-colors">Child Therapy</a></li>
            <li><a href="/services#family-therapy" className="hover:text-mint transition-colors">Family Therapy</a></li>
            <li><a href="/services#school-counseling" className="hover:text-mint transition-colors">School Counseling</a></li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="space-y-8">
          <h3 className="font-serif text-xl mb-8 tracking-tight">Get in Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
                 <MdEmail className="text-xl text-mint" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                <a href="mailto:contact@jyotirgamya.com" className="text-white/80 hover:text-white transition-colors">
                  contact@jyotirgamya.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
                 <MdAddCall className="text-xl text-mint" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call Us</p>
                <a href="tel:+918949694018" className="text-white/80 hover:text-white transition-colors">
                  +91 89496 94018
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-light">
        <p>&copy; 2025 Jyotirgamya. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="/cookies" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
