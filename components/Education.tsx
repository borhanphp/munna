import { education } from "@/data/education";
import { HiAcademicCap, HiLocationMarker, HiCalendar } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and qualifications</p>

        <div className="mt-12 space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <HiAcademicCap className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        {edu.grade && (
                          <p className="text-primary-600 font-medium mb-2">{edu.grade}</p>
                        )}
                        <div className="space-y-1 text-gray-600">
                          <div className="flex items-center gap-2">
                            <HiLocationMarker size={16} className="flex-shrink-0" />
                            <p className="text-sm md:text-base">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <HiCalendar size={16} className="flex-shrink-0" />
                            <p className="text-sm md:text-base">{edu.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {edu.description && (
                      <p className="mt-4 text-gray-600 leading-relaxed ml-9">
                        {edu.description}
                      </p>
                    )}
                  </div>
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

