import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm } from "../../components/postPageComponents/index.js"

export class PostPage extends Component {
    render() {
        return (
            <div>
                <PostHeader />
                <PostImage />
                <PostOwnerForm />
            </div>
        )
    }
}

export default PostPage
