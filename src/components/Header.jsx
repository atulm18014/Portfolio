import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4
      ${scrolled ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 mx-auto max-w-6xl flex items-center justify-between">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}
          className="text-lg font-mono cursor-pointer"
        >
          <span className="text-accent font-medium">&#47;&#47;atul.</span> 
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {['projects', 'about', 'contact'].map((item, i) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-sm hover-underline cursor-pointer capitalize"
            >
              <span className="text-accent font-mono text-xs mr-1">0{i+1}.</span> {item}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="py-2 px-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors text-sm"
          >
            Resume
          </a>
        </div>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1.5 items-end">
            <div className={`w-6 h-0.5 bg-primary transition-all transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-primary transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-primary transition-all transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
