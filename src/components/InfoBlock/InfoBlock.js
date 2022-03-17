import React, {memo} from "react"
import { Typography } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';

const InfoBlock = memo(({icon, title, text}) => {
    return (
        <div className="border  p-16  mt-30">
            <div className="flex align-center">
                {icon}
                <Typography
                    variant="h6"
                    component="p">
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{marginLeft: ".7rem"}}>
                    {text}
                </Typography>
            </div>
        </div>
    )
})
export default InfoBlock;