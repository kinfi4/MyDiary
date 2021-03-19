import React from 'react'
import s from './AnimatedPageLoading.module.css'

let AnimatedPageLoading = () => {
    return (
        <div className={s['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AnimatedPageLoading;