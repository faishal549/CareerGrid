const Profile = ({ data, setData, error }) => {
    const { firstname, lastname, age, gender, email, contact, location, github } = data

    const handleInputChange = (e) => {

        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
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
                        name="firstname"
                        value={firstname}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.firstname}</p>
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-gray-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. Khan"
                        name="lastname"
                        value={lastname}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.lastname}</p>

                </div>

                {/* Age */}
                <div>
                    <label className="block text-gray-700 mb-1">Age</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. 25"
                        name="age"
                        value={age}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.age}</p>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none" name="gender" value={gender} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <p className="text-sm text-red-600 capitalize">{error.gender}</p>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. user@example.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.email}</p>
                </div>

                {/* Contact */}
                <div>
                    <label className="block text-gray-700 mb-1">Contact</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. 9876543210"
                        name="contact"
                        value={contact}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.contact}</p>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 mb-1">Location</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. New Delhi"
                        name="location"
                        value={location}
                        onChange={handleInputChange}
                    />
                    <p className="text-sm text-red-600 capitalize">{error.location}</p>
                </div>

                {/* GitHub ID */}
                <div>
                    <label className="block text-gray-700 mb-1">GitHub ID</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="e.g. faishaldev"
                        name="github"
                        value={github}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

        </div>
    );
};

export default Profile;
