import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '95%', icon: '/icons/html.png' },
    { name: 'CSS', level: '90%', icon: '/icons/css.png' },
    { name: 'JavaScript', level: '85%', icon: '/icons/javascript.png' },
    { name: 'React', level: '90%', icon: '/icons/react.png' },
    { name: 'Node.js', level: '80%', icon: '/icons/nodejs.png' },
    { name: 'MongoDB', level: '75%', icon: '/icons/mongodb.png' },
    { name: 'TypeScript', level: '80%', icon: '/icons/typescript.png' },
    { name: 'Tailwind CSS', level: '85%', icon: '/icons/tailwind.png' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Skills</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-tertiary p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-4" />
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="text-secondary">{skill.level}</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
