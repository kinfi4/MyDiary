import s from './fullRecordUpdateCreate.module.css'
import React from 'react'

const FullRecordUpdateCreate = ({ onSave, title, body, id }) => {
    let today = new Date();
    let curDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

    let titleRef = React.createRef()
    let bodyRef = React.createRef()

    let onSubmitButtonClick = (e) => {
        // alert(`Body in the component: ${bodyRef.current.textContent}`)
        let _title = titleRef.current.value
        let _body = bodyRef.current.textContent
        onSave({title: _title, body: _body, id: id})
    }

    return (
        <div className={s.inner}>
            <div className={s.topPanel}>
                <input placeholder={curDate} className={s.titleInput} max={128} value={title ? title : null} ref={titleRef} />
            </div>
            <div className={s.bodyBlock}>
                <div contentEditable={"true"} data-placeholder={'Here goes my day'} className={s.bodyInput} ref={bodyRef}>
                    {body ? body : null}
                </div>
            </div>

            <div className={s.buttonBlock}>
                <button className={'btn btn-success ' + s.saveButton} onClick={e => onSubmitButtonClick(e)}>Save</button>
            </div>
        </div>


    )
}

export default FullRecordUpdateCreate;