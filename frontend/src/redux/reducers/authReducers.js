import {onBFCacheRestore} from "web-vitals/dist/modules/lib/onBFCacheRestore";

const USER_LOADING = 'USER_LOADING'
const USER_LOADED = 'USER_LOADED'
const AUTH_ERROR = ' AUTH_ERROR'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

// CHECK THE TOKEN AND LOAD THE USER
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    const token = getState().auth.token;
    if(token){
        headers['Authorization'] = `Token ${token}`
    }

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/user', {
        method: 'GET',
        headers: headers
    }).then(res => {
        if(res.status === 200)
            dispatch({type: USER_LOADED, payload: res.json()})
        else
            dispatch({type: AUTH_ERROR })
    }).catch(er => {
        dispatch({type: AUTH_ERROR})
    })
}

// LOGIN
export const login = (username, password) => (dispatch) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    // REQUEST BODY
    const body = JSON.stringify({
        username,
        password,
        email: ''
    })

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/login/', {
        method: 'POST',
        headers: headers,
        body: body
    }).then(res => res.json())
      .then(data => {
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    }).catch(err => {
        dispatch({type: LOGIN_FAIL})
    })
}


// REDUCER
export function auth (state=initialState, action){
    // alert(`${action.type} ${action.payload ? action.payload.key : action.payload}`)
    switch (action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.key)
            return {
                ...state,
                token: action.payload.key,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
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

