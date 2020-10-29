import React, { Component } from 'react'
import './PostRequirement.css'

class PostRequirement extends Component {
    render() {
        return (
            <div id = "requirement">
                <h2>Requirement</h2>
                <hr/>
                <ul>
                    <li>No Smoking</li>
                    <li>Male</li>
                    <li>Student</li>
                    <li>Less Parties</li>
                </ul>
            </div>
        )
    }
}

export default PostRequirement
