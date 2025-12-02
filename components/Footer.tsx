"use client";

import { personalInfo } from "@/data/personal";
import SocialLinks from "./SocialLinks";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AUS</h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.name} - {personalInfo.title}
            </p>
            <p className="text-gray-400 text-sm">
              Building innovative solutions and creating meaningful impact through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </p>
              <p>Chattogram, Bangladesh</p>
            </div>
            <SocialLinks iconSize={24} className="mt-4" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <HiHeart className="text-red-500" size={16} /> by {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

