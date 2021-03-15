import {createStore, combineReducers, applyMiddleware} from 'redux'
import {allRecords} from './reducers/allRecordReducer'
import { auth } from './reducers/authReducers'
import {createUpdateDeleteRecord} from "./reducers/createUpdateDeleteRecord";
import {showHideRecord} from "./reducers/showDetailedRecord";
import thunk from 'redux-thunk'


let store = createStore(
    combineReducers({
        records: allRecords,
        auth: auth,
        showHideRecord: showHideRecord,
        createUpdateDeleteRecord: createUpdateDeleteRecord
    }),
    applyMiddleware(thunk)
)

export default store;