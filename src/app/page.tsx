// import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import BlogPage from "@/components/blog";
import Achievements from "@/components/Achievements";
import Contacts from "@/components/Contact"
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      < Hero />
      <Experience />
      <Projects />
      <About />
      <BlogPage />
      <Achievements />
      <Contacts />
      <Footer />
    </>
  );
}
