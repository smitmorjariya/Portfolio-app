import React from "react";
// import { Github, Linkedin, Twitter } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedName from "../AnimateText/AnimatedName";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            {/* <h3 className="text-xl font-bold mb-4">John Doe</h3> */}
            <div className="flex items-center mb-4.5">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-white bg-white/25 px-3.5 py-1 rounded-lg">
                                SM
                            </span>
                        </div>

                        {/* Replace the static text with AnimatedName component */}
                        <div className=" md:block ml-10 mr-14 ">
                            <AnimatedName />
                        </div>
                    </div>
            <p className="text-white/80">
              Building the future of web development
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center ">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-white/20 text-center">
          <p className="text-white/80">© 2025 Smit Morjariya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
