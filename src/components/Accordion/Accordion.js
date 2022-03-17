import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import InfoList from "../InfoList/InfoList";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionBlock = ({title, menu}) => {
    return (
        <Accordion sx={{boxShadow: "none", borderTop: "1px solid #e3e3e3"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                id="services">
                <Typography
                    variant="h5"
                    component="h5"
                    color="gray">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className="pl-0" sx={{padding: 0}}>
                <InfoList title="Помощь" arrLink={menu}/>
            </AccordionDetails>
        </Accordion>
    )
}
export default AccordionBlock;