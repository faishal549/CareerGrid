import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import resumeSlice from "./resumeSlice"
const appStore = configureStore({
    reducer: {
        user: userSlice,
        resume: resumeSlice
    }
})

export default appStore