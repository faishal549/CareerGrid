import { useSelector } from "react-redux"

const ProfileCard = () => {
    const userData = useSelector((store) => store.user)
    return (
        <>
            <div className="flex flex-col border-4 border-blue-500 px-15 py-5 my-10 rounded-2xl shadow-2xl bg-blue-200">
                <div>
                    <img src={userData.photo} alt="userPhoto" className="w-50 h-50 rounded-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl py-2 capitalize font-bold text-gray-700">{userData.firstname} {userData.lastname}</h1>
                    <p className="text-xl py-1 text-gray-800">{userData.email}</p>
                    <p className="text-xl py-1 text-gray-800">{userData.contact}</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-blue-800 text-white font-bold hover:bg-blue-900">EditProfile</button>
            </div>
        </>
    )
}
export default ProfileCard