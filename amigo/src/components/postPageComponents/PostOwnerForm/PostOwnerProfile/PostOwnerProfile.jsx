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
                            <li id="profile">
                                View Profile
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostOwnerProfile