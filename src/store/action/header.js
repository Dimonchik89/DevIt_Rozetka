export const changeFind = (find) => {
    return {
        type: "CHANGE_FIND",
        payload: find
    }
}

export const resetFind = () => {
    return {
        type: "RESET_FIND"
    }
}