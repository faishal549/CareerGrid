

import ResumeTemplate from "./ResumeTemplate";
import DownloadPdfButton from "./DownloadPdfButton";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { clearResume } from "../utils/store/resumeSlice";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
// const BASE_URL = import.meta.env.VITE_BASE_URL



const ResumeUI = ({ userResume }) => {
    // This ref will point to the DOM node for capture
    const resumeRef = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showConfirm, setShowConfirm] = useState(false)
    const handleDeleteResume = async () => {
        try {
            const res = await axiosInstance.delete("/api/user/delete/resume")
            // console.log(res)
            dispatch(clearResume(userResume))
            if (res.status === 200) {
                toast.success("Resume Deleted")
                navigate("/dashboard")
            }
        } catch (error) {
            toast.error("Fail to Delete Resume")
            console.log(error)
        }
    }

    return (
        <div className="flex gap-4">
            {/* Pass down ref */}
            <ResumeTemplate userResume={userResume} ref={resumeRef} />
            <aside className="w-64 p-4 print:hidden mx-auto text-center">
                <ul className="my-5 flex flex-col gap-5">
                    <Link to="/update-resume">
                        <li>
                            <button className="btn btn-neutral">Update Resume</button>
                        </li>
                    </Link>
                    <li>
                        <DownloadPdfButton resumeRef={resumeRef} />
                    </li>
                    <li>
                        <button className="btn btn-info">Share Resume</button>
                    </li>
                    <li>
                        <button className="btn btn-error" onClick={() => setShowConfirm(true)}>Delete</button>
                    </li>
                </ul>
                {showConfirm && (
                    <div role="alert" className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 bg-blue-200 rounded-2xl p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-blue-500 font-bold">Are you sure you want to delete your resume ?</span>
                        <div>
                            <button className="btn btn-sm mx-5 my-2" onClick={() => setShowConfirm(false)}>Cancel</button>
                            <button className="btn btn-sm btn-primary mx-5 my-2" onClick={handleDeleteResume}>Delete</button>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    );
};
export default ResumeUI;

