import React, { Component } from 'react'
import './NotificationPanel.css'
import PostNotification from './PostNotification/PostNotification'

class NotificationPanel extends Component {

    renderPostNotifications(notifications){
        let renderNotifications = []
        for (let i = 0; i < notifications.length; i++){
            renderNotifications.push(<PostNotification key={`userPostNotification${i}`} notification = {notifications[i]} />);
        }
        return renderNotifications;
    }

    render() {
        const { notifications } = this.props;
        return (
            <div id="notificationPanel">
                <h2>Notifications</h2>
                <hr/>
                {this.renderPostNotifications(notifications)}
                <p className="textTheme">
                    <strong>Show more</strong>
                </p>
            </div>
        )
    }
}

export default NotificationPanel