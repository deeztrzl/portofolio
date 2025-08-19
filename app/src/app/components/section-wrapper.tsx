"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const sectionVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
  className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
