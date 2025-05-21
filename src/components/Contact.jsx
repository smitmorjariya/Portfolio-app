import React, { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState
        ({
            name: "",
            email: "",
            message: ""
        });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = mailtoLink;
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50  ">
            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ">
                <div className="text-center pb-10 pt-5">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent ">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-xl text-center text-gray-600 text-semibold ">
                        Let's connect and Explore.
                    </p>
                </div>
                {/* Contact Form */}

                <div className="max-w-2xl mx-auto bg-white p-7 rounded-2xl shadow-2xl ">
                
                    <form onSubmit={handleSubmit} className="space-y-6 ">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 " htmlFor='name'>Name:</label>
                            <input
                                className="p-3 mt-1 block w-full border border-gray-300 rounded"
                                type="text"
                                name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 " htmlFor='name'>Email:</label>
                            <input
                                className="p-3 mt-1 block w-full border border-gray-300 rounded"
                                type="email"
                                name="email" id="email" placeholder='name@example.com' value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 " htmlFor='name'>Message:</label>
                            <input
                                className="p-3 mt-1 block w-full border border-gray-300 rounded"
                                type="text"
                                name="message" id="message" placeholder='Message' value={formData.message} onChange={handleChange} required />
                        </div>
                        <button
                            type="submit"
                            className="w-full hover:cursor-pointer hover:text-xl hover:rounded-3xl transition-all duration-250 px-6 py-3 bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 text-white font-semibold" >
                            Sumbit
                        </button>

                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default Contact