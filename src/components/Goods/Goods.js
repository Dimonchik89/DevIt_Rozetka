import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import useSort from "../../hook/useSort";
import Spiner from "../Spiner/Spiner";
import Good from "../Good/Good";
import GoodSkeleton from "../Skeleton/GoodSkeleton";
import { goodsFetching, goodsFetched, goodsFetchingError } from "../../store/action/goods";
import useHttp from "../../hook/useHttp";
import "./goods.scss";

const Goods = () => {
    const dispatch = useDispatch();
    const { sortName, contains, sortGoodsArr } = useSort();
    const allGoods = useSelector(state => state.allGoods.goods);
    const {loading} = useSelector(state => state.allGoods);
    const {find} = useSelector(state => state.find);
    const { activeFilter } = useSelector(state => state.filter);
    const {getGoods} = useHttp();

    useEffect(() => {
        dispatch(goodsFetching())
        getGoods("http://localhost:3001/category")
            .then(goods => dispatch(goodsFetched(goods)))
            .catch(dispatch(goodsFetchingError()))
    }, [])
    useEffect(async () => {
        await sortName(find, allGoods)
        await contains(allGoods, activeFilter)
    }, [allGoods, find, activeFilter]);
    
    if(loading === "loading") {
        return <Spiner/>
    }
    if(sortGoodsArr.length === 0) {
        return <GoodSkeleton/>
    }
    const content = sortGoodsArr?.map(item => <Good key={item.id} {...item}/>);
    return (
        <div className="goods">
            {content}
        </div>
    )
}
export default Goods;