import s from './RecordCard.module.css'
import React from 'react'

const RecordCard = (props) => {
    return (
        <div className={s.record}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default RecordCard;