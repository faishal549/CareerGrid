const Resume = require("../Models/Resume_Model")

const createOrUpdateResume = async (req, res) => {
    try {
        const userId = req.user._id
        const resumeData = req.body;
        //validation checks 
        const requiredFields = ["firstname", "lastname", "email", "contact", "location", "age", "summary"]
        for (let field of requiredFields) {
            if (!resumeData[field] || typeof resumeData[field] !== "string") {
                return res.status(400).json({ message: `Invalid or missing field: ${field}` })
            }
        }
        if (resumeData.age <= 0) {
            return res.status(400).json({ message: "Invalid or missing age (must be a number)" });
        }
        if (!Array.isArray(resumeData.skills)) {
            return res.status(400).json({ message: "Skills must be a valid array" });
        }
        if (resumeData.skills.length > 20) {
            return res.status(400).json({ message: "You can add  maximum 20 skills" });
        }

        if (!Array.isArray(resumeData.education) || resumeData.education.length > 5) {
            return res.status(400).json({ message: "Education details should not more than 5" });
        }

        if (!Array.isArray(resumeData.projects) || resumeData.projects.length > 5) {
            return res.status(400).json({ message: "Project should not more than 5" });
        }
        const existingResume = await Resume.findOne({ user: userId })
        if (existingResume) {
            //update
            const updateResume = await Resume.findOneAndUpdate({ user: userId }, resumeData, { new: true })
            return res.status(200).json({ message: "Resume updated successfully", resume: updateResume })
        } else {
            // create new
            const newResume = await Resume.create({ ...resumeData, user: userId })
            return res.status(200).json({ message: "Resume created successfully", resume: newResume })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "server error", error: error.message })
    }
}


module.exports = { createOrUpdateResume }