import { useState } from "react";

const Project = () => {
    const [projects, setProjects] = useState([{}]);

    const handleAddProject = () => {
        setProjects([...projects, {}]);
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
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. CareerGrid"
                        />
                    </div>

                    {/* Project Link */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Project Link</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. https://github.com/faishal/careergrid"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Tech Stack</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. React, Node.js, MongoDB"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Description</label>
                        <textarea
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="Brief description about the project..."
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
