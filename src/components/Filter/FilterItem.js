import React, {useState} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";

const FilterItem = ({item, addActiveFilter, removeOneFilter}) => {

    const dispatch = useDispatch();
    const {activeFilter} = useSelector(state => state.filter);

    return (
        <>
            <FormControlLabel
                sx={{fontSize: "2rem"}}
                control={<Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
                        onChange={(e) => {
                            if(e.target.checked) {
                                dispatch(addActiveFilter(item))
                            } else {
                                dispatch(removeOneFilter(item))
                            }
                        }}
                        color="success"/>} label={item}/>
        </>

    )
}

export default FilterItem;

// [
//     {brand: ["aser", "asus"]}
//     {ram: ["4", "8"]}
//     {processor: ["i3", "i5"]}
// ]