import React, { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Background Medical Cross */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-blue-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
            +
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-white/80">
            <a
              href="/"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </a>
            <span>›</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>

      {/* ✅ Contact Info Section */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-4 sm:ml-8 mr-4 sm:mr-8">
            {/* Address Card */}
            <div className="bg-gray-200 rounded-lg py-6 sm:py-8 px-6 sm:px-8 text-center shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                House #5, Street Number #98, brasilia-
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>70000-000, Brazil.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-200 rounded-lg py-6 sm:py-8 px-6 sm:px-8 text-center shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-gray-700 space-y-1 text-sm sm:text-base">
                <p>info@exmple.com</p>
                <p>info@exmple.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-200 rounded-lg py-6 sm:py-8 px-6 sm:px-8 text-center shadow-sm col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-gray-700 space-y-1 text-sm sm:text-base">
                <p>+208-666-01112</p>
                <p>+380961381877</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Map + Contact Form Section */}
      <div className="w-[90%] md:w-[80%] mx-auto my-10 flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9030866184637!2d90.39048537451513!3d23.75085858876354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f5c2eafd%3A0x2ec16d4f0cdb2e57!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1694158290091!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-[#031C32] text-white p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Lets talk...
          </h2>

          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-2 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-3 py-2 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Messages"
                rows="4"
                className="w-full px-3 py-2 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Submit Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
