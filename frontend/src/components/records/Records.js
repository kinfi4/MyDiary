import s from './Records.module.css'
import React, {useEffect, useCallback, useRef} from 'react'

import RecordCard from "./recordCard/RecordCard";
import AddRecordCard from "./addRecordCard/addRecordCard";
import {connect} from 'react-redux'
import {fetchRecords} from '../../redux/reducers/allRecordReducer'
import FullRecordBase from "./fullRecord/fullRecordBase";
import AnimatedRecordsLoading from "../some_stuff/loading_records_animation/AnimatedRecordsLoading";


const Records = (props) => {
    let observer = useRef()

    let fetchNewRecords = () => {
        props.fetchRecords(props.authToken, props.current_page);
    }

    let lastRecordRef = useCallback(node => {
        if(props.loading)
            return

        if(observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                fetchNewRecords()
            }
        })

        if (node)
            observer.current.observe(node)
    })

    let render_records = () => {
        if(props.records.length === 0){
            fetchNewRecords()
        } else {
            return props.records.map((el, index) => {
                if(index === props.records.length - 1) {
                    return (
                        <div ref={lastRecordRef}>
                            <RecordCard title={el.title} body={el.body} created={el.created} id={el.id} />
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <RecordCard title={el.title} body={el.body} created={el.created} id={el.id} />
                        </div>
                    )
                }
            })
        }
    }

    return (
        <div className={s.records}>
            <FullRecordBase />

            <div className={s.recordsBlock}>
                <AddRecordCard />

                {
                    render_records()
                }

            </div>

            {props.loading && <AnimatedRecordsLoading/>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
    	records: state.records.records[0] ? state.records.records : [],
        authToken: state.auth.token,
        current_page: state.records.current_page,
        loading: state.records.loading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchRecords: (token, page) => { dispatch(fetchRecords(token, page)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records);
