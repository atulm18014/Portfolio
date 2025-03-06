import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import atulImage from "../assets/img/atul.jpg";

// Timeline Item Component with animated dot
const TimelineItem = ({ date, title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px -100px 0px" });
  
  return (
    <div ref={ref} className="relative pl-8 border-l border-border pb-8">
      <motion.div 
        className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-accent"
        initial={{ scale: 0.5, opacity: 0.2 }}
        animate={isInView ? 
          { scale: 1.2, opacity: 1, boxShadow: "0 0 10px 2px rgba(255, 107, 53, 0.7)" } : 
          { scale: 0.5, opacity: 0.2 }
        }
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div>
        {date && (
          <span className="font-bebas font-semibold text-lg text-accent">
            {date}
          </span>
        )}
        <h3 className="text-2xl font-semibold mt-1 mb-2">
          {title}
        </h3>
        <p className="text-muted text-lg">
          {children}
        </p>
      </div>
    </div>
  );
};

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
              className="subheading mb-3 font-bebas font-semibold text-lg"
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
              className="text-secondary text-xl mb-6"
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

        {/* Skills & Expertise */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="card group hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                Web Development
              </h3>
              <p className="text-muted mb-4 text-xl">
                Building responsive, accessible, and performant web applications
                using modern frameworks and best practices.
              </p>
              <div className="flex flex-wrap gap-2 text-lg">
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
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                Blockchain Development
              </h3>
              <p className="text-muted mb-4 text-xl">
                Developing smart contracts and DApps on Ethereum and other
                blockchain platforms.
              </p>
              <div className="flex flex-wrap gap-2 text-lg">
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
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                ML & Data Science
              </h3>
              <p className="text-muted mb-4 text-xl">
                Applying machine learning algorithms to solve complex problems
                and extract insights from data.
              </p>
              <div className="flex flex-wrap gap-2 text-lg">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience, Education & Extracurricular
          </h2>

          <div className="space-y-8">
            {/* Replace each timeline item with the new TimelineItem component */}
            <TimelineItem 
              date="Dec 2024 - Feb 2025"
              title="Research Internship - Indian Institute of Information Technology Allahabad (IIITA)"
            >
              Implemented advanced geospatial analysis techniques for{" "}
              <b>Urban area identification</b> for the area of{" "}
              <b>Prayagraj</b> using Landsat-8 satellite data under{" "}
              <b>Dr. Triloki Pant's</b> mentorship in the{" "}
              <b>Department of Information Technology</b>.
            </TimelineItem>
            
            <TimelineItem 
              date="Aug 2024 - Oct 2024"
              title="Buzz on Earth Hackathon - BuzzOnEarth India X Intel"
            >
              Led a team of four in a 2-month hackathon
              organized by <b> BuzzOnEarth</b> in collaboration with <b> Intel</b>, <b>IIT
              Kanpur</b>. <br />
              Progressed through 2 selection rounds, securing a spot
              among the <b>Top 22 teams Nationwide</b>. <br />
              Developed solutions addressing <b>Greenhouse Gas Emissions</b>,
              with <b>on-site evaluation</b> by industry experts.
            </TimelineItem>

            <TimelineItem 
              date="June 2024"
              title="Sprint Hack - KIET Noida"
            >
              Participated in <b>Sprint Hack'24</b>, a <b>24-hour hackathon</b>{" "}
              conducted by <b>KIET Noida X GDSC KEIT</b>. <br />
              Developed a <b>Blockchain-based solution</b>, securing a{" "}
              <b>Top 5 position in the Blockchain domain</b> and recognition
              for <b>best Design</b>. <br />
              Worked as a <b>Frontend Developer</b>, managing{" "}
              <b>Blockchain protocols</b> in a team of four.
            </TimelineItem>

            <TimelineItem 
              date="May 2024"
              title="Git and GitHub Workshop - United Institute of Technology, Prayagraj (UIT)"
            >
              Conducted a <b>Hands-on workshop</b> for 2nd-year students as
              a speaker and DSC Campus Ambassador. <br /> Covered{" "}
              <b>Version control, branching, Merging, Pull requests</b>, and{" "}
              <b>Open-Source Contributions</b>, providing practical guidance
              and experience.
            </TimelineItem>
            
            <TimelineItem 
              date="Nov 2023 - Ongoing"
              title="DSC Secretary"
            >
              Served as a <b>Campus Ambassador</b> for 1.5 years and now serving as <b>DSC Secretary</b>{" "}
              , promoting{" "}
              <b>Tech Communities and Events</b>. <br />
              Organized <b>Tech Meetups, Webinars, and Coding Sessions</b> to
              engage students. <br />
              Represented the institution in{" "}
              <b>National and International Hackathons</b>.
            </TimelineItem>

            <TimelineItem 
              date="March-2023"
              title="U Hack'2.0 - United College of Research and Engineering (UCER)"
            >
              Secured a <b>Top 10 position</b> in <b>U Hack</b>, conducted by{" "}
              <b>United College of Research and Engineering</b>. <br />
              Developed an <b>Clearify - Image Noice reducing AI </b> and presented it to{" "}
              <b>authorities and experts</b>. <br />
              Contributed as a <b>Frontend and ML Developer</b> in a{" "}
              <b>team of five</b>, gaining hands-on experience with new{" "}
              <b>technologies</b>. <br />
              Recognized for <b>innovation and technical implementation</b>.
            </TimelineItem>

            <TimelineItem 
              title="ML Workshop & TFUG Prayagraj Experience"
            >
              Gained <b>hands-on experience</b> in <b>Machine Learning</b>{" "}
              through a workshop by <b>TFUG Prayagraj</b>. <br />
              Explored various <b>AI/ML technologies</b> and participated in{" "}
              <b>Kaggle competitions</b>, securing a spot among the{" "}
              <b>top 10 scorers</b>. <br />
            </TimelineItem>

            <TimelineItem 
              title="Bug Hunt"
            >
              Organized a <b>competitive bug bounty program</b>, identifying
              and resolving vulnerabilities in{" "}
              <b>web applications and software systems</b>. <br />
              Utilized tools like{" "}
              <b>Safe Exam Browser, HackerRank, and quiz platforms</b> for
              execution. <br />
              Managed <b>100+ participants</b>, coordinated with{" "}
              <b>club members</b>, and successfully led the event.
            </TimelineItem>

            <TimelineItem 
              title="Astitva - College Fest"
            >
              Played a key role in the <b>technical team</b>, managing and
              organizing events. <br />
              Led a <b>Bug Hunt</b> as a club event, overseeing{" "}
              <b>100+ participants</b>. <br />
              Effectively coordinated with students across the college and
              received <b>recognition for contributions</b>.
            </TimelineItem>
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
            <p className="text-secondary text-xl mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:atulmaurya18.04@gmail.com"
              className="btn btn-primary text-xl"
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
