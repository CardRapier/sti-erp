import { GET_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS } from './types'

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}