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
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </Link>
          <Link href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </Link>
          <Link href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
