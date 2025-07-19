import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
                <div className="relative">

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

            </header>
        </>
    )
}

export default Header 