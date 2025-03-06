import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated projects with real repositories data
  const projects = [
    {
      id: 1,
      title: 'Crypto-Vault',
      description: 'A secure cryptocurrency wallet application with multi-signature support, hardware wallet integration, and real-time market data. Features include transaction history, portfolio tracking, and enhanced security measures.',
      tags: ['React', 'Solidity', 'Web3.js', 'Hardhat', 'Ethers.js'],
      image: '/images/projects/crypto-vault.jpg',
      githubLink: 'https://github.com/atulm18014/crypto-vault',
      demoLink: 'https://crypto-vault-demo.netlify.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Smart-Contract-Security',
      description: 'A comprehensive collection of secure smart contract templates and security best practices for Ethereum blockchain developers. Includes vulnerability analysis, security patterns, and auditing tools.',
      tags: ['Solidity', 'Smart Contracts', 'Security', 'Ethereum', 'Auditing'],
      image: '/images/projects/smart-contract.jpg',
      githubLink: 'https://github.com/atulm18014/Smart-Contract-Security',
      featured: true,
    },
    {
      id: 3,
      title: 'DecShare',
      description: 'Decentralized file sharing platform using IPFS and Ethereum blockchain for secure, censorship-resistant content distribution. Supports file encryption, access control, and token-based incentives.',
      tags: ['React', 'IPFS', 'Ethereum', 'Node.js', 'FileCoin'],
      image: '/images/projects/decshare.jpg',
      githubLink: 'https://github.com/atulm18014/DecShare',
      featured: false,
    },
    {
      id: 4,
      title: 'NFT-Marketplace',
      description: 'A full-featured NFT marketplace with minting, trading, and auction functionality built on Ethereum. Includes creator royalties, collection management, and cross-chain compatibility.',
      tags: ['Next.js', 'Solidity', 'IPFS', 'TypeScript', 'ERC-721'],
      image: '/images/projects/nft-marketplace.jpg',
      githubLink: 'https://github.com/atulm18014/NFT-Marketplace',
      featured: false,
    },
    {
      id: 5,
      title: 'DeFi-Lending-Protocol',
      description: 'A decentralized lending protocol enabling users to lend and borrow cryptocurrencies with dynamic interest rates based on market conditions.',
      tags: ['Solidity', 'React', 'DeFi', 'Smart Contracts', 'Web3'],
      image: '/images/projects/defi-lending.jpg',
      githubLink: 'https://github.com/atulm18014/DeFi-Lending-Protocol',
      featured: false,
    },
    {
      id: 6,
      title: 'BlockVote',
      description: 'Secure and transparent voting system built on blockchain technology, ensuring tamper-proof election processes with verifiable results.',
      tags: ['Ethereum', 'Solidity', 'React', 'Zero-Knowledge Proofs'],
      image: '/images/projects/blockvote.jpg',
      githubLink: 'https://github.com/atulm18014/BlockVote',
      featured: false,
    },
    {
      id: 7,
      title: 'AI-Trading-Bot',
      description: 'Cryptocurrency trading bot using machine learning algorithms to analyze market trends and execute automated trading strategies.',
      tags: ['Python', 'TensorFlow', 'APIs', 'Data Analysis'],
      image: '/images/projects/ai-trading.jpg',
      githubLink: 'https://github.com/atulm18014/AI-Trading-Bot',
      featured: false,
    },
    {
      id: 8,
      title: 'Cross-Chain-Bridge',
      description: 'A bridge solution for transferring assets between different blockchain networks with focus on security and minimal transaction fees.',
      tags: ['Solidity', 'Polkadot', 'Cosmos', 'Interoperability'],
      image: '/images/projects/cross-chain.jpg',
      githubLink: 'https://github.com/atulm18014/Cross-Chain-Bridge',
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
            Explore my portfolio of blockchain and web development projects. Each project represents innovative solutions to complex challenges in the decentralized ecosystem.
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
                        src={project.image || `https://placehold.co/800x450/0D1117/58A6FF?text=${project.title.replace(/ /g, '+')}`}
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
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group overflow-hidden rounded-md px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transform group-hover:-translate-x-80 transition-all duration-1000 ease-out rounded-md"></span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="relative z-10">GitHub</span>
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden rounded-md px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="absolute inset-0 w-full bg-white opacity-0 group-hover:opacity-20 transform group-hover:-translate-x-full transition-all duration-1000 ease-out rounded-md"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span className="relative z-10">Live Demo</span>
                      </a>
                    )}
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
                className="card group hover:-translate-y-2 p-5 border border-gray-800 rounded-xl bg-gradient-to-b from-black to-gray-950"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 border border-gray-800">
                  <img
                    src={project.image || `https://placehold.co/400x225/0D1117/58A6FF?text=${project.title.replace(/ /g, '+')}`}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Project Details */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 text-xs rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-md bg-gray-800 border border-gray-700 text-gray-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-white bg-gray-800 rounded-md overflow-hidden group"
                  >
                    <span className="absolute w-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 left-0 top-0 group-hover:w-full transition-all duration-500 ease-out -z-10"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Get In Touch Section - FIXED */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 py-12 px-6 md:px-12 border border-border rounded-lg bg-background-lighter"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-secondary text-lg mb-8">I'm always open to discussing blockchain development, smart contract security, and innovative web3 projects.</p>
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
