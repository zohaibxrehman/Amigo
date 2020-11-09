import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

export class Navbar extends Component {
    render() {
        const { isLoggedIn } = this.props
        return (
            <div className="navbarBlack">
                <img className='logo' src={logo} alt='logo'></img>
                {
                    isLoggedIn ? <a className="active" href="/login">Logout</a> :
                    <a className="active" href="/login">Login</a>
                }
                <p className='logoName'>Amigo</p>
                <a href='mailto: zohaibxrehman@gmail.com'>Contact</a>
                {/* Once authentication is added, page will redirect to user dashboard if user logged
                otherwise admin dashboard if admin is logged in.
                To have a look at admin dashboard, go to http://localhost:3000/admindashboard OR log in as admin
                To have a look at user dashboard, just click on the dashboard button OR log in as user
                */}
                <a href="/userdashboard">Dashboard</a>
                <a href="/finder">Posting</a>
                <a href="/">Home</a>
            </div>
        )
    }
}

export default Navbar
