import React, { Component } from 'react'
import './PostImage.css'
import postPhoto from '../../../assets/interior-1.jpg'

class PostImage extends Component {
    render() {
        return (
            <div id="postPhoto">
                <img src={postPhoto} alt=""/>
            </div>
        )
    }
}

export default PostImage
