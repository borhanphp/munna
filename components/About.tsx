import { personalInfo } from "@/data/personal";
import { HiMail, HiPhone, HiLocationMarker, HiCalendar, HiUser, HiHeart } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">{personalInfo.bio}</p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Personal Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiMail className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-900 hover:text-primary-600">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiPhone className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-900 hover:text-primary-600">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-900">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiCalendar className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="text-gray-900">{personalInfo.dob}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiUser className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Other Details</p>
                  <p className="text-gray-900">Height: {personalInfo.height} | Blood Group: {personalInfo.bloodGroup}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Family & Hobbies */}
          <div className="space-y-6">
            {/* Family */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Family</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Father</p>
                  <p className="text-gray-900 font-medium">{personalInfo.family.father.name}</p>
                  <p className="text-sm text-gray-600">{personalInfo.family.father.occupation}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Mother</p>
                  <p className="text-gray-900 font-medium">{personalInfo.family.mother.name}</p>
                  <p className="text-sm text-gray-600">{personalInfo.family.mother.occupation}</p>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HiHeart className="text-primary-600" />
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

