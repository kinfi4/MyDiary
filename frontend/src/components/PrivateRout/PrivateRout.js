import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import AnimatedLoading from "../some_stuff/loading_animation/AnimatedLoading";

let PrivateRout = ({component: Component, auth, ...rest}) => {
    return (
        <Route {...rest}
               render={props => {
                   if(auth.isLoading){
                       return <AnimatedLoading />
                   }else if(!auth.isAuthenticated){
                        return <Redirect to={'/login'} />
                   }else{
                       return <Component {...props} />
                   }
               }} />
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRout);