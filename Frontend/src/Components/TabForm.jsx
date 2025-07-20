import { useState } from "react"
import Education from "./Education"
import Profile from "./Profile"
import Project from "./Project"
import Skills from "./Skills"
import WorkExperience from "./WorkExperience"

const TabForm = () => {
    const [active, setActive] = useState(0)
    const tabs = [
        {
            name: "Profile",
            component: Profile,
        },
        {
            name: "Skills",
            component: Skills,
        },
        {
            name: "WorkExperience",
            component: WorkExperience,
        },
        {
            name: "Education",
            component: Education,
        },
        {
            name: "Project",
            component: Project,
        }
    ]
    const TabComponent = tabs[active].component
    return (
        <>
            <div className="grid grid-cols-5 w-[80%] mx-auto my-4">
                {
                    tabs.map((t, index) => {
                        return <div key={t.name} className="border-2 text-center px-4 py-2 text-blue-100 font-bold bg-gray-600  hover:bg-blue-600 cursor-pointer"
                            onClick={() => setActive(index)}> {t.name}</div>
                    })
                }
            </div>
            <TabComponent />
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">Next</button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">Previous</button>
        </>
    )
}

export default TabForm