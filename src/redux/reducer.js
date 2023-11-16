import { COMBINATED_FILTER, FILTER_FRAGANCE, FILTER_GENDER, GET_ALL_FRAGANCES, GET_PRODUCTS, GET_PRODUCT_BY_ID, ORDER_NAME, ORDER_PRICE, SEARCH_BY_NAME } from "./Actions/actions-types"


const initialState = {
    products: [],
    productsCopy: [],
    productDetail: [],
    fragances: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_PRODUCTS:

            const stockProducts = payload.filter(product => product.stock !== '0')

            return {
                ...state,
                products: stockProducts,
                productsCopy: payload
            }

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                productDetail: payload
            }

        case GET_ALL_FRAGANCES:
            return {
                ...state,
                fragances: payload
            }

        case ORDER_NAME:
            return {
                ...state,
                products: payload 
            }

        case ORDER_PRICE:
            return {
                ...state,
                products: payload
            }    

        case FILTER_GENDER:
            return {
                ...state,
                products: payload
            }
        
        case SEARCH_BY_NAME:
            return {
                ...state,
                products: payload
            }
        
        case FILTER_FRAGANCE:
            return {
                ...state,
                products: payload
            }

        case COMBINATED_FILTER:
            return {
                ...state,
                products: payload
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer