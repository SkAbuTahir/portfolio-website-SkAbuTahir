"use client";// src/components/About.js
import { use, useRef } from "react";
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const skills = [
  { name: "Frontend Development", icon: Globe, color: "text-blue-500" },
  { name: "Backend Development", icon: Server, color: "text-green-500" },
  { name: "Database Design", icon: Database, color: "text-purple-500" },
  { name: "DSA C/C++", icon: Code, color: "text-yellow-500" },
  { name: "UI/UX Design", icon: Palette, color: "text-orange-500" },
  { name: "Full-Stack Solutions", icon: Code, color: "text-indigo-500" },
];

export default function About() {
  // Refs for fade-in animation
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const aboutTextRef = useRef(null);
  const skillsRef = useRef(null);
  const statsRef = useRef(null);

  // Attach all refs to the reusable smooth scroll hook
  useFadeInOnScroll([headingRef, dividerRef, aboutTextRef, skillsRef, statsRef]);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl lg:text-5xl font-bold opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            About Me
          </h2>
          <div
            ref={dividerRef}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full opacity-0 transform translate-y-8 transition-all duration-1000 delay-200"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div
            ref={aboutTextRef}
            className="about-text opacity-0 transform translate-y-8 transition-all duration-1000 delay-400"
          >
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Hey there! I&apos;m a passionate developer who loves turning ideas into reality
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                My name is Sk Abu Tahir. I am from Barasat, district North 24 parganas. I passed secondary examination from Barasat Mahatma Gandhi Memorial High school affiliated to  WEST BENGAL BOARD OF SECONDARY EDUCATION  with 92 percent marks in the year 2022. I passed higher secondary examination from same school with 71 percent marks in the year 2024. I appeared for West Bengal Joint Entrance Examination in the year 2024 and obtained 6090 rank. Then I appeared for online counselling of West Bengal Joint Entrance Examination.There I got an opportunity to study in Information technology department in Jalpaiguri Government Engineering College Autonomous. 
              </p>

              <p>
                I thrive on challenges and love the problem-solving aspect of development. 
                Whether it&apos;s building responsive web applications, designing intuitive user 
                interfaces, or architecting robust backend systems, I approach each project 
                with enthusiasm and attention to detail.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, participating 
                in hackathons, or sharing knowledge with fellow developers. I believe in the 
                power of collaboration and continuous learning! 
              </p>
            </div>

            <div className="mt-8">
              <a
                href="..#projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Skills Grid */}
          <div
            ref={skillsRef}
            className="grid grid-cols-2 gap-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${skill.color}`}>
                  <skill.icon size={32} />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-800"
        >
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "3+", label: "Years Learning" },
            { number: "5+", label: "Technologies" },
            { number: "100%", label: "Passion Level" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
