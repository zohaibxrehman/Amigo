import React, { Component } from 'react'
import './PostDescription.css'

class PostDescription extends Component {

    render() {
        const { description } = this.props;

        return (
            <div id = "description">
                <h2>Description</h2>
                <hr/>
                <p><strong>Unit:</strong> {description.unit} </p>
                <p><strong>Price:</strong> {description.price} </p>
                <p><strong>Location:</strong> {description.location} </p>
                <p><strong>Lease Term:</strong> {description.leaseTerm} </p>
            </div>
        )
    }
}

export default PostDescription
