const USER_LOADING = 'USER_LOADING'
const USER_LOADED = 'USER_LOADED'
const AUTH_ERROR = ' AUTH_ERROR'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

// CHECK THE TOKEN AND LOAD THE USER

export const loadUser = (dispatch, getState) => {
    dispatch({type: USER_LOADING})

    const token = getState().auth.token;

    const headers = {
        'Content-Type': 'application/json'
    }

    if(token){
        headers['Authorization'] = `Token ${token}`
    }

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/user', {
        method: 'GET',
        headers: headers
    }).then(res => {
        dispatch({type: USER_LOADED, payload: res.data})
    }).catch(er => {
        dispatch({type: AUTH_ERROR})
    })
}


export function auth (state=initialState, action){
    switch (action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state
    }
}
