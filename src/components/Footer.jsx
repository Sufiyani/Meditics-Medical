
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
