import s from './fullRecord.module.css'
import React from 'react'

const FullRecord = (props) => {
    return (
        <div className={s.overflow}>
            <div className={s.record}>
                <div className={s.topPanel}>
                    <h2>{props.title}</h2>

                    <div className={s.buttonsBlock}>
                        <button className={'btn btn-primary ' + s.manageButton}>Edit</button>
                        <button className={'btn btn-danger ' + s.manageButton}>Delete</button>
                    </div>
                </div>
                <hr/>
                <div className={s.recordBody}>
                    {props.body}
                </div>

                <div className={s.buttonPanel}>
                    <div className={s.createdAt}>
                        03/08/2002
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullRecord;