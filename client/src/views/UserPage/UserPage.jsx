import React, { Component } from 'react'
import './UserPage.css'
import { UserCard } from '../../components/UserCard/UserCard'

export class UserPage extends Component {
    render() {
        const { userid } = this.props.match.params

        return (
            <div>
                <UserCard userid={userid} />
            </div>
        )
    }
}

export default UserPage
