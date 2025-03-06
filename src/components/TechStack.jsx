import { motion } from 'framer-motion';
import { useState } from 'react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Updated categories with blockchain and languages
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];
  
  // Updated technologies with fixed icon URLs
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
      darkMode: true
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
      category: 'blockchain' 
    },
    // Fixed Ethereum icon
    { 
      name: 'Ethereum', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ethereum_Classic_Logo.svg', 
      category: 'blockchain' 
    },
    { 
      name: 'Web3.js', 
      icon: 'https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png', 
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
      darkMode: true
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

  return (
    <section id="techstack" className="py-24">
      <div className="mb-16 max-w-3xl">
        <motion.p
          className="font-mono subheading mb-3 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          TOOLKIT
        </motion.p>
        
        <motion.h2 
          className="font-bebas mb-5 text-5xl md:text-6xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies
        </motion.h2>
        
        <motion.p
          className="font-montserrat text-secondary text-balance text-lg font-light"
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
        className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-2 custom-scrollbar" // Increased gap and bottom margin
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
            className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap 
              ${activeCategory === category.id 
                ? 'bg-accent/90 text-white font-medium shadow-glow' 
                : 'bg-background-lighter border border-border hover:border-accent/20'}`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Tech Grid - reduced card size */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" // Adjusted grid columns and gap
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.03 * (index % 15) }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 5px 15px rgba(255, 107, 53, 0.1)',
              borderColor: 'rgba(255, 107, 53, 0.3)',
            }}
            className="glass-card flex flex-col items-center justify-center py-6 px-4 group aspect-square"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center relative"> {/* Reduced from w-16 h-16 */}
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-accent/5 blur-md transition-opacity duration-500"></div>
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={`w-14 h-14 object-contain relative z-10 transition-all duration-300 group-hover:scale-110 ${tech.darkMode ? 'brightness-[1.15]' : ''}`} // Reduced from w-14 h-14
              />
            </div>
            <span className="font-medium text-sm text-muted group-hover:text-primary transition-colors duration-300 text-center mt-2"> {/* Reduced from text-sm */}
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
