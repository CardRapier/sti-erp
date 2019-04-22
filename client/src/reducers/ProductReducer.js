import { GET_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS } from '../actions/types'

const initialState = {
    products: [
        {
            "_id": "5cbd2d69c2fab658586b370a",
            "name": "Jugo Natural 500ml",
            "price": 3,
            "type": "Producto",
            "__v": 0
        },
        {
            "_id": "5cbd5034ecb470508c8da963",
            "name": "moun",
            "price": 3,
            "type": "Producto",
            "__v": 0
        },
        {
            "_id": "5cbd503aecb470508c8da964",
            "name": "Leche",
            "price": 3,
            "type": "Producto",
            "__v": 0
        },
        {
            "_id": "5cbd5040ecb470508c8da965",
            "name": "Cerveza",
            "price": 3,
            "type": "Producto",
            "__v": 0
        }
    ]
}

export default function( state = initialState, action ) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        default:
            return state
    }
}