import s from './Records.module.css'
import React, {useEffect, useState} from 'react'
import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from '../../redux/reducers/allRecordReducer'
import FullRecordBase from "./fullRecord/fullRecordBase";
import FullRecordRead from "./fullRecord/fullRecordRead/fullRecordRead";


const Records = (props) => {
    useEffect(() => {
        props.fetchRecords('http://127.0.0.1:8000/api/records');
    });

    const [fullRecordActive, setFullRecordActive] = useState(true);

    return (
        <div className={s.records}>
            <FullRecordBase active={fullRecordActive} setActive={setFullRecordActive} >
                <FullRecordRead title={'I love Ira'} body={'Some body around here'} created={'03/08/2002'} />
            </FullRecordBase>

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