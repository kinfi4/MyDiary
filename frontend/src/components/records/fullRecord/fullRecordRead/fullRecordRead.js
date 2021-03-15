import s from './fullRecordRead.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {deleteRecord} from "../../../../redux/reducers/createUpdateDeleteRecord";
import {showUpdateWindow} from "../../../../redux/reducers/showDetailedRecord";

const FullRecordRead = (props) => {
    let deleteInstance = () => {
        props.deleteRecord({id: props.id, authToken: props.authToken})
    }

    function updateInstance() {
        props.showUpdateWindow({title: props.title, body: props.body, id: props.id})
    }

    return (
        <div>
            <div className={s.topPanel}>
                <h2 className={s.recordTitle}>{props.title}</h2>

                <div className={s.buttonsBlock}>
                    <button className={'btn btn-primary ' + s.manageButton} onClick={updateInstance}>Edit</button>
                    <button className={'btn btn-danger ' + s.manageButton} onClick={deleteInstance}>Delete</button>
                </div>
            </div>
            <hr/>
            <div className={s.recordBody}>
                {props.body}
            </div>

            <div className={s.buttonPanel}>
                    <div className={s.createdAt}>
                        {props.created}
                    </div>
                </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        authToken: state.auth.token
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        deleteRecord: ({id, authToken}) => dispatch(deleteRecord({id, authToken})),
        showUpdateWindow: ({title, body, id}) => dispatch(showUpdateWindow({title, body, id}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullRecordRead);
