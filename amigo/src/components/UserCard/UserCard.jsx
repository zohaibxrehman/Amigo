import React, { Component } from 'react'
import './UserCard.css'
import userPhoto from '../../assets/ProfilePhoto.jpeg'

export class UserCard extends Component {
    render() {
        return (
            <div className='userCardContainer'>
                <div className='userCard'>
                    <img src={userPhoto} alt="user photo" className='userCardPhoto'/>
                </div>
            </div>
        )
    }
}

export default UserCard
