import s from './RecordCard.module.css'
import React from 'react'

const RecordCard = (props) => {
    let manageOnClick = () => {
        props.eventOnClick({title: props.title, body: props.body, created: props.created})
    }
    return (
        <div className={s.record} onClick={manageOnClick}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default RecordCard;