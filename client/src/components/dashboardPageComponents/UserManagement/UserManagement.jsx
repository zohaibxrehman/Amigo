import React, { Component } from 'react'
import './UserManagement.css'
import Users from './Users/Users'

class UserManagement extends Component {

    renderUsers(users){
        let renderUser = []
        for (let i = 0; i < users.length; i++){
            let idName = 'Users' + i
            renderUser.push(<tr key={idName} className='postWrap'><Users userInfo={users[i]}/></tr>);
        }
        return renderUser;
    }

    render() {
        const { users } = this.props;
        return (
            <div id="postPanel">
                <h2>User Profiles</h2>
                <hr/>
                {this.renderUsers(users)}
            </div>
        )
    }
}

export default UserManagement