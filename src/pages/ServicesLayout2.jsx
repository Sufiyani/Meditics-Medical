

import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
               {/* Learn More Button */}
<div className="absolute bottom-4 right-4">
  <Link
    to="/servicesdetails"
    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg
               hover:bg-blue-700 transition-all duration-300"
  >
    Learn More
    <ArrowRight className="w-4 h-4" /> {/* lucide-react arrow icon */}
  </Link>
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
