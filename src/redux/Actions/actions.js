import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_FRAGANCES, ORDER_NAME, ORDER_PRICE, FILTER_GENDER, SEARCH_BY_NAME, FILTER_FRAGANCE, COMBINATED_FILTER } from './actions-types';

export const getProducts = () => {
    return async (dispatch) => {
        const { data } = await axios('/products');
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}

export const getProductsById = (id) => {
    return async (dispatch) => {
        const { data } = await axios(`/products/${id}`);
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: data
        })
    }
}

export const getAllFragances = () => {
    return async (dispatch) => {
        const { data } = await axios('/fragances');
        dispatch({
            type: GET_ALL_FRAGANCES,
            payload: data
        })
    }
}

export const orderName = (order) => {
    return async (dispatch) => {
        const { data } = await axios(`/filter/orderName/${order}`);
        dispatch({
            type: ORDER_NAME,
            payload: data
        })
    }
}

export const orderPrice = (order) => {
    return async (dispatch) => {
        const { data } = await axios(`/filter/orderPrice/${order}`);
        dispatch({
            type: ORDER_PRICE,
            payload: data
        })
    }
}

export const filterGender = (gender) => {
    return async (dispatch) => {
        const { data } = await axios(`/filter/gender/${gender}`);
        dispatch({
            type: FILTER_GENDER,
            payload: data
        })
    }
}

export const searchByName = (name) => {
    return async (dispatch) => {
        const { data } = await axios(`/products/search?name=${name}`);
        dispatch({
            type: SEARCH_BY_NAME,
            payload: data
        })
    }
}

export const filterFragance = (name) => {
    return async (dispatch) => {
        const { data } = await axios(`/filter/fragance/${name}`);
        dispatch({
            type: FILTER_FRAGANCE,
            payload: data
        })
    }
}

export const combinatedFilter = ({orderName, orderPrice, gender, tribute, fragance}) => {
    return async (dispatch) => {
        const { data } = await axios(`/filter/?fragance=${fragance}&orderName=${orderName}&orderPrice=${orderPrice}&gender=${gender}&tribute=${tribute}`);
        dispatch({
            type: COMBINATED_FILTER,
            payload: data
        })
    }
}
