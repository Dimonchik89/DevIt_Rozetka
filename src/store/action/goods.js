export const goodsFetching = () => {
    return {
        type: "GOODS_FETCHING"
    }
}

export const goodsFetched = (goods) => {
    return {
        type: "GOODS_FETCHED",
        payload: goods
    }
}

export const goodsFetchingError = () => {
    return {
        type: "GOODS_FETCHING_ERROR"
    }
}