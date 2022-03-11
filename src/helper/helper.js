export const handleIncludes = (parentText, find) => {
    return parentText.model.toLowerCase().replace(/\_/g, " ").includes(find.toLowerCase())
}

export const addToCart = (cart, good) => {
    let arr = [];
    if(cart.length === 0) {
        arr.push({...good, quantity: 1})
    }
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === good.id) {
            arr = [...cart];
            arr.splice(i, 1, {...good, quantity: cart[i].quantity + 1})
            break
        } else {
            arr = [...cart];
            arr.push({...good, quantity: 1})
        }
    }
    return arr
}