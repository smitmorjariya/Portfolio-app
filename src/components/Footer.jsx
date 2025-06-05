import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedName from "../AnimateText/AnimatedName";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-4 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <span className="lg:ml-12 ml-20 text-2xl font-bold text-white bg-white/25 px-3.5 py-1 rounded-lg">
                  SM
                </span>
              </div>
              <div className="text-center lg:ml-8 ml-8 lg:mr-10">
                <AnimatedName className="sm:text-right" />
              </div>
            </div>
            <p className="text-white/80 lg:ml-12 pt-2">
              Building the future of web development
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-teal-400 transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-teal-400 transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-teal-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold">Connect with me!</h3>
            <ul className="flex justify-center pt-8 space-x-4">
              {[
                { name: "GitHub", icon: <FaGithub />, url: "https://github.com/smitmorjariya", hover: "bg-black" },
                { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/smitmorjariya", hover: "bg-[#0274b3]" },
                { name: "Twitter", icon: <FaXTwitter />, url: "https://twitter.com/smitmorjariya", hover: "bg-black" },
                { name: "Facebook", icon: <FaFacebookF />, url: "#", hover: "bg-[#1877f2]" },
                { name: "Instagram", icon: <FaInstagram />, url: "#", hover: "bg-[#e135d4]" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`group relative w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:${item.hover}`}
                >
                  <span className={`absolute -top-8 px-2 py-1 text-xs text-white bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 group-hover:${item.hover}`}>
                    {item.name}
                  </span>
                  <a href={item.url} target="_blank" rel="noreferrer" className="text-black group-hover:text-white text-xl">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pb-5 pt-2 border-t border-white/20 text-center">
          <p className="text-white/80">
            Done by 👨‍💻 <span className="font-semibold hover:text-teal-400 transition-colors duration-200 cursor-pointer">Smit Morjariya</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

