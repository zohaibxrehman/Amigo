import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { logout } from '../../actions/user'

export class Navbar extends Component {
    logoutUserHandler() {
        const { logoutUser } = this.props
        logout(logoutUser)
        window.location.href = '/login'

    }

    render() {
        const { isLoggedIn, currentUser } = this.props
        return (
            <div className="navbarBlack">
                <img className='logo' src={logo} alt='logo'></img>
                {
                    isLoggedIn ? <button className="active loginPageButton" onClick={() => this.logoutUserHandler()}>Logout</button> :
                    <a className="active loginPageButton" href="/login" >Login</a>
                }
                <p className='logoName'>Amigo</p>
                <a href='mailto: zohaibxrehman@gmail.com'>Contact</a>
                {/* Once authentication is added, page will redirect to user dashboard if user logged
                otherwise admin dashboard if admin is logged in.
                To have a look at admin dashboard, go to http://localhost:3000/admindashboard OR log in as admin
                To have a look at user dashboard, just click on the dashboard button OR log in as user
                */}
                {
                    (!isLoggedIn) && <a href="/login">Dashboard</a>
                }
                {
                    (isLoggedIn && currentUser==='admin') && <a href="/admindashboard">Dashboard</a>
                }
                {
                    (isLoggedIn && currentUser!=='admin') && <a href="/userdashboard">Dashboard</a>
                }
                <a href="/finder">Posting</a>
                <a href="/">Home</a>
            </div>
        )
    }
}

export default Navbar
