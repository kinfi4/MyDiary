import s from './Records.module.css'
import React, {useEffect, useState} from 'react'
import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from '../../redux/reducers/allRecordReducer'
import FullRecordBase from "./fullRecord/fullRecordBase";
import FullRecordRead from "./fullRecord/fullRecordRead/fullRecordRead";
import FullRecordCreate from "./fullRecord/fullRecordUpdateCreate/fullRecordUpdateCreate";
import FullRecordUpdateCreate from "./fullRecord/fullRecordUpdateCreate/fullRecordUpdateCreate";


const Records = (props) => {
    useEffect(() => {
        props.fetchRecords('http://127.0.0.1:8000/api/v1/records');
    });

    let renderDetailsOfClicked = ({title, body, created, id}) => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordRead title={title} body={body} created={created} id={id}
                                               onDeleteRecord={deleteRecord} onUpdateRecord={renderUpdateRecordWindow} />)
    }

    let renderAddNewRecordWindow = () => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordCreate />)
    }

    let renderUpdateRecordWindow = ({title, body}) => {
        setFullRecordActive(true)
        setDetailWindowContent(<FullRecordUpdateCreate title={title} body={body} />)
    }

    let deleteRecord = (id) => {
        fetch('http://127.0.0.1:8000/api/v1/records/' + id, {method: 'DELETE'}).then(r => r).catch(er => console.log(er))
        setFullRecordActive(false);
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
        records: state.records
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchRecords: (url) => { dispatch(fetchRecords(url)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records);