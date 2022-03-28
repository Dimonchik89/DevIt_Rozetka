import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { showMenu } from "../../store/action/slideMenu";
import HeaderFind from "./HeaderFind";
import HeaderIconBlock from "./HeaderIconBlock";
import "./header.scss";
import "../../style/helper.scss";

const Header = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    return (
        <div className="header">
            <Container maxWidth="lg">
                <Grid
                    container>
                    <Grid item md={1}>
                    <div className="focus__btn">
                            <IconButton
                                size="large"
                                aria-label="user"
                                onClick={() => {
                                    dispatch(showMenu())
                                }}>
                                <MenuIcon className="icon"/>
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item md={3} className="flex align-center">
                        <Link to="/">
                            <img src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg" alt="logo" />
                        </Link>
                    </Grid>
                    <Grid item md={6} className="flex align-center">
                        <HeaderFind/>
                    </Grid>
                    <Grid item md={2} className="flex justify-end">
                        <HeaderIconBlock cart={cart}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Header;