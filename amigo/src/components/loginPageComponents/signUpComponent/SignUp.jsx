import React, { Component } from 'react';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter a secure password" />
                </div>

                <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
                <p className="alreadyRegistered text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>

         );
    }
}
 
export default SignUp;