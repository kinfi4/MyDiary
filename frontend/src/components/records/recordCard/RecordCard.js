import s from './RecordCard.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {showReadRecordWindow} from "../../../redux/reducers/showDetailedRecord";


const RecordCard = (props) => {
    return (
        <div className={s.record} onClick={() => props.showThisWindow({title: props.title, body: props.body, created: props.created, id: props.id})}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        showThisWindow: ({title, body, created, id}) => dispatch(
            showReadRecordWindow({title, body, created, id})
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authToken: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordCard);
