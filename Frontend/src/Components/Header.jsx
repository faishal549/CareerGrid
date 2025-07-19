import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { removeUser } from "../utils/store/userSlice";
import { toast } from 'react-toastify';
const BASE_URL = import.meta.env.VITE_BASE_URL

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userData = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("data", userData)

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/api/logout`, {}, { withCredentials: true })
            dispatch(removeUser())
            if (res.status === 200) {

                navigate("/")
                setDropdownOpen(false)
                toast.success("Logout Successfull !")

            } else {
                toast.error("Unable to logout")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <header className="flex items-center justify-between px-6  bg-white shadow-md relative">
                <div className="logo">
                    <Link to="/">
                        <img src="/src/assets/cg_logo.png"
                            alt="logo"
                            className="w-30 h-30" />
                    </Link>
                    {/* <h1 className="text-xl font-semibold text-blue-600">CareerGrid</h1> */}
                </div>
                {!userData && <div className="relative">

                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                    >
                        Login ▼
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                            <Link
                                to="/userlogin"
                                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Jobseeker
                            </Link>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                                onClick={() => {
                                    setDropdownOpen(false);
                                    alert("Recruiter login coming soon!");
                                }}
                            >
                                Login as Recruiter
                            </button>
                        </div>
                    )}
                </div>
                }
                {userData && <div className="relative">

                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className=" cursor-pointer px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-200"
                    >
                        {userData.user.firstname} {userData.user.lastname} ▼
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                            <Link

                                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Profile
                            </Link>
                            <button className=" cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800" onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
                }


            </header>
        </>
    )
}

export default Header 