import { createSlice } from "@reduxjs/toolkit";


const resumeSlice = createSlice({
    name: 'resume',
    initialState: null,
    reducers: {
        createResume: (state, action) => action.payload,
        addResume: (state, action) => action.payload
    }
})

export const { createResume, addResume } = resumeSlice.actions
export default resumeSlice.reducer