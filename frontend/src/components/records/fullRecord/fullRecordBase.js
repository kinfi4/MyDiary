import s from './fullRecordBase.module.css'
import React from 'react'
import { connect } from 'react-redux'
import {hideDetailWindow} from "../../../redux/reducers/showDetailedRecord";

const FullRecordBase = (props) => {

    return (
        <div className={props.active ? `${s.overflow} ${s.active}` : s.overflow} onClick={() => props.hideWindow() }>
            <div className={s.record} onClick={e => e.stopPropagation() }>
                {props.child}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        active: state.showHideRecord.fullRecordActive,
        child: state.showHideRecord.detailWindowContent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        hideWindow: () => dispatch(hideDetailWindow)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullRecordBase);