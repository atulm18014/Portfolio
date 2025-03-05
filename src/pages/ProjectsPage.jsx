import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Decentralized Exchange',
      description: 'A fully functioning decentralized exchange built on Ethereum, enabling users to swap tokens, provide liquidity, and earn rewards.',
      tags: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
      image: '/images/projects/dex.jpg',
      liveLink: 'https://dex-example.com',
      githubLink: 'https://github.com/yourusername/dex',
      featured: true,
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description: 'A marketplace for creating, buying, selling, and trading NFTs with features like auctions, collections, and artist profiles.',
      tags: ['Next.js', 'TypeScript', 'Solidity', 'IPFS'],
      image: '/images/projects/nft.jpg',
      liveLink: 'https://nft-marketplace-example.com',
      githubLink: 'https://github.com/yourusername/nft-marketplace',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An application leveraging machine learning to generate high-quality content for blogs, marketing, and social media.',
      tags: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: '/images/projects/ai.jpg',
      liveLink: 'https://ai-generator-example.com',
      githubLink: 'https://github.com/yourusername/ai-generator',
      featured: false,
    },
    {
      id: 4,
      title: 'Smart Contract Audit Tool',
      description: 'An automated tool for analyzing and identifying vulnerabilities in Ethereum smart contracts.',
      tags: ['Node.js', 'Solidity', 'GraphQL', 'Docker'],
      image: '/images/projects/audit.jpg',
      liveLink: 'https://audit-tool-example.com',
      githubLink: 'https://github.com/yourusername/audit-tool',
      featured: false,
    },
    {
      id: 5,
      title: 'Decentralized Social Media',
      description: 'A censorship-resistant social platform built on blockchain technology with user-owned data and content.',
      tags: ['React', 'Node.js', 'IPFS', 'Ethereum'],
      image: '/images/projects/social.jpg',
      liveLink: 'https://decentral-social-example.com',
      githubLink: 'https://github.com/yourusername/decentral-social',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Analytics Dashboard',
      description: 'A comprehensive dashboard for tracking cryptocurrency investments, analyzing performance, and visualizing market trends.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      image: '/images/projects/dashboard.jpg',
      liveLink: 'https://crypto-dashboard-example.com',
      githubLink: 'https://github.com/yourusername/crypto-dashboard',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-sm text-muted"
          >
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Projects</span>
          </motion.div>
        </div>
        
        {/* Projects Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="subheading mb-3"
          >
            MY WORK
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
          >
            Recent <span className="text-accent">Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-secondary text-lg max-w-3xl"
          >
            Explore my portfolio of projects spanning web development, blockchain applications, and machine learning solutions. Each project represents a unique problem-solving approach and technical implementation.
          </motion.p>
        </motion.div>
        
        {/* Featured Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Featured Projects</h2>
          
          <div className="space-y-32">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-accent/10 opacity-30 rounded-lg"></div>
                    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-accent/20 to-transparent opacity-20"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background-lighter border border-border">
                      {/* Project image */}
                      <img
                        src={project.image || "https://via.placeholder.com/800x450?text=Project+Image"}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-secondary mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded bg-background-accent border border-border text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* All Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12">All Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded mb-4">
                  <img
                    src={project.image || "https://via.placeholder.com/400x225?text=Project+Image"}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                
                {/* Project Details */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 text-xs rounded bg-background-accent border border-border text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded bg-background-accent border border-border text-secondary">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-minimal text-sm"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-secondary text-sm"
                  >
                    Code →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Get In Touch Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 py-12 px-6 md:px-12 border border-border rounded-lg bg-background-lighter"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-secondary text-lg mb-8">I'm always open to discussing new projects or partnership opportunities.</p>
            <a 
              href="mailto:atulmaurya18.04@gmail.com" 
              className="btn btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectsPage;
