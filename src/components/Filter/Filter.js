import React, {useEffect, useCallback} from "react";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import FormGroup from '@mui/material/FormGroup';
import FilterItem from "./FilterItem";
import FilterContainer from "./FilterContainer";
import useHttp from "../../hook/useHttp";
import { addActiveFilter, removeOneFilter, filterFetching, filterFetched, filterFetchingError } from "../../store/action/filter";
import "./filter.scss";

const Filter = () => {
    const dispatch = useDispatch();
    const {getGoods} = useHttp()
    useEffect(() => {
        dispatch(filterFetching())
        getGoods("http://localhost:3001/notebook-filter")
            .then(filters => dispatch(filterFetched(filters)))
            .catch(dispatch(filterFetchingError()))

    }, [])
    const renderContent = useCallback((data) => {
        if(data.length > 0) {
            return data.map(item => {
                return (
                    <FormGroup className="filter__block">
                        <h3 className="filter__title">{Object.keys(item)}</h3>
                        {Object.values(item)[0].map(elem => <FilterItem item={elem} addActiveFilter={addActiveFilter} removeOneFilter={removeOneFilter}/>)}
                    </FormGroup>
                )
            })
        } else {
            return <CircularProgress/>
        }
    }, [])
    return (
        <>
            <FilterContainer renderContent={renderContent}/>
        </>
    )
}
export default Filter;