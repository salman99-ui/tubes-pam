import {combineReducers , createStore} from 'redux'
import Cart from './Cart/Reducer'
import Wallet from './Wallet/Reducer'
const rootReducer = combineReducers({
    cart : Cart ,
    wallet : Wallet
})

const Store = createStore(rootReducer)

export default Store