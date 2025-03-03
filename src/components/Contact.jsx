import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-4">
      <div className="mb-12">
        <motion.h2 
          className="text-2xl font-bold mb-4 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span 
            className="text-accent font-mono text-3xl mr-2 relative group"
          >
            What's Next?
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </span>
        </motion.h2>
        <motion.div 
          className="h-px bg-gray-800 w-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
      </div>
      
      <motion.div 
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-secondary mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want 
          to say hello, I'll do my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@example.com" 
          className="px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors inline-block"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
