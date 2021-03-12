import s from './fullRecordRead.module.css'
import React from 'react'

const FullRecordRead = ({ title, body, created }) => {

    return (
        <div>
            <div className={s.topPanel}>
                <h2 className={s.recordTitle}>{title}</h2>

                <div className={s.buttonsBlock}>
                    <button className={'btn btn-primary ' + s.manageButton}>Edit</button>
                    <button className={'btn btn-danger ' + s.manageButton}>Delete</button>
                </div>
            </div>
            <hr/>
            <div className={s.recordBody}>
                {body}
            </div>

            <div className={s.buttonPanel}>
                    <div className={s.createdAt}>
                        {created}
                    </div>
                </div>
        </div>
    )
}

export default FullRecordRead;