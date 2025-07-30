import { useEffect, useState } from "react"
import useTabs from "../utils/useTabs.js"
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createResume } from "../utils/store/resumeSlice.js"
import { toast } from "react-toastify"

const TabForm = ({ initialData }) => {
    const [active, setActive] = useState(0)
    const { data, setData, error, setError, tabs } = useTabs()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (initialData) {
            setData(initialData)
        }
    }, [initialData])

    const handleNext = () => {
        tabs[active].validate() && setActive((prev) => prev + 1)
    }
    const handlePrevious = () => {
        setActive(active - 1)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/api/user/resume`, data, { withCredentials: true })
            console.log(res)
            dispatch(createResume(res.data.resume))
            if (res.status === 200) {

                navigate("/dashboard")
                toast.success("Resume Created!")
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const TabComponent = tabs[active].component
    return (
        <>
            <div className="grid grid-cols-5 w-[80%] mx-auto my-4">
                {
                    tabs.map((t, index) => {
                        return <div key={t.name} className="border-2 text-center px-4 py-2 text-blue-100 font-bold bg-gray-600  hover:bg-blue-600 cursor-pointer"
                            onClick={() => tabs[active].validate() && setActive(index)}> {t.name}</div>
                    })
                }
            </div>
            <TabComponent data={data} setData={setData} error={error} setError={setError} />
            <div className="flex flex-row justify-center gap-5 my-3">
                {active > 0 && <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition" onClick={handlePrevious}>Previous</button>}

                {active < 4 && <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition" onClick={handleNext}>Next</button>}
                {active === 4 && <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition" onClick={handleSubmit}>Submit</button>}
            </div>
        </>
    )
}

export default TabForm