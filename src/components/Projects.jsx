import { motion } from 'framer-motion';

const ProjectCard = ({ index, title, description, tags, github, external, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-background border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 bg-gray-800 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-secondary mb-4 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-accent font-mono">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {external && (
            <a href={external} target="_blank" rel="noreferrer" aria-label="External Link">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Financial Dashboard",
      description: "A comprehensive dashboard for tracking financial metrics and visualizing data trends with interactive charts.",
      tags: ["React", "D3.js", "Tailwind CSS"],
      github: "https://github.com/username/project1",
      external: "https://project1.com",
      image: "/projects/project1.jpg",
    },
    {
      title: "E-commerce Platform",
      description: "A feature-rich online shopping platform with product filtering, cart management, and secure checkout.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/username/project2",
      external: "https://project2.com",
      image: "/projects/project2.jpg",
    },
    {
      title: "Content Management System",
      description: "A flexible CMS built for content creators with customizable templates and markdown support.",
      tags: ["React", "GraphQL", "PostgreSQL"],
      github: "https://github.com/username/project3",
      external: "https://project3.com",
      image: "/projects/project3.jpg",
    },
    {
      title: "Productivity Timer",
      description: "A minimal Pomodoro timer application with task tracking and statistics to boost productivity.",
      tags: ["JavaScript", "CSS", "Firebase"],
      github: "https://github.com/username/project4",
      external: "https://project4.com",
      image: "/projects/project4.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <motion.h2 
          className="text-2xl font-bold mb-4 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-3xl mr-2">Some Things I've Built</span> 
          
        </motion.h2>
        <motion.div 
          className="h-px bg-gray-800 w-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
