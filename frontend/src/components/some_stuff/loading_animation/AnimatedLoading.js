import React from 'react'
import s from './AnimatedLoading.module.css'

let AnimatedLoading = () => {
    return (
        <div className={s['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AnimatedLoading;