import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { register } from "../../redux/reducers/authReducers";
import {connect} from 'react-redux'
import Notifications from "../some_stuff/notifications/Notifications";

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }

    static propTypes = {
        // register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {

        } else {
           this.props.register(username, email, password, password2)
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <>
                <Notifications />

                <div className="col-md-3 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                            <p>
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        register: (username, email, password, password2) => dispatch(register(username, email, password, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);