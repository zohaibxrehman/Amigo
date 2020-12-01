import React, { Component } from 'react'
import './PostOwnerProfile.css'

class PostOwnerProfile extends Component {

    render() {
        const { profile } = this.props;

        return (
            <div id="postOwnerProfile">
                <ul>
                    <li>
                        <img src={ profile.profilePhoto } alt=""/>
                    </li>
                    <li>
                        <ul id = "profileInfo">
                            <li> 
                                <strong> { profile.profileName } </strong>
                            </li>
                            <a id="profile-style" href="/user">View Profile</a>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostOwnerProfile