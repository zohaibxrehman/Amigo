import React, { Component } from 'react'
import './DashboardPage.css'
import { UserPanel, NotificationPanel } from "../../components/dashboardPageComponents/index.js"

export class DashboardPage extends Component {
    render() {
        return (
            <div >
                <UserPanel />
                <NotificationPanel />
            </div>
        )
    }
}

export default DashboardPage
