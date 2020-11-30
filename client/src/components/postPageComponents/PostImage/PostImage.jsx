import React, { Component } from 'react'
import './PostImage.css'

class PostImage extends Component {
    render() {

        const { img } = this.props;

        return (
            <div id="postPhoto">
                <img src={img} alt=""/>
            </div>
        )
    }
}

export default PostImage
