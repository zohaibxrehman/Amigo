import React, { Component } from 'react'
import './UserDashboardPage.css'
import { UserPanel, NotificationPanel } from "../../components/userDashboardPageComponents/index.js"

export class UserDashboardPage extends Component {
    render() {
        return (
            <div>
                <UserPanel />
                <NotificationPanel />
            </div>
        )
    }
}

export default UserDashboardPage
