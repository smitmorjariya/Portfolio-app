import React from "react";
// import { Github, Linkedin, Twitter } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedName from "../AnimateText/AnimatedName";

function Footer() {
  return (
    <footer className="w-full  bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-4.5 gap-8">
          <div className="text-center md:text-left ">
            {/* <h3 className="text-xl font-bold mb-4"></h3> */}
            <div className="flex items-center mb-4.5">
              <div className="flex-shrink-0">
                <span className="lg:ml-12 ml-20 text-2xl font-bold text-white bg-white/25 px-3.5 py-1 rounded-lg">
                  SM
                </span>
              </div>

              {/* Replace the static text with AnimatedName component */}
              <div className=" text-center lg:ml-8 ml-30  lg:mr-10  ">
                <AnimatedName className="sm:text-right" />
              </div>
            </div>
            <p className="text-white/80 lg:ml-12 pt-2 pb-0">
              Building the future of web development
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 transition-colors duration-200">
                <a
                  href="#about"
                  className="text-white/80 hover:text-teal-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-teal-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-teal-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div className="text-center ">
            <h3 className="text-xl font-bold ">Connect with me!</h3>

            <ul className="flex justify-center pt-8 space-x-4 ">


              {/* <!-- Twitter --> */}
              <li className="group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[black]">

                <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[black]">
                  Twitter
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="w-6 h-6 text-black group-hover:text-white fill-current"
                  viewBox="0 0 24 24"
                  strokeWidth="0"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
                  ></path>
                </svg>
              </li>

              {/* <!-- Facebook --> */}

              <li className="group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#1877f2]">
                <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#1877f2]">
                  Facebook
                </span>
                <svg viewBox="0 0 320 512" className="w-6 h-6 text-black group-hover:text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </li>



              {/* GitHub */}
              <li className="group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[black]">
                <a
                  href="https://github.com/smitmorjariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-black group-hover:text-white fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>

                <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[black]">
                  GitHub
                </span>
              </li>

              {/* <!-- Linkedin --> */}
              <li className="group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#0274b3]">

                <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0274b3]">
                  LinkedIn
                </span>


                {/* className="w-6 h-6 text-black group-hover:text-white fill-current" */}
                <svg
                  className="w-6 h-5 text-black group-hover:text-white fill-current"

                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>

              </li>
              {/* <!-- Instagram --> */}
              <li className="group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#e135d4] ">
                <span className="absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#e135d4]">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  // fill="currentColor"
                  className="w-6 h-6 text-black group-hover:text-white fill-current"
                  // className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </li>
            </ul>

          </div>
        </div>
        <div className="mt-8 pb-5 pt-2 border-t border-white/20 text-center">
          <p className="text-white/80">Done by 👩‍💻 <span className=" font-semibold transition-colors duration-200 hover:text-teal-400 hover:cursor-pointer">Smit Morjariya</span>. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
