import React, { Component } from 'react'
import './DashboardPage.css'
import { UserPanel } from "../../components/dashboardPageComponents/index.js"

export class DashboardPage extends Component {
    render() {
        return (
            <div >
                <UserPanel />
            </div>
        )
    }
}

export default DashboardPage
