import React, { Component } from 'react'
import './PostNotification.css'
// import userPhoto from '../../../../assets/ProfilePhoto.jpeg'
import UserProfile from '../../UserPanel/UserProfile/UserProfile'
import EditPost from './EditPost/EditPost'

class PostNotification extends Component {

    render() {
        const { notification } = this.props;
        return (
            <div id="adminNotificationPanel">
                <h3>{notification[1].msg}</h3>
                <div className="spaceBtw">
                    <span>
                        Post created: {notification[1].date}
                    </span>
                    <span>
                    {notification[1].activity}
                    </span>
                </div>
                <div className="spaceBtw">
                    <UserProfile name={notification[0].profileName} photo={notification[0].profilePhoto}/>
                    <EditPost />
                </div>
            </div>
        )
    }
}

export default PostNotification