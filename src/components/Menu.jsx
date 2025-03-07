import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Menu items with proper navigation type
  const menuItems = [
    { name: 'Home', type: 'router', to: '/' },
    { name: 'Projects', type: 'router', to: '/projects' }, // Changed to router type
    { name: 'About', type: 'router', to: '/about' },
    { name: 'Tech Stack', type: 'scroll', to: 'techstack' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-sm min-h-screen flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  {(item.type === 'scroll' && isHomePage) ? (
                    <ScrollLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-2xl font-medium hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      className="text-2xl font-medium hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </RouterLink>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 + 0.1 }}
              >
                <a 
                  href="https://drive.google.com/file/d/1QggIUcOOGFWF2VwGPIS30w2-_W0Sh5A5/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 py-2 px-6 border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
                >
                  Resume
                </a>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
