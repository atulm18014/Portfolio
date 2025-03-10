import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Menu from './components/Menu';
import PreLoader from './components/PreLoader';
import TechStack from './components/TechStack';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WhatIDo from './components/WhatIDo';
import TechStackPage from './pages/TechStackPage';

// Home page component to organize all home sections
const HomePage = () => {
  return (
    <motion.div
      className="px-5 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-6xl pt-28 sm:pt-32 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <TechStack />
    </motion.div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  return (
    <Router>
      <div className="min-h-screen bg-background text-secondary relative">
        {/* Background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
          
          {/* Subtle glow accents */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 mix-blend-screen filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/5 mix-blend-screen filter blur-[80px]"></div>
        </div>
        
        <AnimatePresence mode="wait">
          {isLoading && (
            <PreLoader 
              setIsLoading={setIsLoading} 
              setShowContent={setShowContent} 
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          {showContent && (
            <motion.div
              className="min-h-screen relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {!isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="sticky top-0 z-50"
                >
                  <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </motion.div>
              )}
              
              <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
              
              {/* Routes for page content */}
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/techstack" element={<TechStackPage />} />
                </Routes>
              </main>
              
              {!isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Footer />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
