import React from 'react';
import TechStack from '../components/TechStack';
import { motion } from 'framer-motion';

const TechStackPage = () => {
  return (
    <motion.div 
      className="px-5 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-6xl pt-28 sm:pt-32 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12">
        <motion.p
          className="font-mono subheading mb-3 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          MY TOOLKIT
        </motion.p>
        
        <motion.h1 
          className="font-bebas text-5xl md:text-6xl lg:text-7xl mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies I Work With
        </motion.h1>
        
        <motion.p
          className="font-montserrat text-secondary text-lg max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          An overview of my technical expertise across various domains including frontend, backend, blockchain, 
          machine learning, and more.
        </motion.p>
      </div>
      
      <TechStack isStandalone={true} />
    </motion.div>
  );
};

export default TechStackPage;
