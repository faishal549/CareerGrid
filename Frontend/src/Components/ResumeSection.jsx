import { Link } from "react-router-dom"

const ResumeSection = () => {
    return (
        <>
            <div className="border-2 w-full max-h-[40rem] my-5 rounded-lg bg-indigo-100">
                <div>
                    <Link to="/dashboard/resume">
                        <button className="text-center px-4 py-2 ml-5 mt-5 rounded-sm bg-indigo-900 text-white font-semibold hover:px-5 transition-all ease-in-out">Create New Resume</button>
                    </Link>
                </div>


            </div>
        </>
    )
}
export default ResumeSection