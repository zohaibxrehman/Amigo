import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage } from "../../components/postPageComponents/index.js"

export class PostPage extends Component {
    render() {
        return (
            <div>
                <PostHeader />,
                <PostImage />
            </div>
        )
    }
}

export default PostPage
