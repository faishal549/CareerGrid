import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { addUser, removeUser } from "../utils/store/userSlice";
import { toast } from 'react-toastify';
import { clearResume } from "../utils/store/resumeSlice";
import logo from "../assets/output-onlinepngtools.png"
import axiosInstance from "../utils/axiosInstance";
// const BASE_URL = import.meta.env.VITE_BASE_URL

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userData = useSelector((store) => store.user)
    const userResume = useSelector((store) => store.resume)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log("data", userData)

    const handleLogout = async () => {
        try {
            const res = await axiosInstance.post("/api/logout", {})
            dispatch(removeUser())
            if (res.status === 200) {
                dispatch(clearResume(userResume))
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

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const res = await axiosInstance.put("/api/upload-photo", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.status === 200) {
                const newPhotoUrl = res.data.user.photo;

                dispatch(addUser({
                    ...userData,
                    photo: newPhotoUrl
                }));

                toast.success("Profile photo updated!");
                setDropdownOpen(false);
            } else {
                toast.error("Upload failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Upload failed");
        }
    };


    return (
        <>
            <header className="flex items-center justify-between px-6  bg-base-100 text-base-content shadow-md relative">
                <div className="logo">
                    <Link to="/">
                        <img src={logo}
                            alt="logo"
                            className="w-30 h-30" />
                    </Link>
                    {/* <h1 className="text-xl font-semibold text-blue-600">CareerGrid</h1> */}
                </div>




                <label className="label cursor-pointer">

                    <input
                        type="checkbox"
                        className="toggle"
                        defaultChecked={localStorage.getItem("theme") === "dark"}
                        onChange={(e) => {
                            const newTheme = e.target.checked ? "dark" : "light";
                            document.documentElement.setAttribute("data-theme", newTheme);
                            localStorage.setItem("theme", newTheme);
                        }}
                    />
                </label>





                {
                    (userData) && <ul className="flex flex-row gap-10">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "bg-blue-100 text-blue-600 px-4 py-2 rounded font-semibold" : "text-blue-600 hover:bg-blue-100 px-4 py-2 rounded font-semibold"
                        }> <li>Home</li></NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) =>
                            isActive ? "bg-blue-100 text-blue-600 px-4 py-2 rounded font-semibold" : "text-blue-600 hover:bg-blue-100 px-4 py-2 rounded font-semibold"
                        }> <li>Dashboard</li></NavLink>
                    </ul>
                }
                {(!userData) && <div className="relative">

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
                                className="block px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800"
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
                {(userData) && <div className="relative">

                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}

                    >
                        {/* {userData?.firstname} {userData?.lastname} ▼ */}
                        <img src={userData?.photo} alt="profileImg" className="w-10 h-10 rounded-full" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                            {/* <Link

                                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                                onClick={() => setDropdownOpen(false)}
                            > */}
                            <label
                                htmlFor="upload-photo"
                                className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                            >
                                Upload Photo
                                <input
                                    id="upload-photo"
                                    key={Date.now()} // Force reset input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>

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