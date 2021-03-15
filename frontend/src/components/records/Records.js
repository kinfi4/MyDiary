import s from './Records.module.css'
import React, {useEffect} from 'react'

import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from '../../redux/reducers/allRecordReducer'
import FullRecordBase from "./fullRecord/fullRecordBase";


const Records = (props) => {
    useEffect(() => {
        props.fetchRecords('http://127.0.0.1:8000/api/v1/records', props.authToken);
    });

    return (
        <div className={s.records}>
            <FullRecordBase>
            </FullRecordBase>

            <AddRecordCard />
                {
                   props.records.map(el => <RecordCard title={el.title} body={el.body} created={el.created} id={el.id} />)
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
