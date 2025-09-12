// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import { Link } from "react-router-dom";
// const ServicesDetails = () => {


//     const [expandedFaq, setExpandedFaq] = useState(null);

//     const toggleFaq = (index) => {
//         setExpandedFaq(expandedFaq === index ? null : index);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header Section */}
//             <div className="bg-[#1A3471] text-white py-20 px-4">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h1 className="text-6xl font-bold mb-4">Service Details</h1>
//                     <div className="flex items-center justify-center text-lg">
//                         <Link to="/" className="white hover:text-blue-600 text-sm">
//                             Home
//                         </Link>
//                         <ChevronRight className="mx-2 w-4 h-4" />
//                         <span className='text-sm'>Service Details</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-6xl mx-auto px-4 py-16">
//                 <div className="flex flex-col lg:flex-row gap-8">
//                     {/* Left Content */}
//                     <div className="lg:w-2/3">
//                       <img
//   src="/images/Personalized stress.jpg"
//   alt="Counseling session"
//   className="w-[900px] h-[400px] object-contain rounded-lg"
// />

//                         {/* Title and Description */}
//                         <h2 className="text-4xl font-bold text-gray-900 mb-6 ">
//                             Personalized Stress & Lifestyle Counseling
//                         </h2>

//                         <p className="text-gray-600 text-sm mb-8 leading-relaxed ">
//                             Our Stress & Lifestyle Counseling service is designed to help you take control of your mental well-being and daily
//                             habits. Whether you're dealing with anxiety, burnout, or life imbalance, we offer expert support that fits your
//                             personal needs.
//                         </p>

//                         {/* Quote */}
//                         <div className="bg-[#EDEDFF] border-b-3 border-blue-500 p-6 mb-12 italic text-black ">
//                             <p className="text-lg">
//                                 This blog post hits the mark perfectly for our target audience — busy professionals who
//                                 care about their health but struggle with time. — <strong className="text-blue-600">John Doe</strong>
//                             </p>
//                         </div>


//                         {/* What We Offer Section */}
//                         <div className="mb-12">
//                             <div className="flex flex-col lg:flex-row gap-8">
//                                 <div className="lg:w-1/2 ">
//                                     <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer:</h3>

//                                     <div className="space-y-4 text-xl font-bold">
//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700 text-sm">One-on-one virtual sessions with certified counselors</span>
//                                         </div>

//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700  text-sm">Stress and anxiety management techniques</span>
//                                         </div>

//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700  text-sm">Sleep improvement & energy-boosting strategies</span>
//                                         </div>

//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700  text-sm">Personalized nutrition and wellness plans</span>
//                                         </div>

//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700  text-sm">Habit-building for a healthier, more balanced life</span>
//                                         </div>

//                                         <div className="flex items-start gap-3">
//                                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                 <span className="text-white text-sm">✓</span>
//                                             </div>
//                                             <span className="text-gray-700  text-sm">Confidential, judgment-free care</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="lg:w-1/2">
//                                     <img
//                                         src="/images/offer.jpg"
//                                         alt="Professional counselor"
//                                         className="w-full h-90 object-cover rounded-lg"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Key Features */}
//                         <div className="mb-12 ">
//                             <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features:</h3>

//                             <div className="space-y-6">
//                                 <div className="flex items-start gap-3">
//                                     {/* Icon */}
//                                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                         <span className="text-white text-sm">✓</span>
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-gray-800 text-sm">
//                                         <span className="font-semibold text-gray-950 text-lg">
//                                             Stress Reduction Coaching:
//                                         </span>{" "}
//                                         Learn to manage pressure burnout, and daily anxiety with proven techniques.
//                                     </p>
//                                 </div>


//                                 <div className="flex items-start gap-3">
//                                     {/* Icon */}
//                                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                         <span className="text-white text-sm">✓</span>
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-gray-800 text-sm">
//                                         <span className="font-semibold text-gray-950 text-lg">
//                                             Personalized Nutrition & Wellness Plans:
//                                         </span>{" "}
//                                         Build healthier routines that support productivity and rest.
//                                     </p>
//                                 </div>

//                                 <div className="flex items-start gap-3">
//                                     {/* Icon */}
//                                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                         <span className="text-white text-sm">✓</span>
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-gray-800 text-sm">
//                                         <span className="font-semibold text-gray-950 text-lg">
//                                             Lifestyle Planning:
//                                         </span>{" "}
//                                         Create sustainable habits for nutrition, exercise, and sleep.
//                                     </p>
//                                 </div>

//                                 <div className="flex items-start gap-3">
//                                     {/* Icon */}
//                                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                         <span className="text-white text-sm">✓</span>
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-gray-800 text-sm">
//                                         <span className="font-semibold text-gray-950 text-lg">
//                                             One-on-One Counseling:
//                                         </span>{" "}
//                                         Talk to licensed professionals in a private, secure online setting.
//                                     </p>

//                                 </div>
//                                 <div className="flex items-start gap-3">
//                                     {/* Icon */}
//                                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                         <span className="text-white text-sm">✓</span>
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-gray-800 text-sm">
//                                         <span className="font-semibold text-gray-950 text-lg">
//                                             Mental Wellness Support:
//                                         </span>{" "}
//                                         Gain tools to improve focus, mood, and overall life satisfaction.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Why It Matters */}
//                         <div className="mb-12 ">
//                             <h3 className="text-xl font-bold text-gray-900 mb-6">Why It Matters:</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Improving your lifestyle isn't just about avoiding illness — it's about living better, feeling stronger, and thinking
//                                 clearer every day.
//                             </p>
//                         </div>

//                         {/* FAQ Section */}
//                         <div className="mb-12 ">
//                             <div className="space-y-4">
//                                 <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
//                                     <button
//                                         onClick={() => toggleFaq(0)}
//                                         className="w-full flex items-center justify-between p-6 text-left "
//                                     >
//                                         <span className="font-semibold text-gray-700 text-lg">
//                                             Do I need a diagnosis to book a session?
//                                         </span>
//                                         {expandedFaq === 0 ? (
//                                             <ChevronDown className="w-5 h-5 text-blue-500" />
//                                         ) : (
//                                             <ChevronRight className="w-5 h-5 text-gray-400" />
//                                         )}
//                                     </button>
//                                     {expandedFaq === 0 && (
//                                         <div className="px-6 pb-6">
//                                             <p className="text-gray-600">
//                                                 Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
//                                     <button
//                                         onClick={() => toggleFaq(1)}
//                                         className="w-full flex items-center justify-between p-6 text-left "
//                                     >
//                                         <span className="font-semibold text-gray-700 text-lg">
//                                             Why Join Us as a Volunteer?
//                                         </span>
//                                         {expandedFaq === 1 ? (
//                                             <ChevronDown className="w-5 h-5 text-blue-500" />
//                                         ) : (
//                                             <ChevronRight className="w-5 h-5 text-gray-400" />
//                                         )}
//                                     </button>
//                                     {expandedFaq === 1 && (
//                                         <div className="px-6 pb-6">
//                                             <p className="text-gray-600">
//                                                 Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
//                                     <button
//                                         onClick={() => toggleFaq(2)}
//                                         className="w-full flex items-center justify-between p-6 text-left"
//                                     >
//                                         <span className="font-semibold text-gray-700 text-lg">
//                                             Be Part of a Community
//                                         </span>
//                                         {expandedFaq === 2 ? (
//                                             <ChevronDown className="w-5 h-5 text-blue-500" />
//                                         ) : (
//                                             <ChevronRight className="w-5 h-5 text-gray-400" />
//                                         )}
//                                     </button>
//                                     {expandedFaq === 2 && (
//                                         <div className="px-6 pb-6">
//                                             <p className="text-gray-600">
//                                                 Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Sidebar */}
// <div className="lg:w-1/3">
//   {/* Our Services */}
//   <div className="bg-[#F2F2F2] shadow-md p-4 mb-8 mt-8">
//     <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>

//     <div className="space-y-2">
//       <div className="flex items-center justify-between p-2 bg-blue-500 text-white rounded text-sm">
//         <span>General Health Consultation</span>
//         <span>↗</span>
//       </div>

//       <div className="flex items-center justify-between p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-black text-sm">
//         <span>Chronic Disease Management</span>
//         <span>↗</span>
//       </div>

//       <div className="flex items-center justify-between p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-black text-sm">
//         <span>Online Video Consultation</span>
//         <span>↗</span>
//       </div>

//       <div className="flex items-center justify-between p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-black text-sm">
//         <span>Preventive Health Checkups</span>
//         <span>↗</span>
//       </div>

//       <div className="flex items-center justify-between p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-black text-sm">
//         <span>Women's & Men's Health</span>
//         <span>↗</span>
//       </div>

//       <div className="flex items-center justify-between p-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-black text-sm">
//         <span>Family Health Services</span>
//         <span>↗</span>
//       </div>
//     </div>
//   </div>


//                         {/* Contact Card */}
// <div className="bg-[#2C509A] text-white rounded-lg p-8 w-full max-w-lg h-auto">
//     <h3 className="text-xl font-bold mb-4">Have Additional Questions?</h3>
    
//     <div className="border-t border-white/30"></div>

//     <div className="space-y-3 mb-6 mt-6">
//         <p className="text-white text-sm">3rd Avenue, 83 Manhattan, London, UK</p>
//         <p className="text-white font-bold text-lg">+1890 123 456</p>
//         <p className="text-white text-sm">support@example.com</p>
//     </div>

//     <button className="bg-[#DBE9A1] text-sm text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2">
//         CONTACT US
//         <ChevronRight className="w-4 h-4" />
//     </button>
// </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };




// export default ServicesDetails





// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import { Link } from "react-router-dom";

// const ServicesDetails = () => {
//     const [expandedFaq, setExpandedFaq] = useState(null);

//     const toggleFaq = (index) => {
//         setExpandedFaq(expandedFaq === index ? null : index);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header Section */}
//             <div className="bg-[#1A3471] text-white py-16 sm:py-20 px-4">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">Service Details</h1>
//                     <div className="flex items-center justify-center text-sm sm:text-base">
//                         <Link to="/" className="hover:text-blue-300">
//                             Home
//                         </Link>
//                         <ChevronRight className="mx-2 w-4 h-4" />
//                         <span>Service Details</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">

//                 <div className="flex flex-col lg:flex-row gap-8">
                    
//                     {/* Left Content */}
//                     <div className="lg:w-2/3">
//                         <img
//                             src="/images/Personalized stress.jpg"
//                             alt="Counseling session"
//                             className="w-full max-w-full h-auto object-cover rounded-xl"
//                         />

//                         {/* Title and Description */}
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-6 mb-4">
//                             Personalized Stress & Lifestyle Counseling
//                         </h2>

//                         <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
//                             Our Stress & Lifestyle Counseling service is designed to help you take control of your mental well-being and daily
//                             habits. Whether you're dealing with anxiety, burnout, or life imbalance, we offer expert support that fits your
//                             personal needs.
//                         </p>

//                         {/* Quote */}
//                         <div className="bg-[#EDEDFF] border-l-4 border-blue-500 p-6 mb-8 italic text-black rounded-lg">
//                             <p className="text-base sm:text-lg">
//                                 This blog post hits the mark perfectly for our target audience — busy professionals who
//                                 care about their health but struggle with time. — <strong className="text-blue-600">John Doe</strong>
//                             </p>
//                         </div>

//                         {/* What We Offer */}
//                         <div className="mb-12">
//                             <div className="flex flex-col lg:flex-row gap-8">
//                                 <div className="lg:w-1/2">
//                                     <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer:</h3>
//                                     <div className="space-y-4">
//                                         {[
//                                             "One-on-one virtual sessions with certified counselors",
//                                             "Stress and anxiety management techniques",
//                                             "Sleep improvement & energy-boosting strategies",
//                                             "Personalized nutrition and wellness plans",
//                                             "Habit-building for a healthier, more balanced life",
//                                             "Confidential, judgment-free care"
//                                         ].map((item, i) => (
//                                             <div key={i} className="flex items-start gap-3">
//                                                 <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                                     <span className="text-white text-sm">✓</span>
//                                                 </div>
//                                                 <span className="text-gray-700 text-sm">{item}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="lg:w-1/2">
//                                     <img
//                                         src="/images/offer.jpg"
//                                         alt="Professional counselor"
//                                         className="w-full h-auto object-cover rounded-lg"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Key Features */}
//                         <div className="mb-12">
//                             <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features:</h3>
//                             <div className="space-y-6">
//                                 {[
//                                     ["Stress Reduction Coaching:", "Learn to manage pressure burnout, and daily anxiety with proven techniques."],
//                                     ["Personalized Nutrition & Wellness Plans:", "Build healthier routines that support productivity and rest."],
//                                     ["Lifestyle Planning:", "Create sustainable habits for nutrition, exercise, and sleep."],
//                                     ["One-on-One Counseling:", "Talk to licensed professionals in a private, secure online setting."],
//                                     ["Mental Wellness Support:", "Gain tools to improve focus, mood, and overall life satisfaction."]
//                                 ].map(([title, desc], i) => (
//                                     <div key={i} className="flex items-start gap-3">
//                                         <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                                             <span className="text-white text-sm">✓</span>
//                                         </div>
//                                         <p className="text-gray-800 text-sm">
//                                             <span className="font-semibold text-gray-950 text-base sm:text-lg">{title}</span>{" "}
//                                             {desc}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Why It Matters */}
//                         <div className="mb-12">
//                             <h3 className="text-xl font-bold text-gray-900 mb-4">Why It Matters:</h3>
//                             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                                 Improving your lifestyle isn't just about avoiding illness — it's about living better, feeling stronger, and thinking
//                                 clearer every day.
//                             </p>
//                         </div>

//                         {/* FAQ Section */}
//                         <div className="mb-12 space-y-4">
//                             {[
//                                 "Do I need a diagnosis to book a session?",
//                                 "Why Join Us as a Volunteer?",
//                                 "Be Part of a Community"
//                             ].map((question, i) => (
//                                 <div key={i} className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
//                                     <button
//                                         onClick={() => toggleFaq(i)}
//                                         className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
//                                     >
//                                         <span className="font-semibold text-gray-700 text-base sm:text-lg">{question}</span>
//                                         {expandedFaq === i ? (
//                                             <ChevronDown className="w-5 h-5 text-blue-500" />
//                                         ) : (
//                                             <ChevronRight className="w-5 h-5 text-gray-400" />
//                                         )}
//                                     </button>
//                                     {expandedFaq === i && (
//                                         <div className="px-4 sm:px-6 pb-4 sm:pb-6">
//                                             <p className="text-gray-600 text-sm sm:text-base">
//                                                 Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit
//                                                 in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. 
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Sidebar */}
//                     <div className="lg:w-1/3 w-full">
//                         {/* Our Services */}
//                         <div className="bg-[#F2F2F2] shadow-md p-4 sm:p-6 mb-8">
//                             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Our Services</h3>
//                             <div className="space-y-2 text-sm sm:text-base">
//                                 {[
//                                     "General Health Consultation",
//                                     "Chronic Disease Management",
//                                     "Online Video Consultation",
//                                     "Preventive Health Checkups",
//                                     "Women's & Men's Health",
//                                     "Family Health Services"
//                                 ].map((service, i) => (
//                                     <div
//                                         key={i}
//                                         className={`flex items-center justify-between p-2 rounded cursor-pointer transition ${
//                                             i === 0
//                                                 ? "bg-blue-500 text-white"
//                                                 : "hover:bg-blue-500 hover:text-white text-black"
//                                         }`}
//                                     >
//                                         <span>{service}</span>
//                                         <span>↗</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Contact Card */}
//                         <div className="bg-[#2C509A] text-white rounded-lg p-6 sm:p-8">
//                             <h3 className="text-lg sm:text-xl font-bold mb-4">Have Additional Questions?</h3>
//                             <div className="border-t border-white/30 mb-6"></div>
//                             <div className="space-y-2 sm:space-y-3 mb-6">
//                                 <p className="text-sm sm:text-base">3rd Avenue, 83 Manhattan, London, UK</p>
//                                 <p className="font-bold text-lg">+1890 123 456</p>
//                                 <p className="text-sm sm:text-base">support@example.com</p>
//                             </div>
//                             <button className="bg-[#DBE9A1] text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 text-sm sm:text-base">
//                                 CONTACT US
//                                 <ChevronRight className="w-4 h-4" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServicesDetails;



import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ServicesDetails = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#1A3471] text-white py-16 sm:py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">Service Details</h1>
                    <div className="flex items-center justify-center text-sm sm:text-base">
                        <Link to="/" className="hover:text-blue-300">
                            Home
                        </Link>
                        <ChevronRight className="mx-2 w-4 h-4" />
                        <span>Service Details</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* Left Content */}
                    <div className="lg:w-2/3 w-full">
                        <img
                            src="/images/Personalized stress.jpg"
                            alt="Counseling session"
                            className="w-full h-auto object-cover rounded-xl"
                        />

                        {/* Title and Description */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-6 mb-4">
                            Personalized Stress & Lifestyle Counseling
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                            Our Stress & Lifestyle Counseling service is designed to help you take control of your mental well-being and daily
                            habits. Whether you're dealing with anxiety, burnout, or life imbalance, we offer expert support that fits your
                            personal needs.
                        </p>

                        {/* Quote */}
                        <div className="bg-[#EDEDFF] border-l-4 border-blue-500 p-6 mb-8 italic text-black rounded-lg">
                            <p className="text-base sm:text-lg">
                                This blog post hits the mark perfectly for our target audience — busy professionals who
                                care about their health but struggle with time. — <strong className="text-blue-600">John Doe</strong>
                            </p>
                        </div>

                        {/* What We Offer */}
                        <div className="mb-12">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer:</h3>
                                    <div className="space-y-4">
                                        {[
                                            "One-on-one virtual sessions with certified counselors",
                                            "Stress and anxiety management techniques",
                                            "Sleep improvement & energy-boosting strategies",
                                            "Personalized nutrition and wellness plans",
                                            "Habit-building for a healthier, more balanced life",
                                            "Confidential, judgment-free care"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-white text-sm">✓</span>
                                                </div>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <img
                                        src="/images/offer.jpg"
                                        alt="Professional counselor"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features:</h3>
                            <div className="space-y-6">
                                {[
                                    ["Stress Reduction Coaching:", "Learn to manage pressure burnout, and daily anxiety with proven techniques."],
                                    ["Personalized Nutrition & Wellness Plans:", "Build healthier routines that support productivity and rest."],
                                    ["Lifestyle Planning:", "Create sustainable habits for nutrition, exercise, and sleep."],
                                    ["One-on-One Counseling:", "Talk to licensed professionals in a private, secure online setting."],
                                    ["Mental Wellness Support:", "Gain tools to improve focus, mood, and overall life satisfaction."]
                                ].map(([title, desc], i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <p className="text-gray-800 text-sm sm:text-base">
                                            <span className="font-semibold text-gray-950 text-base sm:text-lg">{title}</span>{" "}
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why It Matters */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why It Matters:</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Improving your lifestyle isn't just about avoiding illness — it's about living better, feeling stronger, and thinking
                                clearer every day.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-12 space-y-4">
                            {[
                                "Do I need a diagnosis to book a session?",
                                "Why Join Us as a Volunteer?",
                                "Be Part of a Community"
                            ].map((question, i) => (
                                <div key={i} className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
                                    <button
                                        onClick={() => toggleFaq(i)}
                                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                                    >
                                        <span className="font-semibold text-gray-700 text-base sm:text-lg">{question}</span>
                                        {expandedFaq === i ? (
                                            <ChevronDown className="w-5 h-5 text-blue-500" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                            <p className="text-gray-600 text-sm sm:text-base">
                                                Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit
                                                in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. 
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/3 w-full">
            
                      {/* Our Services */}
<div className="bg-[#F2F2F2] shadow-md p-4 sm:p-6 mb-8">
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Our Services</h3>
  <div className="space-y-2 text-sm sm:text-base">
    {[
      { name: "General Health Consultation", link: "/servicesdetails" },
      { name: "Chronic Disease Management", link: "/servicesdetails" },
      { name: "Online Video Consultation", link: "/servicesdetails" },
      { name: "Preventive Health Checkups", link: "/servicesdetails" },
      { name: "Women's & Men's Health", link: "/servicesdetails" },
      { name: "Family Health Services", link: "/servicesdetails" },
    ].map((service, i) => (
      <Link
        key={i}
        to={service.link}
        className={`flex items-center justify-between p-2 rounded cursor-pointer transition ${
          i === 0
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-500 hover:text-white text-black"
        }`}
      >
        <span>{service.name}</span>
        <span>↗</span>
      </Link>
    ))}
  </div>
</div>


                        {/* Contact Card */}
                        <div className="bg-[#2C509A] text-white rounded-lg p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold mb-4">Have Additional Questions?</h3>
                            <div className="border-t border-white/30 mb-6"></div>
                            <div className="space-y-2 sm:space-y-3 mb-6">
                                <p className="text-sm sm:text-base">3rd Avenue, 83 Manhattan, London, UK</p>
                                <p className="font-bold text-lg">+1890 123 456</p>
                                <p className="text-sm sm:text-base">support@example.com</p>
                            </div>
                            <button className="bg-[#DBE9A1] text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 text-sm sm:text-base">
                                CONTACT US
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
