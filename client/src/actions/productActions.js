import axios from 'axios'
import { GET_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS,LOADING_PRODUCTS } from './types'

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading())
    axios.get('/api/products')
    .then(res => 
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    )
}

export const addProduct = product => dispatch => {
    axios.post('/api/products',product)
    .then(res => 
        dispatch({
            type: ADD_PRODUCTS,
            payload: res.data
        })
    )
}

export const setProductsLoading = () =>{
    return {
        type: LOADING_PRODUCTS
    }
}