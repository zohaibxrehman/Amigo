import React, { Component } from 'react'
import './UserCard.css'
import mailIcon from '../../assets/mailicon.svg'
import phoneIcon from '../../assets/phoneicon.svg'
import { getUserByIDForCard, reportUserByID } from '../../actions/user';

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
        const { userid } = this.props
        getUserByIDForCard(this, userid)
        this.setState({ userid: userid})
    }

    reportUser(e) {
        const { userid } = this.props

        reportUserByID(userid)
        e.target.style.backgroundColor = '#37de1d'
        e.target.textContent = 'User Reported'
        // call to database will be written here
        // and the admin can retrieve these reported users
    }

    render() {
        const { userName, location, aboutMe, userPhoto, contact } = this.state.userData
        const { email, phone } = contact
        return (
            <div id='userCardContainer'>
                <div id='userCard'>
                    <img src={userPhoto} alt="user" id='userCardPhoto'/>
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
                        <button id='reportUser' onClick={(e)=>this.reportUser(e)}>Report User</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
