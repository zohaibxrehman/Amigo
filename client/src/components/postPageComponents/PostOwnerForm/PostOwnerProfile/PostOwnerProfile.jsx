import React, { Component } from 'react'
import './PostOwnerProfile.css'

class PostOwnerProfile extends Component {

    render() {
        const { creator, creatorUrl } = this.props;

        return (
            <div id="postOwnerProfile">
                <ul>
                    <li>
                        <img src={ creatorUrl } alt=""/>
                    </li>
                    <li>
                        <ul id = "profileInfo">
                            <li> 
                                <strong> { creator } </strong>
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