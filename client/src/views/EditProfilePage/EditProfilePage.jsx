import React, { Component } from 'react';
import EditPassword from '../../components/editProfileComponents/EditPassword';
import EditProfile from '../../components/editProfileComponents/EditProfile';
import './EditProfilePage.css'


class EditProfilePage extends Component {
    state = {  }
    render() { 
        const {userid } = this.props.match.params
        return ( 

            <div>
                <div className='EditBox'>
                <h2>User Settings</h2>
                    <div className='ProfileBox'>
                        <EditProfile userid={userid}/>
                    </div>
                </div>

                <div className='EditBox'>
                    <h2>Change Password</h2>
                    <div className='ProfileBox'>
                        <EditPassword userid={userid}/>
                    </div>
                </div>
            </div> 

         );
    }
}
 
export default EditProfilePage;

