import { countConstants } from "../actions/constants"

const countReducer = (state = 0, action) => {
    if (action.type === countConstants.SUBTRACT) {
        return state - 1
    }
    if (action.type === countConstants.ADD) {
        return state + 1
    }
    if (action.type === countConstants.RESET) {
        return state = 0
    }
    if (action.type === countConstants.ADD_NUMBER) {
        return state + action.payload
    }
    return state;
}

export default countReducer