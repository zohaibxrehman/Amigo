import React, { Component } from 'react';
import EditPassword from '../../components/editProfileComponents/EditPassword';
import EditProfile from '../../components/editProfileComponents/EditProfile';


class EditProfilePage extends Component {
    state = {  }
    render() { 
        const {userid } = this.props.match.params
        return ( 

            <div>
            <div className='EditBox'>
                <div className='ProfileBox'>
                    {/* pass down user id  */}
                <EditProfile userid={userid}/>
                <EditPassword userid={userid}/>
                </div>
            </div> 
            </div> 

         );
    }
}
 
export default EditProfilePage;

