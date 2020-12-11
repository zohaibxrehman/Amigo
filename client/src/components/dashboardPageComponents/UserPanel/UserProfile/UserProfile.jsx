import React, { Component } from 'react'
import './UserProfile.css'
import adminIcon from '../../../../assets/admin-icon.png'

class UserProfile extends Component {
    render() {
        const { name } = this.props;
        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ adminIcon } alt=""/>
                    </li>
                    <li>
                        <ul>
                            <li> 
                                <strong> {name.toUpperCase()} </strong>
                            </li>
                            <li>
                                (Amigos Moderator)
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile