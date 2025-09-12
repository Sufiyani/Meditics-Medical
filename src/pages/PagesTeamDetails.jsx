import React, { useState } from "react";
import doctorImage from "/images/Doctor member.jpg"; // Image ka path theek karna
import { Link } from "react-router-dom";
const PagesTeamDetails = () => {
  // Appointment form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    doctor: "",
    treatment: "",
    agreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
      {/* Doctor Profile Section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Doctor Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-96 2xl:w-96 2xl:h-[28rem] bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={doctorImage}
                alt="Dr. Ayesha Rahman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Doctor Information */}
          <div className="flex-1 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center lg:text-left">
              Dr. Ayesha Rahman
            </h1>
            <p className="text-blue-600 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6 text-center lg:text-left">
              Internal Medicine & Diabetology
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-center lg:text-left">
              Our doctors are more than just healthcare professionals — they're
              compassionate caregivers, committed to providing personalized,
              expert medical care. With years of experience and deep knowledge
              in their respective fields, our doctors ensure that patients
              receive
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-6 sm:mb-8 border border-gray-400 rounded-lg overflow-hidden divide-x sm:divide-x divide-y sm:divide-y-0 divide-gray-300">
              {/* Email */}
              <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">
                    Email
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">
                    info@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 border-b sm:border-b-0 border-gray-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">
                    Phone
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +208-6666-0112
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">
                    Address
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">
                    123 Main Street, City
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">
                    Experience
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">3-5 years</p>
                </div>
              </div>
            </div>

            {/* Make Appointment Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center">
                Make Appointment
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 border mt-8 sm:mt-12 lg:mt-15"></div>
      </div>

      {/* Introducing Doctor Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-2">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Introducing the Doctor:
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-5xl">
           One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for
          </p>
        </div>

        {/* Personal Experience Section */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Personal Experience
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            {/* Left */}
            <div className="flex-1 max-w-full lg:max-w-md">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
               Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.
              </p>
            </div>

            {/* Right Statistics */}
            <div className="flex-1 w-full">
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-end">
                {/* Surgery */}
                <ProgressCircle percent={55} label="Surgery" />
                {/* Medicine */}
                <ProgressCircle percent={73} label="Medicine" />
                {/* Healthcare */}
                <ProgressCircle percent={90} label="Healthcare" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="bg-white-100 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-12">
              Apply For Appointment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
                <InputField
                  label="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                />
              </div>

              {/* Phone & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  label="Your Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Number"
                />
                <InputField
                  label="Select Date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="mm/dd/yyyy"
                />
              </div>

              {/* Doctor & Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <SelectField
                  label="Select Doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  options={[
                    { value: "", label: "Select Doctor" },
                    { value: "dr-ayesha-rahman", label: "Doctor 1" },
                    { value: "dr-john-smith", label: "Doctor 2" },
                    { value: "dr-sarah-johnson", label: "Doctor 3" },
                  ]}
                />
                <SelectField
                  label="Select Treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  options={[
                    { value: "", label: "Select Treatment" },
                    { value: "general-consultation", label: "Treatment 1" },
                    { value: "diabetes-management", label: "Treatment 2" },
                    { value: "internal-medicine", label: "Treatment 3" },
                  ]}
                />
              </div>

              {/* Terms */}
              <div className="flex items-center gap-3 mt-4 sm:mt-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border border-gray-300 rounded ${
                      formData.agreed ? "bg-black" : "bg-white"
                    }`}
                  >
                    {formData.agreed && (
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="ml-2 text-gray-700 text-xs sm:text-sm">
                    I agree terms and conditions
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Appointment Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Input Component
const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
    />
  </div>
);

// 🔹 Reusable Select Component
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

// 🔹 Progress Circle Reusable Component
const ProgressCircle = ({ percent, label }) => {
  const circumference = 351.86;
  const progress = percent * 3.52;
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#bfdbfe"
            strokeWidth="8"
            fill="none"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 128 128"
        >
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
            {percent}%
          </div>
          <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default PagesTeamDetails;
