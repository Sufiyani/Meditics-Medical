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



import React from "react";
import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const review = {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
    name: "Kathryn Murphy",
    role: "Medical Assistant",
  };

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative bg-[#0E2447] text-white text-center py-20 overflow-hidden">
        <div className="relative inline-block">
          <img
            src="images/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        </div>
        <p className="text-sm md:text-base mt-2">
          Home <span className="mx-2">&gt;</span> About
        </p>
        {/* Decorative Cross */}
        <img src="images/cross.png" alt="cross" className="absolute top-6 left-6 w-12 opacity-40" />
        <img src="images/cross.png" alt="cross" className="absolute bottom-6 right-6 w-12 opacity-40" />
        <img src="images/cross.png" alt="cross" className="absolute top-10 right-10 w-14 opacity-30" />
        <img src="images/cross.png" alt="cross" className="absolute bottom-10 left-20 w-14 opacity-30" />
      </section>

      {/* 🔹 About Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white">
        {/* Left - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-blue-600 text-white flex flex-col items-center justify-center rounded-2xl z-10 font-bold text-lg">
            <span className="transform -rotate-90 whitespace-nowrap">
              12+ YEARS EXPERIENCE
            </span>
          </div>
          <div className="ml-12 relative">
            <img
              src="/images/about-img-1.jpg"
              alt="Doctor with patient"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <img
              src="/images/about-img-2.jpg"
              alt="Medical team"
              className="absolute -top-8 -right-8 w-48 h-32 rounded-xl shadow-lg object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              About Us
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Committed to Your Care Every Step of the Way
          </h2>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            With a team of world-class doctors, experienced nurses, and dedicated
            healthcare professionals, we are committed to delivering
            compassionate, high-quality medical care to every patient.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Highly Qualified Specialists",
              "Advanced Medical Equipment",
              "Safe, Comfortable Environment",
              "24/7 Emergency Services",
              "Patient-Centered Approach",
              "Affordable, Transparent Pricing",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CEO Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/images/CEO.jpg"
                alt="CEO"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <p className="font-bold text-gray-900 text-lg">CEO, Founder Of</p>
                <p className="font-bold text-gray-900 text-lg">CarePoint</p>
              </div>
            </div>
            <div className="text-right">
              <div
                className="text-3xl font-bold text-gray-800 italic"
                style={{ fontFamily: "cursive" }}
              >
                Husnain Raja
              </div>
            </div>
          </div>

          <div className="inline-flex">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
              More About
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/images/about-img-3.jpg"
            alt="Why Choose Us"
            className="shadow-lg w-[70%] object-cover"
          />
          <img
            src="/images/about-img-4.jpg"
            alt="Why Choose Us Small"
            className="absolute -bottom-8 right-[15%] w-[35%] rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-blue-300 font-semibold mb-2 uppercase">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Where Compassion Meets Excellence
          </h2>
          <p className="text-gray-200 mb-6">
            That's why we are committed to delivering world-class medical
            services with compassion, innovation, and integrity.
          </p>

          <div className="space-y-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaUserMd size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Personalized Patient Care</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaHospitalUser size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">World-Class Medical Experts</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaHeartbeat size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Advanced Healthcare Services</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>
          </div>

          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition">
            APPOINTMENT NOW
          </button>
        </div>
      </section>

      {/* 🔹 Happy Patients */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
              Happy Patients
            </h2>
            <h3 className="text-blue-700 text-lg font-medium mb-4">Patients Says</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consec.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 rounded-xl shadow-lg relative"
          >
            <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
            <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={"/images/about-img-5.jpg"}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-blue-600 font-semibold text-sm md:text-base">
                  — {review.name}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Online Consultation */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500 text-xl">💙</span>
              <p className="text-blue-500 font-semibold uppercase tracking-wide">
                Your Health, Your Convenience
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Consult Your Doctor Online
              <br />
              <span className="relative">
                — Anytime, Anywhere
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gray-900 rounded"></div>
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Say goodbye to long queues and unnecessary travel. With our secure
              video consultation service, you can now talk to experienced doctors
              from the comfort of your home.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Speak with certified specialists in real time",
                "Easy appointment booking via mobile or web",
                "Private, secure, and confidential video calls",
                "Available 7 days a week, including evenings",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
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
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
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
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="absolute top-8 left-8 w-20 h-20 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-16 left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>

            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-300/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <img
                        src="/images/about-img-7.png"
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-blue-300/40"></div>
                  <div className="absolute inset-4 rounded-full border border-blue-200/30"></div>
                </div>
              </div>

              <div className="absolute bottom-0 right-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src="/images/about-img-7.png"
                        alt="Patient"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.945 2.945c.046.651.26 1.28.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.945 2.945 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.945-2.945 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976c.463-.465.677-1.094.723-1.745a3.066 3.066 0 012.945-2.945z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
