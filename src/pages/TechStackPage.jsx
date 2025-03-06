import React from 'react';
import TechStack from '../components/TechStack';
import { motion } from 'framer-motion';

const TechStackPage = () => {
  return (
    <motion.div 
      className="px-5 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-6xl pt-6 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
 
      <TechStack isStandalone={true} />
    </motion.div>
  );
};

export default TechStackPage;
