require("dotenv").config()
const express = require("express")
const app = express();
const connectDatabase = require("./Utils/database")
const AuthRouter = require("./Router/Auth_Route")
const ResumeRouter = require("./Router/Resume_Route")
const RequestCallbackRouter = require("./Router/Request_Route")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const PORT = process.env.PORT

const allowedOrigins = [
    "https://your-frontend.onrender.com",
    "http://localhost:5173"
];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())
app.use("/api", AuthRouter)
app.use("/api/user", ResumeRouter)
app.use("/api/requestcallback", RequestCallbackRouter)

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

