import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbarBlack">
                <img className='logo' src={logo} alt='logo'></img>
                <a className="active" href="/login">Login</a>
                <p className='logoName'>Amigo</p>
                <a href='mailto: zohaibxrehman@gmail.com'>Contact</a>
                <a href="/">About Us</a>
                <a className="active" href="/finder">Posting</a>
                <a href="/">Home</a>
            </div>
        )
    }
}

export default Navbar
