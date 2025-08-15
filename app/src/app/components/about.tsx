"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            About Me
          </h2>
          <div className="text-lg text-gray-600 space-y-4 text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Vivamus posuere, nulla quis consectetur feugiat, nunc augue suscipit nibh, non lacinia enim quam nec augue.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet magna in magna gravida euismod. Integer ut pharetra nisi. Nulla facilisi. Duis aliquet, erat non malesuada consequat, nibh erat tempus justo, vitae sodales sem erat et elit.
            </p>
          </div>
          <a
            href="[Your Google Drive CV Link]"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
