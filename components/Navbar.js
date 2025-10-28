"use client";
import React, { useState } from "react";
import Link from "next/link";
import LoginButton from "@/components/LoginButton"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-4 items-center text-white relative">
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-6 items-center">
        <Link href="/"><li className="hover:text-gray-300">Home</li></Link>
        <Link href="/about"><li className="hover:text-gray-300">About</li></Link>
        <Link href="/shorten"><li className="hover:text-gray-300">Shorten Url</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"></Link>

          {/* <Link href="/github">
            <button className="bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-1 font-bold">
              Sign up
            </button>
          </Link> */}
          {/* <Link href="/Login">
            <button className="bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-1 font-bold">
              Login
            </button>
          </Link> */}

          <LoginButton />


        </li>
      </ul>


      {/* ✅ Hamburger Button (Mobile only) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col space-y-1 z-50"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-700 flex flex-col items-center gap-4 py-4 md:hidden z-40 transition-all duration-300">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-gray-300">Home</li>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-gray-300">About</li>
          </Link>
          <Link href="/shorten" onClick={() => setMenuOpen(false)}>
            <li className="hover:text-gray-300">Shorten</li>
          </Link>
          {/* <li className="flex flex-col gap-2">
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-1 font-bold">
                Sign up
              </button>
            </Link>
            <Link href="/github" onClick={() => setMenuOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-1 font-bold">
                Login
              </button>
            </Link>
          </li> */}

          <LoginButton />
        </ul>


      )}
    </nav>
  );
};

export default Navbar;
