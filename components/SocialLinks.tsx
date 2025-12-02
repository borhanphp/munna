import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({ className = "", iconSize = 24 }: SocialLinksProps) {
  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin, color: "hover:text-blue-600" },
    { name: "GitHub", icon: FaGithub, url: personalInfo.social.github, color: "hover:text-gray-900" },
    { name: "Facebook", icon: FaFacebook, url: personalInfo.social.facebook, color: "hover:text-blue-500" },
    { name: "Twitter", icon: FaTwitter, url: personalInfo.social.twitter, color: "hover:text-sky-500" },
    { name: "Instagram", icon: FaInstagram, url: personalInfo.social.instagram, color: "hover:text-pink-600" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 ${social.color} transition-colors duration-200`}
            aria-label={social.name}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}

