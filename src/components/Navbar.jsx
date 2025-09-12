// import React, { useState } from "react";
// import { Clock, Mail, Phone, ChevronDown, Search, Menu, ArrowUpRight } from "lucide-react";
// import { Link, NavLink } from "react-router-dom"; // ✅ React Router Link import

// export default function Navbar() {
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [pagesOpen, setPagesOpen] = useState(false);
//     const [blogOpen, setBlogOpen] = useState(false);

//     const activeClass = "text-blue-600 font-semibold";
//     const normalClass = "text-gray-800 hover:text-blue-600";

//     return (
//         <header className="w-full">
//             {/* 🔹 Top Info Bar */}
//             <div className="bg-[#10274E] text-white text-sm py-4">
//                 <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
//                     <div className="flex items-center space-x-2">
//                         <Clock className=" w-4 h-4 text-white" />
//                         <span>Mon - Fri 8.00 am - 6.00 pm</span>
//                     </div>
//                     <div className="hidden md:block">
//                         <span>Welcome Mediket hospital and doctors appointment services</span>
//                     </div>
//                     <div className="flex items-center space-x-6">
//                         <div className="flex items-center space-x-1">
//                             <Mail className=" w-4 h-4 text-green-400" />
//                             <span>info@example.com</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                             <Phone className="w-4 h-4 text-yellow-300" />
//                             <span>+208-6666-0112</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* 🔹 Main Navbar */}
//             <div className="flex w-full">
//                 <div className="bg-blue-600 px-24 py-8 flex items-center space-x-2">
//                     <img
//                         src="/images/logo-white.svg"
//                         alt="Logo"
//                         className="h-10 w-auto object-contain relative left-12 "
//                     />
//                 </div>

//                 <div className=" bg-white px-8 py-4 flex items-center space-x-8 text-lg">
//                     {/* HOME */}
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) => isActive ? activeClass : normalClass}
//                     >
//                         HOME
//                     </NavLink>

//                     {/* ABOUT */}
//                     <NavLink
//                         to="/about"
//                         className={({ isActive }) => isActive ? activeClass : normalClass}
//                     >
//                         ABOUT
//                     </NavLink>

//                     {/* SERVICES Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setServicesOpen(!servicesOpen)}
//                             className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
//                         >
//                             <span>SERVICES</span>
//                             <ChevronDown
//                                 className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                             />
//                         </button>
//                         {servicesOpen && (
//                             <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
//                                 <Link
//                                     to="/serviceslayout2"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Services Layout 2
//                                 </Link>
//                                 <Link
//                                     to="/servicesdetails"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Services Details
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* PAGES Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setPagesOpen(!pagesOpen)}
//                             className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
//                         >
//                             <span>PAGES</span>
//                             <ChevronDown
//                                 className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
//                             />
//                         </button>
//                         {pagesOpen && (
//                             <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
//                                 <Link
//                                     to="/pages/team"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Team
//                                 </Link>
//                                 <Link
//                                     to="/pages/team-details"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Team Details
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* BLOG Dropdown */}
//                     <div className="relative">
//                         <button
//                             onClick={() => setBlogOpen(!blogOpen)}
//                             className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
//                         >
//                             <span>BLOG</span>
//                             <ChevronDown
//                                 className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
//                             />
//                         </button>
//                         {blogOpen && (
//                             <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
//                                 <Link
//                                     to="/blog/grid"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Blog Grid
//                                 </Link>
//                                 <Link
//                                     to="/blog/details"
//                                     className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                     Blog Details
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* CONTACT */}
//                     <NavLink
//                         to="/contact"
//                         className={({ isActive }) => isActive ? activeClass : normalClass}
//                     >
//                         CONTACT
//                     </NavLink>

//                     {/* Book Appointment Button */}

//                     <Link
//                         to="/appointment"
//                         className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-6 py-4 rounded font-semibold flex items-center space-x-2 ml-auto"
//                     >
//                         <span>BOOK A APPOINTMENT</span>
//                         <ArrowUpRight className="w-6 h-6" strokeWidth={2} />

//                     </Link>
//                 </div>

//                 <div className="bg-[#091C33] px-34 py-4 flex items-center space-x-2 ml-100">
//                     <button className="p-2 py-4 px-4 bg-[#1C2E43] hover:bg-blue-800 rounded">
//                         <Search className="h-6 w-6 text-white" />
//                     </button>
//                     <button className="p-2 py-4 px-4 bg-[#1C2E43] hover:bg-blue-800 rounded">
//                         <Menu className="h-6 w-6 text-white" />
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }


// import React, { useState } from "react";
// import { Clock, Mail, Phone, ChevronDown, Search, Menu, ArrowUpRight } from "lucide-react";

// // Mock Link and NavLink components since we don't have React Router in this environment
// const Link = ({ to, children, className, ...props }) => (
//   <a href={to} className={className} {...props}>
//     {children}
//   </a>
// );

// const NavLink = ({ to, children, className }) => {
//   const isActive = to === "/" ? window.location.pathname === "/" : window.location.pathname.includes(to);
//   const activeClass = "text-blue-600 font-semibold";
//   const normalClass = "text-gray-800 hover:text-blue-600";
  
//   return (
//     <a href={to} className={typeof className === 'function' ? className({ isActive }) : (isActive ? activeClass : normalClass)}>
//       {children}
//     </a>
//   );
// };

// export default function Navbar() {
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [pagesOpen, setPagesOpen] = useState(false);
//     const [blogOpen, setBlogOpen] = useState(false);

//     const activeClass = "text-blue-600 font-semibold";
//     const normalClass = "text-gray-800 hover:text-blue-600 transition-colors duration-200";

//     return (
//         <header className="w-full">
//             {/* Top Info Bar */}
//             <div className="bg-[#10274E] text-white text-sm py-2">
//                 <div className="max-w-full mx-auto flex items-center justify-between px-32">
//                     <div className="flex items-center space-x-2 ">
//                        <Clock className="w-4 h-4 text-[#DBE9A1]" />

//                         <span className="font-medium">Mon - Fri 8.00 am - 6.00 pm</span>
//                     </div>
//                     <div className="hidden lg:block">
//                         <span className="font-medium">Welcome Mediket hospital and doctors appointment services</span>
//                     </div>
//                     <div className="flex items-center space-x-6">
//                         <div className="flex items-center space-x-2">
//                             <Mail className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium">info@example.com</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <Phone className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium">+208-6666-0112</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navbar */}
//             <div className="flex w-full bg-white">
//                {/* Logo Section */}
// <div className="bg-blue-600 flex items-center justify-center px-16 py-4">

//                      <img
//                          src="/images/logo-white.svg"
//                          alt="Logo"
//                          className="h-6 w-auto object-contain relative left-12 pr-6 "
//                      />
//                  </div>




//                 {/* Navigation Links */}
//                 <div className="flex-1 bg-white px-8 py-4 flex items-center justify-between">
//                     <nav className="flex items-center space-x-8">
//                         {/* HOME */}
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">HOME</span>
//                         </NavLink>

//                         {/* ABOUT */}
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">ABOUT</span>
//                         </NavLink>

//                         {/* SERVICES Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setServicesOpen(!servicesOpen);
//                                     setPagesOpen(false);
//                                     setBlogOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>SERVICES</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {servicesOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
//                                     <Link
//                                         to="/serviceslayout2"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Layout 2
//                                     </Link>
//                                     <Link
//                                         to="/servicesdetails"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* PAGES Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setPagesOpen(!pagesOpen);
//                                     setServicesOpen(false);
//                                     setBlogOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>PAGES</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {pagesOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
//                                     <Link
//                                         to="/pages/team"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Team
//                                     </Link>
//                                     <Link
//                                         to="/pages/team-details"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Team Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* BLOG Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setBlogOpen(!blogOpen);
//                                     setServicesOpen(false);
//                                     setPagesOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>BLOG</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {blogOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
//                                     <Link
//                                         to="/blog/grid"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Grid
//                                     </Link>
//                                     <Link
//                                         to="/blog/details"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* CONTACT */}
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">CONTACT</span>
//                         </NavLink>
//                     </nav>

//                     {/* Book Appointment Button */}
//                     <Link
//                         to="/appointment"
//                         className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-6 py-3 rounded-md font-semibold flex items-center space-x-2 transition-all duration-300 text-sm tracking-wide"
//                     >
//                         <span>BOOK A APPOINTMENT</span>
//                         <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
//                     </Link>
//                 </div>

//                 {/* Right Action Buttons */}
//                 <div className="bg-[#091C33] flex items-center space-x-3 px-24 py-4">
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200 -translate-x-12"
//                         onClick={() => console.log('Search clicked')}
//                     >
//                         <Search className="h-5 w-5 text-white" />
//                     </button>
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200 -translate-x-10"
//                         onClick={() => console.log('Menu clicked')}
//                     >
//                         <Menu className="h-5 w-5 text-white" />
//                     </button>
//                 </div>
//             </div>

//             {/* Close dropdowns when clicking outside */}
//             {(servicesOpen || pagesOpen || blogOpen) && (
//                 <div 
//                     className="fixed inset-0 z-40" 
//                     onClick={() => {
//                         setServicesOpen(false);
//                         setPagesOpen(false);
//                         setBlogOpen(false);
//                     }}
//                 ></div>
//             )}
//         </header>
//     );
// }



// import React, { useState } from "react";
// import { Clock, Mail, Phone, ChevronDown, Search, Menu, ArrowUpRight } from "lucide-react";
// import { Link, NavLink } from "react-router-dom"; // ✅ React Router Links

// export default function Navbar() {
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [pagesOpen, setPagesOpen] = useState(false);
//     const [blogOpen, setBlogOpen] = useState(false);

//     const activeClass = "text-blue-600 font-semibold";
//     const normalClass = "text-gray-800 hover:text-blue-600 transition-colors duration-200";

//     return (
//         <header className="w-full">
//             {/* Top Info Bar */}
//             <div className="bg-[#10274E] text-white text-sm py-2">
//                 <div className="max-w-full mx-auto flex items-center justify-between px-32">
//                     <div className="flex items-center space-x-2 ">
//                        <Clock className="w-4 h-4 text-[#DBE9A1]" />
//                         <span className="font-medium">Mon - Fri 8.00 am - 6.00 pm</span>
//                     </div>
//                     <div className="hidden lg:block">
//                         <span className="font-medium">Welcome Mediket hospital and doctors appointment services</span>
//                     </div>
//                     <div className="flex items-center space-x-6">
//                         <div className="flex items-center space-x-2">
//                             <Mail className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium">info@example.com</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <Phone className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium">+208-6666-0112</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navbar */}
//             <div className="flex w-full bg-white">
//                 {/* Logo Section */}
//                 <div className="bg-blue-600 flex items-center justify-center px-16 py-4">
//                     <img
//                         src="/images/logo-white.svg"
//                         alt="Logo"
//                         className="h-6 w-auto object-contain relative left-12 pr-6 "
//                     />
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="flex-1 bg-white px-8 py-4 flex items-center justify-between">
//                     <nav className="flex items-center space-x-8">
//                         {/* HOME */}
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">HOME</span>
//                         </NavLink>

//                         {/* ABOUT */}
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">ABOUT</span>
//                         </NavLink>

//                         {/* SERVICES Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setServicesOpen(!servicesOpen);
//                                     setPagesOpen(false);
//                                     setBlogOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>SERVICES</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {servicesOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
//                                     <Link
//                                         to="/serviceslayout2"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Layout 2
//                                     </Link>
//                                     <Link
//                                         to="/servicesdetails"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* PAGES Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setPagesOpen(!pagesOpen);
//                                     setServicesOpen(false);
//                                     setBlogOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>PAGES</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {pagesOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
//                                     <Link
//                                         to="/pages/team"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Team
//                                     </Link>
//                                     <Link
//                                         to="/pages/team-details"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Team Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* BLOG Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setBlogOpen(!blogOpen);
//                                     setServicesOpen(false);
//                                     setPagesOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>BLOG</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {blogOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
//                                     <Link
//                                         to="/blog/grid"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Grid
//                                     </Link>
//                                     <Link
//                                         to="/blog/details"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Details
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* CONTACT */}
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) => isActive ? activeClass : normalClass}
//                         >
//                             <span className="text-sm font-semibold tracking-wide">CONTACT</span>
//                         </NavLink>
//                     </nav>

//                     {/* Book Appointment Button */}
//                     <Link
//                         to="/appointment"
//                         className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-6 py-3 rounded-md font-semibold flex items-center space-x-2 transition-all duration-300 text-sm tracking-wide"
//                     >
//                         <span>BOOK A APPOINTMENT</span>
//                         <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
//                     </Link>
//                 </div>

//                 {/* Right Action Buttons */}
//                 <div className="bg-[#091C33] flex items-center space-x-3 px-24 py-4">
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200 -translate-x-12"
//                         onClick={() => console.log('Search clicked')}
//                     >
//                         <Search className="h-5 w-5 text-white" />
//                     </button>
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200 -translate-x-10"
//                         onClick={() => console.log('Menu clicked')}
//                     >
//                         <Menu className="h-5 w-5 text-white" />
//                     </button>
//                 </div>
//             </div>

//             {/* Close dropdowns when clicking outside */}
//             {(servicesOpen || pagesOpen || blogOpen) && (
//                 <div 
//                     className="fixed inset-0 z-40" 
//                     onClick={() => {
//                         setServicesOpen(false);
//                         setPagesOpen(false);
//                         setBlogOpen(false);
//                     }}
//                 ></div>
//             )}
//         </header>
//     );
// }



// import React, { useState } from "react";
// import { Clock, Mail, Phone, ChevronDown, Search, Menu, ArrowUpRight, X } from "lucide-react";
// import { Link } from "react-router-dom";
// export default function Navbar() {
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [pagesOpen, setPagesOpen] = useState(false);
//     const [blogOpen, setBlogOpen] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const closeMobileMenu = () => {
//         setMobileMenuOpen(false);
//         setServicesOpen(false);
//         setPagesOpen(false);
//         setBlogOpen(false);
//     };

//     return (
//         <header className="w-full">
//             {/* Top Info Bar - Hidden on mobile */}
//             <div className="bg-[#10274E] text-white text-sm py-2 hidden md:block">
//                 <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-32">
//                     <div className="flex items-center space-x-2">
//                        <Clock className="w-4 h-4 text-[#DBE9A1]" />
//                         <span className="font-medium">Mon - Fri 8.00 am - 6.00 pm</span>
//                     </div>
//                     <div className="hidden xl:block">
//                         <span className="font-medium">Welcome Mediket hospital and doctors appointment services</span>
//                     </div>
//                     <div className="flex items-center space-x-4 lg:space-x-6">
//                         <div className="flex items-center space-x-2">
//                             <Mail className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium hidden lg:inline">info@example.com</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <Phone className="w-4 h-4 text-[#DBE9A1]" />
//                             <span className="font-medium">+208-6666-0112</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navbar */}
//             <div className="flex w-full bg-white relative">
//                 {/* Logo Section */}
//                 <div className="bg-blue-600 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-4 lg:py-4">
//                     <img
//                         src="/images/logo-white.svg"
//                         alt="Logo"
//                         className="h-5 lg:h-6 w-auto object-contain"
//                     />
//                 </div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex flex-1 bg-white px-8 py-4 items-center justify-between">
//                     <nav className="flex items-center space-x-6 xl:space-x-8">
//                         {/* HOME */}
//                         <a
//                             href="/"
//                             className="text-blue-600 font-semibold text-sm tracking-wide"
//                         >
//                             HOME
//                         </a>

//                         {/* ABOUT */}
//                         <a
//                             href="/about"
//                             className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide"
//                         >
//                             ABOUT
//                         </a>

//                         {/* SERVICES Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setServicesOpen(!servicesOpen);
//                                     setPagesOpen(false);
//                                     setBlogOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>SERVICES</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {servicesOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50 border border-gray-100">
//                                     <a
//                                         href="/serviceslayout2"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Layout 2
//                                     </a>
//                                     <a
//                                         href="/servicesdetails"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Services Details
//                                     </a>
//                                 </div>
//                             )}
//                         </div>

                        
// {/* PAGES Mobile Dropdown */}
// <div>
//   <button
//     onClick={() => setPagesOpen(!pagesOpen)}
//     className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm tracking-wide transition-colors duration-200"
//   >
//     <span>PAGES</span>
//     <ChevronDown
//       className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
//     />
//   </button>

//   {pagesOpen && (
//     <div className="ml-4 mt-2 space-y-2">
//       <Link
//         to="/pages"
//         onClick={closeMobileMenu}
//         className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//       >
//         Team
//       </Link>

//       <Link
//         to="/pages/team-details"
//         onClick={closeMobileMenu}
//         className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//       >
//         Team Details
//       </Link>
//     </div>
//   )}
// </div>
//                         {/* BLOG Dropdown */}
//                         <div className="relative">
//                             <button
//                                 onClick={() => {
//                                     setBlogOpen(!blogOpen);
//                                     setServicesOpen(false);
//                                     setPagesOpen(false);
//                                 }}
//                                 className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 <span>BLOG</span>
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
//                                 />
//                             </button>
//                             {blogOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
//                                     <a
//                                         href="/blog/grid"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Grid
//                                     </a>
//                                     <a
//                                         href="/blog/details"
//                                         className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-sm font-medium"
//                                     >
//                                         Blog Details
//                                     </a>
//                                 </div>
//                             )}
//                         </div>

//                         {/* CONTACT */}
//                         <a
//                             href="/contact"
//                             className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold tracking-wide"
//                         >
//                             CONTACT
//                         </a>
//                     </nav>

//                     {/* Book Appointment Button - Desktop */}
//                     <a
//                         href="/appointment"
//                         className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-4 xl:px-6 py-3 rounded-md font-semibold flex items-center space-x-2 transition-all duration-300 text-sm tracking-wide"
//                     >
//                         <span className="hidden xl:inline">BOOK A APPOINTMENT</span>
//                         <span className="xl:hidden">BOOK</span>
//                         <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
//                     </a>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="lg:hidden flex-1 flex items-center justify-end px-4 py-4">
//                     <button
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                     >
//                         {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                     </button>
//                 </div>

//                 {/* Right Action Buttons - Desktop Only */}
//                 <div className="hidden lg:flex bg-[#091C33] items-center space-x-3 px-8 xl:px-24 py-4">
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200"
//                         onClick={() => console.log('Search clicked')}
//                     >
//                         <Search className="h-5 w-5 text-white" />
//                     </button>
//                     <button 
//                         className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md transition-colors duration-200"
//                         onClick={() => console.log('Menu clicked')}
//                     >
//                         <Menu className="h-5 w-5 text-white" />
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Overlay */}
//             {mobileMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
//                     <div className="bg-white w-full max-w-sm ml-auto h-full shadow-xl overflow-y-auto">
//                         {/* Mobile Menu Header */}
//                         <div className="flex items-center justify-between p-4 border-b">
//                             <div className="bg-blue-600 p-2 rounded">
//                                 <img
//                                     src="/images/logo-white.svg"
//                                     alt="Logo"
//                                     className="h-6 w-auto"
//                                 />
//                             </div>
//                             <button
//                                 onClick={closeMobileMenu}
//                                 className="p-2 text-gray-600 hover:text-gray-800"
//                             >
//                                 <X className="h-6 w-6" />
//                             </button>
//                         </div>

//                         {/* Mobile Navigation */}
//                         <nav className="p-4 space-y-4">
//                             {/* HOME */}
//                             <a
//                                 href="/"
//                                 onClick={closeMobileMenu}
//                                 className="block py-3 px-3 rounded-md bg-blue-50 text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 HOME
//                             </a>

//                             {/* ABOUT */}
//                             <a
//                                 href="/about"
//                                 onClick={closeMobileMenu}
//                                 className="block py-3 px-3 rounded-md text-gray-800 hover:bg-gray-50 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 ABOUT
//                             </a>

//                             {/* SERVICES Mobile Dropdown */}
//                             <div>
//                                 <button
//                                     onClick={() => setServicesOpen(!servicesOpen)}
//                                     className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm tracking-wide transition-colors duration-200"
//                                 >
//                                     <span>SERVICES</span>
//                                     <ChevronDown
//                                         className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button>
//                                 {servicesOpen && (
//                                     <div className="ml-4 mt-2 space-y-2">
//                                         <a
//                                             href="/serviceslayout2"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Services Layout 2
//                                         </a>
//                                         <a
//                                             href="/servicesdetails"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Services Details
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* PAGES Mobile Dropdown */}
//                             <div>
//                                 <button
//                                     onClick={() => setPagesOpen(!pagesOpen)}
//                                     className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm tracking-wide transition-colors duration-200"
//                                 >
//                                     <span>PAGES</span>
//                                     <ChevronDown
//                                         className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button>
//                                 {pagesOpen && (
//                                     <div className="ml-4 mt-2 space-y-2">
//                                         <a
//                                             href="/pages"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Team
//                                         </a>
//                                         <a
//                                             href="/pages/team-details"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Team Details
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* BLOG Mobile Dropdown */}
//                             <div>
//                                 <button
//                                     onClick={() => setBlogOpen(!blogOpen)}
//                                     className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm tracking-wide transition-colors duration-200"
//                                 >
//                                     <span>BLOG</span>
//                                     <ChevronDown
//                                         className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </button>
//                                 {blogOpen && (
//                                     <div className="ml-4 mt-2 space-y-2">
//                                         <a
//                                             href="/blog/grid"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Blog Grid
//                                         </a>
//                                         <a
//                                             href="/blog/details"
//                                             onClick={closeMobileMenu}
//                                             className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md text-sm font-medium transition-colors duration-150"
//                                         >
//                                             Blog Details
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* CONTACT */}
//                             <a
//                                 href="/contact"
//                                 onClick={closeMobileMenu}
//                                 className="block py-3 px-3 rounded-md text-gray-800 hover:bg-gray-50 font-semibold text-sm tracking-wide transition-colors duration-200"
//                             >
//                                 CONTACT
//                             </a>

//                             {/* Mobile Book Appointment Button */}
//                             <a
//                                 href="/appointment"
//                                 onClick={closeMobileMenu}
//                                 className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-4 py-3 rounded-md font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm tracking-wide mt-6"
//                             >
//                                 <span>BOOK APPOINTMENT</span>
//                                 <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
//                             </a>

//                             {/* Mobile Action Buttons */}
//                             <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t">
//                                 <button 
//                                     className="p-3 bg-[#091C33] hover:bg-blue-700 rounded-md transition-colors duration-200"
//                                     onClick={() => {
//                                         console.log('Search clicked');
//                                         closeMobileMenu();
//                                     }}
//                                 >
//                                     <Search className="h-5 w-5 text-white" />
//                                 </button>
//                                 <button 
//                                     className="p-3 bg-[#091C33] hover:bg-blue-700 rounded-md transition-colors duration-200"
//                                     onClick={() => {
//                                         console.log('Menu clicked');
//                                         closeMobileMenu();
//                                     }}
//                                 >
//                                     <Menu className="h-5 w-5 text-white" />
//                                 </button>
//                             </div>

//                             {/* Mobile Contact Info */}
//                             <div className="pt-6 border-t space-y-3">
//                                 <div className="flex items-center space-x-3 text-sm">
//                                     <Clock className="w-4 h-4 text-blue-600" />
//                                     <span className="text-gray-600">Mon - Fri 8.00 am - 6.00 pm</span>
//                                 </div>
//                                 <div className="flex items-center space-x-3 text-sm">
//                                     <Mail className="w-4 h-4 text-blue-600" />
//                                     <span className="text-gray-600">info@example.com</span>
//                                 </div>
//                                 <div className="flex items-center space-x-3 text-sm">
//                                     <Phone className="w-4 h-4 text-blue-600" />
//                                     <span className="text-gray-600">+208-6666-0112</span>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             )}

//             {/* Close dropdowns when clicking outside - Desktop Only */}
//             {!mobileMenuOpen && (servicesOpen || pagesOpen || blogOpen) && (
//                 <div 
//                     className="fixed inset-0 z-40" 
//                     onClick={() => {
//                         setServicesOpen(false);
//                         setPagesOpen(false);
//                         setBlogOpen(false);
//                     }}
//                 ></div>
//             )}
//         </header>
//     );
// }




import React, { useState } from "react";
import { Clock, Mail, Phone, ChevronDown, Search, Menu, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setPagesOpen(false);
    setBlogOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Info Bar - Hidden on mobile */}
      <div className="bg-[#10274E] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-32">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#DBE9A1]" />
            <span className="font-medium">Mon - Fri 8.00 am - 6.00 pm</span>
          </div>
          <div className="hidden xl:block">
            <span className="font-medium">Welcome Mediket hospital and doctors appointment services</span>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#DBE9A1]" />
              <span className="font-medium hidden lg:inline">info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#DBE9A1]" />
              <span className="font-medium">+208-6666-0112</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex w-full bg-white relative">
        {/* Logo Section */}
        <div className="bg-blue-600 flex items-center justify-center px-4 sm:px-8 lg:px-22 py-4 lg:py-4">
          <Link to="/">
            <img src="/images/logo-white.svg" alt="Logo" className="h-5 lg:h-6 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 bg-white px-8 py-4 items-center justify-between">
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
                  setBlogOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
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
                  setBlogOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                <span>PAGES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {pagesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
                  <Link
                    to="/pages"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
                  >
                    Team
                  </Link>
                  <Link
                    to="/pages/team-details"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
                  >
                    Team Details
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
                  className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
                />
              </button>
              {blogOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50 border border-gray-100">
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

          {/* Book Appointment Button - Desktop */}
          <Link
            to="/appointment"
            className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-4 xl:px-6 py-3 rounded-md font-semibold flex items-center space-x-2 transition-all duration-300 text-sm tracking-wide"
          >
            <span className="hidden xl:inline">BOOK A APPOINTMENT</span>
            <span className="xl:hidden">BOOK</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex-1 flex items-center justify-end px-4 py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Right Action Buttons - Desktop Only */}
        <div className="hidden lg:flex bg-[#091C33] items-center space-x-3 px-8 xl:px-24 py-4">
          <button className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md">
            <Search className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 bg-[#1C2E43] hover:bg-blue-700 rounded-md">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-sm ml-auto h-full shadow-xl overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="bg-blue-600 p-2 rounded">
                <img src="/images/logo-white.svg" alt="Logo" className="h-6 w-auto" />
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4 space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block py-3 px-3 rounded-md bg-blue-50 text-blue-600 font-semibold text-sm"
              >
                HOME
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block py-3 px-3 rounded-md text-gray-800 hover:bg-gray-50 font-semibold text-sm"
              >
                ABOUT
              </Link>

              {/* SERVICES Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/serviceslayout2"
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      Services Layout 2
                    </Link>
                    <Link
                      to="/servicesdetails"
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      Services Details
                    </Link>
                  </div>
                )}
              </div>

              {/* PAGES Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm"
                >
                  <span>PAGES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {pagesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/pages"
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      Team
                    </Link>
                    <Link
                      to="/pages/team-details"
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      Team Details
                    </Link>
                  </div>
                )}
              </div>

              {/* BLOG Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-800 hover:bg-gray-50 rounded-md font-semibold text-sm"
                >
                  <span>BLOG</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {blogOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/blogslayout2"
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      Blogs Layout2
                    </Link>
                  
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block py-3 px-3 rounded-md text-gray-800 hover:bg-gray-50 font-semibold text-sm"
              >
                CONTACT
              </Link>

              {/* Mobile Book Appointment */}
              <Link
                to="/appointment"
                onClick={closeMobileMenu}
                className="bg-[#DBE9A1] hover:bg-[#091C33] hover:text-[#DBE9A1] text-gray-800 px-4 py-3 rounded-md font-semibold flex items-center justify-center space-x-2 text-sm mt-6"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Close dropdowns when clicking outside */}
      {!mobileMenuOpen && (servicesOpen || pagesOpen || blogOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesOpen(false);
            setPagesOpen(false);
            setBlogOpen(false);
          }}
        ></div>
      )}
    </header>
  );
}
