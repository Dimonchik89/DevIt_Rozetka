import React from "react";
import { Typography } from "@mui/material";

const Saler = () => {
    return (
        <div className="border p-16 mt-30">
            <div className="flex  space-between">
                <div>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        Продавец:
                    </Typography>
                    <Typography
                        variant="h5"
                        component="span"
                        sx={{marginLeft: ".5rem", fontWeight: 600}}>
                        Rozetka
                    </Typography>
                </div>
                <img className="good-page__logo" src="https://content1.rozetka.com.ua/sellers/logo_svg/original/187326382.svg" alt="logo" />
            </div>
        </div>
    )
}
export default Saler;