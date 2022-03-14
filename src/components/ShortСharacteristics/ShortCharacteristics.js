import React, {memo} from "react";
import { Typography } from "@mui/material";
import "../../style/helper.scss"

const ShortCharacteristics = memo(({selectGood}) => {
    return (
        <>
        <div className="mt-30">
            <Typography
                variant="h5"
                component="span">
                {selectGood.diagonal}/
            </Typography>
            <Typography
                variant="h5"
                component="span">
                {selectGood.resolution}/
            </Typography>
            <Typography
                variant="h5"
                component="span">
                {selectGood.processorModel}/
            </Typography>
            <Typography
                variant="h5"
                component="span">
                {selectGood.video}/
            </Typography>
        </div>
        </>
    )
})

export default ShortCharacteristics;