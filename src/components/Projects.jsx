import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, title, description, tags, github, external, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group overflow-hidden hover:shadow-glow hover:border-accent/30 transition-all duration-500"
    >
      <div className="relative h-48 bg-background-alt overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img 
          src={image || "https://via.placeholder.com/600x400?text=Project"}
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-secondary mb-4 text-sm flex-grow line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-background-accent text-secondary border border-border">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Repository"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {external && (
            <a 
              href={external} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="External Link"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
          <span className="flex-1"></span>
          <a href={external || github} target="_blank" rel="noreferrer" className="btn-minimal text-xs">
            Learn more
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Financial Dashboard",
      description: "A comprehensive dashboard for tracking financial metrics.",
      tags: ["React", "D3.js", "Tailwind CSS"],
      github: "https://github.com/username/project1",
      external: "https://project1.com",
      // Fix image paths to use placeholder images until real ones are available
      image: "https://placehold.co/600x400/0D1117/58A6FF?text=Financial+Dashboard",
    },
    {
      title: "E-commerce Platform",
      description: "A feature-rich online shopping platform with product filtering, cart management, and secure checkout.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/username/project2",
      external: "https://project2.com",
      image: "https://placehold.co/600x400/0D1117/58A6FF?text=E-commerce+Platform",
    },
    {
      title: "Content Management System",
      description: "A flexible CMS built for content creators with customizable templates and markdown support.",
      tags: ["React", "GraphQL", "PostgreSQL"],
      github: "https://github.com/username/project3",
      external: "https://project3.com",
      image: "https://placehold.co/600x400/0D1117/58A6FF?text=Content+Management",
    },
    {
      title: "Productivity Timer",
      description: "A minimal Pomodoro timer application with task tracking and statistics to boost productivity.",
      tags: ["JavaScript", "CSS", "Firebase"],
      github: "https://github.com/username/project4",
      external: "https://project4.com",
      image: "https://placehold.co/600x400/0D1117/58A6FF?text=Productivity+Timer",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="mb-16">
        <motion.p
          className="subheading mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY WORK
        </motion.p>
        
        <motion.h2 
          className="heading mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>
        
        <motion.p
          className="text-secondary max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here's a selection of my recent work. These projects showcase my skills in both front-end and back-end development.
        </motion.p>
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
      
      {/* View All Projects Button - updated styling to match other buttons */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/projects" 
          className="btn btn-primary inline-flex items-center group px-6 py-3 shadow-md hover:shadow-glow"
        >
          <span className="mr-1">View All Projects</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <p className="text-muted mt-4 text-sm">Explore my complete portfolio of work</p>
      </motion.div>
    </section>
  );
};

export default Projects;
