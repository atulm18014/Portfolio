import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
// Import directly - this is more reliable
import atulImage from '../assets/img/atul.jpg';

const About = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "GraphQL",
    "Firebase",
  ];

  return (
    <section id="about" className="py-24">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-md bg-accent/5 opacity-30 blur-2xl -z-10"></div>
            <div className="absolute -inset-0.5 rounded-md bg-gradient-to-tr from-accent/20 to-transparent opacity-20 -z-10"></div>
            <div className="relative h-full w-full overflow-hidden rounded-md bg-background-lighter border border-border">
              {/* Use direct import for more reliable handling */}
              <img 
                src={atulImage} 
                alt="Atul Maurya" 
                className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h2 className="subheading mb-2">ABOUT ME</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Developing innovative <span className="text-accent">digital solutions</span> for tomorrow.</h3>
          
          <p className="text-secondary mb-4">
            I'm a full-stack developer with a passion for blockchain technology. With expertise spanning web development, smart contracts, and decentralized applications, I'm dedicated to creating user-centered digital experiences.
          </p>
          
          <p className="text-secondary mb-6">
            My technical journey has equipped me with a deep understanding of both front-end and back-end technologies, allowing me to build complete solutions from concept to deployment.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Frontend</h4>
              <ul className="text-muted space-y-1">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Backend</h4>
              <ul className="text-muted space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>MongoDB & SQL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Blockchain</h4>
              <ul className="text-muted space-y-1">
                <li>Solidity</li>
                <li>Web3.js</li>
                <li>Hardhat & Truffle</li>
              </ul>
            </div>
          </div>
          
          <Link 
            to="/about" 
            className="btn btn-outline self-start flex items-center group"
          >
            <span>Read More About Me</span>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
