"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl w-full text-center border border-white/20 p-10"
      >
        {/* Profile Image */}
        <motion.img
          src="rabiullah.jpg"
          alt="Rabiullah Ansari"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white/30 shadow-lg mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        {/* Name and Title */}
        <h1 className="text-4xl font-bold mb-2 tracking-wide">
          Rabiullah Ansari
        </h1>
        <p className="text-lg text-white/90 mb-6">
          🎓 Student at{" "}
          <span className="font-semibold text-yellow-300">
            Sidharth University
          </span>
        </p>

        {/* Bio */}
        <p className="text-base text-white/80 leading-relaxed mb-8">
          I’m a <span className="text-yellow-200 font-semibold">hardworking </span> 
           and <span className="text-yellow-200 font-semibold">smart</span> individual who 
          loves solving real-world problems using technology.  
          I’m passionate about web development and enjoy creating elegant 
          and functional applications with <span className="text-sky-300 font-semibold">Next.js</span>, 
          React, and MongoDB.
        </p>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Next.js", "React", "MongoDB", "Tailwind CSS", "JavaScript", "Git", "C-language", "Python" ].map(
            (skill) => (
              <span
                key={skill}
                className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-indigo-900 transition-all cursor-default"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:rabiullaha02@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-300 text-indigo-700 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-all"
          >
            Contact Me
          </motion.a>

          <Link
            href="/"
            className="bg-white/20 px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all"
          >
            Home
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-8 text-white/70 text-sm">
        © {new Date().getFullYear()} Rabiullah Ansari | Built with ❤️ using Next.js
      </footer>
    </div>
  );
}
