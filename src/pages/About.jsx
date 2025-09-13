// import React from "react";
// import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// export default function About() {
//    const review = {
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
//     name: "Kathryn Murphy",
//     role: "Medical Assistant",
 
//   };
//   return (
//     <section className="w-full">
//       {/* 🔹 Hero Section */}
// <div className="relative bg-[#0E2447] text-white text-center py-20 overflow-hidden">
//   {/* Heading with Left Cross Only */}
//   <div className="relative inline-block">
//     <img
//       src="images/cross.png"
//       alt="cross"
//       className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
//     />
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
//   </div>

//   <p className="text-sm md:text-base mt-2">
//     Home <span className="mx-2">&gt;</span> About
//   </p>

//   {/* Decorative Cross Background */}
//   <img src="images/cross.png" alt="cross" className="absolute top-6 left-6 w-12 opacity-40" />
//   <img src="images/cross.png" alt="cross" className="absolute bottom-6 right-6 w-12 opacity-40" />
//   <img src="images/cross.png" alt="cross" className="absolute top-10 right-10 w-14 opacity-30" />
//   <img src="images/cross.png" alt="cross" className="absolute bottom-10 left-20 w-14 opacity-30" />
// </div>

    
//     <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white">
//       {/* Left Side - Images with Experience Badge */}
//       <div className="relative w-full lg:w-1/2 flex justify-center">
//         {/* Experience Badge */}
//         <div className="absolute left-0 top-0 bottom-0 w-20 bg-blue-600 text-white flex flex-col items-center justify-center rounded-2xl z-10 font-bold text-lg">
//           <span className="transform -rotate-90 whitespace-nowrap">12+ YEARS EXPERIENCE</span>
//         </div>
        
//         {/* Main Large Image */}
//         <div className="ml-12 relative">
//           <img
//             src="/images/about-img-1.jpg"
//             alt="Doctor with patient"
//             className="rounded-2xl shadow-xl w-full h-96 object-cover"
//           />
          
//           {/* Small Overlapping Image (Top Right) */}
//           <img
//             src="/images/about-img-2.jpg"
//             alt="Medical team"
//             className="absolute -top-8 -right-8 w-48 h-32 rounded-xl shadow-lg object-cover border-4 border-white"
//           />
//         </div>
//       </div>

//       {/* Right Side - Content */}
//       <div className="w-full lg:w-1/2">
//         {/* About Us Tag */}
//         <div className="flex items-center gap-2 mb-4">
//           <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
//           <p className="text-blue-600 font-semibold uppercase tracking-wide">About Us</p>
//         </div>

//         {/* Main Heading */}
//         <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
//           Committed to Your Care Every Step of the Way
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//           With a team of world-class doctors, experienced nurses, and dedicated healthcare 
//           professionals, we are committed to delivering compassionate, high-quality medical 
//           care to every patient.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           {[
//             "Highly Qualified Specialists",
//             "Advanced Medical Equipment", 
//             "Safe, Comfortable Environment",
//             "24/7 Emergency Services",
//             "Patient-Centered Approach", 
//             "Affordable, Transparent Pricing"
//           ].map((feature, index) => (
//             <div key={index} className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                 <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
//               </div>
//               <span className="font-semibold text-gray-800 text-sm">{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* CEO Section */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <img
//               src="/images/CEO.jpg"
//               alt="CEO"
//               className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//             />
//             <div>
//               <p className="font-bold text-gray-900 text-lg">CEO, Founder Of</p>
//               <p className="font-bold text-gray-900 text-lg">CarePoint</p>
//             </div>
//           </div>
          
//           {/* Signature */}
//           <div className="text-right">
//             <div className="text-3xl font-bold text-gray-800 italic" style={{fontFamily: 'cursive'}}>
//               Husnain Raja
//             </div>
//           </div>
//         </div>

//         {/* More About Button */}
//         <div className="inline-flex">
//           <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
//             More About
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
  

//       {/* 🔹 Why Choose Us Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white">
//         {/* Images */}
//         <div className="relative w-full md:w-1/2 flex justify-center">

//           <img
//             src="/images/about-img-3.jpg"
//             alt="Why Choose Us"
//             className="shadow-lg w-[70%] object-cover"
//           />
//           {/* Small Overlapping Image (Bottom Right) */}
//           <img
//             src="/images/about-img-4.jpg"
//             alt="Why Choose Us Small"
//             className="absolute -bottom-8 right-[15%] w-[35%] rounded-xl shadow-md"
//           />
//         </div>

//         {/* Content */}
//         <div className="w-full md:w-1/2">
//           <p className="text-blue-300 font-semibold mb-2 uppercase">
//             Why Choose Us
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Where Compassion Meets Excellence
//           </h2>
//           <p className="text-gray-200 mb-6">
//             That's why we are committed to delivering world-class medical
//             services with compassion, innovation, and integrity — putting your
//             health and comfort first.
//           </p>

//           {/* Points with Icons */}
//           <div className="space-y-6 mb-6">
//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaUserMd size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Personalized Patient Care</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaHospitalUser size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">World-Class Medical Experts</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaHeartbeat size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Advanced Healthcare Services</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Button */}
//           <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition">
//             APPOINTMENT NOW
//           </button>
//         </div>
//       </div>

//    <section className="bg-gray-100 py-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
//             Happy Patients
//           </h2>
//           <h3 className="text-blue-700 text-lg font-medium mb-4">
//             Patients Says
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
//             mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
//             fringilla, mattis ligula consec.
//           </p>
//         </div>

//         {/* Single Quote Box */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="bg-white p-6 rounded-xl shadow-lg relative"
//         >
//           <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
//           <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6">
//             "{review.text}"
//           </p>
//           <div className="flex items-center gap-4">
//             <img
//               src={"/images/about-img-5.jpg"}
//               alt={review.name}
//               className="w-14 h-14 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-blue-600 font-semibold text-sm md:text-base">
//                 — {review.name}
//               </h4>
//               <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>



// <section className="bg-white">
//       {/* 🔹 Online Consultation Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 max-w-7xl mx-auto">
//         {/* Content (Left Side) */}
//         <div className="w-full lg:w-1/2">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="text-blue-500 text-xl">💙</span>
//             <p className="text-blue-500 font-semibold uppercase tracking-wide">
//               Your Health, Your Convenience
//             </p>
//           </div>
          
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
//             Consult Your Doctor Online
//             <br />
//             <span className="relative">
//               — Anytime, Anywhere
//               <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gray-900 rounded"></div>
//             </span>
//           </h2>
          
//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//             Say goodbye to long queues and unnecessary travel. With our secure video
//             consultation service, you can now talk to experienced doctors from the
//             comfort of your home.
//           </p>

//           {/* Points */}
//           <div className="space-y-4 mb-8">
//             {[
//               "Speak with certified specialists in real time",
//               "Easy appointment booking via mobile or web", 
//               "Private, secure, and confidential video calls",
//               "Available 7 days a week, including evenings",
//             ].map((point, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-700 font-medium">{point}</span>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
//               Book A Video Call
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </button>
//             <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
//               See Available Doctors
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Images (Right Side) */}
//         <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
//           {/* Background decorative elements */}
//           <div className="absolute top-8 left-8 w-20 h-20 bg-green-200 rounded-full opacity-20"></div>
//           <div className="absolute bottom-16 left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>
          
//           {/* Main large circular image */}
//           <div className="relative">
//             <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
//               {/* Simulated holographic doctor */}
//               <div className="relative w-80 h-80 rounded-full bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-300/30 flex items-center justify-center">
//                 <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
//                   {/* Doctor avatar placeholder */}
//                  <div className="w-24 h-24 rounded-lg overflow-hidden">
//   <img 
//     src="/images/about-img-7.png"   // doctor ki image ka path
//     alt="Doctor" 
//     className="w-full h-full object-cover" 
//   />
// </div>

//                 </div>
//                 {/* Holographic rings */}
//                 <div className="absolute inset-0 rounded-full border border-blue-300/40"></div>
//                 <div className="absolute inset-4 rounded-full border border-blue-200/30"></div>
//               </div>
//             </div>
            
//             {/* Small overlapping circular image - Patient */}
//             <div className="absolute bottom-0 right-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
//               <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                 {/* Patient with tablet placeholder */}
//                 <div className="relative">
//                   <div className="w-20 h-20 rounded-lg overflow-hidden">
//   <img 
//     src="/images/about-img-7.png"   // patient ki image ka path
//     alt="Patient" 
//     className="w-full h-full object-cover" 
//   />
// </div>

//                   {/* Small person silhouette */}
//                   <div className="absolute -top-2 -left-2 w-6 h-6 bg-gray-600 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Top right decorative element */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
//               <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </section>
//   );
// }



// import React from "react";
// import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// export default function About() {
//   const review = {
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
//     name: "Kathryn Murphy",
//     role: "Medical Assistant",
//   };

//   return (
//     <>
//       {/* 🔹 Hero Section */}
//       <section className="relative bg-[#0E2447] text-white text-center py-20 overflow-hidden">
//         <div className="relative inline-block">
//           <img
//             src="images/cross.png"
//             alt="cross"
//             className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
//           />
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
//         </div>
//         <p className="text-sm md:text-base mt-2">
//           Home <span className="mx-2">&gt;</span> About
//         </p>
//         {/* Decorative Cross */}
//         <img src="images/cross.png" alt="cross" className="absolute top-6 left-6 w-12 opacity-40" />
//         <img src="images/cross.png" alt="cross" className="absolute bottom-6 right-6 w-12 opacity-40" />
//         <img src="images/cross.png" alt="cross" className="absolute top-10 right-10 w-14 opacity-30" />
//         <img src="images/cross.png" alt="cross" className="absolute bottom-10 left-20 w-14 opacity-30" />
//       </section>

//       {/* 🔹 About Us Section */}
//       <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white">
//         {/* Left - Images */}
//         <div className="relative w-full lg:w-1/2 flex justify-center">
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-blue-600 text-white flex flex-col items-center justify-center rounded-2xl z-10 font-bold text-lg">
//             <span className="transform -rotate-90 whitespace-nowrap">
//               12+ YEARS EXPERIENCE
//             </span>
//           </div>
//           <div className="ml-12 relative">
//             <img
//               src="/images/about-img-1.jpg"
//               alt="Doctor with patient"
//               className="rounded-2xl shadow-xl w-full h-96 object-cover"
//             />
//             <img
//               src="/images/about-img-2.jpg"
//               alt="Medical team"
//               className="absolute -top-8 -right-8 w-48 h-32 rounded-xl shadow-lg object-cover border-4 border-white"
//             />
//           </div>
//         </div>

//         {/* Right - Content */}
//         <div className="w-full lg:w-1/2">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
//             <p className="text-blue-600 font-semibold uppercase tracking-wide">
//               About Us
//             </p>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
//             Committed to Your Care Every Step of the Way
//           </h2>

//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//             With a team of world-class doctors, experienced nurses, and dedicated
//             healthcare professionals, we are committed to delivering
//             compassionate, high-quality medical care to every patient.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             {[
//               "Highly Qualified Specialists",
//               "Advanced Medical Equipment",
//               "Safe, Comfortable Environment",
//               "24/7 Emergency Services",
//               "Patient-Centered Approach",
//               "Affordable, Transparent Pricing",
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
//                 </div>
//                 <span className="font-semibold text-gray-800 text-sm">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CEO Section */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-4">
//               <img
//                 src="/images/CEO.jpg"
//                 alt="CEO"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//               />
//               <div>
//                 <p className="font-bold text-gray-900 text-lg">CEO, Founder Of</p>
//                 <p className="font-bold text-gray-900 text-lg">CarePoint</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div
//                 className="text-3xl font-bold text-gray-800 italic"
//                 style={{ fontFamily: "cursive" }}
//               >
//                 Husnain Raja
//               </div>
//             </div>
//           </div>

//           <div className="inline-flex">
//             <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
//               More About
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Why Choose Us */}
//       <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white">
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           <img
//             src="/images/about-img-3.jpg"
//             alt="Why Choose Us"
//             className="shadow-lg w-[70%] object-cover"
//           />
//           <img
//             src="/images/about-img-4.jpg"
//             alt="Why Choose Us Small"
//             className="absolute -bottom-8 right-[15%] w-[35%] rounded-xl shadow-md"
//           />
//         </div>

//         <div className="w-full md:w-1/2">
//           <p className="text-blue-300 font-semibold mb-2 uppercase">Why Choose Us</p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Where Compassion Meets Excellence
//           </h2>
//           <p className="text-gray-200 mb-6">
//             That's why we are committed to delivering world-class medical
//             services with compassion, innovation, and integrity.
//           </p>

//           <div className="space-y-6 mb-6">
//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaUserMd size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Personalized Patient Care</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaHospitalUser size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">World-Class Medical Experts</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-950 p-3 rounded-full">
//                 <FaHeartbeat size={22} />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Advanced Healthcare Services</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition">
//             APPOINTMENT NOW
//           </button>
//         </div>
//       </section>

//       {/* 🔹 Happy Patients */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
//               Happy Patients
//             </h2>
//             <h3 className="text-blue-700 text-lg font-medium mb-4">Patients Says</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
//               mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
//               fringilla, mattis ligula consec.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="bg-white p-6 rounded-xl shadow-lg relative"
//           >
//             <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
//             <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6">
//               "{review.text}"
//             </p>
//             <div className="flex items-center gap-4">
//               <img
//                 src={"/images/about-img-5.jpg"}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="text-blue-600 font-semibold text-sm md:text-base">
//                   — {review.name}
//                 </h4>
//                 <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🔹 Online Consultation */}
//       <section className="bg-white">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 max-w-7xl mx-auto">
//           {/* Left Side */}
//           <div className="w-full lg:w-1/2">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-blue-500 text-xl">💙</span>
//               <p className="text-blue-500 font-semibold uppercase tracking-wide">
//                 Your Health, Your Convenience
//               </p>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
//               Consult Your Doctor Online
//               <br />
//               <span className="relative">
//                 — Anytime, Anywhere
//                 <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gray-900 rounded"></div>
//               </span>
//             </h2>
//             <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//               Say goodbye to long queues and unnecessary travel. With our secure
//               video consultation service, you can now talk to experienced doctors
//               from the comfort of your home.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 "Speak with certified specialists in real time",
//                 "Easy appointment booking via mobile or web",
//                 "Private, secure, and confidential video calls",
//                 "Available 7 days a week, including evenings",
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-3 h-3 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium">{point}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
//                 Book A Video Call
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
//                 See Available Doctors
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Right Side Images */}
//           <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <div className="absolute top-8 left-8 w-20 h-20 bg-green-200 rounded-full opacity-20"></div>
//             <div className="absolute bottom-16 left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>

//             <div className="relative">
//               <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
//                 <div className="relative w-80 h-80 rounded-full bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-300/30 flex items-center justify-center">
//                   <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
//                     <div className="w-24 h-24 rounded-lg overflow-hidden">
//                       <img
//                         src="/images/about-img-7.png"
//                         alt="Doctor"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 rounded-full border border-blue-300/40"></div>
//                   <div className="absolute inset-4 rounded-full border border-blue-200/30"></div>
//                 </div>
//               </div>

//               <div className="absolute bottom-0 right-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
//                 <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                   <div className="relative">
//                     <div className="w-20 h-20 rounded-lg overflow-hidden">
//                       <img
//                         src="/images/about-img-7.png"
//                         alt="Patient"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="absolute -top-2 -left-2 w-6 h-6 bg-gray-600 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
//                 <svg
//                   className="w-10 h-10 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.945 2.945c.046.651.26 1.28.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.945 2.945 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.945-2.945 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976c.463-.465.677-1.094.723-1.745a3.066 3.066 0 012.945-2.945z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// import React from "react";
// import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// export default function About() {
//   const review = {
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
//     name: "Kathryn Murphy",
//     role: "Medical Assistant",
//   };

//   return (
//     <>
//       {/* 🔹 Hero Section */}
//       <section className="relative bg-[#0E2447] text-white text-center py-20 overflow-hidden">

//         <div className="relative inline-block">
//           {/* Animated Plus Sign */}
//           <motion.div 
//             className="absolute -top-6 -left-12 w-10 h-10 text-white opacity-25"
//             animate={{ 
//               scale: [1, 1.05, 1],
//               rotate: [0, 1, -1, 0]
//             }}
//             transition={{ 
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//               <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
//             </svg>
//           </motion.div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
//         </div>
//         <p className="text-sm md:text-base mt-2">
//           Home <span className="mx-2">&gt;</span> About
//         </p>
//         {/* Animated Plus Sign - Top Left */}
//         <motion.div 
//           className="absolute top-6 left-12 w-10 h-10 text-white opacity-25"
//           animate={{ 
//             scale: [1, 1.05, 1],
//             rotate: [0, -1, 1, 0]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//             <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
//           </svg>
//         </motion.div>

//         {/* Animated Star - Bottom Right */}
//         <motion.div 
//           className="absolute bottom-6 right-6 w-8 h-8 text-white opacity-25"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         </motion.div>
//       </section>

//       {/*    About Us Section */}
//       <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white relative">
//         {/* Background Vector */}
//         <div className="absolute top-0 right-0 w-full h-full opacity-100 brightness-25">
//           <img src="/images/about-2-vector.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
//         {/* Left - Images */}
//         <div className="relative w-full lg:w-1/2 flex justify-center z-10">
//           <div className="ml-0 relative">
//             <img
//               src="/images/12years.PNG"
//               alt="Committed to Your Care"
//               className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
//             />
//           </div>
//         </div>

//         {/* Right - Content */}
//         <div className="w-full lg:w-1/2 relative z-10">
//           {/* Background Medical Professional */}
//           <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
//             <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400">
//               <path d="M100 20c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" fill="currentColor"/>
//               <circle cx="100" cy="80" r="15" fill="currentColor"/>
//               <path d="M70 120c0-16.6 13.4-30 30-30s30 13.4 30 30v20H70v-20z" fill="currentColor"/>
//               <path d="M85 160h30v20H85z" fill="currentColor"/>
//             </svg>
//           </div>


//           <div className="flex items-center gap-2 mb-4">
//             <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//             </svg>
//             <p className="text-blue-600 font-semibold uppercase tracking-wide">
//               About Us
//             </p>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
//             Committed to Your Care Every Step of the Way
//           </h2>

//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//             With a team of world-class doctors, experienced nurses, and dedicated
//             healthcare professionals, we are committed to delivering
//             compassionate, high-quality medical care to every patient.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 gap-6 mb-8">
//             {[
//               "Highly Qualified Specialists",
//               "Advanced Medical Equipment",
//               "Safe, Comfortable Environment",
//               "24/7 Emergency Services",
//               "Patient-Centered Approach",
//               "Affordable, Transparent Pricing",
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="font-semibold text-gray-800 text-sm">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CEO Section */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-4">
//               <img
//                 src="/images/CEO.jpg"
//                 alt="CEO"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//               />
//               <div>
//                 <p className="font-bold text-gray-900 text-lg">CEO, Founder Of</p>
//                 <p className="font-bold text-gray-900 text-lg">CarePoint</p>
//               </div>
//             </div>
//             <div className="text-left ml-8">
//               <img 
//                 src="/images/signature.png" 
//                 alt="Husnain Raja Signature" 
//                 className="h-12 w-auto"
//               />
//             </div>
//           </div>

//           <div className="inline-flex">
//             <button className="bg-green-300 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
//               More About
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/*    Why Choose Us */}
//       <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white relative">
//         {/* Background Vectors */}
//         <div className="absolute top-0 left-0 w-3/4 h-3/4 opacity-100 brightness-25">
//           <img src="/images/why-choose-vector-1.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
//         <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-100 brightness-25">
//           <img src="/images/why-choose-vector-2.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
//         <div className="relative w-full md:w-1/2 flex justify-center z-10">
//           <img
//             src="/images/aboutt-img-1.PNG"
//             alt="Where Compassion Meets Excellence"
//             className="shadow-lg w-full object-cover rounded-xl"
//           />
//         </div>

//         <div className="w-full md:w-1/2 z-10">
//           <div className="flex items-center gap-2 mb-2">
//             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//             </svg>
//             <p className="text-blue-300 font-semibold uppercase">Why Choose Us</p>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Where Compassion Meets Excellence
//           </h2>
//           <p className="text-gray-200 mb-6">
//             That's why we are committed to delivering world-class medical
//             services with compassion, innovation, and integrity.
//           </p>

//           <div className="space-y-6 mb-6">
//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 border-blue-600 shadow-sm">
//                 01
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Personalized Patient Care</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 border-blue-600 shadow-sm">
//                 02
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">World-Class Medical Experts</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 border-blue-600 shadow-sm">
//                 03
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Advanced Healthcare Services</h4>
//                 <p className="text-gray-300">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition flex items-center gap-2">
//             APPOINTMENT NOW
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//             </svg>
//           </button>
//         </div>
//       </section>

//       {/*    Happy Patients */}
//       <section className="bg-gray-100 py-16 relative">
//         {/* Background Images */}
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[28rem] h-[28rem] opacity-60">
//           <img src="/images/feedback-2-vector-1.svg" alt="Background" className="w-full h-full" />
//         </div>
//         <div className="absolute bottom-0 right-0 w-40 h-40 opacity-50">
//           <img src="/images/feedback-2-vector-2.svg" alt="Background" className="w-full h-full" />
//         </div>
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//               </svg>
//               <h3 className="text-blue-700 text-lg font-medium">Patients Says</h3>
//             </div>
//             <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
//               Happy Patients
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
//               mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
//               fringilla, mattis ligula consec.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="bg-white p-6 rounded-xl shadow-lg relative"
//           >
//             <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
//             <div className="relative">
//               <svg className="absolute -top-2 -left-2 w-6 h-6 text-blue-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6 pl-4">
//                 "{review.text}"
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <img
//                 src={"/images/reviewer-1.jpg"}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="text-blue-600 font-semibold text-sm md:text-base">
//                   — {review.name}
//                 </h4>
//                 <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Navigation Arrows */}
//         <div className="flex justify-start gap-4 mt-8 ml-12 max-w-7xl mx-auto px-6 lg:px-12">
//           {/* Left Arrow */}
//           <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeWidth={2} d="M17 17L7 7M7 7H17M7 7V17" />
//             </svg>
//           </div>
//           {/* Right Arrow */}
//           <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Online Consultation */}
//       <section className="bg-white">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 max-w-7xl mx-auto">
//           {/* Left Side */}
//           <div className="w-full lg:w-1/2">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-blue-500 text-xl">💙</span>
//               <p className="text-blue-500 font-semibold uppercase tracking-wide">
//                 Your Health, Your Convenience
//               </p>
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
//               Consult Your Doctor Online
//               <br />
//               <span className="relative text-xl lg:text-2xl">
//                 — Anytime, Anywhere
//                 <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gray-900 rounded"></div>
//               </span>
//             </h2>
//             <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//               Say goodbye to long queues and unnecessary travel. With our secure
//               video consultation service, you can now talk to experienced doctors
//               from the comfort of your home.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 "Speak with certified specialists in real time",
//                 "Easy appointment booking via mobile or web",
//                 "Private, secure, and confidential video calls",
//                 "Available 7 days a week, including evenings",
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-3 h-3 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium">{point}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
//                 Book A Video Call
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
//                 See Available Doctors
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Right Side Images */}
//           <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <div className="relative">
//               <img
//                 src="/images/consult-doc-image.PNG"
//                 alt="Consult Your Doctor Online"
//                 className="w-full max-w-lg rounded-2xl shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






// import React from "react";
// import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// export default function About() {
//   const review = {
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
//     name: "Kathryn Murphy",
//     role: "Medical Assistant",
//   };

//   return (
//     <>
//       {/* 🔹 Hero Section */}
//       <section className="relative bg-[#0E2447] text-white text-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative inline-block">
//             {/* Animated Plus Sign */}
//             <motion.div 
//               className="absolute -top-4 -left-8 sm:-top-6 sm:-left-12 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-25"
//               animate={{ 
//                 scale: [1, 1.05, 1],
//                 rotate: [0, 1, -1, 0]
//               }}
//               transition={{ 
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//                 <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
//               </svg>
//             </motion.div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
//           </div>
//           <p className="text-sm sm:text-base md:text-lg mt-2">
//             Home <span className="mx-2">&gt;</span> About
//           </p>
//         </div>
        
//         {/* Animated Plus Sign - Top Left */}
//         <motion.div 
//           className="absolute top-4 left-4 sm:top-6 sm:left-12 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-25"
//           animate={{ 
//             scale: [1, 1.05, 1],
//             rotate: [0, -1, 1, 0]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//             <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
//           </svg>
//         </motion.div>

//         {/* Animated Star - Bottom Right */}
//         <motion.div 
//           className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-white opacity-25"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         </motion.div>
//       </section>

//       {/* About Us Section */}
//       <section className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 bg-white relative">
//         {/* Background Vector */}
//         <div className="absolute top-0 right-0 w-full h-full opacity-100 brightness-25 pointer-events-none">
//           <img src="/images/about-2-vector.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
        
//         {/* Left - Images */}
//         <div className="relative w-full xl:w-1/2 flex justify-center z-10 order-2 xl:order-1">
//           <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-none">
//             <img
//               src="/images/12years.PNG"
//               alt="Committed to Your Care"
//               className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
//             />
//           </div>
//         </div>

//         {/* Right - Content */}
//         <div className="w-full xl:w-1/2 relative z-10 order-1 xl:order-2">
//           {/* Background Medical Professional */}
//           <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-5 pointer-events-none">
//             <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400">
//               <path d="M100 20c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" fill="currentColor"/>
//               <circle cx="100" cy="80" r="15" fill="currentColor"/>
//               <path d="M70 120c0-16.6 13.4-30 30-30s30 13.4 30 30v20H70v-20z" fill="currentColor"/>
//               <path d="M85 160h30v20H85z" fill="currentColor"/>
//             </svg>
//           </div>

//           <div className="flex items-center gap-2 mb-4">
//             <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//             </svg>
//             <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
//               About Us
//             </p>
//           </div>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
//             Committed to Your Care Every Step of the Way
//           </h2>

//           <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
//             With a team of world-class doctors, experienced nurses, and dedicated
//             healthcare professionals, we are committed to delivering
//             compassionate, high-quality medical care to every patient.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
//             {[
//               "Highly Qualified Specialists",
//               "Advanced Medical Equipment",
//               "Safe, Comfortable Environment",
//               "24/7 Emergency Services",
//               "Patient-Centered Approach",
//               "Affordable, Transparent Pricing",
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="font-semibold text-gray-800 text-xs sm:text-sm">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CEO Section */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
//             <div className="flex items-center gap-4">
//               <img
//                 src="/images/CEO.jpg"
//                 alt="CEO"
//                 className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
//               />
//               <div>
//                 <p className="font-bold text-gray-900 text-base sm:text-lg">CEO, Founder Of</p>
//                 <p className="font-bold text-gray-900 text-base sm:text-lg">CarePoint</p>
//               </div>
//             </div>
//             <div className="text-left sm:ml-8">
//               <img 
//                 src="/images/signature.png" 
//                 alt="Husnain Raja Signature" 
//                 className="h-8 sm:h-12 w-auto"
//               />
//             </div>
//           </div>

//           <div className="inline-flex">
//             <button className="bg-green-300 hover:bg-green-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
//               More About
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 bg-blue-950 text-white relative">
//         {/* Background Vectors */}
//         <div className="absolute top-0 left-0 w-3/4 h-3/4 opacity-100 brightness-25 pointer-events-none">
//           <img src="/images/why-choose-vector-1.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
//         <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-100 brightness-25 pointer-events-none">
//           <img src="/images/why-choose-vector-2.svg" alt="Background" className="w-full h-full object-cover" />
//         </div>
        
//         <div className="relative w-full lg:w-1/2 flex justify-center z-10 order-2 lg:order-1">
//           <div className="w-full max-w-md lg:max-w-lg">
//             <img
//               src="/images/aboutt-img-1.PNG"
//               alt="Where Compassion Meets Excellence"
//               className="shadow-lg w-full object-cover rounded-xl"
//             />
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 z-10 order-1 lg:order-2">
//           <div className="flex items-center gap-2 mb-2">
//             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//             </svg>
//             <p className="text-blue-300 font-semibold uppercase text-sm sm:text-base">Why Choose Us</p>
//           </div>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
//             Where Compassion Meets Excellence
//           </h2>
//           <p className="text-gray-200 mb-6 text-sm sm:text-base">
//             That's why we are committed to delivering world-class medical
//             services with compassion, innovation, and integrity.
//           </p>

//           <div className="space-y-4 sm:space-y-6 mb-6">
//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
//                 01
//               </div>
//               <div>
//                 <h4 className="font-bold text-base sm:text-lg mb-2">Personalized Patient Care</h4>
//                 <p className="text-gray-300 text-sm sm:text-base">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
//                 02
//               </div>
//               <div>
//                 <h4 className="font-bold text-base sm:text-lg mb-2">World-Class Medical Experts</h4>
//                 <p className="text-gray-300 text-sm sm:text-base">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
//                 03
//               </div>
//               <div>
//                 <h4 className="font-bold text-base sm:text-lg mb-2">Advanced Healthcare Services</h4>
//                 <p className="text-gray-300 text-sm sm:text-base">
//                   Our team includes highly trained doctors, nurses, and
//                   specialists, each dedicated to providing the best possible care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition flex items-center gap-2 text-sm sm:text-base">
//             APPOINTMENT NOW
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//             </svg>
//           </button>
//         </div>
//       </section>

//       {/* Happy Patients */}
//       <section className="bg-gray-100 py-12 sm:py-16 relative">
//         {/* Background Images */}
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 sm:w-80 md:w-96 lg:w-[28rem] h-64 sm:h-80 md:h-96 lg:h-[28rem] opacity-60 pointer-events-none">
//           <img src="/images/feedback-2-vector-1.svg" alt="Background" className="w-full h-full" />
//         </div>
//         <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 opacity-50 pointer-events-none">
//           <img src="/images/feedback-2-vector-2.svg" alt="Background" className="w-full h-full" />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//               </svg>
//               <h3 className="text-blue-700 text-base sm:text-lg font-medium">Patients Says</h3>
//             </div>
//             <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
//               Happy Patients
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
//               mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
//               fringilla, mattis ligula consec.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="bg-white p-4 sm:p-6 rounded-xl shadow-lg relative"
//           >
//             <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-8 h-8 sm:w-10 sm:h-10" />
//             <div className="relative">
//               <svg className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               <p className="italic text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 pl-4">
//                 "{review.text}"
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <img
//                 src={"/images/reviewer-1.jpg"}
//                 alt={review.name}
//                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
//               />
//               <div>
//                 <h4 className="text-blue-600 font-semibold text-sm sm:text-base">
//                   — {review.name}
//                 </h4>
//                 <p className="text-gray-500 text-xs sm:text-sm">{review.role}</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Navigation Arrows */}
//         <div className="flex justify-start gap-4 mt-6 sm:mt-8 ml-4 sm:ml-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//           {/* Left Arrow */}
//           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//             <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeWidth={2} d="M17 17L7 7M7 7H17M7 7V17" />
//             </svg>
//           </div>
//           {/* Right Arrow */}
//           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//             <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* Online Consultation */}
//       <section className="bg-white">
//         <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
//           {/* Left Side */}
//           <div className="w-full xl:w-1/2 order-2 xl:order-1">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-blue-500 text-lg sm:text-xl">💙</span>
//               <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm sm:text-base">
//                 Your Health, Your Convenience
//               </p>
//             </div>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
//               Consult Your Doctor Online
//               <br />
//               <span className="relative text-lg sm:text-xl lg:text-2xl">
//                 — Anytime, Anywhere
//                 <div className="absolute -bottom-2 left-0 w-16 sm:w-20 md:w-24 h-1 bg-gray-900 rounded"></div>
//               </span>
//             </h2>
//             <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
//               Say goodbye to long queues and unnecessary travel. With our secure
//               video consultation service, you can now talk to experienced doctors
//               from the comfort of your home.
//             </p>

//             <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//               {[
//                 "Speak with certified specialists in real time",
//                 "Easy appointment booking via mobile or web",
//                 "Private, secure, and confidential video calls",
//                 "Available 7 days a week, including evenings",
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700 font-medium text-sm sm:text-base">{point}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
//                 Book A Video Call
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
//                 See Available Doctors
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//                 </button>
//             </div>
//           </div>

//           {/* Right Side Images */}
//           <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-end order-1 xl:order-2">
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               <img
//                 src="/images/consult-doc-image.PNG"
//                 alt="Consult Your Doctor Online"
//                 className="w-full rounded-2xl shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }








import React from "react";
import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
import { Quote,ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const review = {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
    name: "Kathryn Murphy",
    role: "Medical Assistant",
  };

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative bg-[#0E2447] text-white text-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative inline-block">
            {/* Animated Plus Sign */}
            <motion.div 
              className="absolute -top-4 -left-8 sm:-top-6 sm:-left-12 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-25"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          </div>
        {/* Header */}

        <div className="max-w-6xl mx-auto text-center">
  
          <div className="flex items-center justify-center text-sm md:text-lg">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <ChevronRight className="mx-2 w-4 h-4" />
            <span>About</span>
          </div>
        </div>


        </div>
        
        {/* Animated Plus Sign - Top Left */}
        <motion.div 
          className="absolute top-4 left-4 sm:top-6 sm:left-12 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-25"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, -1, 1, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* Animated Star - Bottom Right */}
        <motion.div 
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-white opacity-25"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 bg-white relative">
        {/* Background Vector */}
        <div className="absolute top-0 right-0 w-full h-full opacity-100 brightness-25 pointer-events-none">
          <img src="/images/about-2-vector.svg" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Left - Images */}
        <div className="relative w-full xl:w-1/2 flex justify-center z-10 order-2 xl:order-1">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src="/images/12years.PNG"
              alt="Committed to Your Care"
              className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full xl:w-1/2 relative z-10 order-1 xl:order-2">
          {/* Background Medical Professional */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400">
              <path d="M100 20c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" fill="currentColor"/>
              <circle cx="100" cy="80" r="15" fill="currentColor"/>
              <path d="M70 120c0-16.6 13.4-30 30-30s30 13.4 30 30v20H70v-20z" fill="currentColor"/>
              <path d="M85 160h30v20H85z" fill="currentColor"/>
            </svg>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
              About Us
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Committed to Your Care Every Step of the Way
          </h2>

          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
            With a team of world-class doctors, experienced nurses, and dedicated
            healthcare professionals, we are committed to delivering
            compassionate, high-quality medical care to every patient.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              "Highly Qualified Specialists",
              "Advanced Medical Equipment",
              "Safe, Comfortable Environment",
              "24/7 Emergency Services",
              "Patient-Centered Approach",
              "Affordable, Transparent Pricing",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CEO Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/images/CEO.jpg"
                alt="CEO"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
              />
              <div>
                <p className="font-bold text-gray-900 text-base sm:text-lg">CEO, Founder Of</p>
                <p className="font-bold text-gray-900 text-base sm:text-lg">CarePoint</p>
              </div>
            </div>
            <div className="text-left sm:ml-8">
              <img 
                src="/images/signature.png" 
                alt="Husnain Raja Signature" 
                className="h-8 sm:h-12 w-auto"
              />
            </div>
          </div>

          <div className="inline-flex">
            <button className="bg-green-300 hover:bg-green-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
              More About
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 bg-blue-950 text-white relative">
        {/* Background Vectors */}
        <div className="absolute top-0 left-0 w-3/4 h-3/4 opacity-100 brightness-25 pointer-events-none">
          <img src="/images/why-choose-vector-1.svg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-100 brightness-25 pointer-events-none">
          <img src="/images/why-choose-vector-2.svg" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative w-full lg:w-1/2 flex justify-center z-10 order-2 lg:order-1">
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src="/images/aboutt-img-1.PNG"
              alt="Where Compassion Meets Excellence"
              className="shadow-lg w-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 z-10 order-1 lg:order-2">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <p className="text-blue-300 font-semibold uppercase text-sm sm:text-base">Why Choose Us</p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Where Compassion Meets Excellence
          </h2>
          <p className="text-gray-200 mb-6 text-sm sm:text-base">
            That's why we are committed to delivering world-class medical
            services with compassion, innovation, and integrity.
          </p>

          <div className="space-y-4 sm:space-y-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
                01
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">Personalized Patient Care</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
                02
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">World-Class Medical Experts</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 border-blue-600 shadow-sm flex-shrink-0">
                03
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">Advanced Healthcare Services</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>
          </div>

          <button className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition flex items-center gap-2 text-sm sm:text-base">
            APPOINTMENT NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </section>

      {/* Happy Patients */}
      <section className="bg-gray-100 py-12 sm:py-16 relative">
        {/* Background Images */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 sm:w-80 md:w-96 lg:w-[28rem] h-64 sm:h-80 md:h-96 lg:h-[28rem] opacity-60 pointer-events-none">
          <img src="/images/feedback-2-vector-1.svg" alt="Background" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 opacity-50 pointer-events-none">
          <img src="/images/feedback-2-vector-2.svg" alt="Background" className="w-full h-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-blue-700 text-base sm:text-lg font-medium">Patients Says</h3>
            </div>
            <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Happy Patients
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consec.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg relative"
          >
            <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-8 h-8 sm:w-10 sm:h-10" />
            <div className="relative">
              <svg className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="italic text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 pl-4">
                "{review.text}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={"/images/reviewer-1.jpg"}
                alt={review.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-blue-600 font-semibold text-sm sm:text-base">
                  — {review.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">{review.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-start gap-4 mt-6 sm:mt-8 ml-4 sm:ml-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Left Arrow */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth={2} d="M17 17L7 7M7 7H17M7 7V17" />
            </svg>
          </div>
          {/* Right Arrow */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </section>

      {/* Online Consultation */}
      <section className="bg-white">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="w-full xl:w-1/2 order-2 xl:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500 text-lg sm:text-xl">💙</span>
              <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm sm:text-base">
                Your Health, Your Convenience
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              Consult Your Doctor Online
              <br />
              <span className="relative text-lg sm:text-xl lg:text-2xl">
                — Anytime, Anywhere
                <div className="absolute -bottom-2 left-0 w-16 sm:w-20 md:w-24 h-1 bg-gray-900 rounded"></div>
              </span>
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Say goodbye to long queues and unnecessary travel. With our secure
              video consultation service, you can now talk to experienced doctors
              from the comfort of your home.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Speak with certified specialists in real time",
                "Easy appointment booking via mobile or web",
                "Private, secure, and confidential video calls",
                "Available 7 days a week, including evenings",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Book A Video Call
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                See Available Doctors
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                </button>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-end order-1 xl:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/images/consult-doc-image.PNG"
                alt="Consult Your Doctor Online"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}