import { Link } from "react-router-dom"


const ResumeUI = ({ userResume }) => {
    const { firstname, lastname, email, contact, location, github, gender, age, summary, skills, experience, education, projects } = userResume
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md border-2 my-5">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold capitalize">{firstname} {lastname}  {gender}|{age}</h1>
                    <p>{email} • {contact} • {location}</p>
                    <p className="text-blue-600">GithubID: {github}</p>
                </div>
                {/* Summary */}
                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Summary</h2>
                    <p>{summary}</p>
                </section>

                {/* Skills */}
                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    <ul className="list-disc pl-5">
                        {skills?.map((skill, i) => <li className="capitalize" key={i}>{skill}</li>)}
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Experience</h2>
                    {experience?.map((experience, i) => (
                        <div key={i} className="mb-2">
                            <h3 className="font-medium capitalize">{experience.company}</h3>
                            <p>{experience.role}</p>
                            <p>{experience.description}</p>
                            <p className="text-sm text-gray-500">{experience.duration}</p>
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Education</h2>
                    {education?.map((edu, i) => (
                        <div key={i}>
                            <h3 className="font-medium uppercase">{edu.degree} - {edu.institution}</h3>
                            <p>{edu.year}</p>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-xl font-semibold">Projects</h2>
                    {projects?.map((project, i) => (
                        <div key={i} className="mb-2">
                            <h3 className="font-medium capitalize">{project.title}</h3>
                            <p>{project.description}</p>
                            <p className="text-sm text-blue-500"> GitHub: {project.github}</p>
                            <p className="text-sm text-blue-500"> LiveLink: {project.livelink}</p>
                        </div>
                    ))}
                </section>
            </div>
            <aside className="w-64 p-4">
                <ul className="my-5 flex flex-col gap-5">
                    <Link to="/update-resume"><li><button className="btn btn-neutral">Update Resume</button></li></Link>
                    <li> <button className="btn btn-primary">Convert Into PDF</button></li>


                    <li> <button className="btn btn-info">Share Resume</button></li>

                    <li> <button className="btn btn-error">Delete</button></li>
                </ul>
            </aside>

        </>

    )
}

export default ResumeUI