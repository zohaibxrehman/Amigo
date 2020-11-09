import React, { Component } from 'react'
import './PostRequirement.css'
import data from '../dummyData'

class PostRequirement extends Component {
    constructor() {
        super()
        this.state = {
            requirement: []
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ requirement: data[0].requirement })
    }

    renderRequirements(){
        let renderRequirements = [];
        for (let i = 0; i < this.state.requirement.length; i++){
            renderRequirements.push(<li>{this.state.requirement[i]}</li>);
        }
        return renderRequirements
    }

    render() {
        return (
            <div id = "requirement">
                <h2>Requirement</h2>
                <hr/>
                <ul>
                    {this.renderRequirements()}
                </ul>
            </div>
        )
    }
}

export default PostRequirement
