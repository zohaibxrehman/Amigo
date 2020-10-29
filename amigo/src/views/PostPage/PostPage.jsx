import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm, PostDescription } from "../../components/postPageComponents/index.js"

export class PostPage extends Component {
    render() {
        return (
            <div id="check" >
                <PostHeader />
                <PostImage />
                <PostOwnerForm />
                <PostDescription />
            </div>
        )
    }
}

export default PostPage
