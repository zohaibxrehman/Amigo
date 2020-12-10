import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        const { name, photo, id } = this.props;

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
                            <li>
                                <a id="profile-style" href={"/user/" + id}>View Profile</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile