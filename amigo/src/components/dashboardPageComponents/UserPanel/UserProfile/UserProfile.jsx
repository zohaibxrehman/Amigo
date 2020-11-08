import React, { Component } from 'react'
import './UserProfile.css'
import userPhoto from '../../../../assets/ProfilePhoto.jpeg'

class UserProfile extends Component {
    render() {
        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ userPhoto } alt=""/>
                    </li>
                    <li>
                        <li> 
                            <strong> Zohaib Rehman </strong>
                        </li>
                        <li id="email">
                            zohaibxrehman@gmail.com
                        </li>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile