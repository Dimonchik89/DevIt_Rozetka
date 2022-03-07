const useChange = () => {

    const changeBooleanState = (setChange) => {
        setChange(state => !state)
    }

    return {changeBooleanState}
}

export default useChange;