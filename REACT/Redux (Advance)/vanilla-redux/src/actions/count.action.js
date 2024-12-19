import { countConstants } from "./constants";

export const handleSubtract = () => {
    return {
        type: countConstants.SUBTRACT
    }
};

export const handleReset = () => {
    return {
        type: countConstants.RESET
    }
};
export const handleAdd = () => {
    return {
        type: countConstants.ADD
    }
};
export const handleAddNumber = (amount) => {
    return {
        type: countConstants.ADD_NUMBER,
        payload: amount
    }
};