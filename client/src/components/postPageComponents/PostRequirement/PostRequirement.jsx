import React, { Component } from 'react'
import './PostRequirement.css'

class PostRequirement extends Component {

    renderRequirements(preferences){
        let renderPreferences = [];
        for (let i = 0; i < preferences.length; i++){
            let idName = 'postRequirement' + i
            renderPreferences.push(<li key={idName}>{preferences[i]}</li>);
        }
        return renderPreferences
    }

    render() {
        const {preferences} = this.props
        return (
            <div id = "requirement">
                <h2>Requirement</h2>
                <hr/>
                <ul>
                    {this.renderRequirements(preferences)}
                </ul>
            </div>
        )
    }
}

export default PostRequirement
