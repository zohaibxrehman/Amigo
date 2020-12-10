import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
    render() {
        const { name, photo} = this.props;
        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ photo } alt=""/>
                    </li>
                    <li>
                        <ul>
                            <li> 
                                <strong> {name.toUpperCase()} </strong>
                            </li>
                            <li className="mainAd">
                                (Main Adminstrator)
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile