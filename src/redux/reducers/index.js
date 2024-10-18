import { combineReducers } from "redux";
import { productReducer, selectproductReducer } from "./productRuducer";

const reducers = combineReducers({
    allproducts:productReducer,
    product:selectproductReducer,
})

export default reducers