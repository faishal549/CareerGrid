import { useState, useEffect } from "react";
import { feedbacks } from "../utils/constent.js"
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL
import { toast } from 'react-toastify';


const Body = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [request, setRequest] = useState({
        name: "",
        email: "",
        contact: "",
        message: ""
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % feedbacks.length)
        }, 4000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const current = feedbacks[currentIndex]

    const handleChangeInput = (e) => {

        const { name, value } = e.target
        setRequest((prev) => ({ ...prev, [name]: value }))
    }
    const handleRequestCallback = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/api/requestcallback`, request)
            if (res.status === 200) {
                toast.success("Callback Sent")
                alert(" Request ReceivedOur team will get back to you soon")
                setRequest({
                    name: "",
                    email: "",
                    contact: "",
                    message: ""
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("Request failed")
        }
    }

    return (
        <>
            <main>
                <section className="width-full flex felx-row  my-10 py-10">
                    <div className="flex flex-col justify-center px-10 ">
                        <h1 className="text-4xl font-extrabold tracking-wider py- text-cyan-400 text-shad2ow-accent-content">Build Your Career Profile.<br /> Get Discovered.</h1>
                        <p className="text-wrap text-lg text-cyan-400 text-shad2ow-accent-content">Whether you're a fresher or experienced, CareerGrid gives you the tools to showcase your skills and get noticed by recruiters.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <img src="./src/assets/heroimage.svg" alt="heroimage" className="" />
                    </div>
                </section>

                <section className=" w-[80%] mx-auto">
                    <div className="">
                        <h1 className="text-center text-4xl font-bold text-blue-500 py-5">Why Choose CareerGrid?</h1>
                        <div className="grid grid-cols-3 gap-6 mx-4">
                            <div className="bg-gray-100 shadow-md px-5 py-5 rounded-md mt-4">
                                <h2 className="text-center text-2xl font-medium capitalize text-gray-700">Build Once. Share Everywhere</h2>
                                <p className="text-center text-wrap text-gray-700">Create your resume and share a public profile link with ease</p>
                            </div>
                            <div className="bg-gray-100 shadow-md px-5 py-5 rounded-md mt-4">
                                <h2 className="text-center text-2xl font-medium capitalize text-gray-700">Filter by Skills & Projects</h2>
                                <p className="text-center text-wrap text-gray-700">Recruiters can discover you based on your actual skills not just keywords</p>
                            </div>
                            <div className="bg-gray-100 shadow-md px-5 py-5 rounded-md mt-4">
                                <h2 className="text-center text-2xl font-medium capitalize text-gray-700">Fast, Secure , Simple</h2>
                                <p className="text-center text-wrap text-gray-700">Built with modern tech stack (MERN). CareerGrid is lightning fast ans secure</p>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto mt-12 py-8 px-4 bg-gray-100 shadow-md transition duration-300 ease-in-out">
                            <h2 className="text-center text-2xl  capitalize text-blue-600 font-bold py-3">What Users Are Saying</h2>
                            <p className="text-center text-wrap text-black text-lg"> {current.comment} -{current.name},{current.role}</p>
                            <div className="flex justify-center gap-2 mt-4">
                                {
                                    feedbacks.map((_, index) => {
                                        return <button className={` h-2 w-2 rounded-full ${index === currentIndex ? `bg-blue-600` : `bg-gray-900`}`}
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}> </button>
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </section>

                <section className=" w-full  flex justify-around gap-10 my-10 ">
                    <div className="max-w-2xl p-10 my-auto">
                        <h1 className="text-4xl font-extrabold font-stretch-100% tracking-wide text-orange-500 py-5 ">Get Matched with the Right Job & Career Advice</h1>
                        <p className="text-orange-500 font-semibold">Our dedicated team is here to help you find job opportunities that match your skills and experience — and to provide personalized career guidance to support your growth.</p>
                    </div>
                    <div className=" w-1/3 flex flex-col  p-10 shadow-2xl rounded-2xl">

                        <form className="flex flex-col" onSubmit={handleRequestCallback}>
                            <input type="text" placeholder="Your Name"
                                className="w-[20rem] px-5 py-2 border-1 outline-0 mx-auto rounded-lg my-5"
                                name="name" value={request.name} onChange={handleChangeInput} />
                            <input type="email" placeholder="email"
                                className="w-[20rem] px-5 py-2 border-1 outline-0 mx-auto rounded-lg my-5"
                                name="email" value={request.email} onChange={handleChangeInput} />
                            <input type="number" placeholder="contact"
                                className="w-[20rem] px-5 py-2 border-1 outline-0 mx-auto rounded-lg my-5"
                                name="contact" value={request.contact} onChange={handleChangeInput} />
                            <textarea type="text" rows={6} cols={6} placeholder="Message"
                                className="w-[20rem] px-5 py-2 border-1 outline-0 mx-auto rounded-lg my-5"
                                name="message" value={request.message} onChange={handleChangeInput} ></textarea>
                            <button type="submit" className="px-4 py-2 bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-700 text-white font-semibold">Request a callback</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Body;
