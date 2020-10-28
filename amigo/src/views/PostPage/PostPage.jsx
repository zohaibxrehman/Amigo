import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader } from "../../components/postPageComponents/index.js"

export class PostPage extends Component {
    render() {
        return (
            <div>
                <p>Welcome to the Post Page!</p>
            </div>,
            <PostHeader />
        )
    }
}

export default PostPage
