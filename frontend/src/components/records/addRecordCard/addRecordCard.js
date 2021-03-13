import s from './addRecordCard.module.css'
import React from 'react'

const AddRecordCard = (props) => {
    return (
        <div className={s.card} onClick={props.eventOnClick}>
            <h1 className={s.add_sign}>&#x2B;</h1>
        </div>
    )
}

export default AddRecordCard;