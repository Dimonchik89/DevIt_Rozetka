import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import GoodsPage from "../GoodsPage/GoodsPage";
import GoodPage from "../GoodPage/GoodPage";
import SlideMenu from "../SlideMenu/SlideMenu";
import Cart from "../Cart/Cart";
import Login from "../Authorization/Login";
import Register from "../Authorization/Register";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<GoodsPage/>}/>
                <Route path="/:id/*" element={<GoodPage/>}/>
            </Routes>
            <Cart/>
            <SlideMenu/>
            <Login/>
            <Register/>
        </>
    )
}
export default App;