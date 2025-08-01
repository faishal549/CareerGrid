import { useState } from "react"

const Skills = ({ data, setData, error }) => {
    const { skills, summary } = data
    const [skillInput, setSkillInput] = useState("")


    const handleInputChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const addSkill = (e) => {
        if (skillInput.trim() === "") return
        setData((prev) => ({
            ...prev,
            skills: [...prev.skills, skillInput.trim()]
        }))
        setSkillInput("")
    }
    const removeSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index)
        setData((prev) => ({
            ...prev,
            skills: updatedSkills
        }))
    }
    return (
        <>

            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Skills & Summary</h2>

                {/* Skill Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Add Skill</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                            placeholder="e.g., React, Node.js"

                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                        />
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={addSkill}>
                            Add
                        </button>

                    </div>
                    <p className="text-sm text-red-600 capitalize">{error.skills}</p>
                </div>
                <ul className="flex flex-row flex-wrap">
                    {
                        skills.map((v, i) => {
                            return <li key={i}
                                className="px-4 py-2 rounded-3xl bg-gray-200 mx-2 my-1 capitalize text-sm text-blue-700">{v}
                                <button className="mx-3 text-lg text-red-600 font-bold cursor-pointer" onClick={() => removeSkill(i)}>X</button>
                            </li>
                        })
                    }
                </ul>

                {/* Summary Text Area */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Professional Summary</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                        rows={5}
                        placeholder="Write a brief summary about your experience, strengths, and goals."
                        name="summary"
                        value={summary}
                        onChange={handleInputChange}
                    ></textarea>
                    <p className="text-sm text-red-600 capitalize">{error.summary}</p>
                </div>


            </div>


        </>
    )
}

export default Skills