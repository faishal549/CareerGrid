import { useState } from "react"
import validator from "../utils/validator"

import { useDispatch } from "react-redux"
import { addUser } from "../utils/store/userSlice"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import axiosInstance from "../utils/axiosInstance"
// const BASE_URL = import.meta.env.VITE_BASE_URL

const UserLogin = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [errMessage, setErrMessage] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        if (isSubmitting) return
        setIsSubmitting(true)
        try {
            const message = validator(user)
            setErrMessage(message)
            if (message) return
            const res = await axiosInstance.post("/api/register", user)
            // console.log(res)
            dispatch(addUser(res.data.user))
            if (res.status === 200) {
                navigate("/dashboard")
                toast.success("Registration Successfull!")
            } else {
                toast.error("Registration failed.")
            }

        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message || "Something went wrong")
        } finally {
            setIsSubmitting(false)
        }


    }

    const handleSignin = async (e) => {
        e.preventDefault()
        if (isSubmitting) return
        setIsSubmitting(true)
        try {
            const res = await axiosInstance.post("/api/login", user)
            // console.log(res)
            dispatch(addUser(res.data.user))
            if (res.status === 200) {
                navigate("/dashboard")
                toast.success("Loging Successfull!")
            } else {
                toast.error("Login failed.")
            }
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message || "Something went wrong")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <section className="w-2xl mx-auto my-5 py-15 bg-gray-900 rounded-lg">
                <h1 className="text-center font-medium text-blue-500 text-2xl">{isSignup ? "SIGN-UP" : "SIGN-IN"}</h1>
                <form className="flex flex-col px-15" onSubmit={isSignup ? handleSignup : handleSignin}>
                    {isSignup && (
                        <>
                            <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-1">FIRSTNAME</label>
                            <input type="text"
                                className="w-full h-[2.5rem] px-3 pr-12 bg-gray-800 text-gray-300 text-lg rounded-sm border-none outline-none"
                                value={user.firstname}
                                name="firstname"
                                autoComplete="off"
                                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                            />

                            <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-1">LASTNAME</label>
                            <input type="text"
                                className="w-full h-[2.5rem] px-3 pr-12 bg-gray-800 text-gray-300 text-lg rounded-sm border-none outline-none"
                                value={user.lastname}
                                name="lastname"
                                autoComplete="off"
                                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                            />
                        </>)}

                    <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-1">EMAIL</label>
                    <input type="text"
                        className="w-full h-[2.5rem] px-3 pr-12 bg-gray-800 text-gray-300 text-lg rounded-sm border-none outline-none"
                        value={user.email}
                        name="email"
                        autoComplete="off"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    {isSignup && (<>
                        <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-1">CONTACT</label>
                        <input type="text"
                            className="w-full h-[2.5rem] px-3 pr-12 bg-gray-800 text-gray-300 text-lg rounded-sm border-none outline-none"
                            value={user.contact}
                            name="contact"
                            autoComplete="off"
                            onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                        />

                    </>)}


                    <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-1">PASSWORD</label>
                    <div className="relative w-full mx-auto">
                        <input type={showPassword ? "text" : "password"}

                            className="w-full h-[2.5rem] px-3 pr-12 bg-gray-800 text-gray-300 text-lg rounded-sm border-none outline-none"
                            value={user.password}
                            name="password"
                            autoComplete="off"
                            onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-blue-300 hover:text-blue-500 cursor-pointer text-sm select-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </div>


                    <button type="submit" disabled={isSubmitting} className="text-center px-4 py-2 my-4 bg-blue-500 font-bold w-lg mx-auto rounded-sm text-gray-300 tracking-wider cursor-pointer hover:bg-blue-600
                     "> {isSubmitting ? "Please wait..." : "SUBMIT"}</button>
                    <p className="text-center text-red-600 py-2 font-semibold">{errMessage}</p>
                    <p className="text-center text-red-600 py-2 font-semibold">{error}</p>
                </form>
                <p className="text-center  text-gray-300 font-bold hover:text-blue-600 cursor-pointer" onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Existing user  ? Login" : "New User ? Signup"}</p>
            </section>
        </>
    )
}


export default UserLogin