import React, { Component } from 'react'
import './PostOwnerProfile.css'
import userPhoto from '../../../../assets/ProfilePhoto.jpeg'
import data from '../../dummyData'

class PostOwnerProfile extends Component {
    constructor() {
        super()
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ profile: data[0].profile })
    }

    render() {
        const { profile } = this.state;
        return (
            <div id="postOwnerProfile">
                <ul>
                    <li>
                        <img src={ userPhoto } alt=""/>
                    </li>
                    <li>
                        <li> 
                            <strong> { profile.profileName } </strong>
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