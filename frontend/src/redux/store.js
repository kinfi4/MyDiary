import {createStore, combineReducers, applyMiddleware} from 'redux'
import {records} from './reducers/recordReducers'
import thunk from 'redux-thunk'


let store = createStore(
    combineReducers({records: records }),
    applyMiddleware(thunk)
)

export default store;