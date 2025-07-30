import { useEffect } from "react"
import useTabs from "../utils/useTabs"
import TabForm from "./TabForm"
import { useSelector } from "react-redux"
import { useState } from "react"

const UpdateExistingResume = () => {
    // const { data, setData, error, setError, tabs } = useTabs()
    const [data, setData] = useState(null)
    const userResume = useSelector((store) => store.resume)
    console.log("am i getting", userResume)
    useEffect(() => {
        if (userResume) {
            setData(userResume)
        }
    }, [userResume])
    return (
        <>
            <div className="w-[90%] mx-auto my-5">
                <h2 className="text-2xl font-bold mb-4">Update Your Resume</h2>
                <TabForm initialData={data} setData={setData} />
            </div>

        </>
    )
}

export default UpdateExistingResume