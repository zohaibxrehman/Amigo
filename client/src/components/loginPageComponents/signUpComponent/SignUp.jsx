import React, { Component } from 'react';
import { registerUser } from '../../../actions/user';
import './SignUp.css'

class SignUp extends Component {
   
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            username: '',
            photo: null
        }
    }


    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        // const value = target.value;
        const name = target.id;
        if(name === "photo"){
            this.setState(
                {[name]: target.files[0]
                });
        }
        this.setState({
            [name]: target.value 
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        registerUser(this,e)
    }

    render() { 
        const { firstname, lastname, email, password, username } = this.state
        return ( 

            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First Name" id='firstname' value={firstname} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last Name" id='lastname' value={lastname} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id='username' placeholder="Enter a username" value= {username} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" id='email' value = {email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter a secure password" id='password' value= {password} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <label className="custom-file-label">Upload your photo</label>
                        <input type="file" name="image" className="custom-file-input" id="photo"onChange={this.changeHandler}/>
                    </div>
                </div>

                <button type="submit" className="btn btn-warning btn-block" >Sign Up</button>
                <p className="alreadyRegistered text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>

         );
    }
}
 
export default SignUp;