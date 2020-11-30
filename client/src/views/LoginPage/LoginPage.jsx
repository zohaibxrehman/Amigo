import React, { Component } from 'react';
import Login from '../../components/loginPageComponents/loginComponent/Login'
import SignUp from '../../components/loginPageComponents/signUpComponent/SignUp'
import './LoginPage.css'

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            view: 'login',
            loginButton: "btn btn-warning btn-block",
            signUpButton: "btn btn-outline-warning"
        }
    }

    changeView(newView) {
        if(newView === 'login'){
            this.setState({ view: newView, loginButton: "btn btn-warning btn-block", signUpButton: "btn btn-outline-warning" })
        }
        else{
            this.setState({ view: newView, signUpButton: "btn btn-warning btn-block", loginButton: "btn btn-outline-warning" })
        }
    }


    render() { 
        const { view , loginButton, signUpButton } = this.state
        const { loginUser } = this.props
        return (
            <div>
                <div className='switchLoginSign'>
                    <div className="btn-group LoginSignButton" role="group">
                        <button type="button" className={ loginButton } onClick={()=> this.changeView('login')}>Login</button>
                        <button type="button" className={ signUpButton }onClick={()=> this.changeView('signup')}>Register</button>
                    </div>
                    <div className='LoginSignBox'>
                        {view==='login' && <Login loginUser={loginUser} />}
                        {view==='signup' && <SignUp />}
                    </div>

                </div> 
            </div> 
         );
    }
}
 
export default LoginPage;