import s from './Records.module.css'
import React, {useEffect} from 'react'
import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from './../../redux/reducers/recordReducers'


const Records = (props) => {
    useEffect(() => {
        props.fetchRecords('http://127.0.0.1:8000/api/records');
    });

    return (
        <div className={s.records}>
            <AddRecordCard />
                {
                    props.records.map(el => <RecordCard title={el.title} body={el.body} />)
                }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        records: state.records
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchRecords: (url) => { dispatch(fetchRecords(url)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records);