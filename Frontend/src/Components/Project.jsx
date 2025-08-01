import { useState } from "react";

const Project = ({ data, setData }) => {
    const { projects } = data

    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const updatedProjects = [...projects]
        updatedProjects[index][name] = value
        setData((prev) => ({
            ...prev,
            projects: updatedProjects
        }))
    }

    const handleAddProject = () => {
        const newProjects = {
            title: "",
            livelink: "",
            github: "",
            description: ""
        }
        setData((prev) => ({
            ...prev,
            projects: [...prev.projects, newProjects]
        }))
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Projects</h2>

            {projects.map((_, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium mb-4 text-gray-700">Project {index + 1}</h3>

                    {/* Project Title */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Project Title</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                            placeholder="e.g. CareerGrid"
                            name="title"
                            value={data.projects[index].title}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>

                    {/* Project Link */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Project Link</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                            placeholder="e.g. https://github.com/faishal/careergrid"
                            name="livelink"
                            value={data.projects[index].livelink}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Github</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                            name="github"
                            value={data.projects[index].github}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Description</label>
                        <textarea
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-gray-700"
                            placeholder="Brief description about the project..."
                            name="description"
                            value={data.projects[index].description}
                            onChange={(e) => handleInputChange(e, index)}
                        ></textarea>
                    </div>
                </div>
            ))}

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={handleAddProject}
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Add Project
                </button>
            </div>
        </div>
    );
};

export default Project;
