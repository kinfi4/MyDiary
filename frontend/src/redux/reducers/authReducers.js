import axios from "axios";
import {CLEAR_THE_STATE} from "./allRecordReducer";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


const USER_LOADING = 'USER_LOADING'
const USER_LOADED = 'USER_LOADED'
const AUTH_ERROR = ' AUTH_ERROR'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

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

    axios.get('http://127.0.0.1:8000/api/v1/rest-auth/user', {
        method: 'GET',
        headers: headers
    }).then(res => {
        if(res.status === 200)
            dispatch({type: USER_LOADED, payload: res.data})
        else
            dispatch({type: AUTH_ERROR })
    }).catch(er => {
        dispatch({type: AUTH_ERROR})
    })
}

// LOGIN
export const login = (username, password) => (dispatch) => {
    dispatch({type: USER_LOADING})
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

    axios.post('http://127.0.0.1:8000/api/v1/rest-auth/login/', body,{
        headers: headers,
    }).then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    }).catch(err => {
        dispatch({type: LOGIN_FAIL})
    })
}

// LOGOUT
export const logout = (authToken) => (dispatch) => {
    dispatch({type: CLEAR_THE_STATE})
    dispatch({type: USER_LOADING})
    axios.post('http://127.0.0.1:8000/api/v1/rest-auth/logout/', {}, {
        headers: {
            'Authorization': `Token ${authToken}`
        }
    }).then(res => dispatch({type: LOGOUT}))
}

// REGISTER
export const register = (username, email, password1, password2) => (dispatch) => {
    dispatch({type: USER_LOADING})

    let body = {
        username,
        email,
        password1,
        password2
    }

    axios.post('http://127.0.0.1:8000/api/v1/rest-auth/registration/', JSON.stringify(body), {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(
        res => dispatch({type: LOGIN_SUCCESS, payload: res.data})
    ).catch(err => console.log(err))

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
        case LOGOUT:
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


