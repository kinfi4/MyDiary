const GET_RECORDS = 'GET_RECORDS'

export let fetchRecords = (url, token) => {
    // alert(`Token ${token}`)
    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => {
            return response.json()
        }).then(recordsJson => {
            return dispatch({type: GET_RECORDS, recordsData: recordsJson})
        })
    }
}

export let allRecords = (state=[], action) => {
    switch (action.type){
        case GET_RECORDS:
            return action.recordsData
        default:
            return state
    }
}