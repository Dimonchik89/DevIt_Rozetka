import React, {memo, useEffect} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFindQuery } from "../../hook/useFind";
import queryString from 'query-string'

const FilterItem = memo(({item, addActiveFilter, removeOneFilter, queryKey}) => {
    const dispatch = useDispatch();
    const {filterQuery} = useSelector(state => state.filterQuery);
    const { createQuerySearch, removeFilterInQuerySearch, addUrlQuery } = useFindQuery();
    const location = useLocation();
    const queryObj = queryString.parse(location.search);
    let queryValue;
    let queryRes = [];

    const createSerchArr = () => {
        Object.values(queryObj).map(item => {
            queryValue = item.replace(/\"/g, "").split(" ")
            queryRes = [...queryRes, ...queryValue]
        })
        return queryRes
    }
    useEffect(() => {
        addUrlQuery()
    }, [filterQuery]);
    useEffect(() => {
        dispatch(addActiveFilter(createSerchArr()))
    }, [location]);

    return (
        <>
            <FormControlLabel
                sx={{fontSize: "2rem"}}
                control={<Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        onChange={(e) => {
                            if(e.target.checked) {
                                createQuerySearch(item, queryKey)
                            } else {
                                removeFilterInQuerySearch(item, queryKey)
                                dispatch(removeOneFilter(item))
                            }
                        }}
                        color="success"/>} label={item}/>
        </>
    )
})
export default FilterItem;