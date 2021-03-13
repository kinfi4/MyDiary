import s from './fullRecordCreate.module.css'
import React from 'react'

const FullRecordCreate = ({ title, body, created }) => {
    let today = new Date();
    let curDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    return (
        <div className={s.inner}>
            <div className={s.topPanel}>
                <input placeholder={curDate} className={s.titleInput} max={128} />
            </div>
            <div className={s.bodyBlock}>
                <div contentEditable={"true"} data-placeholder={'Here goes my day'} className={s.bodyInput}></div>
            </div>

            <div>

            </div>
        </div>


    )
}

export default FullRecordCreate;