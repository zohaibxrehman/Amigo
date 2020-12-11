import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { logout } from '../../actions/user'

export class Navbar extends Component {
    logoutUserHandler() {
        const { logoutUser } = this.props
        logout(logoutUser)
        window.location.href = '/'
    }

    render() {
        const { isLoggedIn, currentUser } = this.props
        return (
            <div className="navbarBlack">
                <a href="/"><img className='logo' src={logo} alt='logo'></img></a>
                {
                    isLoggedIn ? <button className="active loginPageButton" onClick={() => this.logoutUserHandler()}>Logout</button> :
                    <a className="active loginPageButton navfloatright" href="/login" >Login</a>
                }
                <a href='/' className='navLogoName'>Amigo</a>
                <a className='navfloatright' href='mailto: zohaibxrehman@gmail.com'>Support</a>
                {/* Once authentication is added, page will redirect to user dashboard if user logged
                otherwise admin dashboard if admin is logged in.
                To have a look at admin dashboard, go to http://localhost:3000/admindashboard OR log in as admin
                To have a look at user dashboard, just click on the dashboard button OR log in as user
                */}
                {
                    (!isLoggedIn) && <a className='navfloatright' href="/login">Dashboard</a>
                }
                {
                    (isLoggedIn && currentUser==='admin') && <a className='navfloatright' href="/admindashboard">Dashboard</a>
                }
                {
                    (isLoggedIn && currentUser!=='admin') && <a className='navfloatright' href="/userdashboard">Dashboard</a>
                }
                <a className='navfloatright' href="/finder">Posting</a>
                <a className='navfloatright' href="/">Home</a>
            </div>
        )
    }
}

export default Navbar
