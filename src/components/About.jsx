import { motion } from "framer-motion";

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
    <section id="about" className="py-20">
      <div className="mb-12">
        <motion.h2
          className="text-2xl font-bold mb-4 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-3xl mr-2">About Me</span>
          
        </motion.h2>
        <motion.div
          className="h-px bg-gray-800 w-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          className="md:col-span-2 text-secondary space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Hello! My name is Atul Maurya, a passionate Software Engineer
            focused on building scalable blockchain applications, enhancing
            decentralized user experiences, and optimizing smart contract
            development. With a strong interest in <b>Blockchain</b>,{" "}
            <b>Open Source Development</b>, and <b>Machine Learning</b>. I'm
            eager to contribute to innovative projects, collaborate with
            industry professionals, and drive the adoption of secure,
            transparent, and efficient blockchain solutions.
          </p>
          {/* <p>
            Fast-forward to today, and I've had the privilege of working at a
            <a href="#" className="text-accent">
              {" "}
              software agency
            </a>
            ,
            <a href="#" className="text-accent">
              {" "}
              a start-up
            </a>
            , and
            <a href="#" className="text-accent">
              {" "}
              a large corporation
            </a>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at{" "}
            <a href="#" className="text-accent">
              my company
            </a>{" "}
            for a variety of clients.
          </p> */}
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {technologies.map((tech, i) => (
              <motion.li
                key={i}
                className="flex items-center space-x-2 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <span className="text-accent">▹</span>
                <span>{tech}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-2 rounded-3xl border border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative rounded-3xl mt-1 overflow-hidden bg-gray-800">
            <img
              src="src/assets/img/atul.jpg"
              alt="Atul"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
