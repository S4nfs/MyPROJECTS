import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../slice/count.slice'
import authReducer from '../slice/auth.slice'

//create a store
const store = configureStore({
    reducer: {
        countR: countReducer,
        authR: authReducer
    }
})

export default store