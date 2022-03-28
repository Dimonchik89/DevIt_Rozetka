import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterQuery } from "../store/action/filterQuery";
import { useNavigate } from "react-router-dom";

export const useFind = (init) => {
    const [findText, setFindText] = useState(init);
    const setChangeFindText = event => {
        setFindText(event.target.value)
    }
    const resetFindText = () => {
        setFindText("")
    }
    return {findText, setChangeFindText, resetFindText}
}

export const useFindQuery = () => {
    const dispatch = useDispatch()
    const {filterQuery} = useSelector(state => state.filterQuery);
    const navigate = useNavigate();
    let newArr = [...filterQuery];
    const createQuerySearch = (item, queryKey) => {
        if(newArr.length) {
            let searchInclides = false;
            newArr.forEach((query, i) => {
                if(Object?.keys(query).includes(queryKey)) {
                    searchInclides = true;
                    query[queryKey].push(item?.replace(/\s/g, "-"))
                }
            })
            if(!searchInclides) {
                newArr.push({[queryKey]: [item?.replace(/\s/g, "-")]})
            }
        } else {
            newArr.push({[queryKey]: [item?.replace(/\s/g, "-")]})
        }
        dispatch(addFilterQuery(newArr))
    }

    const removeFilterInQuerySearch = (item, queryKey) => {
        newArr = filterQuery.map((el, i) => {
            if(Object?.keys(el).includes(queryKey)) {
                if(filterQuery[i][queryKey].length > 1) {
                    return {[queryKey]: filterQuery[i][queryKey].filter(elem => elem !== item)}
                } else {
                    return null
                }
            } else {
                return el
            }
        })
        const delNull = newArr.filter(item => item !== null)
        dispatch(addFilterQuery(delNull))
    }

    const addUrlQuery = () => {
        let str = "?";
        filterQuery?.map((item, i) => {
            const findTag = Object?.keys(item)[0]
            if(i === 0) {
                if(filterQuery[i][findTag].length > 0) {
                    const arr = filterQuery[i][findTag].join("+");
                    str+=`${findTag}="${arr}"`
                }
            } else {
                if(filterQuery[i][findTag].length > 0) {
                    const arr = filterQuery[i][findTag].join("+");
                    str+=`&${findTag}="${arr}"`
                }
            }
        })
        navigate(`${str}`, {replace: true})
    }
    return { createQuerySearch, removeFilterInQuerySearch, addUrlQuery }
}