//reducer
import { ADD_TO_CART } from '../constants'

const initialState = {
    cartData: []
}
export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn(`Redux reducer data: ${action}`)

            return {
                ...state,
                cartData: action.data
            }
        default:
            return state

    }
}