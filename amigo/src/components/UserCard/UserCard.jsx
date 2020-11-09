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
                userPhoto: null,
                contact: {
                    email: '',
                    phone: ''
                }
            }
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ userData: data })
    }

    render() {
        const { userName, location, aboutMe, userPhoto, contact } = this.state.userData
        const { email, phone } = contact
        return (
            <div id='userCardContainer'>
                <div id='userCard'>
                    <img src={userPhoto} alt="user photo" id='userCardPhoto'/>
                    <div id='userCardInfo'>
                        <h2 id='userCardName'>{userName}</h2>
                        <h3 id='userCardLocation'>{location}</h3>
                        <p id='userCardAboutMe'>{aboutMe}</p>
                        <ul id='userCardContact'>
                            <li className='userCardContactInfo'>{email}</li>
                            <li className='userCardContactInfo'>{phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
