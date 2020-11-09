import React, { Component } from 'react'
import './PostOwnerForm.css'
import PostOwnerProfile from './PostOwnerProfile/PostOwnerProfile'

export class PostOwnerForm extends Component {
    render() {
        return (
            <div id="postForm">
                <PostOwnerProfile />
                <form action="">
                    <input type="text" placeholder="Name"/><br/>
                    <input type="text" placeholder="Phone"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <input type="text" id="textarea" placeholder="Hello, I am interested in.." /><br/>
                    <input type="submit" value="Contact" />
                </form>
            </div>
        )
    }
}

export default PostOwnerForm
