import {CREATE_RECORD, UPDATE_RECORD, DELETE_RECORD} from "./createUpdateDeleteRecord";
import axios from "axios";

const GET_RECORDS = 'GET_RECORDS'
const LOADING_RECORDS = 'LOADING_RECORDS'
export const CLEAR_THE_STATE = 'CLEAR_THE_STATE'

const initialState = {
    records: [...new Set([])],
    current_page: 0,
    loading: false
}

export let fetchRecords = (token, page) => {
    return (dispatch) => {
        console.log('FETCH RECORDS')
        axios.get('http://127.0.0.1:8000/api/v1/records?page=' + page, {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => {
            return dispatch({type: GET_RECORDS, recordsData: response.data})
        })
    }
}

export let allRecords = (state=initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case LOADING_RECORDS:
            return {
                ...state,
                loading: true
            }
        case GET_RECORDS:
            if(action.recordsData.length === 0)
                return {
                    ...state,
                    loading: false
                }

            console.log(`GET RECORDS ${action.recordsData.length}`)
            let cur_records = state.records
            let cur_page = state.current_page
            console.log(`GET RECORDS ${cur_records.length}`)
            return {
                ...state,
                records: [... new Set(cur_records.concat(action.recordsData))],
                current_page: cur_page + 1,
                loading: false
            }
        case CREATE_RECORD:
        case UPDATE_RECORD:
        case DELETE_RECORD:
            return {
                ...state,
                records: [],
                current_page: 0,
                loading: false
            }
        case CLEAR_THE_STATE:
            return initialState
        default:
            return {
                ...state,
                loading: false
            }
    }
}