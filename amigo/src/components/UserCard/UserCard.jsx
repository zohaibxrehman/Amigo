import React, { Component } from 'react'
import './UserCard.css'
// import userPhoto from '../../assets/ProfilePhoto.jpeg'
import data from './dummyData'
import userData from './dummyData'

export class UserCard extends Component {
    constructor() {
        super()
        this.state = {
            userData: {
                userName: '',
                location: '',
                aboutMe: '',
                userPhoto: null
            }
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ userData: data })
    }

    render() {
        const { userName, location, aboutMe, userPhoto } = this.state.userData
        return (
            <div id='userCardContainer'>
                <div id='userCard'>
                    <img src={userPhoto} alt="user photo" id='userCardPhoto'/>
                    <div id='userCardInfo'>
                        <h2>{userName}</h2>
                        <h3>{location}</h3>
                        <p>{aboutMe}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
