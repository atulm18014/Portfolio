import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import atulImage from "../assets/img/atul.jpg";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-sm text-muted"
          >
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">About Me</span>
          </motion.div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20"
        >
          {/* Text Content */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="subheading mb-3"
            >
              ABOUT ME
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
            >
              Building <span className="text-accent">digital experiences</span>{" "}
              that matter.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-secondary text-lg mb-6"
            >
              I'm Atul, a passionate full-stack developer with a focus on
              Blockchain Development and Modern Web Technologies. With expertise
              in both front-end and back-end development, I create scalable,
              accessible, and high-performance digital solutions.
            </motion.p>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-accent/20 to-transparent opacity-30 blur-2xl"></div>
              <div className="absolute -inset-0.5 rounded-md bg-gradient-to-tr from-accent to-background-lighter opacity-20"></div>
              <div className="relative h-full w-full overflow-hidden rounded-md bg-background-lighter border border-border">
                {/* Replace with your actual profile image */}
                <img
                  src={atulImage}
                  alt="Atul Maurya"
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* My Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-6 text-secondary">
            <p>
              My technology journey began during my freshman year in B.Tech when
              I first explored computer systems and coding fundamentals. These
              early experiences sparked my ongoing commitment to creating
              digital solutions for meaningful problems.
            </p>
            <p>
              Now in my 3rd year of Computer Science, I've developed strong
              foundations in web development, gaining proficiency in both
              frontend and backend technologies. As the blockchain revolution
              continues to unfold, I've become fascinated by its potential to
              transform industries and have begun focusing some of my studies on
              blockchain development.
            </p>
            <p>
              Currently, I'm working to combine my growing expertise in
              traditional web development with my budding knowledge of
              blockchain technologies. My goal is to leverage these skills to
              create solutions that improve people's daily lives, enhance
              accessibility to essential services, and contribute to a more
              equitable digital future. I believe technology should serve
              humanity's fundamental needs, and I'm dedicated to developing
              applications that make a meaningful difference in how people live,
              work, and connect with one another.
            </p>
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="card group hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                Web Development
              </h3>
              <p className="text-muted mb-4">
                Building responsive, accessible, and performant web applications
                using modern frameworks and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  React
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Node.js
                </span>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="card group hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                Blockchain Development
              </h3>
              <p className="text-muted mb-4">
                Developing smart contracts and dApps on Ethereum and other
                blockchain platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Solidity
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Web3.js
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Hardhat
                </span>
              </div>
            </div>

            {/* Skill Card 3 */}
            <div className="card group hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                ML & Data Science
              </h3>
              <p className="text-muted mb-4">
                Applying machine learning algorithms to solve complex problems
                and extract insights from data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  Python
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  TensorFlow
                </span>
                <span className="px-2 py-1 text-xs rounded bg-background-accent border border-border text-secondary">
                  pandas
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education & Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Experience & Education
          </h2>

          <div className="space-y-8">
            {/* Timeline Item */}
            <div className="relative pl-8 border-l border-border pb-8">
              <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-accent"></div>
              <div>
                <span className="text-sm text-accent">Dec 2024 - Feb 2025</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">
                  Winter Internship - Indian Institute of Information Technology
                  Allahabad
                </h3>
                <p className="text-muted">
                  Implemented advanced geospatial analysis techniques for <b></b> Urban
                  area identification using Landsat-8 satellite data under Dr.
                  Triloki Pant's mentorship in the Department of Information
                  Technology.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="relative pl-8 border-l border-border pb-8">
              <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-border"></div>
              <div>
                <span className="text-sm text-accent">2019 - 2021</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">
                  Full Stack Developer - Web Solutions LLC
                </h3>
                <p className="text-muted">
                  Designed and implemented web applications using React and
                  Node.js. Collaborated with cross-functional teams to deliver
                  high-quality software solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="py-12 px-6 md:px-12 border border-border rounded-lg bg-background-lighter"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-secondary text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:atulmaurya18.04@gmail.com"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
