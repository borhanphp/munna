import { workExperience } from "@/data/work";
import { HiBriefcase, HiLocationMarker, HiCalendar, HiCheckCircle } from "react-icons/hi";

export default function Work() {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and accomplishments</p>

        <div className="mt-12 space-y-8">
          {workExperience.map((work) => (
            <div
              key={work.id}
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <HiBriefcase className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                          {work.position}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold mb-3">
                          {work.company}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <HiLocationMarker size={16} className="flex-shrink-0" />
                            <span className="text-sm md:text-base">{work.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <HiCalendar size={16} className="flex-shrink-0" />
                            <span className="text-sm md:text-base">{work.period}</span>
                          </div>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium">
                            {work.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-0 md:ml-9">
                  <p className="text-gray-700 mb-4">{work.description}</p>
                  
                  {work.responsibilities && work.responsibilities.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {work.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <HiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {work.technologies && work.technologies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

