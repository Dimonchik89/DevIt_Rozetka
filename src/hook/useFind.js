const useFind = () => {

    const setFind = (text, handleChange) => {
        handleChange(inputFind => inputFind = text)
    }

    const resetInputFind = (handleChange) => {
        handleChange(inputFind => inputFind = "");
    }

    return { setFind, resetInputFind }
}

export default useFind;