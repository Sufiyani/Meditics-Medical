// import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0D1F35] text-white pt-16 pb-8 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* footer top */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* About Section */}
//           <div>
//             <a href="index.html" className="block mb-4">
//               <img src="/images/Meditics heart logo.svg" alt="logo" className="w-36" />
//             </a>
            
//             <p className="text-sm leading-relaxed mb-4">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout.
//             </p>

//             {/* Newsletter Form */}
//             <form className="flex items-center bg-white rounded-lg overflow-hidden mb-4">
//               <input
//                 type="email"
//                 placeholder="Your Email Address"
//                 className="flex-1 px-4 py-2 text-black focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 px-4 py-2 font-semibold text-sm hover:bg-blue-700"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>

//             {/* Social Icons */}
//             <div className="flex space-x-4 ">
//               <a
//                 href="#"
//                 className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
//               >
//                 <Facebook size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
//               >
//                 <Twitter size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
//               >
//                 <Youtube size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
//               >
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="service-details.html" className="hover:text-blue-300">
//                   General Health Check-Ups
//                 </a>
//               </li>
//               <li>
//                 <a href="service-details.html" className="hover:text-blue-300">
//                   Stress & Lifestyle Counseling
//                 </a>
//               </li>
//               <li>
//                 <a href="service-details.html" className="hover:text-blue-300">
//                   Vaccinations & Immunizations
//                 </a>
//               </li>
//               <li>
//                 <a href="service-details.html" className="hover:text-blue-300">
//                   Referral to Specialists
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="index.html" className="hover:text-blue-300">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="about.html" className="hover:text-blue-300">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-300">
//                   Pages
//                 </a>
//               </li>
//               <li>
//                 <a href="blog.html" className="hover:text-blue-300">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <p className="text-sm mb-2">
//               102/ B Street, New Elephant Road, Sandigo, USA
//             </p>
//             <div className="text-sm mb-2">
//               <span className="font-semibold">Email Us: </span>
//               <a href="mailto:info@example.com" className="hover:text-blue-300">
//                 info@example.com
//               </a>
//             </div>
//             <div className="text-sm">
//               <span className="font-semibold">Call Now: </span>
//               <a href="tel:20866660112" className="hover:text-blue-300">
//                 +208-6666-0112
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* footer bottom */}
//         <div className="mt-12 border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
//           <div className="text-center md:text-left">
//             © <span className="font-bold">Meditics</span>{" "}
//             {new Date().getFullYear()}. All Rights Reserved.
//           </div>

//           <div className="flex justify-center space-x-3">
//             <img src="/images/payment-method-1.png" alt="Payment Method" className="h-6" />
//             <img src="/images/payment-method-2.png" alt="Payment Method" className="h-6" />
//             <img src="/images/payment-method-3.png" alt="Payment Method" className="h-6" />
//             <img src="/images/payment-method-4.png" alt="Payment Method" className="h-6" />
//             <img src="/images/payment-method-5.png" alt="Payment Method" className="h-6" />
//           </div>

//           <div className="flex justify-center md:justify-end space-x-4">
//             <a href="#" className="hover:text-blue-300">
//               Terms of Use
//             </a>
//             <a href="#" className="hover:text-blue-300">
//               Privacy Environmental Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import { Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';


// const Footer = () => {
//     return (
//         <footer className="relative bg-[#0B2B5B] text-white overflow-hidden">
//             {/* 🔹 Background Image */}
//             <img
//                 src={"/images/footer-2-vector.svg"}
//                 alt="Footer Background"
//                 className="absolute inset-0 w-full h-full object-cover opacity-100"
//             />


//             {/* 🔹 Gradient Overlay */}
//             <div className="absolute inset-0 bg-[#0B2B5B] opacity-40"></div>

//             {/* Content (z-10 to keep above background) */}
//             <div className="relative z-10 ml-30 ">
//                 {/* Main Footer Content */}
//                 <div className="max-w-7xl mx-auto px-6 py-16">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//                         {/* Meditics Section */}
//                         <div className="space-y-6">
//                             <div className="flex items-center gap-2">
//                                 <img
//                                     src={"/images/Meditics heart logo.svg"}
//                                     alt="Meditics Logo"
//                                     className="h-10 w-auto object-contain"
//                                 />
//                             </div>

//                             <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
//                                 It is a long established fact that a reader will be distracted the
//                                 readable content of a page when looking at layout.
//                             </p>

//                             {/* Payment Partners */}
//                             <div className="space-y-3">
//                                 <h3 className="text-base font-semibold text-md">Payment Partners:</h3>
//                                 <div className="flex flex-wrap gap-3">
//                                     <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
//                                         <img src={"/images/payment-method-1.png"} alt="G Pay" className="h-6 w-auto object-contain" />
//                                     </div>
//                                     <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
//                                         <img src={"/images/payment-method-2.png"} alt="Apple Pay" className="h-6 w-auto object-contain" />
//                                     </div>
//                                     <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
//                                         <img src={"/images/payment-method-3.png"} alt="PayPal" className="h-6 w-auto object-contain" />
//                                     </div>
//                                     <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
//                                         <img src={"/images/payment-method-4.png"} alt="Visa" className="h-6 w-auto object-contain" />
//                                     </div>
//                                     <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
//                                         <img src={"/images/payment-method-5.png"} alt="Mastercard" className="h-6 w-auto object-contain" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quick Links Section */}
//                         <div className="space-y-6 ml-6">
//                             <div>
//                                 <h3 className="text-xl font-bold mb-2">Quick Links</h3>
//                                 <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
//                             </div>
//                             <nav className="space-y-3 text-md">
//                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors">
//                                     General Health Check-Ups
//                                 </a>
//                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors">
//                                     Stress & Lifestyle Counseling
//                                 </a>
//                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors">
//                                     Vaccinations & Immunizations
//                                 </a>
//                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors">
//                                     Referral to Specialists
//                                 </a>
//                             </nav>
//                         </div>

//                         {/* Newsletter Section */}
//                         <div className="space-y-6">
//                             <div>
//                                 <h3 className="text-xl font-bold mb-2">Join The Newsletter</h3>
//                                 <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
//                             </div>
//                             <p className="text-gray-300 text-md leading-relaxed">
//                                 Want to be notified about our services? Just sign up and we'll
//                                 send you a notification by email.
//                             </p>

//                             <div className="flex rounded-full overflow-hidden ">
//                                 <input
//                                     type="email"
//                                     placeholder="Your Email Address"
//                                     className="flex-1 px-4 py-4 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm"
//                                 />
//                                 <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold transition-colors flex items-center gap-2 text-sm">
//                                     SUBSCRIBE
//                                     <ArrowRight size={16} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 🔹 Breakable Dotted Line */}
//                 <div className="max-w-7xl mx-auto px-6">
//     <div className="border-t border-white border-dashed"></div>
// </div>


//                 {/* Bottom Footer */}
//                 <div className="max-w-7xl mx-auto px-6 py-6">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//                         <div className="text-gray-300 text-md">
//                             © <span className="text-blue-400">Meditics</span> 2025. All Rights Reserved.
//                         </div>

//                         {/* Social Media Icons */}
//                         <div className="flex gap-3">
//                             <div className="w-9 h-9 bg-gray-700 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors rounded-md">
//                                 <Facebook size={16} />
//                             </div>
//                             <div className="w-9 h-9 bg-gray-700 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors rounded-md">
//                                 <Twitter size={16} />
//                             </div>
//                             <div className="w-9 h-9 bg-gray-700 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors rounded-md">
//                                 <Youtube size={16} />
//                             </div>
//                             <div className="w-9 h-9 bg-gray-700 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors rounded-md">
//                                 <Instagram size={16} />
//                             </div>
//                         </div>

//                         <div className="flex gap-6 text-gray-300 ">
//                             <a href="#" className="hover:text-white transition-colors text-md">Terms of use</a>
//                             <a href="#" className="hover:text-white transition-colors text-md">Privacy Environmental Policy</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#0B2B5B] text-white overflow-hidden">
            {/* 🔹 Background Image */}
            <img
                src={"/images/footer-2-vector.svg"}
                alt="Footer Background"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            />

            {/* 🔹 Gradient Overlay */}
            <div className="absolute inset-0 bg-[#0B2B5B] opacity-40"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Meditics Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <img
                                    src={"/images/Meditics heart logo.svg"}
                                    alt="Meditics Logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>

                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                It is a long established fact that a reader will be distracted the
                                readable content of a page when looking at layout.
                            </p>

                            {/* Payment Partners */}
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold">Payment Partners:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["1","2","3","4","5"].map((num) => (
                                        <div key={num} className="bg-white px-3 py-2 rounded flex items-center justify-center">
                                            <img src={`/images/payment-method-${num}.png`} alt={`Payment ${num}`} className="h-6 w-auto object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2">Quick Links</h3>
                                <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
                            </div>
                            <nav className="space-y-3 text-sm sm:text-base">
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                                    General Health Check-Ups
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                                    Stress & Lifestyle Counseling
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                                    Vaccinations & Immunizations
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                                    Referral to Specialists
                                </a>
                            </nav>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2">Join The Newsletter</h3>
                                <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
                            </div>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Want to be notified about our services? Just sign up and we'll
                                send you a notification by email.
                            </p>

                            <div className="flex flex-col sm:flex-row rounded-full overflow-hidden w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="flex-1 px-4 py-3 sm:py-4 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                                    SUBSCRIBE
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 Breakable Dotted Line */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="border-t border-white border-dashed"></div>
                </div>

                {/* Bottom Footer */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
                        <div className="text-gray-300 text-center md:text-left">
                            © <span className="text-blue-400">Meditics</span> 2025. All Rights Reserved.
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 justify-center">
                            {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                                <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors rounded-md">
                                    <Icon size={16} />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-gray-300">
                            <a href="#" className="hover:text-white transition-colors">Terms of use</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Environmental Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
