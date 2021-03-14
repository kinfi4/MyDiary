import s from './fullRecordUpdateCreate.module.css'
import React from 'react'

const FullRecordUpdateCreate = ({ onSave, title, body, id }) => {
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

            <div className={s.buttonBlock}>
                <button className={'btn btn-success ' + s.saveButton} onClick={e => onSave(title, body, id)}>Save</button>
            </div>
        </div>


    )
}

export default FullRecordUpdateCreate;