import React from 'react';
import { motion } from 'framer-motion';

const serviceCards = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    title: "Web Development",
    description: "Building responsive, performant web applications with React, Next.js, and modern frontend technologies."
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Backend Development",
    description: "Creating scalable backend systems with Node.js, Express, MongoDB, PostgreSQL and RESTful APIs."
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: "Blockchain Development",
    description: "Developing smart contracts, dApps, and Web3 integrations using Ethereum, Solidity, and related technologies."
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    title: "AI & ML Integration",
    description: "Implementing machine learning models and AI services into applications for enhanced functionality and analytics."
  }
];

const WhatIDo = () => {
  return (
    <section className="py-24" id="services">
      <div className="mb-16">
        <motion.p
          className="subheading mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY SERVICES
        </motion.p>
        
        <motion.h2 
          className="heading mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What I <span className="text-accent">Do</span>
        </motion.h2>
        
        <motion.p
          className="text-secondary max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I specialize in creating digital solutions that combine technical excellence with intuitive user experiences.
          Here are the core services I offer:
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceCards.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1 + 0.3
            }}
            className="card group hover:shadow-glow border-border hover:border-accent/20 transition-all duration-500"
          >
            <div className="bg-background-accent rounded-full w-14 h-14 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/10 transition-colors duration-500">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-secondary text-sm leading-relaxed">
              {service.description}
            </p>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center text-xs text-muted">
                <span className="mr-2">Technologies used:</span>
                <div className="flex space-x-2 opacity-70">
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-accent"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom gradient line */}
      <motion.div 
        className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      ></motion.div>
    </section>
  );
};

export default WhatIDo;
