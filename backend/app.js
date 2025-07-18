require("dotenv").config()
const express = require("express")
const app = express();
const connectDatabase = require("./Utils/database")
const AuthRouter = require("./Router/Auth_Route")
const ResumeRouter = require("./Router/Resume_Route")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", AuthRouter)
app.use("/api/user", ResumeRouter)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to CareerGrid" })
})


connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Server is listening at PORT NO :", PORT)
    })
}).catch((error) => {
    console.error(error)
})

