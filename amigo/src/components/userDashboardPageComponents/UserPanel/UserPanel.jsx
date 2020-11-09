import React, { Component } from 'react'
import UserFunctionality from './UserFunctionality/UserFunctionality'
import './UserPanel.css'
import UserProfile from './UserProfile/UserProfile'
import dashboardIcon from '../../../assets/dashboard-icon.png'
import userActivityIcon from '../../../assets/user-activity.png'
import settingIcon from '../../../assets/settings.png'

let userPanelMap = {'dashboard': {'name': "Dashboard", 'icon': dashboardIcon}, 'activity': {'name': "User Activity", 'icon': userActivityIcon}, 'setting': {'name': "Settings", 'icon': settingIcon}};

class UserPanel extends Component {

    render() {

        return (
            <div id="userPanel">
                <h2>Dashboard</h2>
                <hr/>
                <UserProfile name="Vishnu Varma"/>
                <UserFunctionality userFunction={userPanelMap.dashboard} />
                <UserFunctionality userFunction={userPanelMap.activity} />
                <UserFunctionality userFunction={userPanelMap.setting} />
            </div>
        )
    }
}

export default UserPanel