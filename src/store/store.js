import { createStore, combineReducers } from "redux";
import {goodsReducer as allGoods} from "./reducer/goodsReduer";
import {filterReducer as filter} from "./reducer/filterReducer";
import {cartReducer as cart} from "./reducer/cartReducer";
import {headerReducer as find} from "./reducer/headerReducer";
import {slideMenuReducer as slideMenu} from "./reducer/slideMenuReducer";

const store = createStore(combineReducers({allGoods, filter, cart, find, slideMenu}),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;