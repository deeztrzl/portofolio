"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import SectionWrapper from './section-wrapper';

const experiences = [
  {
    position: "Machine Learning Engineer Intern",
    company: "BPJS Ketenagakerjaan",
    time: "Jul 2025 - Aug 2025",
    description: [
      "Developed a functional prototype, JAGOTK.AI, an RAG-based chatbot.",
      "Integrated with an identity database and embedded FAQ documents.",
      "The system utilizes OCR and facial comparison to assist users."
    ],
    images: ['/images/ptk1.jpg']
  },
  {
    position: "Head of Science and Technology Research Department",
    company: "HIMATRONIKA-AI",
    time: "Dec 2024 - Present",
    description: [
      "Led the department in organizing campus-wide competitions.",
      "Conducted research initiatives and developing robotics innovations."
    ],
    images: ['/images/keristek1.jpg']
  },
  {
    position: "Staff of Study and Research Department",
    company: "HIMATRONIKA-AI",
    time: "Jan 2024 - Dec 2024",
    description: [
      "Contributed to various innovation projects.",
      "Actively participated in community service volunteering."
    ],
    images: ['/images/sturi1.jpg']
  }
];

const Experiences = () => {
  return (
    <SectionWrapper id="experiences" className="bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 text-center mb-12">
          Experiences
        </h2>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-slate-700 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center"
              >
                <div className={`mb-4 lg:mb-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  {exp.images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${exp.position} at ${exp.company}`}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full"
                    />
                  ))}
                </div>
                <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-5 items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white">
                    <Briefcase size={20} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.position}</h3>
                    <p className="text-md font-semibold text-slate-700 dark:text-slate-300">{exp.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.time}</p>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experiences;
