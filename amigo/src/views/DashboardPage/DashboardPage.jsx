import React, { Component } from 'react'
import './DashboardPage.css'
import data from './dummyData'
import { UserPanel, NotificationPanel } from "../../components/dashboardPageComponents/index.js"

export class DashboardPage extends Component {

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
        console.log(dashboardInfo)
        return (
            <div >
                <UserPanel profile={dashboardInfo.profile}/>
                <NotificationPanel notifications={dashboardInfo.notifications}/>
            </div>
        )
    }
}

export default DashboardPage
