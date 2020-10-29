import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm } from "../../components/postPageComponents/index.js"

export class PostPage extends Component {
    render() {
        return (
            <div >
                <PostHeader />
                <div id="check">
                    <PostImage />
                    <PostOwnerForm />
                </div>
            </div>
        )
    }
}

export default PostPage
