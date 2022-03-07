import React, { useState, useEffect} from "react";
import { fetchGoods } from "./goodsSlice";
import { useDispatch, useSelector } from "react-redux";
import useSort from "../../hook/useSort";
import CircularProgress from '@mui/material/CircularProgress';
import Spiner from "../Spiner/Spiner";

import Good from "../Good/Good";
import GoodSkeleton from "../Skeleton/GoodSkeleton";

import "./goods.scss"

const Goods = () => {

    const [goods, setGoods] = useState([]);

    const dispatch = useDispatch();
    const { sortName, contains } = useSort();

    const allGoods = useSelector(state => state.allGoods.goods);
    const loading = useSelector(state => state.allGoods.loading);
    const {find} = useSelector(state => state.find);
    const { activeFilter } = useSelector(state => state.filter);


    useEffect(() => {
        dispatch(fetchGoods())
    }, [])

    useEffect(async () => {
        await sortName(find, allGoods, setGoods)
        await contains(allGoods, activeFilter, setGoods)
    }, [allGoods, find, activeFilter]);



    if(loading === "loading") {
        return <Spiner/>
    }

    if(goods.length == 0) {
        return <GoodSkeleton/>
    }

    const content = goods?.map(item => <Good key={item.id} {...item}/>);

    return (
        <div className="goods">
            {content}
        </div>
    )
}

export default Goods;