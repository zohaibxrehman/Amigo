import React, { Component } from 'react'
import './UserDashboardPage.css'
import { UserPanel, NotificationPanel } from "../../components/userDashboardPageComponents/index.js"
import data from './dummyData'

export class UserDashboardPage extends Component {

    constructor() {
        super()
        this.state = {
            dashboardInfo: {
                profile: {},
                notifications: []
            }
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ dashboardInfo: data })
    }

    render() {
        const {dashboardInfo} = this.state;
        return (
            <div>
                <UserPanel profile={dashboardInfo.profile}/>
                <NotificationPanel notifications={dashboardInfo.notifications}/>
            </div>
        )
    }
}

export default UserDashboardPage
