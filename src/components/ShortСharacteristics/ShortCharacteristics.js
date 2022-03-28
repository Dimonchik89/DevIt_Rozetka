import React, {memo} from "react";
import { Typography } from "@mui/material";
import "../../style/helper.scss"

const ShortCharacteristics = memo(({selectGood}) => {
    const shortCharArr = [selectGood.diagonal, selectGood.resolution, selectGood.processorModel, selectGood.video];
    const content = shortCharArr?.map(item => <Typography key={`shortChar_${item}`} variant="h5" component="span"> {item}/</Typography>)
    return (
        <>
        <div className="mt-30">
            {content}
        </div>
        </>
    )
})
export default ShortCharacteristics;