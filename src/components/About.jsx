import React from 'react';
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGreensock } from "react-icons/si"; // GSAP added here
import AOS from "aos";
import "aos/dist/aos.css"

const About = () => {


    useEffect(() => {
        AOS.init({ once: true, duration: 500 });
    }, []);

    return (
        <div id="about" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Hero Section */}
                <div className="text-center space-y-8 mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                        Hi, I'm Smit Morjariya
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm a passionate web developer with a knack for creating stunning and functional websites. I love exploring new technologies and pushing the boundaries of web development. My goal is to build user-friendly and visually appealing web apps that provide an exceptional user experience.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="flex justify-center items-center">
                    <div className="bg-sky-700 rounded-2xl p-1 shadow-md shadow-sky-500">
                        <div className="relative group h-60 w-100 rounded-2xl bg-neutral-900 outline outline-slate-400 -outline-offset-8 overflow-hidden flex justify-center items-center hover:rotate-12 transition-transform duration-500">
                            <div className="absolute bottom-32 right-16 h-12 w-12 bg-sky-700 rounded-full blur-xl transition-transform duration-500 group-hover:translate-x-24"></div>
                            <div className="absolute top-20 right-16 h-12 w-12 bg-sky-400 rounded-full blur-xl transition-transform duration-500 group-hover:-translate-x-32 group-hover:translate-y-12"></div>
                            <div className="z-10 flex flex-col items-center gap-2">
                                <span className="text-6xl font-bold text-center mb-3 text-slate-300">Smit Morjariya</span>
                                <p className="text-slate-100 mt-2">Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline container */}
                <div>
                    <h2 className="text-4xl font-bold text-center mt-20 mb-8 bg-gradient-to-l from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                        My Journey
                    </h2>
                </div>
                <div className="relative mt-16 min-h-[600px]">
                    {/* Vertical center line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 lg:h-145 h-240 bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-500 rounded-full"></div>

                    {/* Timeline items */}
                    <div className="space-y-20 relative z-10">
                        {/* Timeline item - Left side */}
                        <div className="flex items-center justify-start w-full">
                            <div className="w-1/2 pr-6 text-right">
                                <div className="inline-block bg-gradient-to-r from-sky-100 to-gray-50/20 border-l-4 border-sky-400 p-4 rounded-lg shadow-md text-left ml-auto max-w-[90%] hover:shadow-2xl transition duration-200">

                                    <h3 className="text-xl font-bold text-sky-700">Full Stack Web Development Intern <br /> @ Zidio Development <br /> (Feb, 2025 - May, 2025)</h3>
                                    <h4 className="font-bold text-green-800">3 Months, Remote</h4>
                                    <p className="mt-2 text-gray-600 text-justify"> Developed a full-stack Task Managment web application, using the MERN stack, enhancing my skills in React, Node.js, and MongoDB. Collaborated with a team to deliver a responsive and user-friendly interface.</p>

                                </div>
                            </div>
                            <div className="w-1/2 relative">
                                {/* Dot on the timeline line */}
                                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white"></div>
                            </div>
                        </div>

                        {/* Timeline item - Right side */}
                        <div className="flex items-center justify-end w-full">
                            <div className="w-1/2 relative">
                                {/* Dot on the timeline line */}
                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-teal-500 border-4 border-white"></div>
                            </div>
                            <div className="w-1/2 pl-6 text-left">
                                <div className="inline-block bg-gradient-to-l from-teal-100 to-white border-r-4 border-teal-400 p-4 rounded-lg shadow-md text-left max-w-[90%] hover:shadow-2xl transition duration-200">
                                    <h3 className="text-xl font-bold text-teal-700">Frontend Development Intern <br /> @ OctaNet Service Pvt. Ltd. <br /> (June, 2024 - July, 2024)</h3>
                                    <h4 className="font-bold text-sky-700">1 Months, Remote</h4>
                                    <p className="mt-2 text-gray-600 text-justify">Created a landing page and to-do list while strengthening HTML, CSS, JavaScript, and Tailwind CSS skills.</p>
                                </div>
                            </div>
                        </div>

                        {/* Add more timeline items alternating left/right as needed */}
                    </div>
                </div>



                {/* Skills Section */}
                <h2 className="text-4xl font-bold text-center mt-20 bg-gradient-to-l from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                    Skills Learned
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200">
                        <h1 className="text-4xl font-bold py-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                            Tech Stack
                        </h1>
                        <p className="mt-4 text-gray-700">
                            I’m passionate about building modern web applications with clean, efficient, and scalable code.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200">
                        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">My Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800 text-lg">
                            <div className="flex items-center gap-3"><FaHtml5 className="text-orange-600" size={24} /> HTML5</div>
                            <div className="flex items-center gap-3"><FaCss3Alt className="text-blue-600" size={24} /> CSS3</div>
                            <div className="flex items-center gap-3"><FaJsSquare className="text-yellow-500" size={24} /> JavaScript</div>
                            <div className="flex items-center gap-3"><FaReact className="text-sky-500" size={24} /> React</div>
                            {/* <div className="flex items-center gap-3"><SiNextdotjs className="text-black" size={24} /> Next.js</div> */}
                            <div className="flex items-center gap-3"><SiGreensock className="text-green-500" size={24} /> GSAP</div>
                            <div className="flex items-center gap-3"><SiTailwindcss className="text-teal-400" size={24} /> Tailwind CSS</div>
                            <div className="flex items-center gap-3"><SiMongodb className="text-green-700" size={24} /> MongoDB</div>
                            <div className="flex items-center gap-3"><FaNodeJs className="text-green-600" size={24} /> Node.js</div>
                            <div className="flex items-center gap-3"><FaGitAlt className="text-red-600" size={24} /> Git</div>
                            <div className="flex items-center gap-3"><FaGithub size={24} /> GitHub</div>
                        </div>
                    </div>
                </div>

                {/* Professional Interests */}
                <div className="bg-white p-8 shadow-lg mb-16 rounded-xl">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
                        Beyond Coding
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">

                        <div
                            className="space-y-3"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-2xl text-indigo-700 font-semibold">
                                MERN Stack Mastery
                            </h3>
                            <p className="text-lg text-gray-800">
                                I'm actively developing full-stack applications using MongoDB,
                                Express.js, React, and Node.js. My focus includes implementing
                                authentication, REST APIs, and real-time features like chat.
                            </p>
                        </div>

                        <div
                            className="space-y-3"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h3 className="text-2xl text-indigo-700 font-semibold">
                                Leveling Up
                            </h3>
                            <p className="text-lg text-gray-800">
                                I’m continuously improving my skills in full-stack development and exploring new technologies to build efficient and scalable applications.
                            </p>

                        </div>

                    </div>
                </div>


                {/* Call to Action */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-white py-12 rounded-xl text-center">
                    <h3 className="text-4xl font-semibold mb-5">Continuous Learning</h3>
                    <p className="text-xl text-gray-100 mx-auto mb-5">
                        I’m constantly upgrading my skills and building innovative projects.
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="relative group">
                            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 shadow-xl cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                    <div className="relative z-10 flex items-center space-x-3">
                                        <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">Get in Touch</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
