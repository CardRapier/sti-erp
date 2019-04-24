import { GET_USERS,GET_USER,ADD_USER,LOADING_USERS} from '../actions/types'

const initialState = {
    users: [],
    loading: false
}

export default function( state = initialState, action ) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            if(action.payload){
                localStorage.setItem('document',action.payload.document)
                localStorage.setItem('_id', action.payload._id)
                localStorage.setItem('user',action.payload.name)
                localStorage.setItem('role',action.payload.role)
            }
            return{
                ...state,
                users: action.payload
            }
        case LOADING_USERS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}