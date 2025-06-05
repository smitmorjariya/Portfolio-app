import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi'
// import { LuExternalLink } from 'react-icons/lu'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern portfolio website built with React and Tailwind CSS.",
            link: "https://github.com/smitmorjariya/Portfolio-Website",
            liveLink: "https://smitmorjariya.netlify.app/",
            technologies: ["HTML", "CSS", "Tailwind CSS", "Responsive Design", "GSAP"],
        },


        {
            id: 2,
            title: "TeamOrbit-Task Manager",
            description: "A task management app with user authentication and real-time updates.",
            link: "https://github.com/smitmorjariya/TeamOrbit-Task-Manager-App",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Responsive Design"],
        },
        {
            id: 3,
            title: "Portfolio Website",
            description:
                "A modern portfolio website built with React and Tailwind CSS.",
            link: "https://github.com/smitmorjariya/Portfolio-app",
            liveLink: "https://smitmorjariya.vercel.app/",
            technologies: ["React", "Tailwind CSS", "React-icons", "Responsive Design"],
        },
    ];

    return (
        <div className="min-h  bg-gradient-to-b from-white to-gray-50 ">
            <div className="max-w-7xl mx-auto pb-5 px-4 md:px-6 lg:px-8">
                <div className="text-center  ">
                    <h2 className="text-4xl font-bold  bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <p className="mt-5 p-2  text-xl text-center text-gray-600 font-semibold">
                        A showcase of all projects that I have made
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10 pt-5">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-shadow duration-200 p-5"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-5">{project.description}</p>
                            <div className="flex flex-wrap gap-4 mb-2">
                                {project.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                className="inline-flex pt-3 items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
                            >
                                Live Link
                                <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                            </a>
                             <a
                                href={project.liveLink}
                                target="_blank"
                                className="inline-flex pt-3 items-center text-indigo-600 hover:text-indigo-200 font-semibold transition-all duration-200"
                            >
                                View Project
                                <HiExternalLink className="w-4 h-4 -mr-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects