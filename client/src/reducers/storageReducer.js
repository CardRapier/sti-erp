import { GET_STORAGES,ADD_STORAGE,LOADING_STORAGES, GET_STORAGE_PRODUCTS } from '../actions/types'

const initialState = {
    storages: [],
    storage_products: [],
    loading: false
}

export default function( state = initialState, action ) {
    switch(action.type) {
        case GET_STORAGES:
            return {
                ...state,
                storages: action.payload,
                loading: false
            };
        case ADD_STORAGE:
            return{
                ...state,
                storages: [action.payload, ...state.storages] 
            }
        case GET_STORAGE_PRODUCTS:
            return {
                ...state,
                storage_products: action.payload,
                loading: false
            }
        case LOADING_STORAGES:
        return {
            ...state,
            loading: true
        }
        default:
            return state
    }
}