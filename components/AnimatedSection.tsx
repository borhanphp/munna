"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeIn: "opacity-0 transition-opacity duration-1000",
    slideUp: "opacity-0 translate-y-10 transition-all duration-1000",
    slideInLeft: "opacity-0 -translate-x-10 transition-all duration-1000",
    slideInRight: "opacity-0 translate-x-10 transition-all duration-1000",
  };

  const visibleClasses = {
    fadeIn: "opacity-100",
    slideUp: "opacity-100 translate-y-0",
    slideInLeft: "opacity-100 translate-x-0",
    slideInRight: "opacity-100 translate-x-0",
  };

  return (
    <div
      ref={sectionRef}
      className={`${animationClasses[animation]} ${
        isVisible ? visibleClasses[animation] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

