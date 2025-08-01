import { createSlice } from "@reduxjs/toolkit";


const resumeSlice = createSlice({
    name: 'resume',
    initialState: null,
    reducers: {
        createResume: (state, action) => action.payload,
        addResume: (state, action) => action.payload,
        clearResume: () => null
    }
})

export const { createResume, addResume, clearResume } = resumeSlice.actions
export default resumeSlice.reducer