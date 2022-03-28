import React from "react"
import { Box, Button } from "@mui/material";
import { handleCloseAndOpen } from "../../hook/useChange";

const ChangeFormButton = ({title, closed, open}) => {
    const {handleChangeModal} = handleCloseAndOpen()
    return (
        <Box sx={{textAlign: "center"}}>
            <Button
                onClick={() => handleChangeModal(closed, open, 0)}
            >
                {title}
            </Button>
        </Box>
    )
}
export default ChangeFormButton;