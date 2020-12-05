import React, { Component } from 'react'
import './Users.css'
import mailIcon from '../../../../assets/mailicon.svg'
import phoneIcon from './../../../../assets/phoneicon.svg'

export class Users extends Component {
    render() {
        const { image_url, firstName, lastName, location, email, phone, aboutMe, _id} = this.props.userInfo;
        const user_url = '/user/' + _id 

        return (
            <div id='user_CardContainer'>
                <a href={user_url}>
                    <div id='user_Card'>
                        <img src={image_url} alt="user" id='user_CardPhoto'/>
                        <div id='user_CardInfo'>
                            <h2 id='user_CardName'>{firstName} {lastName}</h2>
                            <h3 id='user_CardLocation'>{location}</h3>
                            <ul id='user_CardContact'>
                                <li className='user_CardContactInfo'>
                                    <img src={mailIcon} alt="mail icon"/>{' '}<a href={`mailto:${email}`}>
                                        {email}
                                    </a>
                                </li>
                                <li className='user_CardContactInfo'>
                                    <img src={phoneIcon} alt="phone icon"/>{' '}
                                    {phone}
                                </li>
                            </ul>
                            <p id='user_CardAboutMe'>{aboutMe}</p>
                        </div>
                    </div>
                </a>
            </div>
        )

    }
    
}

export default Users
