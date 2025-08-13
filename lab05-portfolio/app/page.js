'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Charanjeet Kaur</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
            <li><a href="#hobbies" className="hover:text-teal-400">Hobbies</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hello, I'm Charanjeet Kaur
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">
          A passionate web developer creating modern applications.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400">
          I am a software developer skilled in JavaScript, React, and Next.js.
          This is my personal portfolio website built for my CPAN 212 Lab 5.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Experience</h3>
        <ul className="list-disc list-inside text-gray-400">
          <li>Developed full-stack applications using MERN stack</li>
          <li>Experience with Next.js and Tailwind CSS for modern web apps</li>
          <li>Built responsive UI and implemented API integrations</li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="p-10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Hobbies</h3>
        <ul className="list-disc list-inside text-gray-400">
          <li>Coding and exploring new technologies</li>
          <li>Photography and editing</li>
          <li>Reading tech blogs and self-improvement books</li>
          <li>Cooking and trying new recipes</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Project One</h4>
            <p className="text-gray-400">A cool project description.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Project Two</h4>
            <p className="text-gray-400">Another cool project description.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">
          Email me at: <span className="text-teal-400">kaurcharanjeet1808@gmail.com</span>
        </p>
      </section>
    </main>
  );
}
