

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

// Local images
import shoaib from "/images/Doctor 1.jpg";
import tanvir from "/images/Doctor 2.jpg";
import nafisa from "/images/Doctor 3.jpg";
import tania from "/images/Doctor 4.jpg";
import sumiyyah from "/images/Doctor 5.jpg";
import arif from "/images/Doctor 6.jpg";

const doctors = [
  { id: 1, name: "Shoaib", specialty: "Chief Pathologist", image: shoaib },
  { id: 2, name: "Tanvir", specialty: "Consultant Pathologist", image: tanvir },
  { id: 3, name: "Nafisa", specialty: "Family Physician", image: nafisa },
  { id: 4, name: "Tania", specialty: "Physician", image: tania },
  { id: 5, name: "Sumiyyah", specialty: "Women's Health Specialist", image: sumiyyah },
  { id: 6, name: "Arif", specialty: "Online Consultation Expert", image: arif },
];

const SocialIcon = ({ Icon }) => (
  <div className="group w-9 h-9 rounded-full bg-gray-100 border-4 border-transparent hover:border-2 hover:border-blue-500 flex items-center justify-center cursor-pointer transition-all duration-300">
    <Icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
  </div>
);

const Pages = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-blue-300 text-8xl">+</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Doctors</h1>
          <div className="flex justify-center gap-2 text-white/80 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <span>Our Doctors</span>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <Link
              key={doc.id}
              to={`/pages/team-details/${doc.id}`}  // Correct route for PagesTeamDetails
              className="bg-gray-200 rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-blue-500 transition-all group flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover border-4 border-white group-hover:border-blue-500 transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
              <div className="flex justify-center gap-2 mt-3">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Youtube} />
                <SocialIcon Icon={Twitter} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pages;
