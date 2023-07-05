import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({  //combine reducers and action using createSlice
    name: "auth",
    initialState: {
        isLoggedIn: true,
    },
    reducers: {
        //actions
        TOGGLE_AUTH: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },

    }
})

export const { TOGGLE_AUTH } = authSlice.actions;
export default authSlice.reducer;