import { useState } from "react"
import validator from "../utils/validator"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/store/userSlice"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
const BASE_URL = import.meta.env.VITE_BASE_URL

const UserLogin = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [errMessage, setErrMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            const message = validator(user)
            setErrMessage(message)
            if (message) return
            const res = await axios.post(`${BASE_URL}/api/register`, user, { withCredentials: true })
            console.log(res)
            dispatch(addUser(res.data))
            if (res.status === 200) {
                navigate("/dashboard")
                toast.success("Registration Successfull!")
            } else {
                toast.error("Registration failed.")
            }

        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message || "Something went wrong")
        }


    }

    const handleSignin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/api/login`, user, { withCredentials: true })
            console.log(res)
            dispatch(addUser(res.data))
            if (res.status === 200) {
                navigate("/dashboard")
                toast.success("Loging Successfull!")
            } else {
                toast.error("Login failed.")
            }
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <>
            <section className="w-2xl mx-auto my-5 py-15 bg-gray-900 rounded-lg">
                <h1 className="text-center font-medium text-blue-500 text-2xl">{isSignup ? "SIGN-UP" : "SIGN-IN"}</h1>
                <form className="flex flex-col px-15" onSubmit={isSignup ? handleSignup : handleSignin}>
                    {isSignup && (
                        <>
                            <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-5">FIRSTNAME</label>
                            <input type="text"
                                className="border-0 outline-0 bg-gray-800 px-3 py-3 rounded-sm text-gray-300 text-lg my-2 font-medium w-lg h-[2.5rem] mx-auto"
                                value={user.firstname}
                                name="firstname"
                                autoComplete="off"
                                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                            />

                            <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-5">LASTNAME</label>
                            <input type="text"
                                className="border-0 outline-0 bg-gray-800 px-3 py-3 rounded-sm text-gray-300 text-lg my-2 font-medium w-lg h-[2.5rem] mx-auto"
                                value={user.lastname}
                                name="lastname"
                                autoComplete="off"
                                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                            />
                        </>)}

                    <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-5">EMAIL</label>
                    <input type="text"
                        className="border-0 outline-0 bg-gray-800 px-3 py-3 rounded-sm text-gray-300 text-lg my-2 font-medium w-lg h-[2.5rem] mx-auto"
                        value={user.email}
                        name="email"
                        autoComplete="off"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    {isSignup && (<>
                        <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-5">CONTACT</label>
                        <input type="text"
                            className="border-0 outline-0 bg-gray-800 px-3 py-3 rounded-sm text-gray-300 text-lg my-2 font-medium w-lg h-[2.5rem] mx-auto"
                            value={user.contact}
                            name="contact"
                            autoComplete="off"
                            onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                        />

                    </>)}


                    <label className="text-gray-300 space-x-2 font-semibold font-sans tracking-wider px-5">PASSWORD</label>
                    <input type="password"
                        className="border-0 outline-0 bg-gray-800 px-3 py-3 rounded-sm text-gray-300 text-lg my-2 font-medium w-lg h-[2.5rem] mx-auto"
                        value={user.password}
                        name="password"
                        autoComplete="off"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />


                    <button type="submit" className="text-center px-4 py-2 bg-blue-500 font-bold w-lg mx-auto rounded-sm text-gray-300 tracking-wider cursor-pointer hover:bg-blue-600">SUBMIT</button>
                    <p className="text-center text-red-600 py-2 font-semibold">{errMessage}</p>
                    <p className="text-center text-red-600 py-2 font-semibold">{error}</p>
                </form>
                <p className="text-center my-5 text-gray-300 font-bold hover:text-blue-600 cursor-pointer" onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Existing user  ? Login" : "New User ? Signup"}</p>
            </section>
        </>
    )
}


export default UserLogin