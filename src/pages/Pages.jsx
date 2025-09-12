import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

// Local images
import shoaib from "/images/Doctor 1.jpg";
import tanvir from"/images/Doctor 2.jpg";
import nafisa from "/images/Doctor 3.jpg";
import tania from "/images/Doctor 4.jpg";
import sumiyyah from "/images/Doctor 5.jpg";
import arif from "/images/Doctor 6.jpg";

const Pages = () => {
  const doctors = [
    { id: 1, name: "Shoaib", specialty: "Chief Pathologist", image: shoaib },
    { id: 2, name: "Tanvir", specialty: "Consultant Pathologist", image: tanvir },
    { id: 3, name: "Nafisa", specialty: "Family Physician", image: nafisa },
    { id: 4, name: "Tania", specialty: "Physician", image: tania },
    { id: 5, name: "Sumiyyah", specialty: "Women's Health Specialist", image: sumiyyah },
    { id: 6, name: "Arif", specialty: "Online Consultation Expert", image: arif },
  ];

  const SocialIcon = ({ Icon, className = "" }) => (
    <div
      className={`group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 border-4 border-transparent 
        hover:border-2 hover:border-blue-500 
        flex items-center justify-center cursor-pointer transition-all duration-300 ${className}`}
    >
      <Icon
        size={14}
        className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-gray-600 transition-colors duration-300 group-hover:text-blue-600"
      />
    </div>
  );

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Background Medical Cross */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-blue-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">+</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Our Doctors
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
            <Link
              to="/"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Our Doctors</span>
          </div>
        </div>
      </div>

      {/* 🔹 Doctors Grid */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border-2 border-transparent hover:border-blue-500 transition-all group"
              >
                {/* Doctor Image */}
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gradient-to-br flex items-center justify-center overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white group-hover:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{doctor.specialty}</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-2 sm:gap-3">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Youtube} />
                  <SocialIcon Icon={Twitter} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
