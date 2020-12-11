import React, { Component } from 'react';
import { login } from '../../../actions/user';
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        // const { username, password } = this.state
        const { loginUser } = this.props
        //  We need check credentials with the server with a callback and authorise user.
        login(this,loginUser)
    }

    usernameHandler = (e) => {
        e.preventDefault();
        this.setState({username: e.target.value})
    }

    passwordHandler = (e) => {
        e.preventDefault();
        this.setState({password: e.target.value})
    }
    
    render() { 
        const { username, password } = this.state
        return (
            <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" value={ username } onChange= {this.usernameHandler} placeholder="Enter your username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={ password } onChange= {this.passwordHandler} placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-warning btn-block">Submit</button>
        </form>

          );
    }
}
 
export default Login;