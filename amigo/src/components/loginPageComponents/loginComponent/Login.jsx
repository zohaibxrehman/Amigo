
import React, { Component } from 'react';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

class Login extends Component {


    
    state = {  }
    render() { 
        return (
            <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-warning btn-block">Submit</button>
            <p className="forgotPass text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>

          );
    }
}
 
export default Login;