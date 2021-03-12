import s from './fullRecord.module.css'
import React from 'react'

const FullRecord = (props) => {

    return (
        <div className={props.active ? `${s.overflow} ${s.active}` : s.overflow} onClick={() => props.setActive(false) }>
            <div className={s.record} onClick={e => e.stopPropagation() }>
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
                        {props.created}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullRecord;