import React, { Component } from 'react'
import './UserPanel.css'
import UserProfile from './UserProfile/UserProfile'

class UserPanel extends Component {
    render() {
        return (
            <div id="userPanel">
                <h2>Dashboard</h2>
                <hr/>
                <UserProfile />
                <ul>
                    <li>
                        
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        )
    }
}

export default UserPanel