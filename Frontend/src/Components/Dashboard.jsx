import ProfileCard from "./ProfileCard"
import ResumeSection from "./ResumeSection"
import { useDispatch, useSelector } from "react-redux"
import ResumeUI from "./ResumeUI"
const BASE_URL = import.meta.env.VITE_BASE_URL
import axios from "axios"
import { addResume } from "../utils/store/resumeSlice"
import { useEffect } from "react"

const Dashboard = () => {
    const dispatch = useDispatch()
    const userResume = useSelector((store) => store.resume)
    useEffect(() => {
        const getMyResume = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/user/resume/me`, { withCredentials: true })
                console.log(res)
                dispatch(addResume(res.data.resume))

            } catch (error) {
                console.log(error)
            }
        }
        if (!userResume) getMyResume()
    }, [dispatch, userResume])

    return (
        <>
            <main className="w-[80%] mx-auto flex flex-row gap-5">

                {userResume ? <ResumeUI userResume={userResume} /> : (<> <ResumeSection />  <ProfileCard /></>)}

            </main>
        </>
    )
}

export default Dashboard

