import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import images directly to ensure they work in production
import regitrustImage from '../assets/img/regitrust.png';
import ghgImage from '../assets/img/ghg.png';
import astitvaImage from '../assets/img/astitva.png';
import clearifyImage from '../assets/img/clearify.png';

const ProjectCard = ({ index, title, description, tags, github, external, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:-translate-y-2 p-5 border-2 border-gray-700/50 hover:border-gray-600 rounded-xl 
        bg-gradient-to-b from-black to-gray-950 transition-all duration-500 
        shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_25px_rgba(0,0,0,0.3)]"
    >
      {/* Project Image with improved loading and error handling */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 border border-gray-800">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = `https://placehold.co/600x400/0D1117/58A6FF?text=${title.replace(/ /g, '+')}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>
      
      {/* Project Details */}
      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-muted text-lg mb-4 ">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-2 py-0.5 text-sm rounded-md bg-gray-800 border border-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3">
        {github && (
          <a
            href={github}
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
        )}
        
        {/* Demo Button - Only shown when external link is provided */}
        {external && (
          <a
            href={external}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute -inset-10 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur-xl group-hover:opacity-50 group-hover:blur-md transition-all duration-500"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110 group-hover:rotate-12">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Updated with properly imported images
  const projects = [
    {
      title: "RegiTrust",
      description: "A blockchain-powered land registry system that enhances security, transparency, and efficiency in recording property ownership and transactions while preventing fraud, scams, and illegal encroachments.",
      tags: ["Dart", "Polygon", "Flutter", "MetaMask"],
      github: "https://github.com/atulm18014/RegiTrust",
      image: regitrustImage,  // Use imported image
    },
    {
      title: "SmartCity Dashboard",
      description: "An advanced GHG emissions monitoring system that provides real-time data, analytics, and insights to promote sustainability, reduce carbon footprints, and enhance smart city environmental management.",
      tags: ["React", "Node.js", "Python", "AI"],
      github: "https://github.com/atulm18014/SmartcityDashboard",
      image: ghgImage,  // Use imported image
    },
    {
      title: "Astiva-24",
      description: "Astitva is a vibrant college cultural and technical fest that blends innovation, creativity, and talent, featuring futuristic tech competitions, mesmerizing cultural performances, and an electrifying space-themed experience.",
      tags: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/atulm18014/astitva-24",
      external: "https://astitva-24.netlify.app/",
      image: astitvaImage,  // Use imported image
    },
    {
      title: "Clearify",
      description: "An AI-powered image noise reduction tool leveraging deep learning, computer vision, and GAN-based denoising techniques to enhance image clarity while preserving details, making it ideal for photography, surveillance, and medical imaging.",
      tags: ["React", "Tailwind", "Python"],
      github: "https://github.com/atulm18014/NFT-Marketplace",
      external: "https://clearify-blue.vercel.app/",
      image: clearifyImage,  // Use imported image
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mb-16">
        <motion.p
          className="subheading mb-2 font-bebas font-semibold text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY WORK
        </motion.p>
        
        <motion.h2 
          className="heading mb-8 text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>
      
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>
      
      {/* View All Projects Button */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/projects" 
          className="relative group overflow-hidden rounded-md px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
        >
          <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transform group-hover:-translate-x-80 transition-all duration-1000 ease-out rounded-md"></span>
          <span className="relative z-10 text-xl">View All Projects</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <p className="text-muted mt-4 text-lg">Explore my complete portfolio of work</p>
      </motion.div>
    </section>
  );
};

export default Projects;
