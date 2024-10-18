import {ActionTypes} from '../constant/action-types'
export const setproducts=(products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const selectedproduct=(product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
};

export const removeSelectedproduct=() =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}