import React, { Component } from 'react'
import UserFunctionality from './UserFunctionality/UserFunctionality'
import './UserPanel.css'
import UserProfile from './UserProfile/UserProfile'
import dashboardIcon from '../../../assets/dashboard-icon.png'
import userManagementIcon from '../../../assets/user-management.png'
import postManagementIcon from '../../../assets/post-management.png'
import settingIcon from '../../../assets/settings.png'

let userPanelMap = {'dashboard': {'name': "Dashboard", 'icon': dashboardIcon}, 'userManagement': {'name': "User Management", 'icon': userManagementIcon}, 'postManagement': {'name': "Post Management", 'icon': postManagementIcon}, 'setting': {'name': "Settings", 'icon': settingIcon}};

class UserPanel extends Component {

    render() {
        const { userName, userPhoto } = this.props;
        return (
            <div id="userPanel">
                <h2>Dashboard</h2>
                <hr/>
                <UserProfile name={userName} photo={userPhoto} admin={'( Admin )'}/>
                <UserFunctionality userFunction={userPanelMap.dashboard} />
                <UserFunctionality userFunction={userPanelMap.userManagement} />
                <UserFunctionality userFunction={userPanelMap.postManagement} />
                <UserFunctionality userFunction={userPanelMap.setting} />
            </div>
        )
    }
}

export default UserPanel