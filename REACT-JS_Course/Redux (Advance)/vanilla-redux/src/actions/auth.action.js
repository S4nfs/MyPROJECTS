import { authConstants } from "./constants"

export const toggleAuth = () => {
    return {
        type: authConstants.TOGGLE_AUTH,

    }
}
