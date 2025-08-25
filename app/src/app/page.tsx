import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Contact from './components/contact';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://www.linkedin.com/in/zaidanahmad/" target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </Link>
          <Link href="https://github.com/FactSwift" target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </Link>
          <Link href="https://www.instagram.com/zaidanahm.ai/" target="_blank" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Zaidan Ahmad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
