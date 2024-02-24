
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
export const incrementByValue = (val) => {
    return {
        type: "INCREMENTBYVALUE",
        payload: val
    }
}
export const reset = () => {
    return {
        type: "RESET"
    }
}