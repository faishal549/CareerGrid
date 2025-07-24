import { useState } from "react";

const Education = ({ data, setData }) => {
    const { education } = data
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const updatedEducation = [...education]
        updatedEducation[index][name] = value;
        setData((prev) => ({
            ...prev,
            education: updatedEducation
        }))

    }

    const handleAddEducation = () => {
        const newEducation = {
            institution: "",
            degree: "",
            year: ""

        }
        setData((prev) => ({
            ...prev,
            education: [...prev.education, newEducation]
        }))


    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Education</h2>

            {education.map((_, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium mb-4 text-gray-700">Education {index + 1}</h3>

                    {/* Institution */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Institution Name</label>
                        <input
                            type="text"
                            maxLength={18}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. Delhi University"
                            name="institution"
                            value={data.education[index].institution}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>

                    {/* Degree */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Degree</label>
                        <input
                            type="text"
                            maxLength={18}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. B.Sc Computer Science"
                            name="degree"
                            value={data.education[index].degree}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>

                    {/* Year */}
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Year</label>
                        <input
                            type="text"
                            maxLength={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="e.g. 2023"
                            name="year"
                            value={data.education[index].year}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </div>
                </div>
            ))}

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={handleAddEducation}
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Add Education
                </button>
            </div>
        </div>
    );
};

export default Education;
