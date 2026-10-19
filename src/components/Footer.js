"use client";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm">
          © {new Date().getFullYear()} SK Abu Tahir
        </span>

        <div className="flex items-center gap-4">
          <a href="https://github.com/SkAbuTahir" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sk-abu-tahir-/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:abutahir.dev@gmail.com" className="hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-sm hover:text-white transition-colors"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
