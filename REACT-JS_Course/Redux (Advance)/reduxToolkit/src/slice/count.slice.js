import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({  //combine reducers and action using createSlice
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        //actions
        ADD: (state) => {
            state.count = state.count + 1
        },
        SUBTRACT: (state) => {
            state.count -= 1
        },
        RESET: (state) => {
            state.count = 0
        },
        ADD_NUMBER: (state, action) => {
            state.count += action.payload
        },
    }
})

export const { ADD, SUBTRACT, RESET, ADD_NUMBER } = counterSlice.actions
export default counterSlice.reducer