

import ResumeTemplate from "./ResumeTemplate";
import DownloadPdfButton from "./DownloadPdfButton";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ResumeUI = ({ userResume }) => {
    // This ref will point to the DOM node for capture
    const resumeRef = useRef(null);

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
                        <button className="btn btn-error">Delete</button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};
export default ResumeUI;

