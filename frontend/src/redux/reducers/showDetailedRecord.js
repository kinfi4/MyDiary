import FullRecordUpdateCreate from "../../components/records/fullRecord/fullRecordUpdateCreate/fullRecordUpdateCreate";
import FullRecordRead from "../../components/records/fullRecord/fullRecordRead/fullRecordRead";
export const SHOW_READ_RECORD = 'SHOW_READ_RECORD'
export const SHOW_WRITE_RECORD = 'SHOW_WRITE_RECORD'


export const HIDE_RECORD = 'HIDE_RECORD'

const initialState = {
    fullRecordActive: false,
    detailWindowContent: null
}

export let hideDetailWindow = (dispatch) => {
    dispatch({type: HIDE_RECORD})
}

export let showReadRecordWindow = ({title, body, id, created}) => (dispatch) => {
    dispatch({
        type: SHOW_READ_RECORD,
        content: <FullRecordRead body={body} title={title} created={created} id={id} />
    })
}

export let showCreateRecordWindow = () => (dispatch) => {
    dispatch({type: HIDE_RECORD})

    dispatch({
        type: SHOW_WRITE_RECORD,
        content: <FullRecordUpdateCreate onUpdate={false} />
    })
}

export let showUpdateWindow = ({title, body, id}) => (dispatch) => {
    dispatch({type: HIDE_RECORD})

    dispatch({
        type: SHOW_WRITE_RECORD,
        content: <FullRecordUpdateCreate onUpdate={true} title={title} body={body} id={id} />
    })
}


export let showHideRecord = (state=initialState, action) => {
    switch (action.type){
        case SHOW_READ_RECORD:
            return {
                ...state,
                fullRecordActive: true,
                detailWindowContent: action.content
            }
        case SHOW_WRITE_RECORD:
            return {
                ...state,
                fullRecordActive: true,
                detailWindowContent: action.content
            }
        case HIDE_RECORD:
            return {
                ...state,
                fullRecordActive: false,
                detailWindowContent: null
            }
        default:
            return {
                ...state
            }
    }
}