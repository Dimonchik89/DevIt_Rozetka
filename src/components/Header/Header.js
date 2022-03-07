import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import useFind from "../../hook/useFind";
import { changeFind, resetFind } from "./headerSlice";
import { Link } from "react-router-dom";
import useChange from "../../hook/useChange";


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';


import "./header.scss";
import "../../style/helper.scss";

const Header = ({setSlideMenu}) => {

    const [inputFind, setInputFind] = useState("")
    const { setFind, resetInputFind } = useFind();
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    const {changeBooleanState} = useChange();

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
                                onClick={() => changeBooleanState(setSlideMenu)}>
                                <MenuIcon className="icon"/>
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item md={3} className="flex align-center">
                        <Link to="/">
                            <pictures>
                                <source media="(min-width: 1280px)" srcSet="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"/>
                                <source media="(min-width: 240px)" srcSet="https://content.rozetka.com.ua/widget_logotype/light/original/229862238.svg"/>
                                <img src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg" alt="logo" />
                            </pictures>
                        </Link>
                    </Grid>
                    <Grid item md={6} className="flex align-center">
                        <div className="header__find">
                            <input
                                className="header__input"
                                type="text"
                                value={inputFind}
                                onChange={(e) => {
                                    setFind(e.target.value, setInputFind)
                                }} />
                                {
                                    inputFind.length === 0 ? null : <IconButton disableRipple="false" sx={{mr: "1rem"}} onClick={() => {
                                                                            resetInputFind(setInputFind)
                                                                            dispatch(resetFind())
                                                                        }}>
                                                                        <CloseIcon/>
                                                                    </IconButton>
                                }

                            <Button
                                className="header__button"
                                color="success"
                                variant="contained"
                                onClick={() => {
                                    dispatch(changeFind(inputFind))
                                }}>
                                Найти
                            </Button>
                        </div>

                    </Grid>
                    <Grid item md={2} className="flex justify-end">
                        <div className="focus__btn">
                            <IconButton
                                size="large"
                                aria-label="user">
                                <PersonOutlineIcon  className="icon"/>
                            </IconButton>
                        </div>

                        <div className="focus__btn">
                            <IconButton
                                size="large"
                                aria-label="cart">
                                <Badge
                                    badgeContent={cart.length}
                                    color="success"
                                    size="large"
                                    fontSize="1rem">
                                    <ShoppingCartIcon  className="icon"/>
                                </Badge>
                            </IconButton>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default Header;