"use client";

import { personalInfo } from "@/data/personal";
import SocialLinks from "./SocialLinks";
import { HiDownload, HiMail } from "react-icons/hi";

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-primary-600 font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/biodata.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <HiDownload size={20} />
                Download Biodata
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                <HiMail size={20} />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <SocialLinks iconSize={28} />
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/profile-photo.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/400x400?text=Ayeen+Uddin+Showrav";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

