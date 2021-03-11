export let deleteRecord = (recordId) => {
    return fetch('http://127.0.0.1:8000/api/records/' + recordId, {method: 'DELETE'})
}
