import { useState } from "react"
import Education from "./Education"
import Profile from "./Profile"
import Project from "./Project"
import Skills from "./Skills"
import WorkExperience from "./WorkExperience"

const TabForm = () => {
    const [active, setActive] = useState(0)
    const [error, setError] = useState({})
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        email: "",
        contact: "",
        location: "",
        githubId: "",
        skills: [],
        summary: "",
        experience: [{
            company: "",
            role: "",
            duration: "",
            description: ""
        }],
        education: [{
            instituion: "",
            degree: "",
            year: ""
        }],
        projects: [{
            title: "",
            description: "",
            github: "",
            livelink: ""
        }]

    })
    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const err = {}
                if (!data.firstname || data.firstname.length < 3) {
                    err.firstname = "Firstname should be atlest 3 charector"
                }
                if (!data.lastname) {
                    err.lastname = "Lastname required if not please enter fullstop"
                }
                if (!data.email || data.email.length < 10) {
                    err.email = "Invalid Email"
                }
                if (!data.gender) {
                    err.gender = "Gender is missing"
                }
                if (!data.age || data.age < 18) {
                    err.age = "Invalid age"
                }
                if (!data.contact || data.contact < 10) {
                    err.contact = "Invalid contact"
                }
                if (!data.location) {
                    err.location = "Location is missing"
                }
                setError(err)
                return err.firstname || err.email || err.gender || err.age || err.contact || err.contact ? false : true
            }

        },
        {
            name: "Skills",
            component: Skills,
            validate: () => {
                const err = {}
                if (data.skills.length === 0 || data.skills.length > 10) {
                    err.skills = "Please enter minimum one skills , Skills should not be more than 10"
                }
                if (!data.summary || data.summary.length > 200) {
                    err.summary = "Summary is required should not more than 200 charactor"
                }
                setError(err)
                return err.skills || err.summary ? false : true
            }
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
    const handleNext = () => {
        tabs[active].validate() && setActive((prev) => prev + 1)
    }
    const handlePrevious = () => {
        setActive(active - 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
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