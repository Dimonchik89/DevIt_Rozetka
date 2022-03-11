import { useState } from "react";
import { handleIncludes } from "../helper/helper";

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
    return {sortName, contains, sortGoodsArr}
}
export default useSort;