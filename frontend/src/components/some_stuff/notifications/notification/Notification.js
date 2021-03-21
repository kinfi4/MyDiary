import React from 'react'
import s from './Notification.module.css'

let Notification = (props) => {
    return (
        <div className={s.notification}>
            { props.error }
        </div>
    )
}

export default Notification