

import ResumeTemplate from "./ResumeTemplate";
import DownloadPdfButton from "./DownloadPdfButton";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

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
                        <button className="btn btn-error" onClick={handleDeleteResume}>Delete</button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};
export default ResumeUI;

