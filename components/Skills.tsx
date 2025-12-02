"use client";

import { skills } from "@/data/skills";
import { FaCode, FaReact, FaTools, FaDatabase, FaLightbulb } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: skills.programmingLanguages,
    },
    {
      title: "Frameworks & Libraries",
      icon: FaReact,
      skills: skills.frameworks,
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      skills: skills.tools,
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: skills.databases,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build amazing solutions
        </p>

        {/* Technical Skills */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="text-primary-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-primary-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-primary-600 to-primary-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaLightbulb className="text-primary-600" size={28} />
              <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-gray-800 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

