import React from 'react'
import img from '../assets/hj.jpg'

const About = () => {
    return (

        <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
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
                <div className="relative flex items-center justify-center mb-16">
                    <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full blur-lg opacity-20">
                        <img src={img} alt="profile_img" className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover" />
                    </div>

                    {/* Professional background */}
                    <div className="bg-white shadow-md mb-16 p-8 rounded-md">
                        <h1 className="text-5xl font-semibold mb-10">
                            Professional Journey
                        </h1>
                        <div className="space-y-6 text-left max-w-4xl mx-auto ">
                            <p className="text-lg text-gray-600 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam culpa impedit?
                            </p>
                            <p className="text-lg text-gray-600 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam culpa impedit?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200">
                        <h1 className="h-full text-4xl py-1 pt-1 font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text">
                            Hi, I'm Smit Morjariya
                        </h1>

                    </div>
                </div>
            </div>

        </div>



    )
}

export default About