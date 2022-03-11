export const addActiveFilter = (filter) => {
    return {
        type: "ADD_ACTIVE_FILTER",
        payload: filter
    }
}

export const removeOneFilter = (filter) => {
    return {
        type: "REMOVE_ONE_FILTER",
        payload: filter
    }
}

export const resetFilter = () => {
    return {
        type: "RESET_FILTER"
    }
}

export const filterFetching = () => {
    return {
        type: "FILTER_FETCHING",
    }
}

export const filterFetched = (filters) => {
    return {
        type: "FILTER_FETCHED",
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: "FILTER_FETCHING_ERROR"
    }
}