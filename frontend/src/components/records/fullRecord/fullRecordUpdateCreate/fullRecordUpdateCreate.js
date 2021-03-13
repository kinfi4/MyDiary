import s from './fullRecordUpdateCreate.module.css'
import React from 'react'

const FullRecordUpdateCreate = ({ title, body }) => {
    let today = new Date();
    let curDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    return (
        <div className={s.inner}>
            <div className={s.topPanel}>
                <input placeholder={curDate} className={s.titleInput} max={128} value={title ? title : null} />
            </div>
            <div className={s.bodyBlock}>
                <div contentEditable={"true"} data-placeholder={'Here goes my day'} className={s.bodyInput}>{body ? body : null}</div>
            </div>

            <div>

            </div>
        </div>


    )
}

export default FullRecordUpdateCreate;