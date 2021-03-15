import axios from 'axios'

import { SHOW_WRITE_RECORD, HIDE_RECORD, SHOW_READ_RECORD} from "./showDetailedRecord";


const CREATE_RECORD = 'CREATE_RECORD'
const DELETE_RECORD = 'DELETE_RECORD'
const UPDATE_RECORD = 'UPDATE_RECORD'

let initialState = {}

export let deleteRecord = ({id, authToken}) => (dispatch) => {
    axios.delete('http://127.0.0.1:8000/api/v1/records/' + id, {
        headers: {
            'Authorization': `Token ${authToken}`
        }
    }).then(r => dispatch({type: DELETE_RECORD}))
      .catch(err => alert(`Error: ${err}`))

    dispatch({type: HIDE_RECORD})
}

export let createRecord = ({title, body, authToken}) => (dispatch) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`
    }
    axios.post('http://127.0.0.1:8000/api/v1/records', JSON.stringify({title: title, body: body}), {headers: headers})
        .then(res => dispatch({type: CREATE_RECORD}))

    dispatch({type: HIDE_RECORD})
}

export let updateRecord = ({title, body, id, authToken}) => (dispatch) => {
    let requestBody = JSON.stringify({title: title, body: body})
    axios.put('http://127.0.0.1:8000/api/v1/records/' + id, requestBody, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`
        }
    }).then(res => dispatch({type: UPDATE_RECORD}))

    dispatch({type: HIDE_RECORD})
}

export let createUpdateDeleteRecord = (state=initialState, action) => {
    switch (action.type){
        case CREATE_RECORD:
        case UPDATE_RECORD:
        case DELETE_RECORD:
            return {
                ...state
            }
        default:
            return {
                ...state
            }

    }
}