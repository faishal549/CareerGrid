require("dotenv").config()
const express = require("express")
const app = express();
const connectDatabase = require("./Utils/database")
const PORT = process.env.PORT


app.use(express.json())


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