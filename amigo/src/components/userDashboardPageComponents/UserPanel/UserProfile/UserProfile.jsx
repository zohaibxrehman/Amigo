import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        const { name, photo } = this.props;

        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ photo } alt=""/>
                    </li>
                    <li>
                        <ul>
                            <li> 
                                <strong> {name} </strong>
                            </li>
                            <li id="profile">
                                View Profile
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile