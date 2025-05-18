import React from 'react'
import img from '../assets/hj.jpg'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const About = () => {
    return (


        <div id='#about' className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Hero section */}
                <div className="text-center space-y-8 mb-16 ">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                        Hi, I'm Smit Morjariya
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hey, I am a passionate web developer with a knack for creating stunning and functional websites. I love to explore new technologies and push the boundaries of web development. My goal is to build user-friendly and visually appealing web applications that provide an exceptional user experience.
                    </p>
                </div>

                {/* Profile Image */}
                <div className="relative flex flex-col items-center mb-16 px-4 sm:px-6 lg:px-8">
                    {/* Glow & Border Wrapper */}
                    <div className="group relative w-8 h-8 sm:w-56 sm:h-56 flex items-center justify-center">

                        {/* Hover Glow Effect */}
                        <div
                            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition duration-500"
                            style={{
                                background: 'linear-gradient(90deg, #4f46e5, #8b5cf6, #14b8a6)',
                                animation: 'glowPulse 6s ease-in-out infinite',
                            }}
                        ></div>

                        {/* Animated Gradient Border */}
                        <div className="absolute w-full h-full rounded-full p-[3px] bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 animate-spin-slow z-0"></div>

                        {/* Profile Image */}
                        <img
                            src={img}
                            alt="profile_img"
                            className="relative z-10 rounded-full border-1 border-white w-50 h-50 sm:w-52 sm:h-52 object-cover"
                        />
                    </div>

                    {/* Professional Background Section */}
                    <div className="bg-white shadow-md mt-16 p-2 sm:p-8 rounded-md   text-center">
                        <h1 className="text-3xl sm:text-5xl font-semibold mb-8 sm:mb-10 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                            Professional Journey
                        </h1>
                        <div className="space-y-6 text-left max-w-4xl mx-auto">
                        <p className="text-lg text-gray-600">
                            I started my journey in web development back in 2018, working with
                            startups and enterprise clients. My expertise spans across the
                            entire web development stack, from crafting pixel-perfect UIs to
                            architecting scalable backend systems.
                        </p>
                        <p className="text-lg text-gray-600">
                            Currently, I'm focused on building modern web applications using
                            React, Node.js, and cloud technologies. I'm passionate about
                            creating solutions that not only look great but also perform
                            exceptionally well.
                        </p>
                    </div>
                    </div>
                </div>

            


                {/* Skills section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    
                    {/* Left column */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200">
                        <h1 className="text-4xl font-bold py-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                            Hi, I'm Smit Morjariya
                        </h1>
                        <p className="mt-4 text-gray-700">
                            I’m passionate about building modern web applications with clean, efficient, and scalable code.
                        </p>
                    </div>

                    {/* Right column - Skills list in two columns */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200">
                        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800 text-lg">
                            <div className="flex items-center gap-3">
                                <FaHtml5 className="text-orange-600" size={24} /> HTML5
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCss3Alt className="text-blue-600" size={24} /> CSS3
                            </div>
                            <div className="flex items-center gap-3">
                                <FaJsSquare className="text-yellow-500" size={24} /> JavaScript
                            </div>
                            <div className="flex items-center gap-3">
                                <FaReact className="text-sky-500" size={24} /> React
                            </div>
                            <div className="flex items-center gap-3">
                                <SiNextdotjs className="text-black" size={24} /> GSAP
                            </div>
                            <div className="flex items-center gap-3">
                                <SiTailwindcss className="text-teal-400" size={24} /> Tailwind CSS
                            </div>
                            <div className="flex items-center gap-3">
                                <SiMongodb className="text-green-700" size={24} /> MongoDB
                            </div>
                            <div className="flex items-center gap-3">
                                <FaNodeJs className="text-green-600" size={24} /> Node.js
                            </div>
                            <div className="flex items-center gap-3">
                                <FaGitAlt className="text-red-600" size={24} /> Git
                            </div>
                            <div className="flex items-center gap-3">
                                <FaGithub size={24} /> GitHub
                            </div>

                        </div>
                    </div>
                </div>



                {/* Profesionnal Intrest */}
                <div className="bg-white p-8 shadow-lg mb-16 ">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
                        Beyong Coding
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto ">
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl text-indigo-700 font-semibold">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I'm actively to open source softwares on github.</p>
                        </div>
                    </div>
                </div>



                {/* Call to action */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-white py-12 rounded-xl text-center">
                    <h3 className="text-4xl font-semibold mb-5">Continuous Learning</h3>
                    <p className="text-xl text-gray-100 mx-auto mb-5">
                        I'm actively contributing to open source software on GitHub.
                    </p>




                    {/* <!-- From Uiverse.io by S4tyendra -->  */}
                    <div class="flex items-center justify-center ">
                        <div class="relative group">
                            <button
                                class="relative inline-block p-px font-semibold leading-6 text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 shadow-xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-gradient-to-r hover:from-indigo-600 hover:via-purple-500 hover:to-teal-500"
                            >
                                <span
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600  opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></span>
                                <span class="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                    <div class="relative z-10 flex items-center space-x-3">
                                        <span
                                            class="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                                            Get in Touch
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                        >
                                            <path
                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            ></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>


                </div>

            </div>

        </div>



    )
}

export default About