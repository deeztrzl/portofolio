"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-gray-800">
          Hi, I'm John Doe
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          A Passionate Front-End Developer
        </p>
        <div className="flex justify-center space-x-6 pt-4">
          <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
            <Linkedin size={28} />
          </Link>
          <Link href="#" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
            <Github size={28} />
          </Link>
          <Link href="#" target="_blank" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
            <Instagram size={28} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
