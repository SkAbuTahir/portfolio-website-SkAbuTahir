"use client";// src/components/About.js
import { useRef } from "react";
import { Code, Database, Globe, Server, Brain, Cloud } from "lucide-react";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import { skillGroups } from "@/lib/data";

const skillIcons = [
  { icon: Code, color: "text-blue-500" },
  { icon: Globe, color: "text-cyan-500" },
  { icon: Database, color: "text-purple-500" },
  { icon: Server, color: "text-green-500" },
  { icon: Brain, color: "text-orange-500" },
  { icon: Cloud, color: "text-indigo-500" },
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
              Software Engineer building full-stack products and applied ML
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m pursuing B.Tech in Information Technology at Jalpaiguri Government
                Engineering College (expected 2028, SGPA 9.48/10). I work across React,
                Next.js, Node.js, PostgreSQL, and Supabase, and I apply deep learning
                with TensorFlow and PyTorch for computer vision and sequence models.
              </p>

              <p>
                Recent work includes a CNN-LSTM image captioning model at NIT Jamshedpur,
                a conference management platform at DeepDuo Foundation, and a CRM used by
                25+ internal users at IISPPR.
              </p>

              <p>
                Outside internships I contribute to JWOC, volunteer with JGEC Coders Club,
                and compete on CodeChef and Codeforces.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#projects"
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
            {skillGroups.map((skill, index) => {
              const Icon = skillIcons[index].icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${skillIcons[index].color}`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.items}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-800"
        >
          {[
            { number: "3", label: "Internships" },
            { number: "9.48", label: "SGPA / 10" },
            { number: "2028", label: "Expected Grad" },
            { number: "10+", label: "Technologies" },
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
