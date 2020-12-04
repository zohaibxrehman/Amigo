import React, { Component } from 'react'
import './PostDescription.css'

class PostDescription extends Component {

    render() {
        const { description } = this.props;

        return (
            <div id = "description">
                <h2>Description</h2>
                <hr/>
                <p>{description} </p>
            </div>
        )
    }
}

export default PostDescription
