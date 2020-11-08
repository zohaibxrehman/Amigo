import React, { Component } from 'react'
import './PostNotification.css'
import userPhoto from '../../../../assets/ProfilePhoto.jpeg'

class PostNotification extends Component {
    render() {
        return (
            <div id="postNotification">
                <h3>Seeking a roommate for 2bd apartment</h3>
                <div>
                    Post created: December 23,2018
                </div>
            </div>
        )
    }
}

export default PostNotification