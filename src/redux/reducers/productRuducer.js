import { ActionTypes } from "../constant/action-types";

const initialState ={
    products:[],
}
export const productReducer =(state = initialState, {type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
    
        default:
            return state;
    };
    
}


export const selectproductReducer =(state ={}, {type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {...state, ...payload}
    
        default:
            return state;
    }
}
