import { useState } from "react";

const WorkExperience = ({ data, setData }) => {


    const { experience } = data

    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const updatedExperience = [...experience]
        updatedExperience[index][name] = value
        setData((prev) => ({
            ...prev,
            experience: updatedExperience
        }))
    }

    const handleAddExperience = () => {
        const newExperience = {
            company: "",
            role: "",
            duration: "",
            description: ""
        }
        setData((prev) => ({
            ...prev,
            experience: [...prev.experience, newExperience]
        }))
    };
    return (
        <>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">Work Experience</h2>

                {experience.map((_, index) => (
                    <div key={index} className="border border-gray-300 p-4 rounded-md mb-6">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">Experience {index + 1}</h3>

                        {/* Company */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1">Company Name</label>
                            <input
                                type="text"
                                maxLength={18}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                                placeholder="e.g. Google"
                                name="company"
                                value={data.experience[index].company}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>

                        {/* Role */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1">Role</label>
                            <input
                                type="text"
                                maxLength={18}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                                placeholder="e.g. Software Engineer"
                                name="role"
                                value={data.experience[index].role}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>

                        {/* Duration */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1">Duration</label>
                            <input
                                type="text"
                                maxLength={20}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                                placeholder="e.g. Jan 2021 - Dec 2023"
                                name="duration"
                                value={data.experience[index].duration}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-2">
                            <label className="block text-gray-600 mb-1">Description</label>
                            <textarea
                                maxLength={200}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                                rows={4}
                                placeholder="Describe your work, tools used, achievements, etc."
                                name="description"
                                value={data.experience[index].description}
                                onChange={(e) => handleInputChange(e, index)}
                            ></textarea>
                        </div>
                    </div>
                ))}

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleAddExperience}
                        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                    >
                        + Add Experience
                    </button>
                </div>
            </div>

        </>
    )
}

export default WorkExperience