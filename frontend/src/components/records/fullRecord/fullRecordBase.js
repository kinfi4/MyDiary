import s from './fullRecordBase.module.css'
import React from 'react'

const FullRecordBase = ({ active, children, onClose }) => {

    return (
        <div className={active ? `${s.overflow} ${s.active}` : s.overflow} onClick={() => onClose() }>
            <div className={s.record} onClick={e => e.stopPropagation() }>
                {children}
            </div>
        </div>
    )
}

export default FullRecordBase;