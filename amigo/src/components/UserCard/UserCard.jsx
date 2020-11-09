import React, { Component } from 'react'
import './UserCard.css'
import data from './dummyData'
import mailIcon from '../../assets/mailicon.svg'
import phoneIcon from '../../assets/phoneicon.svg'

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

    reportUser() {
        alert('User Reported!')
        // call to database will be written here
        // and the admin can retrieve these reported users
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
                        <ul id='userCardContact'>
                            <li className='userCardContactInfo'>
                                <img src={mailIcon} alt="mail icon"/>{' '}
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </li>
                            {' | '}
                            <li className='userCardContactInfo'>
                                <img src={phoneIcon} alt="phone icon"/>{' '}
                                {phone}
                            </li>
                        </ul>
                        <p id='userCardAboutMe'>{aboutMe}</p>
                        <button id='reportUser' onClick={this.reportUser}>Report User</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
