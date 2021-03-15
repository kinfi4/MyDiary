import s from './header.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../../redux/reducers/authReducers";


let Header = (props) => {
    return (
        <header className={s.header}>
            <h2 className={s.logo}>DIARY</h2>

            <button className={s.logoutButton + ' btn btn-default'} onClick={() => props.logout(props.authToken)}>
                Logout
            </button>
        </header>
    )
}

let mapStateToProps = (state) => {
    return {
        authToken: state.auth.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: (authToken) => dispatch(logout(authToken))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)