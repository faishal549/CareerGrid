import { useEffect } from "react"
import useTabs from "../utils/useTabs"
import TabForm from "./TabForm"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import { addResume } from "../utils/store/resumeSlice"
import { toast } from "react-toastify"
// const BASE_URL = import.meta.env.VITE_BASE_URL
import { useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axiosInstance"

const UpdateExistingResume = () => {
    // const { data, setData, error, setError, tabs } = useTabs()
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userResume = useSelector((store) => store.resume)
    // console.log("am i getting", userResume)
    useEffect(() => {
        if (userResume) {
            setData(userResume)
        }
    }, [userResume])
    // console.log("this is local state data", data)

    const handleUpdateResume = async (formdata) => {
        // console.log("formdata", formdata)
        try {
            const res = await axiosInstance.post("/api/user/resume", formdata)
            // console.log("update resume", res)
            if (res.status === 200) {
                dispatch(addResume(res.data.resume))
                navigate("/dashboard")
                toast.success("Resume Updated Successfully!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-[90%] mx-auto my-5">
                <h2 className="text-2xl font-bold mb-4">Update Your Resume</h2>
                <TabForm initialData={data} setData={setData} onSubmit={handleUpdateResume} />
            </div>

        </>
    )
}

export default UpdateExistingResume