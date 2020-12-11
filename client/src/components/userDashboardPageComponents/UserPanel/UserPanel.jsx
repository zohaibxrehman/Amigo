import React, { Component } from 'react'
import UserFunctionality from './UserFunctionality/UserFunctionality'
import './UserPanel.css'
import UserProfile from './UserProfile/UserProfile'
import userActivityIcon from '../../../assets/user-activity.png'
import settingIcon from '../../../assets/settings.png'

let userPanelMap = { 'activity': {'name': "User Activity", 'icon': userActivityIcon}, 'setting': {'name': "Settings", 'icon': settingIcon}};

class UserPanel extends Component {

    render() {
        const { userName, userPhoto, userId } = this.props;
        return (
            <div id="userPanel">
                <h2>Dashboard</h2>
                <hr/>
                <UserProfile name={userName} photo={userPhoto} id={userId}/>
                <UserFunctionality userFunction={userPanelMap.activity} userId={userId}/>
                <UserFunctionality userFunction={userPanelMap.setting} userId={userId}/>
            </div>
        )
    }
}

export default UserPanel