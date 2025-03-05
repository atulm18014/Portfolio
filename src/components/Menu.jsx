import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
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
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-2xl font-medium hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 + 0.1 }}
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
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
