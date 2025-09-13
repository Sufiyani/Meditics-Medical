

import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesLayout2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A3471] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Services 02</h1>
          <div className="flex items-center justify-center text-sm md:text-lg">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <ChevronRight className="mx-2 w-4 h-4" />
            <span>Service Details</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clinical Pathology",
              description:
                "Clinical pathology involves the analysis of blood, urine, and tissues",
              image: "/images/service-1.jpg",
            },
            {
              title: "Histopathology",
              description:
                "Histopathology examines tissue samples under a microscope to detect",
              image: "/images/service-2.jpg",
            },
            {
              title: "Biochemistry",
              description:
                "Biochemistry tests measure chemical in blood and body fluids",
              image: "/images/service-3.jpg",
            },
            {
              title: "Hematology (Blood Tests)",
              description:
                "Hematology tests analyze blood components to detect anemia, infections",
              image: "/images/service-4.jpg",
            },
            {
              title: "Urine & Stool Analysis",
              description:
                "Urine and stool analysis help detect infections, digestive issues",
              image: "/images/service-5.jpg",
            },
            {
              title: "Hemoglobin (Hb)",
              description:
                "Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen",
              image: "/images/service-6.jpg",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[360px] flex flex-col group"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />
                {/* Arrow */}
                <div
                  className="absolute bottom-4 right-4 flex items-center justify-center 
                             text-blue-600 transition-all duration-300
                             group-hover:bg-blue-600 group-hover:text-white 
                             group-hover:rounded-full group-hover:p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.293 3.293a1 1 0 011.414 0L19 8.586a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L16.586 10H3a1 1 0 110-2h13.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="bg-[#DBE9A1] py-6 md:py-8 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <div className="inline-flex items-center space-x-6 md:space-x-8 text-black font-bold text-2xl md:text-4xl lg:text-4xl">
            <span className="flex items-center">
              <span className="mr-2">★</span> ORTHOPEDICS
            </span>
            <span className="flex items-center">
              <span className="mr-2">✚</span> NEUROLOGY
            </span>
            <span className="flex items-center">
              <span className="mr-2">★</span> DERMATOLOGY
            </span>
            <span className="flex items-center">
              <span className="mr-2">✚</span> CARDIOLOGY
            </span>
             <span className="flex items-center">
              <span className="mr-2">★</span> ORTHOPEDICS
            </span>
            <span className="flex items-center">
              <span className="mr-2">✚</span> NEUROLOGY
            </span>
            <span className="flex items-center">
              <span className="mr-2">★</span> DERMATOLOGY
            </span>
            <span className="flex items-center">
              <span className="mr-2">✚</span> CARDIOLOGY
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesLayout2;
