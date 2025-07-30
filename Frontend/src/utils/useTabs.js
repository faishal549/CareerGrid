import { useState } from "react"
import Education from "../Components/Education"
import Profile from "../Components/Profile"
import Project from "../Components/Project"
import Skills from "../Components/Skills"
import WorkExperience from "../Components/WorkExperience"


const useTabs = () => {

    const [error, setError] = useState({})
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        email: "",
        contact: "",
        location: "",
        github: "",
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
            validate: () => {
                return true
            }
        },
        {
            name: "Education",
            component: Education,
            validate: () => {
                return true
            }


        },
        {
            name: "Project",
            component: Project,
            validate: () => {
                return true
            }
        }
    ]

    return { error, setError, data, setData, tabs }
}

export default useTabs