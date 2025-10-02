// import Image from 'next/image';
// import { Download, Mail, Github, Linkedin } from "lucide-react";

// export default function Hero() {

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Simple gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="text-center lg:text-left">
//             <div className="mb-8">
//               <Image
//                 src="https://avatars.githubusercontent.com/u/177408577?v=4"
//                 alt="SK Abu Tahir"
//                 width={128}
//                 height={128}
//                 className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-blue-500"
//               />
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold mb-4">
//               Hi, I&apos;m SK Abu Tahir
//             </h1>

//             <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
//               B.Tech IT Student | Full-Stack Developer
//             </h2>

//             <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
//               Passionate about creating innovative web solutions that make a difference. let&apos;s build something amazing together! 🚀
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a href="/resume.pdf" download className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
//                 <Download className="mr-2" size={20} />
//                 View Resume
//               </a>

//               <a href="#contact" className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300">
//                 <Mail className="mr-2" size={20} />
//                 Contact Me
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center lg:justify-start space-x-6 mt-8">
//               <a
//                 href="https://github.com/SkAbuTahir"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 <Github size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/sk-abu-tahir-/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 <Linkedin size={24} />
//               </a>
//             </div>
//           </div>


//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";// src/components/HeroSection.js
// import { useRef } from "react";
// import Image from "next/image";
// import { Download, Mail, Github, Linkedin } from "lucide-react";
// import useSmoothScroll from "@/hooks/useSmoothScroll";

// export default function HeroSection() {
//   // Refs for fade-in animations
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const buttonsRef = useRef(null);
//   const socialRef = useRef(null);
//   const scrollRef = useRef(null);

//   // Attach all refs to the reusable smooth scroll + fade-in hook
//   useSmoothScroll([
//     headingRef,
//     subheadingRef,
//     paragraphRef,
//     buttonsRef,
//     socialRef,
//     scrollRef,
//   ]);

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="text-center lg:text-left">
//             {/* Profile Image */}
//             <div className="mb-8">
//               <Image
//                 src="https://avatars.githubusercontent.com/u/177408577?v=4"
//                 alt="SK Abu Tahir"
//                 width={128}
//                 height={128}
//                 className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-blue-500"
//               />
//             </div>

//             {/* Headings */}
//             <h1
//               ref={headingRef}
//               className="text-5xl lg:text-7xl font-bold mb-4 opacity-0 transform translate-y-8 transition-all duration-1000"
//             >
//               Hi, I&apos;m SK Abu Tahir
//             </h1>

//             <h2
//               ref={subheadingRef}
//               className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200"
//             >
//               B.Tech IT Student | Full-Stack Developer
//             </h2>

//             <p
//               ref={paragraphRef}
//               className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl opacity-0 transform translate-y-8 transition-all duration-1000 delay-400"
//             >
//               Passionate about creating innovative web solutions that make a
//               difference. Let&apos;s build something amazing together! 🚀
//             </p>

//             {/* Buttons */}
//             <div
//               ref={buttonsRef}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 transform translate-y-8 transition-all duration-1000 delay-600"
//             >
//               <a
//                 href="/resume.pdf"
//                 download
//                 className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <Download className="mr-2" size={20} />
//                 View Resume
//               </a>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300"
//               >
//                 <Mail className="mr-2" size={20} />
//                 Contact Me
//               </a>
//             </div>

//             {/* Social Links */}
//             <div
//               ref={socialRef}
//               className="flex justify-center lg:justify-start space-x-6 mt-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-800"
//             >
//               <a
//                 href="https://github.com/SkAbuTahir"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 <Github size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/sk-abu-tahir-/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 <Linkedin size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         ref={scrollRef}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-1000"
//       >
//         <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/177408577?v=4"
                alt="SK Abu Tahir"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-blue-500"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              Hi, I&apos;m SK Abu Tahir
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            >
              B.Tech IT Student | Full-Stack Developer
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about creating innovative web solutions that make a
              difference. Let&apos;s build something amazing together! 
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                View Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <a
                href="https://github.com/SkAbuTahir/personal_portfolio_website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sk-abu-tahir-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
