import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lg text-orange-500 font-mono mb-3">
          Hi, my name is
        </h1>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4">
          Atul Maurya
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mb-8">
          <TypeAnimation
            sequence={[
              "I build things for the web.",
              2000,
              "I contribute in Open Source.",
              2000,
              "#Web 3.0",
              2000,
            ]}
            wrapper="span"
            speed={50} // typing speed in milliseconds
            repeat={Infinity}
            cursor={true}
            className="text-purple-500" // Add this class for white cursor
            style={{
              display: "inline-block",
              caretColor: "white", // Ensure cursor is white
            }}
          />
        </h3>
        <p className="text-secondary max-w-4xl text-lg mb-12">
          I'm deeply passionate about technology, with particular interests in{" "}
          <b>Blockchain</b>, <b>Open Source Development</b>, and{" "}
          <b>Machine Learning</b>. I'm eager to contribute to impactful projects
          and connect with professionals in these fields to further enhance my
          technical skills and create meaningful solutions.
        </p>
        <div>
          <Link
            to="/projects"
            className="px-7 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors inline-block"
          >
            Check out my work
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
