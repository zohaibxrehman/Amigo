import React, { Component } from 'react'
import './UserManagement.css'
import Users from './Users/Users'

class UserManagement extends Component {

    renderUsers(users, updateUsers){
        let renderUser = []
        for (let i = 0; i < users.length; i++){
            let idName = 'Users' + i
            renderUser.push(<tr key={'User' + i}><td key={idName} className='postWrap'><Users updateUsers={updateUsers} userInfo={users[i]}/></td></tr>);
        }
        return renderUser;
    }

    render() {
        const { users, updateUsers } = this.props;
        return (
            <div id="adminUserPanel">
                <h2>User Profiles</h2>
                <hr/>
                {users.length !== 0 ? <table className='userTable'>
                    <tbody>
                    { this.renderUsers(users, updateUsers) }
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default UserManagement