"use client";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-blue-600 mb-4">
              SK Abu Tahir
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              B.Tech IT Student & Full-Stack Developer passionate about creating 
              innovative web solutions. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SkAbuTahir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://github.com/SkAbuTahir/portfolio-website-SkAbuTahir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto: 36abustudy@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Blog", href: "#blog" },
                { name: "Resume", href: "/resume.pdf" },
                { name: "Achievements", href: "#achievements" },
                { name: "GitHub", href: "https://github.com/SkAbuTahir/portfolio-website-SkAbuTahir" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} SK Abu Tahir. Made with</span>
              <div className="mx-1">
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </div>
              <span>and lots of ☕</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            &quot;The best way to predict the future is to create it.&ldquo; - Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
}