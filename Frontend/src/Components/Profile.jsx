const Profile = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                    <label className="block text-gray-700 mb-1">First Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. Faishal"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-gray-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. Khan"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block text-gray-700 mb-1">Age</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. 25"
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none">
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. user@example.com"
                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block text-gray-700 mb-1">Contact</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. 9876543210"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 mb-1">Location</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. New Delhi"
                    />
                </div>

                {/* GitHub ID */}
                <div>
                    <label className="block text-gray-700 mb-1">GitHub ID</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. faishaldev"
                    />
                </div>
            </div>

        </div>
    );
};

export default Profile;
