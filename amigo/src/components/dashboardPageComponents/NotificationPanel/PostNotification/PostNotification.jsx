import React, { Component } from 'react'
import './PostNotification.css'
// import userPhoto from '../../../../assets/ProfilePhoto.jpeg'
import UserProfile from '../../UserPanel/UserProfile/UserProfile'
import EditPost from './EditPost/EditPost'

class PostNotification extends Component {
    render() {
        return (
            <div id="postNotification">
                <h3>Seeking a roommate for 2bd apartment</h3>
                <div className="spaceBtw">
                    <span>
                        Post created: December 23, 2018
                    </span>
                    <span>
                        Post Activity
                    </span>
                </div>
                <p className="spaceBtw">
                    <UserProfile />
                    <EditPost />
                </p>
            </div>
        )
    }
}

export default PostNotification