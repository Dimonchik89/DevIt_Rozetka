import { useState } from "react";
import { handleIncludes } from "../helper/helper";
import { useSelector } from "react-redux";

const useSort = () => {
    const [sortGoodsArr, setSortGoodsArr] = useState([])
    const sortName = (find, allGoods) => {
        if(find) {
            return setSortGoodsArr(sortGoodsArr => sortGoodsArr.filter(item => handleIncludes(item, find)))
        }
        return setSortGoodsArr([...allGoods]);
    }
    const contains = (where, what) => {
        if(what.length !== 0) {
            let newArr = [];
            for(let i = 0; i < where.length; i++) {
                for(let q = 0; q < what.length; q++) {
                    if(Object.values(where[i]).includes(what[q])) {
                        newArr.push(where[i])
                        break
                    }
                }
            }
            return setSortGoodsArr(newArr)
        }
    }
    
    const {cart} = useSelector(state => state.cart);
    let arr = [...cart]
    const sortGood = (good) => {
        if(arr.length) {
            let goodInc = false;
            arr.forEach((item, i) => {
                if(item.id === good.id) {
                    goodInc = true
                    arr.splice(i, 1, {...item, qty: item.qty + 1})
                }
            })
            if(!goodInc) {
                arr.push({...good, qty: 1})
            }
        } else {
            arr.push({...good, qty: 1})
        }
        return arr;
    }
    return {sortName, contains, sortGoodsArr, sortGood}
}
export default useSort;