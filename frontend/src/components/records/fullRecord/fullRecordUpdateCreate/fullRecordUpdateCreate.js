import s from './fullRecordUpdateCreate.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {createRecord, updateRecord} from "../../../../redux/reducers/createUpdateDeleteRecord";

const FullRecordUpdateCreate = (props) => {
    let today = new Date();
    let curDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

    let titleRef = React.createRef()
    let bodyRef = React.createRef()

    let onSubmitButtonClick = (e) => {
        // alert(`Body in the component: ${bodyRef.current.textContent}`)
        let _title = titleRef.current.value
        let _body = bodyRef.current.textContent

        if(props.onUpdate)
            props.updateRecord({title: _title, body: _body, authToken: props.authToken, id: props.id})
        else
            props.createRecord({title: _title, body: _body, authToken: props.authToken})
    }

    return (
        <div className={s.inner}>
            <div className={s.topPanel}>
                <input placeholder={curDate}
                       className={s.titleInput}
                       max={128}
                       ref={titleRef}
                       defaultValue={props.title ? props.title : null} />
            </div>
            <div className={s.bodyBlock}>
                <div contentEditable={"true"} data-placeholder={'Here goes my day'} className={s.bodyInput} ref={bodyRef}>
                    {props.body ? props.body : null}
                </div>
            </div>

            <div className={s.buttonBlock}>
                <button className={'btn btn-success ' + s.saveButton} onClick={e => onSubmitButtonClick(e)}>Save</button>
            </div>
        </div>


    )
}

let mapStateToProps = (state) => {
    return {
        authToken: state.auth.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createRecord: ({title, body, authToken}) => dispatch(createRecord({title, body, authToken})),
        updateRecord: ({title, body, authToken, id}) => dispatch(updateRecord({title, body, authToken, id}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullRecordUpdateCreate);