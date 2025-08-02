import { Link } from "react-router-dom";

const ResumeSection = () => {
    return (
        <div className="h-full p-6 rounded-2xl shadow-md bg-white border my-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Professional Resume</h2>
            <p className="text-gray-600 mb-6">
                Build a beautiful and professional resume in just a few clicks. Customize, preview, and download it instantly.
            </p>
            <Link to="/dashboard/resume">
                <button className="px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition-all">
                    Create New Resume
                </button>
            </Link>
        </div>
    );
};

export default ResumeSection;
