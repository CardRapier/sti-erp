import axios from 'axios'
import {GET_STORAGES,ADD_STORAGE,LOADING_STORAGES} from './types'

export const getStorage = () => dispatch => {
    dispatch(setStoragesLoading())
    axios.get('/api/storages')
    .then(res => 
        dispatch({
            type: GET_STORAGES,
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