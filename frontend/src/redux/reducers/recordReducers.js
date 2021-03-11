const GET_RECORDS = 'GET_RECORDS'

export let fetchRecords = (url) => {
    return (dispatch) => {
        fetch(url).then(response => {
            return response.json()
        }).then(recordsJson => {
            return dispatch({type: GET_RECORDS, recordsData: recordsJson})
        })
    }
}

export let records = (state=[], action) => {
    switch (action.type){
        case GET_RECORDS:
            return action.recordsData
        default:
            return state
    }
}