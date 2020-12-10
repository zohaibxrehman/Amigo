import React, { Component } from 'react';
import EditPost from '../../components/editPostPageComponents/EditPost/EditPost'
import './EditPostPage.css'




class EditPostPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="EditPostForm">
                <h2>Edit Your Post!</h2>
                {/* need to send down the props */}
                <EditPost />
            </div>

        );
    }
}
 
export default EditPostPage;