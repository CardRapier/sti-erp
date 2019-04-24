import axios from 'axios'
import {GET_USERS,GET_USER,ADD_USER,LOADING_USERS} from './types'

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading())
    axios.get('/api/users')
    .then(res => 
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    )
}

export const getUser = ({ document, password }) => dispatch =>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    const body = JSON.stringify({ document, password });
    axios.post('/api/users/login',body,config)
    .then(res =>
        dispatch({
          type: GET_USER,
          payload: res.data
        })
    ).catch(err => console.log("Error"))
}


export const setUsersLoading = () =>{
    return {
        type: LOADING_USERS
    }
}