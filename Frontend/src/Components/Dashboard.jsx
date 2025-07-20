import ProfileCard from "./ProfileCard"
import ResumeSection from "./ResumeSection"

const Dashboard = () => {
    return (
        <>
            <main className="w-[80%] mx-auto flex flex-row gap-5">
                <ProfileCard />
                <ResumeSection />
            </main>
        </>
    )
}

export default Dashboard

