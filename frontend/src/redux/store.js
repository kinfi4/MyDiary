import {createStore, combineReducers, applyMiddleware} from 'redux'
import {allRecords} from './reducers/allRecordReducer'
import thunk from 'redux-thunk'


let store = createStore(
    combineReducers({ records: allRecords }),
    applyMiddleware(thunk)
)

export default store;