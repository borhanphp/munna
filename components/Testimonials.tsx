"use client";

import { testimonials } from "@/data/testimonials";
import { HiStar } from "react-icons/hi";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          What colleagues, professors, and clients say about working with me
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0d9488&color=fff&size=128`;
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-primary-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

