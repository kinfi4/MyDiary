import {createStore, combineReducers, applyMiddleware} from 'redux'
import {allRecords} from './reducers/allRecordReducer'
import { auth } from './reducers/authReducers'
import thunk from 'redux-thunk'


let store = createStore(
    combineReducers({ records: allRecords, auth: auth }),
    applyMiddleware(thunk)
)

export default store;