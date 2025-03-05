import { motion } from "framer-motion";

// Define a simple arrow right SVG component
const ArrowRight = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-white mt-32">
      <section className="border border-gray-700 rounded-2xl py-16 px-4 sm:px-6 md:px-8 lg:px-10 w-full flex justify-center">
        {/* Main Content - All in one row on desktop */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-content-center justify-evenly">
          {/* Left Section */}
          <div className="w-full text-center mx-auto">
            <p className="text-lg font-semibold">
          <span className="text-pink-400">Building </span>  the bridges {" "}
             of <span className="text-blue-400">Decentralization</span> 
            </p>
          </div>

          {/* Middle Section - Explore */}
          <div className="w-full text-center mx-auto space-y-3">
            <h3 className="text-orange-500 font-semibold">Explore</h3>
            <ul className="space-y-2 mx-auto text-center">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full text-center mx-auto">
            <h3 className="text-blue-400 font-semibold">Follow Me</h3>
            <div className="flex space-x-4 mt-2 justify-center">
              <a
                href="https://www.linkedin.com/in/maurya-atul/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/atulm18014"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:atulmaurya18.04@gmail.com"
                className="text-gray-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/atulm_18"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact and Projects Links - Combined section */}
          <div className="sm:col-span-2 md:col-span-1 w-full max-w-sm mx-auto space-y-4">
            {/* Contact Me Section */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-600">
              <div>
                <h3 className="text-xl text-gray-200 font-semibold">
                  Contact Me
                </h3>
                <p className="text-gray-400 text-sm">Say Hello!</p>
              </div>
              <a 
                href="mailto:atulmaurya18.04@gmail.com" 
                aria-label="Send email to Atul Maurya" 
                title="Send me an email"
                onClick={(e) => {
                  window.location.href = "mailto:atulmaurya18.04@gmail.com";
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-green-500 transition duration-300 group"
              >
                <span className="transform transition-transform duration-500 group-hover:rotate-45 inline-block">
                  <ArrowRight size={20} />
                </span>
              </a>
            </div>

            {/* My Projects Section */}
            <div className="flex justify-between items-center pb-4">
              <div>
                <h3 className="text-xl text-gray-200 font-semibold">
                  My Projects
                </h3>
                <p className="text-gray-400 text-sm">Explore Projects</p>
              </div>
              <a href="#projects" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-green-500 transition duration-300 group">
                <span className="transform transition-transform duration-500 group-hover:-rotate-45 inline-block">
                  <ArrowRight size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Section */}
      <div className="p-2 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between text-lg">
        <p className="font-semibold text-center sm:text-left">//atul. ©2024</p>
        <p className="font-semibold text-center sm:text-right">India</p>
      </div>
    </footer>
  );
};

export default Footer;
