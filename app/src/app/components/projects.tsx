"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SectionWrapper from './section-wrapper';

const projects = [
  {
    title: "JAGOTK.AI",
    description: "An RAG chatbot with multi-functionalities for identity verification and answering frequently asked questions. Actively and currently used by BPJS Ketenagakerjaan.",
    images: ["/images/jagotk1.jpg"],
    tags: ["Python", "LangChain", "Transformers", "FastAPI", "Uvicorn", "Docker"],
    liveUrl: null,
    githubUrl: null
  },
  {
    title: "Mechiu",
    description: "A Java-based, ocean-themed typing game designed for education and typing practice. This college project for our Object-Oriented Programming course won the 'Best Project' award.",
    images: ["/images/mechiu1.jpg", "/images/mechiu2.jpg", "/images/mechiu3.jpg"],
    tags: ["Java", "JavaFX"],
    liveUrl: null,
    githubUrl: "https://github.com/FactSwift/MecHiu"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
    >
      <div className="relative w-full h-48">
        {project.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-500 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ExternalLink size={24} />
            </Link>
          )}
          {project.githubUrl ? (
            <Link href={project.githubUrl} target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
              <Github size={24} />
            </Link>
          ) : (
            <span className="text-sm text-slate-500 dark:text-slate-400">Private Repository</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
