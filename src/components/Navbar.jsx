import React from "react";
import AnimatedName from "../AnimateText/AnimatedName";

const Navbar = () => {
    return (
        <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    {/* Logo and Brands */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-white bg-white/30 px-3 py-1 rounded-lg">
                                SM
                            </span>
                        </div>

                        {/* Replace the static text with AnimatedName component */}
                        <div className="hidden md:block ml-4">
                            <AnimatedName />
                        </div>

                        {/* Desktop Navigation Links */}
                        <div>
                            <ul className="flex space-x-8 ml-8">
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Tracer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
             after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Certification
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-cyan-400 hover:scale-105 transform
         after:absolute after:left-0 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
