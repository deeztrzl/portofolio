"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-200"
          style={{ fontFamily: 'var(--font-zilla-slab)' }}
        >
          Hi, I&apos;m Zaidan Ahmad
        </h2>
        <TypeAnimation
          sequence={[
            'ML Engineer',
            1000,
            'MLOps Engineer',
            1000,
            'Full Stack Developer',
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400"
          repeat={Infinity}
        />
        <div className="flex justify-center space-x-6 pt-4">
          <Link href="https://www.linkedin.com/in/zaidanahmad/" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <Linkedin size={28} />
          </Link>
          <Link href="https://github.com/FactSwift" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-300">
            <Github size={28} />
          </Link>
          <Link href="https://www.instagram.com/zaidanahm.ai/" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
            <Instagram size={28} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
