import React, { Component } from 'react'
import './Users.css'
import mailIcon from '../../../../assets/mailicon.svg'
import phoneIcon from './../../../../assets/phoneicon.svg'
import editIcon from '../../../../assets/edit-icon.svg'
import deleteIcon from './../../../../assets/delete-icon.svg'
import flaggedIcon from './../../../../assets/flagged.png'
import { deleteUser } from './../../../../actions/admin'

export class Users extends Component {

    updateInfo() {
        const {_id} = this.props.userInfo
        const updateUsers = this.props.updateUsers;
        deleteUser(_id, updateUsers)
    }

    displayFlagged(){
        const {flagged} = this.props.userInfo
        if (flagged){
            return <li><img src={flaggedIcon} alt=""/></li>
        }
    }

    render() {
        const { image_url, firstName, lastName, location, email, phone, aboutMe, _id} = this.props.userInfo;
        const user_url = '/user/' + _id 
        const edituser_url = '/edituser/' + _id 
        return (
            <div id='user_CardContainer'>
                    <div id='user_Card'>
                        <a href={user_url}>
                            <img src={image_url} alt="user" id='user_CardPhoto'/>
                            <div id='user_CardInfo'>
                                <h2 id='user_CardName'>{firstName} {lastName}</h2>
                                <h3 id='user_CardLocation'>{location}</h3>
                                <ul id='user_CardContact'>
                                    <li className='user_CardContactInfo'>
                                        <img src={mailIcon} alt="mail icon"/>{' '} {email}
                                    </li>
                                    <li className='user_CardContactInfo'>
                                        <img src={phoneIcon} alt="phone icon"/>{' '} {phone}
                                    </li>
                                </ul>
                                <p id='user_CardAboutMe'>{aboutMe}</p>
                            </div>
                        </a>
                        <div id="userModify">
                            <ul>
                                {this.displayFlagged()}
                                <li className="cursorDesignUsers">
                                    <a href={edituser_url}> 
                                        <img className="img-decoration-user" src={ editIcon } alt=""/>
                                    </a>
                                </li>
                                <li className="cursorDesignUsers" onClick={() => { this.updateInfo() }}>
                                    <img className="img-decoration-user" src={ deleteIcon } alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    
                
            </div>
        )

    }
    
}

export default Users
