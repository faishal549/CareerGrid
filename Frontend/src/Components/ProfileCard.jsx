import { useSelector } from "react-redux";

const ProfileCard = () => {
    const userData = useSelector((store) => store.user);

    return (
        <div className="bg-white rounded-2xl shadow-lg border p-6 flex items-center gap-6 my-30">
            {/* Image Section */}
            <div>
                <img
                    src={userData.photo}
                    alt="User"
                    className="w-32 h-32 rounded-xl object-cover "
                />
            </div>

            {/* Details Section */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">{userData.firstname} {userData.lastname}</h2>
                <p className="text-gray-600 text-lg mt-1">{userData.email}</p>
                <p className="text-gray-600 text-lg">{userData.contact}</p>

                <div className="mt-4">
                    <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
