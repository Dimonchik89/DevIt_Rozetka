import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useChange from "../../hook/useChange";

import Header from "../Header/Header";
import GoodsPage from "../GoodsPage/GoodsPage";
import GoodPage from "../GoodPage/GoodPage";
import SlideMenu from "../SlideMenu/SlideMenu";

const App = () => {

    const [slideMenu, setSlideMenu] = useState(false);

    return (
        <>
            <Header setSlideMenu={setSlideMenu}/>
            <SlideMenu slideMenu={slideMenu} setSlideMenu={setSlideMenu}/>
            <Routes>
                <Route path="/" element={<GoodsPage/>}/>
                <Route path="/:id/*" element={<GoodPage/>}/>

            </Routes>
        </>
    )
}

export default App;

//http://localhost:3001/category