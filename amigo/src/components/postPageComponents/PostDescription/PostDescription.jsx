import React, { Component } from 'react'
import './PostDescription.css'
import data from '../dummyData'

class PostDescription extends Component {
    
    constructor() {
        super()
        this.state = {
            description: {}
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ description: data[0].description })
    }

    render() {
        const { description } = this.state;

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
