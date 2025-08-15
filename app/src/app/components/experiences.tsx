"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Software Engineer Intern",
    company: "Tech Company Inc.",
    time: "Jan 2023 - Dec 2023",
    description: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Participated in code reviews and contributed to improving code quality."
    ]
  },
  {
    position: "Front-End Developer",
    company: "Creative Agency",
    time: "Mar 2022 - Dec 2022",
    description: [
      "Designed and implemented responsive user interfaces for various clients.",
      "Optimized web performance and improved user experience.",
      "Worked closely with designers to translate mockups into functional components."
    ]
  }
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Experiences
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 flex items-center w-full"
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600">{exp.position}</h3>
                  <p className="text-md font-semibold text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.time}</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Briefcase size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
