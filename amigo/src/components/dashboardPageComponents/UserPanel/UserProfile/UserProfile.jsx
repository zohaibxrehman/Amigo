import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        const { name, photo, admin } = this.props;
        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ photo } alt=""/>
                    </li>
                    <li>
                        <li> 
                            <strong> {name} {admin} </strong>
                        </li>
                        <li id="profile">
                            View Profile
                        </li>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile