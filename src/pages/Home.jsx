

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  UserPlus,
  Stethoscope,
  Phone,
  MessageSquare,
  Video,
  Heart,
  Activity,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Users,
  ClipboardList,Search, Menu,ChevronDown
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {  Clock, Mail } from "lucide-react";
import BgImage from "../assets/about-vector.svg";
import { FaHeart } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi"; // meditation icon
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Splide CSS import
import "./splide.css";
import BackgroundImg from "../assets/footer-2-vector.svg";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-700 hover:text-blue-500";

      const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const awardImages = [
    "/images/award-1.svg",
    "/images/award-2.svg",
    "/images/award-3.svg",
    "/images/award-4.svg",
    "/images/award-5.svg",
    "/images/award-6.svg",
  ];
  return (
    <>

    {/* Topbar */}
    <div className="hidden md:flex text-white text-sm w-full bg-blue-950 overflow-hidden">
      {/* Left Section (Blue with Diagonal Cut) */}
      <div className="relative bg-blue-600 flex items-center gap-6 px-6 py-2 w-2/5 clip-diagonal">
        <span className="flex items-center gap-2">
          <Phone size={16} /> Helpline: +208-6666-0112
        </span>
        <span className="flex items-center gap-2">
          <Clock size={16} />Open Hours: Mon - Fri 8.00 am - 6.00 pm
        </span>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center px-6 py-2">
        <span className="flex items-center gap-2">
          <Mail size={16} /> info@example.com
        </span>
      </div>
    </div>


{/* Navbar */}
{/* 🔹 Main Navbar */}
<nav className="bg-white shadow-sm px-4 py-3">
  <div className="max-w-7xl mx-auto  flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center space-x-2">
       <img src="/images/Meditics black logo.svg" alt="logo" className="w-36" />

    </div>

    {/* Menu Links */}
    <nav className="flex items-center space-x-6 xl:space-x-8">
        {/* HOME */}
        <Link
          to="/"
          className="text-blue-600 font-semibold text-sm tracking-wide"
        >
          HOME
        </Link>

        {/* ABOUT */}
        <Link
          to="/about"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide"
        >
          ABOUT
        </Link>

        {/* SERVICES Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setPagesOpen(false);
            }}
            className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
          >
            <span>SERVICES</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {servicesOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
              <Link
                to="/serviceslayout2"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
              >
                Services Layout 2
              </Link>
              <Link
                to="/servicesdetails"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
              >
                Services Details
              </Link>
            </div>
          )}
        </div>

        {/* PAGES Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setPagesOpen(!pagesOpen);
              setServicesOpen(false);
            }}
            className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
          >
            <span>PAGES</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                pagesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {pagesOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
              <Link
                to="/pages"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
              >
                Team
              </Link>
              
            </div>
          )}
        </div>

        {/* BLOG Dropdown */}
<div className="relative">
  <button
    onClick={() => {
      setBlogOpen(!blogOpen);
      setServicesOpen(false);
      setPagesOpen(false);
    }}
    className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
  >
    <span>BLOG</span>
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-200 ${
        blogOpen ? "rotate-180" : ""   // ✅ blogOpen lagao
      }`}
    />
  </button>
  {blogOpen && (    // ✅ blogOpen check karo
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
      <Link
        to="/blogslayout2"
        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
      >
        Blogs Layout2
      </Link>
    </div>
  )}
</div>


        {/* CONTACT */}
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide"
        >
          CONTACT
        </Link>
      </nav>
    {/* Right Section */}
    <div className="flex items-center space-x-4">
      {/* Profile Icon */}
      <div className="hidden md:block">
      
      </div>

      {/* 🔹 Search Button */}
      <button className="p-3 bg-[#F2F2F2] hover:bg-[#1C2E43] rounded-md">
        <Search className="h-5 w-5 text-black" />
      </button>

      {/* 🔹 Menu Button */}
      <button className="p-3 bg-[#F2F2F2] hover:bg-[#1C2E43] rounded-md">
        <Menu className="h-5 w-5 text-black" />
      </button>

      {/* Book Appointment */}
      <button className="bg-[#DBE9A1] hover:bg-[#c9d98a] text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
        BOOK APPOINTMENT
      </button>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <div className="h-[640px] bg-slate-900 relative overflow-hidden py-1">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-700/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-[#DBE9A1] rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-[#DBE9A1]" />
                <span className="text-[#DBE9A1] font-medium text-sm">HI I AM</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Meet Dr. Tushar Raja
                <br />
                <span className="text-blue-400">— Your Trusted</span>
                <br />
                <span className="text-white">Healthcare Partner</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Dr. Tushar is a highly experienced and compassionate [Specialization, e.g., General
                Physician / Cardiologist / Dermatologist] dedicated.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
                  BOOK APPOINTMENT
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button className="border border-slate-600 hover:border-slate-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 hover:bg-slate-800/30">
                  VIEW SCHEDULE
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex items-center justify-between">
              {/* Blue Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                    src="images/cross.png"
                    alt="Cross"
                    className="absolute inset-0 m-auto 
               w-[200px] h-[200px] 
               sm:w-[300px] sm:h-[300px] 
               md:w-[400px] md:h-[400px] 
               lg:w-[500px] lg:h-[500px] 
               opacity-20 z-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
              </div>

              {/* Doctor Image (Left side) */}
              <div className="relative z-10 flex-shrink-0">
                <img
                  src={"/images/Hero Sec img.png"}
                  alt="Doctor"
                  className="w-[380px] h-[550px] object-contain rounded-xl translate-y-27"
                />
              </div>

              {/* Right Section (Mission + Socials) */}
              <div className="relative flex flex-col items-start gap-6 ml-8">
                {/* Mission Slider */}
                <div className="w-[360px] -translate-x-12 -translate-y-55">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-6 shadow-lg">
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                          My mission is to treat every patient with care, respect, and the highest
                          standard of medical knowledge
                        </p>
                        <p className="text-green-400 font-medium text-sm pt-2">
                          — Robel Roy .USY
                        </p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-6 shadow-lg">
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                          My mission is to treat every patient with care, respect, and the highest
                          standard of medical knowledge
                        </p>
                        <p className="text-green-400 font-medium text-sm pt-2">
                          — Robel Roy .USY
                        </p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-6 shadow-lg">
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                          My mission is to treat every patient with care, respect, and the highest
                          standard of medical knowledge
                        </p>
                        <p className="text-green-400 font-medium text-sm pt-2">
                          — Robel Roy .USY
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Social Media Sidebar */}
               
            {/* Social Icons - Fixed Right Side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaTwitter />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaYoutube />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaInstagram />
                </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule and Journey Section */}
      <div className="min-h-screen bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div
          className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

            {/* Left Side - Time For Meet Card */}
            <div className=" mt-20 order-2 lg:order-1 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl text-white flex flex-col justify-between max-w-md mx-auto lg:mx-0 w-full">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Time For Meet</h2>

                {/* Schedule Info */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Weekdays */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">Monday - Friday</h3>
                    <p className="text-blue-100 text-sm sm:text-base">9:00 PM - 06:00 PM</p>
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-blue-400/30 my-4 sm:my-6"></div>

                  {/* Weekend */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">Saturday - Sunday</h3>
                    <p className="text-blue-100 text-sm sm:text-base">9:00 PM - 06:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Care Section */}
              <div className="bg-blue-500 rounded-b-3xl p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg font-bold mb-3">For Emergency Care</h3>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">+208-6666-0112</span>
                </div>
              </div>
            </div>

            {/* Right Side - About Me Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-gray-800">
              {/* About Me Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 sm:px-4 py-2">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 fill-blue-600" />
                <span className="text-blue-600 font-medium text-xs sm:text-sm">About Me</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                My Journey in Medicine
              </h1>

              {/* Description Paragraphs */}
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm Dr. Tushar Raja a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic,
                  evidence-based medical care. With over 12 years of experience, I've had the privilege of treating thousands
                  of patients with empathy, accuracy, and dedication.
                </p>

                <p>
                  I strongly believe that medicine is not just about treating diseases, but about understanding people,
                  building trust, and guiding them toward long-term wellness.
                </p>
              </div>

              {/* Doctor's Motto */}
              <div className="flex items-start gap-3 bg-blue-50 p-3 sm:p-4 rounded-xl">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">💡</span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold text-gray-800">Doctor's Motto or Belief: </span>
                  <span className="text-gray-600">Healing begins with listening.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  SEND MESSAGE
                </button>

                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-gray-50 text-sm sm:text-base">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                  VIDEO CALL
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Medical Services Section */}
      <section className="relative py-16 bg-gray-200">
        {/* Left Side Illustration */}
        <div className="absolute left-0 top-10 w-40 opacity-80">
          <img src="/images/service-inject.svg" alt="Left Decoration" className="w-full" />
        </div>

        {/* Right Side Illustration */}
        <div className="absolute right-0 top-10 w-40 opacity-80">
          <img src="/images/service-inject-right.svg" alt="Right Decoration" className="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-4">

            <div className="bg-white text-blue-600 px-3 py-1 border-1 border-blue-500 rounded-full text-sm font-medium flex items-center">
              <FaHeart className="text-blue-500 text-lg mr-2" />
              <span className="mx-2">SERVICES I PROVIDE</span>
              <FaHeart className="text-blue-500 text-lg ml-2" />
            </div>

          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Medical Services I Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-0 ml-25 mr-25">
            {/* General Health Check-Ups */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow max-w-[300px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardList className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                General Health Check-Ups
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular comprehensive health assessments to maintain optimal
                wellness and early detection of potential health issues.
              </p>
            </div>

            {/* Stress & Lifestyle Counseling */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow max-w-[300px] mx-auto">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GiMeditation className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Stress & Lifestyle Counseling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional guidance to help manage stress, improve lifestyle
                choices, and enhance overall mental well-being.
              </p>
            </div>

            {/* Referral to Specialists */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow max-w-[300px] mx-auto">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Referral to Specialists
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coordinated care through our network of trusted specialists to
                ensure you receive the most appropriate treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH PROBLEMS SECTION */}
      <div className="w-full">
        <section className="relative w-full text-white overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0E2138]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            {/* Left & Right Split */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left mb-10">
              {/* Left Side */}
              <div className="flex-1 mb-6 md:mb-0 ml-25">
                {/* Badge */}
                <div className="inline-block bg-[#0E2138] border border-green-300 text-green-300 text-xs px-4 py-2 rounded-full mb-4">
                  Do You Need Emergency Care
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  Do You Have Health Problems
                </h2>
              </div>

              {/* Right Side */}
              <div className="flex-1 flex justify-center md:justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-5 rounded-md shadow-md mr-25">
                  I NEED HELP →
                </button>
              </div>
            </div>

            {/* Swiper Slider (unchanged) */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={25}
              slidesPerView={6}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="pb-10"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-24 bg-[#0E2138] rounded-lg flex items-center justify-center">
                    <img
                      src={`/images/envato.svg`}
                      alt="Envato Logo"
                      className="h-6 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* QUALIFICATION & AWARDS */}
        <section className="relative py-20 bg-white text-center overflow-hidden">
          {/* Left Side Illustration */}
          <div className="absolute left-0 top-10 w-40">
            <img
              src="/images/qualification-vector-1.svg"
              alt="Left Decoration"
              className="w-full"
            />
          </div>

          {/* Right Side Illustration */}
          <div className="absolute right-0 top-10 w-40 opacity-80">
            <img
              src="/images/service-inject-right.svg"
              alt="Right Decoration"
              className="w-full"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-white text-blue-600 text-xs px-6 py-2 rounded-full mb-4 relative z-10 border border-blue-500">
            <FaHeart className="text-blue-500 text-lg mr-2" />
            <span>My Qualification</span>
          </div>


          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-12 relative z-10">
            My Qualification & Awards
          </h2>

          {/* Qualification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 relative z-10 l">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] rounded-lg shadow-sm p-4 text-left"
              >
                <p className="font-bold text-gray-800">Oxford University</p>
                <p className="text-black text-lg font-serif font-extrabold">
                  Bachelor of Medicine & Bachelor of Surgery (MBBS)
                </p>
                <p className="text-gray-400 text-xs">Jan 2014 – Dec 2018</p>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-6 p-8 px-23 bg-gray-200 rounded-md">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/images/award-${i}.svg`}
                alt={`Award ${i}`}
                className="h-16 object-contain rounded-md p-1"
              />
            ))}

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              VIEW ALL AWARDS →
            </button>
          </div>
        </section>
      </div>

      {/* Client Feedbacks Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            {/* Left Section */}
            <div className="text-center sm:text-left mb-6 sm:mb-0 ml-25">
              <div className="inline-flex items-center bg-gray-200 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-blue-600">
                <span className="w-2 h-2 bg-gray-200 border-2 border-blue-600 rounded-full mr-2"></span>
                Client's Testimonials
              </div>

              <h2 className="text-3xl text-gray-800 font-extrabold font-serif">
                Clients Feedbacks
              </h2>
            </div>

            {/* Right Section (Navigation arrows) */}
            <div className="flex items-center gap-4 mr-25">
              <button className="w-12 rotate-45 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50">
                <ArrowLeft className="w-6 h-6 font-bold" />
              </button>
              <button className="w-12 -rotate-45 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50">
                <ArrowRight className="w-6 h-6 font-bold" />
              </button>
            </div>


          </div>

          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                focus: "center",
                autoplay: true,
                interval: 3000,   // 3 sec me slide change
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                gap: "1rem",
              }}
              className="pb-12 custom-splide"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <SplideSlide key={i}>
                  <div className="testimonial-card bg-white py-4 rounded-xl shadow-sm border text-center max-w-2xl mx-auto transition-all duration-500">
                    {/* Profile Image */}
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <img
                        src="/images/reviewer-1.jpg"
                        alt="Client"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm inline-block mb-2">
                        Cedric Martinez
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Consectetur adipiscing elit. Integer nunc viverra laoreet est,
                      quis dapibus massa vestibulum eget. Proin sit amet tellus rutrum,
                      feugiat nibh quis, accumsan magna.
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>

      {/* Consult Your Doctor Online Section */}
      <section className="relative py-20 bg-[#0E2138] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 ml-30 mr-30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                ONLINE HEALTH & YOUR CONVENIENCE
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Consult Your Doctor Online<br />
                — Anytime, Anywhere
              </h2>

              {/* Description */}
              <p className="text-blue-100 text-sm leading-relaxed">
                Skip the waiting room! With our secure telemedicine platform and convenient service, you can now talk to experienced doctors from the comfort of your home.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Speak with certified specialists in real time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Easy appointment booking system</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Private, secure, and confidential video calls</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Affordable rates | Quality healthcare services</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2">
                Book a Video Call
                <ArrowRight className="w-6 h-6 font-bold -rotate-45" />
              </button>

            </div>

            {/* Right Image - Two Mobile Screens Side by Side */}
            <div className="relative flex items-center justify-center">
              {/* First Mobile Screen - Left side, positioned higher */}
              <div className="relative z-20 -mr-8">
                <div className="w-56 h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/images/video-call-1.png" alt="Dr. Thanhy Rizka Video Call" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Second Mobile Screen - Right side, positioned lower */}
              <div className="relative z-10 mt-12">
                <div className="w-56 h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/images/video-call-2.png" alt="Doctor Video Call" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Health, My Words Blog Section */}
      <section className="py-20 bg-[#F9FDFD]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Doctor's Blog
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Your Health, My Words
            </h2>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8 ml-25 mr-25">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/Health1.jpg"
                  alt="Medical Tips"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  The Medical Minute Quick Tips for Better Living
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-5 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/Health2.jpg"
                  alt="Healthy Habits"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  Healthy Habits for Busy Professionals
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-5 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/images/Health3.jpg"
                  alt="Doctor Answers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  Ask the Doctor: Real Answers, Real Care
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-5 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map & Appointment Section */}
      <>
        <section
          className="py-6 bg-gray-100 relative"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="mb-8 ml-25">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4 mr-2" />
                Appointment
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Apply for Appointment
              </h2>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch mt-12 py-1">

              {/* Left Side - Map */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086325987839!2d-122.41941508468198!3d37.77492977975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5d8a7a3b%3A0xa6e7f7d4b9b6c9a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1698675420000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                  ></iframe>
                </div>
              </div>


            {/* Right Side - Form Card */}
            <div className="w-full">
              <div className=" p-8 -mt -20 ">
                <form className="space-y-4">
                 {/* Row 1 */}
<div className="grid grid-cols-2 gap-6"> {/* gap-4 → gap-6 for more space */}
  <input
    type="text"
    placeholder="Full Name"
    className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="email"
    placeholder="Email Address"
    className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


                 {/* Row 2 */}
<div className="grid grid-cols-2 gap-6 mt-10"> {/* gap-4 → gap-6 */}
  <input
    type="tel"
    placeholder="Your Number"
    className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="date"
    placeholder="mm/dd/yyyy"
    className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Row 3 */}
<div className="grid grid-cols-2 gap-6 mt-10"> {/* thoda gap aur top margin */}
  <select className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Select Doctor</option>
    <option>Doctor 1</option>
    <option>Doctor 2</option>
    <option>Doctor 3</option>
  </select>
  <select className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Select Treatment</option>
    <option>Treatment 1</option>
    <option>Treatment 2</option>
    <option>Treatment 3</option>
  </select>
</div>


                  {/* Checkbox */}
                  <div className="flex items-center pt-2">
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-700">I agree terms and conditions.</label>
                  </div>

                  {/* Submit Button */}
                  <button className="w-50 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-sm mt-6">
                    Appointment Now →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>





        {/* Footer */}
        <footer
          className="bg-[#0D1F35] text-white pt-16 pb-8 px-6 relative"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1F35]/90"></div> {/* dark overlay for readability */}

          <div className="relative max-w-7xl mx-auto">
            {/* footer top */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* About Section */}
              <div>
                <a href="index.html" className="block mb-4">
                  <img
                    src="/src/assets/Meditics heart logo.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>

                <p className="text-sm leading-relaxed mb-4">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout.
                </p>

                {/* Newsletter Form */}
                <form className="flex items-center bg-white rounded-lg overflow-hidden mb-4 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 px-4 py-2 text-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 px-6 py-2 font-semibold text-sm text-white hover:bg-blue-700"
                  >
                    SUBSCRIBE
                  </button>
                </form>


                {/* Social Icons */}
                <div className="flex space-x-4 ">
                  <a
                    href="#"
                    className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="service-details.html" className="hover:text-blue-300">
                      General Health Check-Ups
                    </a>
                  </li>
                  <li>
                    <a href="service-details.html" className="hover:text-blue-300">
                      Stress & Lifestyle Counseling
                    </a>
                  </li>
                  <li>
                    <a href="service-details.html" className="hover:text-blue-300">
                      Vaccinations & Immunizations
                    </a>
                  </li>
                  <li>
                    <a href="service-details.html" className="hover:text-blue-300">
                      Referral to Specialists
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="index.html" className="hover:text-blue-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html" className="hover:text-blue-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" className="hover:text-blue-300">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-sm mb-2">
                  102/ B Street, New Elephant Road, Sandigo, USA
                </p>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Email Us: </span>
                  <a href="mailto:info@example.com" className="hover:text-blue-300">
                    info@example.com
                  </a>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Call Now: </span>
                  <a href="tel:20866660112" className="hover:text-blue-300">
                    +208-6666-0112
                  </a>
                </div>
              </div>
            </div>

            {/* footer bottom */}
            <div className="mt-12 border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
              <div className="text-center md:text-left">
                © <span className="font-bold">Meditics</span>{" "}
                {new Date().getFullYear()}. All Rights Reserved.
              </div>

              <div className="flex justify-center space-x-3">
                <img src="/src/assets/payment-method-1.png" alt="Payment Method" className="h-6" />
                <img src="/src/assets/payment-method-2.png" alt="Payment Method" className="h-6" />
                <img src="/src/assets/payment-method-3.png" alt="Payment Method" className="h-6" />
                <img src="/src/assets/payment-method-4.png" alt="Payment Method" className="h-6" />
                <img src="/src/assets/payment-method-5.png" alt="Payment Method" className="h-6" />
              </div>

              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-blue-300">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-blue-300">
                  Privacy Environmental Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>


    </>
  );
}
