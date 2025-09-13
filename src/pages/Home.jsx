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
  ClipboardList, Search, Menu, ChevronDown
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Clock, Mail } from "lucide-react";
import BgImage from "../assets/about-vector.svg";
import { FaHeart } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
const blogs = [
  {
    id: 1,
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    type: "Event",
    image: "/images/Health1.jpg",
    link: "/blogslayout2"
  },
  {
    id: 2,
    title: "Healthy Eating Habits for Busy Professionals",
    date: "20 March 2025",
    type: "Health",
    image: "/images/Health2.jpg",
    link: "/blogslayout2"
  },
  {
    id: 3,
    title: "How Exercise Improves Mental Health",
    date: "25 March 2025",
    type: "Tips",
    image: "/images/Health3.jpg",
    link: "/blogslayout2"
  }
];
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Topbar - Hidden on small screens */}
      <div className="hidden lg:flex text-white text-sm w-full bg-blue-950 overflow-hidden">
        <div className="relative bg-blue-600 flex items-center gap-2 xl:gap-6 px-4 xl:px-6 py-2 w-full xl:w-2/5 clip-diagonal">
          <span className="flex items-center gap-2 text-sm">
            <Phone size={14} />
            <span className="hidden xl:inline">Helpline: </span>+208-6666-0112
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Clock size={14} />
            <span className="hidden 2xl:inline">Open Hours: </span>
            <span className="2xl:hidden">Hours: </span>Mon - Fri 8.00am-6.00pm
          </span>
        </div>
        <div className="flex-1 flex justify-end items-center px-4 xl:px-6 py-2">
          <span className="flex items-center gap-2 text-sm">
            <Mail size={14} /> info@example.com
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-3 sm:px-4 lg:px-6 py-3 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/Meditics black logo.svg" alt="logo" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
          </div>

          {/* Desktop Menu - Hidden on mobile/tablet */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            <Link to="/" className="text-blue-600 font-semibold text-sm tracking-wide">
              HOME
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide">
              ABOUT
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setPagesOpen(false);
                  setBlogOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
                  <Link to="/serviceslayout2" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium">
                    Services Layout 2
                  </Link>
                  <Link to="/servicesdetails" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium">
                    Services Details
                  </Link>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setPagesOpen(!pagesOpen);
                  setServicesOpen(false);
                  setBlogOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                <span>PAGES</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`} />
              </button>
              {pagesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
                  <Link to="/pages" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium">
                    Team
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`} />
              </button>
              {blogOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
                  <Link to="/blogslayout2" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium">
                    Blogs Layout2
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide">
              CONTACT
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Right Section */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
            <button className="p-2 lg:p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <Search className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
            </button>
            <button className="bg-green-200 hover:bg-green-300 text-gray-800 px-3 lg:px-4 py-2 lg:py-2.5 rounded-md text-xs lg:text-sm font-medium transition-colors">
              <span className="hidden md:inline">BOOK APPOINTMENT</span>
              <span className="md:hidden">BOOK</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block text-blue-600 font-semibold text-sm py-2">HOME</Link>
              <Link to="/about" className="block text-gray-800 hover:text-blue-600 font-semibold text-sm py-2">ABOUT</Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 font-semibold text-sm py-2"
                >
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/serviceslayout2" className="block text-gray-600 text-sm py-1">Services Layout 2</Link>
                    <Link to="/servicesdetails" className="block text-gray-600 text-sm py-1">Services Details</Link>
                  </div>
                )}
              </div>

              {/* Mobile Pages */}
              <div>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 font-semibold text-sm py-2"
                >
                  PAGES
                  <ChevronDown className={`w-4 h-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
                </button>
                {pagesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/pages" className="block text-gray-600 text-sm py-1">Team</Link>
                  </div>
                )}
              </div>

              {/* Mobile Blog */}
              <div>
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 font-semibold text-sm py-2"
                >
                  BLOG
                  <ChevronDown className={`w-4 h-4 transition-transform ${blogOpen ? "rotate-180" : ""}`} />
                </button>
                {blogOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/blogslayout2" className="block text-gray-600 text-sm py-1">Blogs Layout2</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="block text-gray-800 hover:text-blue-600 font-semibold text-sm py-2">CONTACT</Link>
              
              {/* Mobile Actions */}
              <div className="flex items-center space-x-2 pt-4 border-t">
                <button className="p-2 bg-gray-100 rounded-md">
                  <Search className="h-4 w-4 text-gray-600" />
                </button>
                <button className="flex-1 bg-green-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-slate-900 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-80 lg:h-80 bg-blue-900/30 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-44 sm:h-44 lg:w-72 lg:h-72 bg-blue-700/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-green-300 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-green-300" />
                <span className="text-green-300 font-medium text-sm">HI I AM</span>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Meet Dr. Tushar Raja
                <br />
                <span className="text-blue-400">— Your Trusted</span>
                <br />
                <span className="text-white">Healthcare Partner</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Dr. Tushar is a highly experienced and compassionate General Physician dedicated to providing comprehensive healthcare services.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 lg:px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <span className="hidden sm:inline">BOOK APPOINTMENT</span>
                  <span className="sm:hidden">BOOK NOW</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button className="border border-slate-600 hover:border-slate-500 text-white font-semibold px-6 lg:px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-slate-800/30">
                  VIEW SCHEDULE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              {/* Blue Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src="images/cross.png"
                  alt="Cross"
                  className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] opacity-20 z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Doctor Image */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={"/images/Hero Sec img.png"}
                  alt="Doctor"
                  className="w-48 h-72 sm:w-64 sm:h-96 lg:w-80 lg:h-[480px] xl:w-96 xl:h-[550px] object-contain rounded-xl"
                />
              </div>

           {/* Desktop Mission Slider - Only visible on large screens */}
<div className="hidden xl:block absolute top-0 -right-24 w-80">
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
          My mission is to treat every patient with care, respect, and the highest standard of medical knowledge
        </p>
        <p className="text-green-400 font-medium text-sm pt-2">— Robel Roy .USY</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-6 shadow-lg">
        <p className="text-slate-300 text-sm leading-relaxed italic">
          Excellence in healthcare through compassion and evidence-based medicine
        </p>
        <p className="text-green-400 font-medium text-sm pt-2">— Dr. Tushar Raja</p>
      </div>
    </SwiperSlide>
  </Swiper>
</div>

             {/* Desktop Social Icons - Only visible on large screens */}
<div className="hidden xl:flex absolute -right-40 top-1/2 -translate-y-1/2 flex-col gap-3">
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
    <FaFacebookF />
  </a>
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
    <FaTwitter />
  </a>
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
    <FaYoutube />
  </a>
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
    <FaInstagram />
  </a>
</div>

            </div>
          </div>

          {/* Mobile/Tablet Mission Slider */}
          <div className="xl:hidden mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              <SwiperSlide>
                <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-4 sm:p-6 shadow-lg mx-4">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    My mission is to treat every patient with care, respect, and the highest standard of medical knowledge
                  </p>
                  <p className="text-green-400 font-medium text-sm pt-2">— Robel Roy .USY</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-md p-4 sm:p-6 shadow-lg mx-4">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    Excellence in healthcare through compassion and evidence-based medicine
                  </p>
                  <p className="text-green-400 font-medium text-sm pt-2">— Dr. Tushar Raja</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Mobile/Tablet Social Icons */}
          <div className="xl:hidden flex justify-center gap-4 mt-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 hover:bg-blue-800 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Schedule and Journey Section */}
      <div className="min-h-screen bg-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div
          className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start p-4 sm:p-6 lg:p-8">
            {/* Left Side - Time For Meet Card */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl text-white flex flex-col justify-between w-full max-w-md mx-auto lg:mx-0 lg:mt-12">
              <div className="p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-center">Time For Meet</h2>

                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-base lg:text-lg font-semibold mb-2">Monday - Friday</h3>
                    <p className="text-blue-100 text-sm lg:text-base">9:00 AM - 06:00 PM</p>
                  </div>

                  <div className="border-t border-blue-400/30 my-6"></div>

                  <div className="text-center">
                    <h3 className="text-base lg:text-lg font-semibold mb-2">Saturday - Sunday</h3>
                    <p className="text-blue-100 text-sm lg:text-base">9:00 AM - 06:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 rounded-b-3xl p-4 lg:p-6 text-center">
                <h3 className="text-base lg:text-lg font-bold mb-3">For Emergency Care</h3>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-semibold text-sm lg:text-base">+208-6666-0112</span>
                </div>
              </div>
            </div>

            {/* Right Side - About Me Content */}
            <div className="order-1 lg:order-2 space-y-4 lg:space-y-6 text-gray-800">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span className="text-blue-600 font-medium text-sm">About Me</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                My Journey in Medicine
              </h1>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base">
                  I'm Dr. Tushar Raja a Internal Medicine Specialist with a passion for providing holistic,
                  evidence-based medical care. With over 12 years of experience, I've had the privilege of treating thousands
                  of patients with empathy, accuracy, and dedication.
                </p>

                <p className="text-sm sm:text-base">
                  I strongly believe that medicine is not just about treating diseases, but about understanding people,
                  building trust, and guiding them toward long-term wellness.
                </p>
              </div>

              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">💡</span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold text-gray-800">Doctor's Motto: </span>
                  <span className="text-gray-600">Healing begins with listening.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 lg:px-8 py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  SEND MESSAGE
                </button>

                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 lg:px-8 py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <Video className="w-5 h-5" />
                  VIDEO CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Services Section */}
      <section className="relative py-12 sm:py-16 bg-gray-200">
        {/* Left Side Illustration */}
        <div className="absolute left-0 top-10 w-20 sm:w-32 lg:w-40 opacity-80">
          <img src="/images/service-inject.svg" alt="Left Decoration" className="w-full" />
        </div>

        {/* Right Side Illustration */}
        <div className="absolute right-0 top-10 w-20 sm:w-32 lg:w-40 opacity-80">
          <img src="/images/service-inject-right.svg" alt="Right Decoration" className="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-white text-blue-600 px-3 py-1 border border-blue-500 rounded-full text-sm font-medium flex items-center">
              <FaHeart className="text-blue-500 text-lg mr-2" />
              <span className="mx-2">SERVICES I PROVIDE</span>
              <FaHeart className="text-blue-500 text-lg ml-2" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12">
            Medical Services I Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* General Health Check-Ups */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                General Health Check-Ups
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular comprehensive health assessments to maintain optimal
                wellness and early detection of potential health issues.
              </p>
            </div>

            {/* Stress & Lifestyle Counseling */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <GiMeditation className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Stress & Lifestyle Counseling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional guidance to help manage stress, improve lifestyle
                choices, and enhance overall mental well-being.
              </p>
            </div>

            {/* Referral to Specialists */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            {/* Left & Right Split */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left mb-8 sm:mb-10">
              {/* Left Side */}
              <div className="flex-1 mb-6 lg:mb-0">
                {/* Badge */}
                <div className="inline-block bg-[#0E2138] border border-green-300 text-green-300 text-xs px-4 py-2 rounded-full mb-4">
                  Do You Need Emergency Care
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Do You Have Health Problems
                </h2>
              </div>

              {/* Right Side */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-3 sm:py-5 rounded-md shadow-md text-sm sm:text-base">
                  I NEED HELP →
                </button>
              </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 25,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="pb-10"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-16 sm:h-20 lg:h-24 bg-[#0E2138] rounded-lg flex items-center justify-center">
                    <img
                      src={`/images/envato.svg`}
                      alt="Envato Logo"
                      className="h-4 sm:h-5 lg:h-6 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* QUALIFICATION & AWARDS */}
        <section className="relative py-16 sm:py-20 bg-white text-center overflow-hidden">
          {/* Left Side Illustration */}
          <div className="absolute left-0 top-10 w-20 sm:w-32 lg:w-40">
            <img
              src="/images/qualification-vector-1.svg"
              alt="Left Decoration"
              className="w-full"
            />
          </div>

          {/* Right Side Illustration */}
          <div className="absolute right-0 top-10 w-20 sm:w-32 lg:w-40 opacity-80">
            <img
              src="/images/service-inject-right.svg"
              alt="Right Decoration"
              className="w-full"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-white text-blue-600 text-xs px-4 sm:px-6 py-2 rounded-full mb-4 border border-blue-500">
              <FaHeart className="text-blue-500 text-lg mr-2" />
              <span>My Qualification</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12">
              My Qualification & Awards
            </h2>

            {/* Qualification Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-[#F2F2F2] rounded-lg shadow-sm p-4 text-left"
                >
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Oxford University</p>
                  <p className="text-black text-base sm:text-lg font-serif font-extrabold">
                    Bachelor of Medicine & Bachelor of Surgery (MBBS)
                  </p>
                  <p className="text-gray-400 text-xs">Jan 2014 – Dec 2018</p>
                </div>
              ))}
            </div>

            {/* Awards Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 bg-gray-200 rounded-md max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <img
                    key={i}
                    src={`/images/award-${i}.svg`}
                    alt={`Award ${i}`}
                    className="h-12 sm:h-14 lg:h-16 object-contain rounded-md p-1"
                  />
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base whitespace-nowrap">
                VIEW ALL AWARDS →
              </button>
            </div>
          </div>
        </section>
      </div>

       {/* Client Feedbacks Section */}
  <section className="py-12 sm:py-16 bg-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
        {/* Left Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <div className="inline-flex items-center bg-gray-200 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-blue-600">
            <span className="w-2 h-2 bg-gray-200 border-2 border-blue-600 rounded-full mr-2"></span>
            Client's Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-extrabold font-serif">
            Clients Feedbacks
          </h2>
        </div>

        {/* Right Section (Navigation arrows) */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rotate-45 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 font-bold" />
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 -rotate-45 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 font-bold" />
          </button>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="max-w-4xl mx-auto">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            breakpoints: {
              640: { perPage: 1 },
              768: { perPage: 2 },
              1024: { perPage: 3 },
            },
            focus: "center",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            gap: "1rem",
          }}
          className="pb-12 custom-splide"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <SplideSlide key={i}>
              <div className="testimonial-card bg-white py-4 rounded-xl shadow-sm border text-center max-w-sm mx-auto transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/images/reviewer-1.jpg"
                    alt="Client"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="mb-4">
                  <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm inline-block mb-2">
                    Cedric Martinez
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 px-2 sm:px-4">
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
  <section className="relative py-16 sm:py-20 bg-[#0E2138] text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            ONLINE HEALTH & YOUR CONVENIENCE
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Consult Your Doctor Online<br />
            — Anytime, Anywhere
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Skip the waiting room! With our secure telemedicine platform and convenient service, you can now talk to experienced doctors from the comfort of your home.
          </p>

          <div className="space-y-3">
            {[
              "Speak with certified specialists in real time",
              "Easy appointment booking system",
              "Private, secure, and confidential video calls",
              "Affordable rates | Quality healthcare services"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center lg:justify-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start mt-4 sm:mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium flex items-center gap-2 text-sm sm:text-base">
              Book a Video Call
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 font-bold -rotate-45" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative z-20 -mr-4 sm:-mr-8">
            <div className="w-40 h-72 sm:w-48 sm:h-80 lg:w-56 lg:h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
              <img src="/images/video-call-1.png" alt="Video Call" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="relative z-10 mt-8 sm:mt-12">
            <div className="w-40 h-72 sm:w-48 sm:h-80 lg:w-56 lg:h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
              <img src="/images/video-call-2.png" alt="Video Call" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
<section className="py-16 sm:py-20 bg-[#F9FDFD]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-8 sm:mb-12">
      <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Heart className="w-4 h-4 mr-2" />
        Doctor's Blog
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Your Health, My Words
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-1">
          <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight">
              {blog.title}
            </h3>
            <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-5 space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                <span>{blog.type}</span>
              </div>
            </div>
            <Link
              to={blog.link}
              className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors"
            >
              READ MORE <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Appointment Section */}
<section className="py-10 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-8">
      <div className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
        <Heart className="w-4 h-4 mr-1" /> Appointment
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Apply for Appointment
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
      {/* Map */}
      <div className="w-full h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086325987839!2d-122.41941508468198!3d37.77492977975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5d8a7a3b%3A0xa6e7f7d4b9b6c9a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1698675420000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          title="Clinic Location"
        ></iframe>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 sm:p-8 flex flex-col justify-center">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Doctor</option>
              <option>Doctor 1</option>
              <option>Doctor 2</option>
              <option>Doctor 3</option>
            </select>
            <select className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Treatment</option>
              <option>Treatment 1</option>
              <option>Treatment 2</option>
              <option>Treatment 3</option>
            </select>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2 w-4 h-4 text-blue-600" />
            <label className="text-sm text-gray-700">I agree to terms and conditions</label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
            Appointment Now →
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  {/* Footer */}
<footer className="bg-[#0D1F35] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 relative">
  <div className="absolute inset-0 bg-[#0D1F35]/90"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Footer Top */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
      {/* About Section */}
      <div className="sm:col-span-2 lg:col-span-1">
        <a href="index.html" className="block mb-4">
          <img
            src="images/Meditics heart logo.svg"
            alt="logo"
            className="w-28 sm:w-32 lg:w-36 mx-auto sm:mx-0"
          />
        </a>

        <p className="text-sm leading-relaxed mb-4 text-center sm:text-left">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden mb-4 w-full max-w-md mx-auto sm:mx-0">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 px-3 sm:px-4 py-2 text-black focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 px-3 sm:px-6 py-2 mt-2 sm:mt-0 font-semibold text-xs sm:text-sm text-white hover:bg-blue-700 transition"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start space-x-4">
          <Facebook size={20} className="hover:text-blue-500 cursor-pointer" />
          <Twitter size={20} className="hover:text-blue-400 cursor-pointer" />
          <Youtube size={20} className="hover:text-red-500 cursor-pointer" />
          <Instagram size={20} className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="service-details.html" className="hover:text-blue-300 block">General Health Check-Ups</a></li>
          <li><a href="service-details.html" className="hover:text-blue-300 block">Stress & Lifestyle Counseling</a></li>
          <li><a href="service-details.html" className="hover:text-blue-300 block">Vaccinations & Immunizations</a></li>
          <li><a href="service-details.html" className="hover:text-blue-300 block">Referral to Specialists</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="index.html" className="hover:text-blue-300 block">Home</a></li>
          <li><a href="about.html" className="hover:text-blue-300 block">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300 block">Pages</a></li>
          <li><a href="blog.html" className="hover:text-blue-300 block">Blog</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4">Contact</h3>
        <p className="text-sm mb-2">102/ B Street, New Elephant Road, Sandigo, USA</p>
        <p className="text-sm mb-2">
          <span className="font-semibold">Email Us: </span>
          <a href="mailto:info@example.com" className="hover:text-blue-300">info@example.com</a>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Call Now: </span>
          <a href="tel:20866660112" className="hover:text-blue-300">+208-6666-0112</a>
        </p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 sm:mt-12 border-t border-white/20 pt-4 sm:pt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-center text-sm">
      <div className="text-center lg:text-left">
        © <span className="font-bold">Meditics</span> {new Date().getFullYear()}. All Rights Reserved.
      </div>

      <div className="flex justify-center space-x-3 flex-wrap">
        <img src="/images/payment-method-1.png" alt="Payment" className="h-5 sm:h-6" />
        <img src="/images/payment-method-2.png" alt="Payment" className="h-5 sm:h-6" />
        <img src="/images/payment-method-3.png" alt="Payment" className="h-5 sm:h-6" />
        <img src="/images/payment-method-4.png" alt="Payment" className="h-5 sm:h-6" />
        <img src="/images/payment-method-5.png" alt="Payment" className="h-5 sm:h-6" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-4 text-center">
        <a href="#" className="hover:text-blue-300">Terms of Use</a>
        <a href="#" className="hover:text-blue-300">Privacy Environmental Policy</a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}