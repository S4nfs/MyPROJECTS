//rootReducer
import { combineReducers } from 'redux'
import cartItems from "./reducer";

export default combineReducers({
    cartItems,
})