"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Project One",
    description: "A brief description of the first project, highlighting its purpose and key features.",
    image: "https://placehold.co/600x400/E2E8F0/333",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of the second project, highlighting its purpose and key features.",
    image: "https://placehold.co/600x400/CBD5E0/333",
    tags: ["TypeScript", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of the third project, highlighting its purpose and key features.",
    image: "https://placehold.co/600x400/94A3B8/333",
    tags: ["Vue.js", "Firebase", "SCSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <Link href={project.liveUrl} target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={24} />
                  </Link>
                  <Link href={project.githubUrl} target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
