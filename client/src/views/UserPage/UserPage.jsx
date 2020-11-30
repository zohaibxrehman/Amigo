import React, { Component } from 'react'
import './UserPage.css'
import { UserCard } from '../../components/UserCard/UserCard'

export class UserPage extends Component {
    render() {
        return (
            <div>
                <UserCard />
            </div>
        )
    }
}

export default UserPage
