import { GET_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS , LOADING_PRODUCTS} from '../actions/types'

const initialState = {
    products: [],
    loading: false
}

export default function( state = initialState, action ) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case ADD_PRODUCTS:
            return{
                ...state,
                products: [action.payload, ...state.products] 
            }
        case LOADING_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}