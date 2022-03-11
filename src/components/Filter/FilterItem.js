import React, {memo} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from "react-redux";

const FilterItem = memo(({item, addActiveFilter, removeOneFilter}) => {
    const dispatch = useDispatch();
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
})
export default FilterItem;