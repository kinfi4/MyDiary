import s from './addRecordCard.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {showCreateRecordWindow } from "../../../redux/reducers/showDetailedRecord";

const AddRecordCard = (props) => {
    return (
        <div className={s.card} onClick={props.showThisWindow}>
            <h1 className={s.add_sign}>&#x2B;</h1>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        showThisWindow: () => dispatch(showCreateRecordWindow())
    }
}

let mapStateToProps = (state) => {
    return {
        authToken: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecordCard);