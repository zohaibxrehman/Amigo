import React, { Component } from 'react'
import './PostOwnerProfile.css'
import userPhoto from '../../../../assets/ProfilePhoto.jpeg'

class PostOwnerProfile extends Component {
    render() {
        return (
            <div id="postOwnerProfile">
                <ul>
                    <li>
                        <img src={ userPhoto } alt=""/>
                    </li>
                    <li>
                        <li> 
                            <strong> Zohaib Rehman </strong>
                        </li>
                        <li id="profile">
                            View Profile
                        </li>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostOwnerProfile