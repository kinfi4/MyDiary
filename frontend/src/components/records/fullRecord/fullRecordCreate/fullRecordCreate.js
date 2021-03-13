import s from './fullRecordCreate.module.css'
import React from 'react'

const FullRecordCreate = ({ title, body, created }) => {

    return (
        <div>
            <div className={s.topPanel}>

            </div>

            <hr/>

            <div className={s.recordBody}>
            </div>

            <div className={s.buttonPanel}>

            </div>
        </div>
    )
}

export default FullRecordCreate;