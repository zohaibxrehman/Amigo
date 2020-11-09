
import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userId: '',
            userPass: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        let { userId, userPass } = this.state
        //  We need check credentials with the server with a callback and authorise user.
        if(userId==='user' && userPass === 'user'){
            // link to user dashboard
            console.log("User Authenticated")
        }

        else if (userId==='admin' && userPass === 'admin'){
            console.log("Admin Authenticated")
        }
        else{
            alert("Please enter a valid credential")
        }
    }

    userIdHandler = (e) => {
        e.preventDefault();
        this.setState({userId: e.target.value})
    }

    userPassHandler = (e) => {
        e.preventDefault();
        this.setState({userPass: e.target.value})
    }
    render() { 
        const { userId, userPass } = this.state
        return (
            <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" value={ userId } onChange= {this.userIdHandler} placeholder="Enter your username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={ userPass } onChange= {this.userPassHandler} placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-warning btn-block">Submit</button>
        </form>

          );
    }
}
 
export default Login;