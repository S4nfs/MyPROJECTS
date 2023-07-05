import { legacy_createStore as createStore, combineReducers } from 'redux'
import authReducer from '../reducers/auth.reducer'
import countReducer from '../reducers/count.reducer'

//combine reducer
const rootReducer = combineReducers({
    count: countReducer,
    isLoggedIn: authReducer
})

//create a store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store