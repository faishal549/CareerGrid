const Skills = () => {
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
                            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="e.g., React, Node.js"
                        />
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* Summary Text Area */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Professional Summary</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={5}
                        placeholder="Write a brief summary about your experience, strengths, and goals."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                    Save
                </button>
            </div>


        </>
    )
}

export default Skills