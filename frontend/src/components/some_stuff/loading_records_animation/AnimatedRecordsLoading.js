import React from 'react'
import s from './AnimatedRecordsLoading.module.css'

let AnimatedRecordsLoading = () => {
    return (
        <div className={s['lds-ellipsis']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AnimatedRecordsLoading;