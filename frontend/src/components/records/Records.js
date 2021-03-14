import s from './Records.module.css'
import React, {useEffect, useState} from 'react'
import axios from "axios"

import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from '../../redux/reducers/allRecordReducer'
import FullRecordBase from "./fullRecord/fullRecordBase";
import FullRecordRead from "./fullRecord/fullRecordRead/fullRecordRead";
import FullRecordUpdateCreate from "./fullRecord/fullRecordUpdateCreate/fullRecordUpdateCreate";


const Records = (props) => {
    useEffect(() => {
        props.fetchRecords('http://127.0.0.1:8000/api/v1/records', props.authToken);
    });


    let renderDetailsOfClicked = ({title, body, created, id}) => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordRead title={title} body={body} created={created} id={id}
                                               onDeleteRecord={deleteRecord} onUpdateRecord={renderUpdateRecordWindow} />)
    }

    let renderAddNewRecordWindow = () => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordUpdateCreate onUpdate={false} onSave={createRecord} />)
    }

    let renderUpdateRecordWindow = ({title, body, id}) => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordUpdateCreate onUpdate={true} title={title} body={body} id={id} onSave={updateRecord} />)
    }


    let deleteRecord = (id) => {
        fetch('http://127.0.0.1:8000/api/v1/records/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${props.authToken}`
            }
        }).then(r => r).catch(er => console.log(er))
        setFullRecordActive(false);
        setDetailWindowContent(null);
    }

    let createRecord = ({title, body, id}) => {
        alert(`Title: ${title}`)
        alert(`Body: ${body}`)
        alert(`Id: ${id}`)

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${props.authToken}`
        }
        axios.post('http://127.0.0.1:8000/api/v1/records', JSON.stringify({title: title, body: body}), {headers: headers})
            .then(res => console.log(res.data))

        setFullRecordActive(false);
        setDetailWindowContent(null);
    }

    let updateRecord = ({title, body, id}) => {
        fetch('http://127.0.0.1:8000/api/v1/records/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${props.authToken}`
            },
            body: JSON.stringify({title: title, body: body})
        }).catch(er => alert(er))
        setFullRecordActive(false);
        setDetailWindowContent(null)
    }


    let closeDetailWindow = () => {
        setDetailWindowContent(null)
        setFullRecordActive(false)
    }

    const [fullRecordActive, setFullRecordActive] = useState(false);
    const [detailWindowContent, setDetailWindowContent] = useState(null);

    return (
        <div className={s.records}>
            <FullRecordBase active={fullRecordActive} onClose={closeDetailWindow} >
                {detailWindowContent}
            </FullRecordBase>

            <AddRecordCard eventOnClick={renderAddNewRecordWindow} />
                {
                   props.records.map(el => <RecordCard title={el.title} body={el.body} created={el.created} id={el.id} eventOnClick={renderDetailsOfClicked} />)
		        }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
    	records: state.records[0] ? state.records : [],
        authToken: state.auth.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchRecords: (url, token) => { dispatch(fetchRecords(url, token)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records);
