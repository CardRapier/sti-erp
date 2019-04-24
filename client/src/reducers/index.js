import { combineReducers } from 'redux'
import productReducer from './ProductReducer'
import storageReducer from './StorageReducer'
import userReducer from './UserReducer'

export default combineReducers({
    product: productReducer,
    storage: storageReducer,
    user: userReducer
})