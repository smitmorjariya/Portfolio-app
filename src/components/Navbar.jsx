import { useState } from "react";
import AnimatedName from "../AnimateText/AnimatedName";
import { RxCross1 } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {

    const [ismenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">

                    {/* Logo and Brands */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-white bg-white/25 px-3.5 py-1 rounded-lg">
                                SM
                            </span>
                        </div>

                        {/* Replace the static text with AnimatedName component */}
                        <div className=" md:block ml-10 mr-14">
                            <AnimatedName />
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8 ml-20">
                            <li>
                                <a
                                    href="#home"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-2 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-16"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-2 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-16"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-2 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-13"
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#certification"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
             after:absolute after:left-2 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-29.5"
                                >
                                    Certification
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in-out hover:text-teal-400 hover:scale-105 transform
         after:absolute after:left-2 after:bottom-1.5 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-20 "
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="relative inline-block px-3 py-2 text-xl font-medium text-white rounded-md transition-all duration-300 delay-150 ease-in hover:scale-105 transform after:absolute after:left-2  after:bottom-1.5 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-200 hover:after:w-26 hover:bg-white/30 hover:text-white"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!ismenuOpen)}
                            className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200 pt-2 justify-center items-center">
                            {ismenuOpen ? (<RxCross1 className="w-8 h-8  " />) : (<LuMenu className="w-8 h-8 " />)}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {ismenuOpen && (
                <div className="md:hidden bg-gradient-to-b from-indigo-600/20 to-purple-600/15">
                    <div className="pt-2 pb-3 text-left space-y-1 sm:px-3">
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130 py-1 rounded-md transition-color duration-200 ">
                            Home
                        </a>
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130 py-1 rounded-md transition-color duration-200 ">
                            About
                        </a>
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130 py-1 rounded-md transition-color duration-200 ">
                            Skills
                        </a>
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130 py-1 rounded-md transition-color duration-200 ">
                            Certification
                        </a>
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130 py-1 rounded-md transition-color duration-200 ">
                            Projects
                        </a>
                        <a className="text-2xl hover:px-136 cursor-pointer text-white hover:text-teal-400 block px-130  rounded-md transition-color duration-200 ">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
