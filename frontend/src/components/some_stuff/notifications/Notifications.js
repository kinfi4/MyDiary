import React from 'react'
import {connect} from 'react-redux'
import s from './Notifications.module.css'
import Notification from "./notification/Notification";


let Notifications = (props) => {
    return (
        <div className={s.notification_block}>
            {
                props.errors.map(el => <Notification error={el} />)
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        errors: state.auth.errors[0] ? state.auth.errors : []
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
