import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Goods from "../Goods/Goods";
import Filter from "../Filter/Filter";
import { resetFind } from "../../store/action/header";
import { resetFilter } from "../../store/action/filter";
import { useDispatch } from "react-redux";

const GoodsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetFind())
        dispatch(resetFilter())
    }, [])
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