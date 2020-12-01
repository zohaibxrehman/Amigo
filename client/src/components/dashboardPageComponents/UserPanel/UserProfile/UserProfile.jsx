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
                        <ul>
                            <li> 
                                <strong> {name} {admin} </strong>
                            </li>
                            <li>
                                <a id="profile-style" href="/user">View Profile</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile