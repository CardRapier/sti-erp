import axios from 'axios'
import { GET_STORAGES, ADD_STORAGE, LOADING_STORAGES, GET_STORAGE_PRODUCTS } from './types'

export const getStorages = () => dispatch => {
    dispatch(setStoragesLoading())
    axios.get('/api/storages/user/' + localStorage.getItem('_id'))
    .then(res => 
        dispatch({
            type: GET_STORAGES,
            payload: res.data
        })
    )
}

export const getStoragesProducts = () => dispatch => {
    dispatch(setStoragesLoading())
    axios.get('/api/storages/' + localStorage.getItem('storage'))
    .then(res => 
        dispatch({
            type: GET_STORAGE_PRODUCTS,
            payload: res.data
        })
    )
}

export const addStorage = storage => dispatch => {
    axios.post('/api/storages',storage)
    .then(res => 
        dispatch({
            type: ADD_STORAGE,
            payload: res.data
        })
    )
}


export const setStoragesLoading = () =>{
    return {
        type: LOADING_STORAGES
    }
}