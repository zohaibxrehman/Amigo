import React, { Component } from 'react';
import EditPost from '../../components/editPostComponent/EditPost'
import './EditPostPage.css'




class EditPostPage extends Component {
    render() { 
        const { postid } = this.props.match.params
        return (  
            <div className="EditPostForm">
                <h2>Edit Your Post!</h2>
                {/* need to send down the props */}
                <EditPost postid={postid} />
            </div>

        );
    }
}
 
export default EditPostPage;