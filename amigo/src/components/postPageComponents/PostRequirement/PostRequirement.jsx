import React, { Component } from 'react'
import './PostRequirement.css'

class PostRequirement extends Component {

    renderRequirements(requirements){
        let renderRequirements = [];
        for (let i = 0; i < requirements.length; i++){
            let idName = 'postRequirement' + i
            renderRequirements.push(<li key={idName}>{requirements[i]}</li>);
        }
        return renderRequirements
    }

    render() {
        const {requirements} = this.props
        return (
            <div id = "requirement">
                <h2>Requirement</h2>
                <hr/>
                <ul>
                    {this.renderRequirements(requirements)}
                </ul>
            </div>
        )
    }
}

export default PostRequirement
