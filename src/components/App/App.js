import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import GoodsPage from "../GoodsPage/GoodsPage";
import GoodPage from "../GoodPage/GoodPage";
import SlideMenu from "../SlideMenu/SlideMenu";
import Cart from "../Cart/Cart";

const App = () => {
    return (
        <>
            <Header/>
            <Cart/>
            <SlideMenu/>
            <Routes>
                <Route path="/" element={<GoodsPage/>}/>
                <Route path="/:id/*" element={<GoodPage/>}/>
            </Routes>
        </>
    )
}
export default App;