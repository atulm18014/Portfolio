import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import PreLoader from './components/PreLoader';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <PreLoader 
            setIsLoading={setIsLoading} 
            setShowContent={setShowContent} 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence mode='wait'>
        {showContent && (
          <motion.div
            className="bg-background min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </motion.div>
            )}
            <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
            <motion.main 
              className="px-4 sm:px-8 md:px-16 lg:px-24 mx-auto max-w-6xl pt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Hero />
              <Projects />
              <About />
              <Contact />
            </motion.main>
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Footer />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
