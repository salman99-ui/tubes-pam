import {combineReducers , createStore} from 'redux'
import Cart from './Cart/Reducer'
import Wallet from './Wallet/Reducer'
import Order from './Order/Reducer'
const rootReducer = combineReducers({
    cart : Cart ,
    wallet : Wallet ,
    order : Order
})

const Store = createStore(rootReducer)

export default Store