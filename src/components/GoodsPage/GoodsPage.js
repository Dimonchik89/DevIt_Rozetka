import React from "react"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Goods from "../Goods/Goods";
import Filter from "../Filter/Filter";


const GoodsPage = () => {

    return (
        <Container sx={{mt: "30px"}}>
            <Grid container>
                <Grid item md={3}>
                    <Filter/>
                </Grid>
                <Grid item md={9}>
                    <Goods/>
                </Grid>
            </Grid>

        </Container>
    )
}

export default GoodsPage;