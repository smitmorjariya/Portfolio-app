import React, { useState } from 'react'

const Skills = () => {
    const [Skill, setSkill] = useState("technical");
    const Skills = {
        technical: [
            { name: "HTML", prof: 90 },
            { name: "CSS", prof: 80 },
            { name: "JavaScript", prof: 80 },
            { name: "React", prof: 80 },
            { name: "Node.js", prof: 80 },
            { name: "Express.js", prof: 80 },
        ],
        soft: [
            { name: "Communication", prof: 80 },
            { name: "Teamwork", prof: 80 },
            { name: "Problem-solving", prof: 80 },
            { name: "Time Management", prof: 80 },
            { name: "Adaptability", prof: 80 },
        ],
        tools: [
            { name: "Git", prof: 85 },
            { name: "VS Code", prof: 90 },
            { name: "Postman", prof: 80 },
            { name: "Docker", prof: 70 },
            { name: "Webpack", prof: 75 },
            { name: "Figma", prof: 70 },
        ],
    }

    const getProflabel = (prof) => {
        if (prof >= 90) return "Expert";
        if (prof > 75) return "Advanced";
        if (prof >= 60) return "Intermediet";
        return "beginner";
    }
    return (
        <div id='#skills' className="bg-white min-h w-full bg-gradient-to-r from-white to-gray-50 py-16">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold  bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 text-transparent bg-clip-text ">My Skills</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolores aut voluptate harum reiciendis. Assumenda.
                    </p>
                </div>

                {/* Toggle Button */}

                <div className="flex justify-center mb-8 hover:cursor-pointer">
                    <div className="relative bg-gray-300 rounded-full p-1  flex gap-2 w-[336px]  transition-all duration-300">
                        {/* Sliding background */}
                        <div
                            className={`absolute top-1 left-1  w-1/3 h-10 rounded-full  transition-all duration-300 ${Skill === "technical"
                                    ? "translate-x-0 bg-gradient-to-r  from-indigo-500 via-purple-500 to-teal-600"
                                    : Skill === "soft"
                                        ? "translate-x-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400"
                                        : ""
                                }`}
                            style={
                                Skill === "tools"
                                    ? { transform: "translateX(200%)", background: "linear-gradient(to right, #22c55e, #84cc16, #10b981)" }
                                    : {}
                            }
                        ></div>

                        {/* Technical Tab */}
                        <button
                            onClick={() => setSkill("technical")}
                            className={`relative z-10 w-28 h-10 rounded-full hover:cursor-pointer font-semibold transition-all duration-300 ${Skill === "technical" ? "text-white" : "text-gray-700"
                                }`}
                        >
                            Technical
                        </button>

                        {/* Soft Skill Tab */}
                        <button
                            onClick={() => setSkill("soft")}
                            className={`relative z-10 w-28 h-10 rounded-full hover:cursor-pointer font-semibold transition-all duration-300 ${Skill === "soft" ? "text-white" : "text-gray-700"
                                }`}
                        >
                            Soft Skill
                        </button>

                        {/* Tools Skill Tab */}
                        <button
                            onClick={() => setSkill("tools")}
                            className={`relative z-10 w-28 h-10 rounded-full hover:cursor-pointer  font-semibold transition-all duration-300 ${Skill === "tools" ? "text-white" : "text-gray-700"
                                }`}
                        >
                            Tools
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Skills[Skill].map((skill, index) => (
                        <div key={index} className=" pl-8 pr-8 mt-5 mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                                <span className="text-sm text-gray-500">{getProflabel(skill.prof)}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-600 h-2.5 rounded-full`}
                                    style={{ width: `${skill.prof}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div >
    )
}

export default Skills;