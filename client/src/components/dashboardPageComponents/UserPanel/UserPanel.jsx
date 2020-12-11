import React, { Component } from 'react'
import UserFunctionality from './UserFunctionality/UserFunctionality'
import './UserPanel.css'
import UserProfile from './UserProfile/UserProfile'
import dashboardIcon from '../../../assets/dashboard-icon.png'
import userManagementIcon from '../../../assets/user-management.png'
import postManagementIcon from '../../../assets/post-management.png'

let userPanelMap = {'dashboard': {'name': "Dashboard", 'icon': dashboardIcon}, 'userManagement': {'name': "User Management", 'icon': userManagementIcon}, 'postManagement': {'name': "Post Management", 'icon': postManagementIcon}};

class UserPanel extends Component {

    render() {
        const { userName, userPhoto, changeView, view } = this.props;
        return (
            <div id="userPanel">
                <h2>Dashboard</h2>
                <hr/>
                <UserProfile name={userName} photo={userPhoto} />
                <div onClick={()=>changeView('userManagement')} className={view==='userManagement' ? ' changeBtnAdmin changeBtnActiveAdmin' : 'changeBtnAdmin'}>
                    <UserFunctionality userFunction={userPanelMap.userManagement} />
                </div>
                <div onClick={()=>changeView('postManagement')} className={view==='postManagement' ? ' changeBtnAdmin changeBtnActiveAdmin' : 'changeBtnAdmin'}>
                    <UserFunctionality userFunction={userPanelMap.postManagement} />
                </div>
            </div>
        )
    }
}

export default UserPanel