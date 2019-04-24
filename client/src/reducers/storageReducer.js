import {GET_STORAGES,ADD_STORAGE,LOADING_STORAGES} from '../actions/types'

const initialState = {
    storages: [],
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
        case LOADING_STORAGES:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}