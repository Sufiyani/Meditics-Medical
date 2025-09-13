

import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctor"; // import updated doctor.js

const PagesTeamDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 relative overflow-hidden py-20 text-center text-white">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl">+</div>
        <h1 className="relative text-5xl font-bold">{doctor.name}</h1>
        <p className="relative mt-2 text-lg">{doctor.specialization}</p>
        <div className="relative mt-4">
          <Link to="/" className="hover:text-gray-200">Home</Link> › <span>{doctor.name}</span>
        </div>
      </div>

      {/* Doctor Detail Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Doctor Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img src={doctor.img} alt={doctor.name} className="rounded-2xl w-full object-cover shadow-lg" />
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{doctor.name}</h2>
          <p className="text-blue-600 text-lg font-medium mb-4">{doctor.specialization}</p>
          <p className="text-gray-600 mb-6">{doctor.introduction}</p>

          <div className="mb-6 space-y-1">
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagesTeamDetails;
