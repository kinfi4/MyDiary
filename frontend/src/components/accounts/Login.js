import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        fetch('http://localhost:8000/api/v1/rest-auth/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).catch(er => alert(er))

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div className="col-md-4 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
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
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;