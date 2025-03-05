import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = ({ setIsLoading, setShowContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const greetings = [
    { text: "Hello" },
    { text: "नमस्ते" },
    { text: "こんにちは" },
    { text: "안녕하세요" },
    { text: "你好" },
    { text: "สวัสดี"  }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Add 0.5s delay before starting transition
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setShowContent(true);
          }, 500); // 0.5s delay before showing content
        }, 500); // 0.5s delay after last greeting
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, setIsLoading, setShowContent]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-new-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }}
    >
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ 
              opacity: 0, 
              x: 50,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-500 mb-2">
              {greetings[currentIndex].text}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PreLoader;
