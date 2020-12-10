import React, { Component } from 'react';
import MakePost from '../../components/makePostPageComponents/MakePost/MakePost'
import './MakePostPage.css'




class MakePostPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="MakePostForm">
                <h2>Make a New Post</h2>
                <MakePost />
            </div>
            
        );
    }
}
 
export default MakePostPage;