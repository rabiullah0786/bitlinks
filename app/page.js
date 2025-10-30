"use client"
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Home() {
  const texts = ["Fast and Secure", "Created by Rabiullah"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change speed if needed
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <main className="py-3 px-4 ">
      <motion.h1
        key={index} // हर बार नया animation trigger करेगा
        className="text-xl font-bold"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {texts[index]}
      </motion.h1>
    </main>
        

    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold `}>
            The best URL shortener in the Market
          </p>
          <p className="px-49 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        <div className=" flex justify-start relative">  
        <img src="https://img.freepik.com/free-vector/elegant-business-people-office-scene_24877-57739.jpg?ga=GA1.1.1388785423.1759513098&semt=ais_hybrid&w=740&q=80" alt="" />
        </div>

      </section>
    </main>
    </>
  );
}