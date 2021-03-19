import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import AnimatedPageLoading from "../some_stuff/loading_page_animation/AnimatedPageLoading";

let PrivateRout = ({component: Component, auth, ...rest}) => {
    return (
        <Route {...rest}
               render={props => {
                   if(auth.isLoading){
                       return <AnimatedPageLoading />
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