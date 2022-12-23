import { authConstants } from "../actions/constants"

const authReducer = (state = true, action) => {
    if (action.type === authConstants.TOGGLE_AUTH) {
        return state = !state
    }
    return state
}
export default authReducer