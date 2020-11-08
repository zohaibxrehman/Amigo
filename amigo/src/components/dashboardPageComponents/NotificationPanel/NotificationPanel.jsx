import React, { Component } from 'react'
import './NotificationPanel.css'
import PostNotification from './PostNotification/PostNotification'

class NotificationPanel extends Component {
    render() {
        return (
            <div id="notificationPanel">
                <h2>Notifications</h2>
                <hr/>
                <PostNotification />
                <PostNotification />
                <PostNotification />
                <PostNotification />
            </div>
        )
    }
}

export default NotificationPanel