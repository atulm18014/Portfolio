import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items with techstack changed to router type
  const navItems = [
    {name: 'home', type: 'scroll', to: '/' },
    { name: 'about', type: 'router', to: '/about' },
    { name: 'projects', type: 'router', to: '/projects' },
    { name: 'techstack', type: 'router', to: '/techstack' }, // Changed to router type and path
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled ? 'py-3 bg-background/80 backdrop-blur-md border-b border-border/30' : 'py-5 bg-transparent'}`}
    >
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-6xl flex items-center justify-between">
        <RouterLink 
          to="/" 
          className="text-xl cursor-pointer group"
        >
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary group-hover:text-accent transition-all duration-300"
          >
            &#47;&#47;<span className="text-accent">atul</span>.
          </motion.span> 
        </RouterLink>
        
        <motion.div 
          className="hidden md:flex items-center space-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {item.type === 'scroll' && isHomePage ? (
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-xl font-medium cursor-pointer capitalize text-muted hover:text-accent relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={item.to}
                  className="text-xl font-medium cursor-pointer capitalize text-muted hover:text-accent relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </RouterLink>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-xl py-1.5 px-4 border-accent/50"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1.5 items-end">
            <div className={`w-6 h-0.5 bg-primary transition-all transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-accent transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-primary transition-all transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
