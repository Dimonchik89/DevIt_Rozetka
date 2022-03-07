const useSort = () => {

    const sortName = (find, allGoods, setGoods) => {
        if(find) {
            return setGoods(goods => goods.filter(item => item.model.toLowerCase().replace(/\_/g, " ").includes(find.toLowerCase())))
        }
        return setGoods(goods => goods = [...allGoods]);
    }

    const contains = (where, what, setGoods) => {
        if(what.length != 0) {
            let newArr = [];
            for(let i = 0; i < where.length; i++) {
                for(let q = 0; q < what.length; q++) {
                    if(Object.values(where[i]).includes(what[q])) {
                        newArr.push(where[i])
                    }
                }
            }
            return setGoods(goods => newArr)
        }
    }

    return {sortName, contains}
}

export default useSort;