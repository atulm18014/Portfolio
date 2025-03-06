import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);
  
  // Categories remain the same
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];
  
  // Technologies remain the same
  const technologies = [
    // Frontend
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      category: 'frontend' 
    },
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
      category: 'frontend' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      category: 'frontend' 
    },
    // Fixed Tailwind CSS icon
    { 
      name: 'Tailwind CSS', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', 
      category: 'frontend' 
    },
    { 
      name: 'Next.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 
      category: 'frontend',
      darkMode: true
    },
    
    // Backend
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      category: 'backend' 
    },
    { 
      name: 'Express', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      category: 'backend',
      darkMode: true,
      invertColors: true  // Added invertColors property for Express
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
      category: 'backend' 
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 
      category: 'backend' 
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', 
      category: 'backend' 
    },
    { 
        name: 'SQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
        category: 'backend' 
      },

    // Blockchain
    { 
      name: 'Solidity', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', 
      category: 'blockchain',
      invertColors: true  // Added invertColors property for Solidity
    },
    // Fixed Ethereum icon
    { 
      name: 'Ethereum', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ethereum_Classic_Logo.svg', 
      category: 'blockchain' 
    },
    { 
      name: 'Web3.js', 
      icon: 'https://raw.githubusercontent.com/ChainSafe/web3.js/HEAD/assets/logo/web3js.svg', 
      category: 'blockchain' 
    },
    { 
      name: 'Hardhat', 
      icon: 'https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png', 
      category: 'blockchain' 
    },
    { 
      name: 'MetaMask', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg', 
      category: 'blockchain' 
    },
    
    // Programming Languages
    { 
      name: 'C', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', 
      category: 'languages' 
    },
    { 
      name: 'C++', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 
      category: 'languages' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      category: 'languages' 
    },
   
    
    // ML Libraries
    { 
      name: 'TensorFlow', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 
      category: 'ml' 
    },
    { 
      name: 'PyTorch', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 
      category: 'ml' 
    },
    { 
      name: 'scikit-learn', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', 
      category: 'ml' 
    },
    { 
      name: 'Pandas', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 
      category: 'ml' 
    },
    { 
      name: 'NumPy', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', 
      category: 'ml' 
    },
    
    // Tools & DevOps
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
      category: 'tools' 
    },
    { 
      name: 'Docker', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 
      category: 'tools' 
    },
    // Fixed AWS icon
    { 
      name: 'AWS', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 
      category: 'tools' 
    },
    { 
      name: 'GitHub', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
      category: 'tools',
      darkMode: true,
      invertColors: true  // Added invertColors property to invert GitHub logo
    },
    { 
      name: 'Figma', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
      category: 'tools' 
    }
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Only duplicate items for infinite scroll effect when "all" is selected
  const techToDisplay = activeCategory === 'all' 
    ? [...filteredTech, ...filteredTech]  // Duplicate for looping
    : filteredTech;  // No duplication for specific categories

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Reset scroll position when filtered tech changes
    scrollContainer.scrollLeft = 0;

    // Only setup infinite scrolling for "all" category
    if (activeCategory === 'all') {
      let animationId;
      let scrollPos = 0;
      const scrollSpeed = 0.5; // Pixels per frame - adjust for speed

      const scroll = () => {
        scrollPos += scrollSpeed;
        
        // Reset when we've scrolled through the first set of items
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        
        scrollContainer.scrollLeft = scrollPos;
        animationId = requestAnimationFrame(scroll);
      };

      // Start the animation
      animationId = requestAnimationFrame(scroll);

      // Pause animation on hover or touch
      const pauseAnimation = () => {
        cancelAnimationFrame(animationId);
      };

      const resumeAnimation = () => {
        animationId = requestAnimationFrame(scroll);
      };

      scrollContainer.addEventListener('mouseenter', pauseAnimation);
      scrollContainer.addEventListener('mouseleave', resumeAnimation);
      scrollContainer.addEventListener('touchstart', pauseAnimation);
      scrollContainer.addEventListener('touchend', resumeAnimation);

      // Clean up
      return () => {
        cancelAnimationFrame(animationId);
        scrollContainer.removeEventListener('mouseenter', pauseAnimation);
        scrollContainer.removeEventListener('mouseleave', resumeAnimation);
        scrollContainer.removeEventListener('touchstart', pauseAnimation);
        scrollContainer.removeEventListener('touchend', resumeAnimation);
      };
    }
  }, [filteredTech, activeCategory]);

  return (
    <section id="techstack" className="pt-24">
      <div className="mb-16 max-w-4xl">
        <motion.p
          className="subheading mb-3 font-bebas font-semibold text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          TOOLKIT
        </motion.p>
        
        <motion.h2 
          className="font-bebas mb-5 text-4xl md:text-5xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies
        </motion.h2>
        
        <motion.p
          className="font-montserrat text-secondary text-balance text-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I work with modern tech stacks across front-end, back-end, blockchain, and machine learning domains.
        </motion.p>
      </div>
      
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2 custom-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map((category, i) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 * i }}
            className={`px-5 py-2.5 text-lg font-medium rounded-md transition-all duration-300 whitespace-nowrap 
              ${activeCategory === category.id 
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-glow' 
                : 'bg-gray-800/30 text-gray-300 hover:bg-gray-800/60 hover:text-white'}`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Auto-scrolling tech logos container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Left edge fading effect - from black to transparent (right direction) */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-20 pointer-events-none"
            style={{ 
              background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
            }}
        ></div>
        <div className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none blur-md"
            style={{ 
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
            }}
        ></div>
        
        {/* Right edge fading effect - from black to transparent (left direction) */}
        <div className="absolute right-0 top-0 bottom-0 w-28 z-20 pointer-events-none"
            style={{ 
              background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
            }}
        ></div>
        <div className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none blur-md"
            style={{ 
              background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
            }}
        ></div>
   
        {/* Infinite scroll container - increased padding for all views */}
        <div 
          ref={scrollContainerRef}
          className={`flex items-center gap-10 py-8 overflow-x-auto scrollbar-none ${
            activeCategory !== 'all' ? 'justify-center flex-wrap' : ''
          } px-32`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {techToDisplay.map((tech, index) => {
            // Calculate distance from edges for all items
            let opacity = 1;
            
            if (activeCategory === 'all') {
              // Fade based on position for scrolling items
              const isEdgeItem = index < 3 || index > techToDisplay.length - 4;
              opacity = isEdgeItem ? 0.6 : 1;
            } else {
              // For wrapped items, calculate distance from container edges
              const position = index % 5; // Approximate position in row
              opacity = position === 0 || position === 4 ? 0.7 : 1;
            }
            
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group flex-shrink-0 relative"
                style={{ opacity }}
              >
                {/* Icon with hover effect */}
                <div className="relative">
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-accent/10 blur-lg transition-opacity duration-300"></div>
                  
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={`w-12 h-12 md:w-14 md:h-14 object-contain relative z-10 transition-all duration-300 
                      group-hover:scale-110 group-hover:opacity-100
                      ${tech.darkMode ? 'brightness-[1.2]' : ''}
                      ${tech.invertColors ? 'invert' : ''}`}
                    draggable="false"
                  />
                </div>
                
                {/* Tooltip name on hover */}
                <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                  group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-20">
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
